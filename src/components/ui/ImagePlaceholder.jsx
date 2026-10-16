import { useId } from "react";
import clsx from "clsx";

// Stands in for a photo that hasn't been added yet. Fills its (positioned)
// parent with deeper sand and a faint wave pattern, with the hint centred so
// it's clear what each image should be. The hint hides itself in spaces too
// small to read it (such as the hero's inline pill). hintPosition="top" moves
// it clear of anything overlaid on the lower part of the image.
export default function ImagePlaceholder({ alt, hint, hintPosition = "center", className }) {
  const patternId = useId();

  return (
    <div
      role="img"
      aria-label={alt}
      className={clsx("@container absolute inset-0 overflow-hidden bg-surface-2", className)}
    >
      <svg aria-hidden="true" focusable="false" className="absolute inset-0 size-full text-line">
        <defs>
          <pattern id={patternId} width="56" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M0 11c4.667-4.5 9.333-4.5 14 0s9.333 4.5 14 0 9.333-4.5 14 0 9.333 4.5 14 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {hint && (
        <span
          className={clsx(
            "absolute inset-0 hidden justify-center p-4 text-center font-body text-xs leading-snug font-normal tracking-normal text-ink-muted not-italic @min-[9rem]:flex",
            hintPosition === "top" ? "items-start pt-[12%]" : "items-center",
          )}
        >
          <span className="rounded-full bg-surface-2/80 px-3 py-1">{hint}</span>
        </span>
      )}
    </div>
  );
}
