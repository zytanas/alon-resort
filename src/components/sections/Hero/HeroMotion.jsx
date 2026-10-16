"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useAnimate,
  useReducedMotionConfig,
  useScroll,
  useTransform,
} from "motion/react";
import { duration, ease } from "@/lib/motion";

// If the server-rendered hero has already been on screen this long when
// JavaScript arrives, skip the entrance rather than hide and replay it.
const LATE_HYDRATION_MS = 600;

const subscribe = () => () => {};

// Motion writes the final value once the animation promise has resolved, so
// wait a frame before handing the property back to the stylesheet.
function clearAfterFrame(element, property) {
  requestAnimationFrame(() => element.style.removeProperty(property));
}

function hasBeenVisibleTooLong() {
  const paint = performance
    .getEntriesByType("paint")
    .find((entry) => entry.name === "first-contentful-paint");
  return paint ? performance.now() - paint.startTime > LATE_HYDRATION_MS : false;
}

// Entrance animation for the hero. Everything is server-rendered fully
// visible; elements are only hidden and replayed once JavaScript is running.
//
// Children mark what to animate:
// - data-hero="mark": the WaveMark, fades in first
// - data-hero="line": a headline line that slides up inside its mask
// - data-hero="pill": the inline image pill, grows to full width after line 1
// - data-hero="fade": fades up (subhead, location bar, rate line)
// - data-hero="card": the image card, revealed bottom to top with a clip-path
// - data-hero="image": the card image, eased from scale 1.1 to 1
// - data-hero="form": the booking form inside the card, fades up last
export default function HeroMotion({ children, ...props }) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotionConfig();

  // True only when this render is hydrating server HTML (not a client-side
  // navigation, where the effect runs before the first paint anyway).
  const hydrating = useSyncExternalStore(subscribe, () => false, () => true);
  const [fromServer] = useState(hydrating);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root || reduceMotion) return;
    if (window.scrollY > 40) return;
    if (fromServer && hasBeenVisibleTooLong()) return;

    const find = (name) => Array.from(root.querySelectorAll(`[data-hero="${name}"]`));
    const [mark] = find("mark");
    const lines = find("line");
    const [pill] = find("pill");
    const fades = find("fade");
    const [card] = find("card");
    const [image] = find("image");
    const [form] = find("form");

    const radius = getComputedStyle(root).getPropertyValue("--radius-image").trim() || "0px";
    const clip = (top) => `inset(${top}% 0% 0% 0% round ${radius})`;
    const pillWidth = pill?.offsetWidth ?? 0;

    // Hide everything in the same frame, before the first paint.
    const hide = { duration: 0 };
    if (mark) animate(mark, { opacity: 0 }, hide);
    lines.forEach((line) => animate(line, { y: "105%" }, hide));
    if (pill) animate(pill, { width: 0 }, hide);
    fades.forEach((element) => animate(element, { opacity: 0, y: 20 }, hide));
    if (card) animate(card, { clipPath: clip(100) }, hide);
    if (image) animate(image, { scale: 1.1 }, hide);
    if (form) animate(form, { opacity: 0, y: 16 }, hide);

    if (mark) animate(mark, { opacity: 1 }, { duration: duration.fast, ease, delay: 0.1 });

    lines.forEach((line, index) => {
      animate(line, { y: 0 }, { duration: duration.slow, ease, delay: 0.2 + index * 0.12 });
    });

    // Back to its stylesheet width afterwards so it keeps scaling with the text.
    if (pill) {
      animate(pill, { width: pillWidth }, { duration: duration.base, ease, delay: 0.75 }).then(
        () => clearAfterFrame(pill, "width"),
      );
    }

    fades.forEach((element, index) => {
      animate(
        element,
        { opacity: 1, y: 0 },
        { duration: duration.base, ease, delay: 0.85 + index * 0.12 },
      );
    });

    // Cleared afterwards so the booking popovers can overflow the card.
    if (card) {
      animate(card, { clipPath: clip(0) }, { duration: duration.slow, ease, delay: 0.2 }).then(
        () => clearAfterFrame(card, "clip-path"),
      );
    }
    if (image) {
      animate(image, { scale: 1 }, { duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 });
    }
    if (form) {
      animate(form, { opacity: 1, y: 0 }, { duration: duration.base, ease, delay: 1.2 });
    }
  }, [animate, scope, reduceMotion, fromServer]);

  return (
    <section ref={scope} {...props}>
      {children}
    </section>
  );
}

// Subtle scroll parallax for the image inside the card. The layer is taller
// than the card so its edges never show.
export function CardParallax({ children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotionConfig();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-x-0 top-[-8%] bottom-[-8%]"
      style={reduceMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
