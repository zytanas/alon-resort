import clsx from "clsx";

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

// Renders h1–h4 in the display font. `size` defaults to the tag, but can be
// set independently, e.g. <Heading as="h1" size="display">.
export default function Heading({
  as: Tag = "h2",
  size,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={clsx("font-display font-medium", sizes[size ?? Tag], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
