import clsx from "clsx";

// The brand motif: two gentle wave lines. Used above section headings, in the
// logo and to mark the current nav link. Coral by default; pass a text-*
// class to recolour it, or w-/h- classes to resize it (keep the 7:3 ratio).
export default function WaveMark({ className = "text-accent", ...props }) {
  return (
    <svg
      viewBox="0 0 28 12"
      width="28"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={clsx("shrink-0", className)}
      {...props}
    >
      <path d="M1.5 3.75c2.083-2 4.167-2 6.25 0s4.167 2 6.25 0 4.167-2 6.25 0 4.167 2 6.25 0" />
      <path d="M1.5 9.25c2.083-2 4.167-2 6.25 0s4.167 2 6.25 0 4.167-2 6.25 0 4.167 2 6.25 0" />
    </svg>
  );
}
