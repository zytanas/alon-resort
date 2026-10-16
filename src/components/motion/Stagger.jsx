"use client";

import { useEffect } from "react";
import {
  inView,
  stagger,
  useAnimate,
  useReducedMotionConfig,
} from "motion/react";
import {
  duration,
  ease,
  getRevealDistance,
  isOnScreen,
  staggerInterval,
  viewportAmount,
} from "@/lib/motion";

// Reveals its direct children one after another when the group scrolls into
// view. Same progressive approach as Reveal: server-rendered visible, and only
// hidden after hydration when the group starts below the fold.
export default function Stagger({
  as: Tag = "div",
  delay = 0,
  interval = staggerInterval,
  children,
  ...props
}) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotionConfig();

  useEffect(() => {
    const element = scope.current;
    if (!element || reduceMotion || isOnScreen(element)) return;

    const items = Array.from(element.children);
    if (items.length === 0) return;

    animate(items, { opacity: 0, y: getRevealDistance() }, { duration: 0 });

    return inView(
      element,
      () => {
        animate(
          items,
          { opacity: 1, y: 0 },
          {
            duration: duration.base,
            ease,
            delay: stagger(interval, { startDelay: delay }),
          },
        );
      },
      { amount: viewportAmount },
    );
  }, [animate, scope, reduceMotion, delay, interval]);

  return (
    <Tag ref={scope} {...props}>
      {children}
    </Tag>
  );
}
