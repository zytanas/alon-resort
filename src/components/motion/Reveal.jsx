"use client";

import { useEffect } from "react";
import { inView, useAnimate, useReducedMotionConfig } from "motion/react";
import {
  duration,
  ease,
  getRevealDistance,
  isOnScreen,
  viewportAmount,
} from "@/lib/motion";

// Fades its content up into view once, the first time it scrolls on screen.
//
// Content is server-rendered fully visible, so nothing is blank before
// JavaScript loads. After hydration, only elements that are still below the
// fold are hidden and then revealed; anything already on screen is left alone.
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  children,
  ...props
}) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotionConfig();

  useEffect(() => {
    const element = scope.current;
    if (!element || reduceMotion || isOnScreen(element)) return;

    animate(element, { opacity: 0, y: getRevealDistance() }, { duration: 0 });

    // Returning nothing from the callback makes inView fire only once.
    return inView(
      element,
      () => {
        animate(
          element,
          { opacity: 1, y: 0 },
          { duration: duration.base, ease, delay },
        );
      },
      { amount: viewportAmount },
    );
  }, [animate, scope, reduceMotion, delay]);

  return (
    <Tag ref={scope} {...props}>
      {children}
    </Tag>
  );
}
