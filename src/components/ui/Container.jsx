import clsx from "clsx";

export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={clsx("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
