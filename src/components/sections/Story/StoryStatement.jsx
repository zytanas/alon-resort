"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotionConfig, useScroll, useTransform } from "motion/react";

const DIM = 0.3; // opacity of words not yet reached

const subscribe = () => () => {};

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [DIM, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

// The Our way statement, lit word by word as it scrolls through the
// viewport. Server-rendered (and with reduced motion, always) fully opaque;
// words are only dimmed once JavaScript is running.
export default function StoryStatement({ text, className }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotionConfig();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.6"] });

  const words = text.split(" ");
  const animate = mounted && !reduceMotion;

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const content = (
          <>
            {word}
            {index < words.length - 1 && " "}
          </>
        );
        return animate ? (
          <Word
            key={index}
            progress={scrollYProgress}
            range={[index / words.length, (index + 1) / words.length]}
          >
            {content}
          </Word>
        ) : (
          <span key={index}>{content}</span>
        );
      })}
    </p>
  );
}
