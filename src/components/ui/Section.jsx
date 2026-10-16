import clsx from "clsx";

const tones = {
  bg: "bg-bg text-ink",
  surface: "bg-surface text-ink",
  sea: "bg-sea text-on-dark",
};

// A page section with the standard vertical spacing and one of the three
// section backgrounds. `id` doubles as the in-page anchor (e.g. /#dining);
// scroll-mt keeps anchored sections clear of the sticky header.
export default function Section({
  as: Tag = "section",
  tone = "bg",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={clsx("scroll-mt-header py-section lg:scroll-mt-header-lg", tones[tone], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
