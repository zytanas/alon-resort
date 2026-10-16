import clsx from "clsx";

const variants = {
  light: "bg-bg/90 text-ink backdrop-blur-md",
  sand: "bg-surface text-ink",
  outline: "border border-line text-ink",
  sea: "bg-sea text-on-dark",
  // Small coral text uses accent-deep for contrast.
  coral: "border border-accent-deep text-accent-deep",
};

// Small rounded label, e.g. "Sleeps 4" on an image card. Pass `as` to render
// something other than a span.
export default function Pill({
  as: Tag = "span",
  variant = "sand",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
