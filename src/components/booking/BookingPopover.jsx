"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { ease } from "@/lib/motion";

const GAP = 12; // px between the fields and the popover
const EDGE = 16; // px kept clear of the viewport edges

// Places the popover against its positioned parent (the booking fields),
// shifted sideways to stay inside the viewport. It opens below if it fits
// there, otherwise above if it fits under the sticky header. If it fits
// neither way it opens below, and the returned overflow (in px) is how far
// the page needs to scroll to bring it fully into view.
function place(popover, align) {
  const parent = popover.offsetParent;
  if (!parent) return 0;

  const anchor = parent.getBoundingClientRect();
  const { offsetWidth: width, offsetHeight: height } = popover;
  const viewportWidth = document.documentElement.clientWidth;
  const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  const roomBelow = window.innerHeight - anchor.bottom - GAP - EDGE;
  const roomAbove = anchor.top - GAP - Math.max(EDGE, headerBottom + EDGE);
  const below = height <= roomBelow || height > roomAbove;

  const ideal = align === "end" ? anchor.right - width : anchor.left;
  const left = Math.max(EDGE, Math.min(ideal, viewportWidth - EDGE - width));

  popover.style.left = `${left - anchor.left}px`;
  popover.style.top = below ? `calc(100% + ${GAP}px)` : "auto";
  popover.style.bottom = below ? "auto" : `calc(100% + ${GAP}px)`;

  return below ? Math.max(0, height - roomBelow) : 0;
}

// Desktop and tablet popover for the date and guest pickers. w-max sizes it
// by its content rather than squeezing it to the fields' width.
export default function BookingPopover({ id, label, align = "start", className, children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const popover = ref.current;
    const overflow = place(popover, align);
    // Scrolling down also tucks the sticky header away, out of the way.
    if (overflow > 0) window.scrollBy({ top: overflow });

    const onResize = () => place(popover, align);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [align]);

  return (
    <motion.div
      ref={ref}
      id={id}
      role="dialog"
      aria-label={label}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
      transition={{ duration: 0.3, ease }}
      className={clsx(
        "absolute z-30 w-max max-w-[calc(100vw-2rem)] rounded-card bg-bg p-6 text-ink shadow-float",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
