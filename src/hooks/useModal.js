"use client";

import { useEffect, useEffectEvent } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

// Visible, focusable elements inside `container`, in tab order.
export function getFocusable(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE)).filter(
    (element) => element.getClientRects().length > 0,
  );
}

let scrollLocks = 0;

// Stops the page behind an overlay from scrolling. Pads the root by the
// scrollbar width so the layout doesn't jump. Supports nested locks.
function lockScroll() {
  const root = document.documentElement;
  if (scrollLocks === 0) {
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
  }
  scrollLocks += 1;

  return () => {
    scrollLocks -= 1;
    if (scrollLocks === 0) {
      root.style.overflow = "";
      root.style.paddingRight = "";
    }
  };
}

// Modal behaviour for overlays (mobile menu, bottom sheet): moves focus
// inside when opened, keeps Tab and Shift+Tab inside, closes on Escape, locks
// page scroll, and on close returns focus to `returnFocusRef` (or to whatever
// had focus before).
export function useModal({ open, containerRef, onClose, returnFocusRef }) {
  const close = useEffectEvent(() => onClose());

  useEffect(() => {
    const container = containerRef.current;
    if (!open || !container) return;

    const returnTarget = returnFocusRef?.current ?? document.activeElement;
    const unlock = lockScroll();
    (getFocusable(container)[0] ?? container).focus({ preventScroll: true });

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const items = getFocusable(container);
      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const outside = !container.contains(active);

      if (event.shiftKey && (active === first || outside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || outside)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      unlock();
      returnTarget?.focus?.({ preventScroll: true });
    };
  }, [open, containerRef, returnFocusRef]);
}
