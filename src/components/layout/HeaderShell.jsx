"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const HIDE_AFTER = 160; // px scrolled past the sticking point before it can hide
const SCROLL_SLACK = 6; // ignore tiny scroll jitters

// The sticky <header> element and its scroll behaviour; the markup inside is
// server-rendered and passed in as children. It scrolls with the page until
// the top bar above it has gone, then sticks to the top: hiding on scroll
// down, sliding back on scroll up, with a soft shadow while stuck.
export default function HeaderShell({ children }) {
  const markerRef = useRef(null);
  const headerRef = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    function update() {
      frame = 0;
      const y = window.scrollY;
      // The marker sits where the header starts, so once it's above the
      // viewport the header is stuck.
      const pastBy = -markerRef.current.getBoundingClientRect().top;
      setStuck(pastBy > 0);

      if (pastBy <= 0) {
        setHidden(false);
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_SLACK) return;

      // Keep the header visible while something inside it has focus.
      const hasFocus = headerRef.current?.contains(document.activeElement);
      setHidden(pastBy > HIDE_AFTER && delta > 0 && !hasFocus);
      lastY = y;
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    // Pick up the restored scroll position on reload or back navigation.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={markerRef} aria-hidden="true" />
      <header
        ref={headerRef}
        onFocus={() => setHidden(false)}
        className={clsx(
          "sticky top-0 z-40 bg-bg text-ink",
          "transition-[translate,box-shadow] duration-500 ease-out-expo motion-reduce:transition-none",
          stuck && !hidden && "shadow-soft",
          hidden && "-translate-y-full",
        )}
      >
        {children}
      </header>
    </>
  );
}
