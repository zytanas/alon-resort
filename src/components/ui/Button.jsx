import Link from "next/link";
import clsx from "clsx";

const base =
  "group inline-flex items-center justify-center gap-2 font-body font-medium whitespace-nowrap transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-3";

// The light variant sits on sea, where an accent-deep ring would be too low
// contrast, so it uses an on-dark ring instead.
const variants = {
  primary:
    "rounded-full bg-sea text-on-dark hover:bg-sea-soft focus-visible:outline-accent-deep",
  outline:
    "rounded-full border border-ink text-ink hover:bg-ink hover:text-bg focus-visible:outline-accent-deep",
  light:
    "rounded-full bg-bg text-sea hover:bg-surface focus-visible:outline-on-dark",
  link: "text-ink underline-offset-4 hover:underline focus-visible:outline-accent-deep",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.9375rem]",
};

function isInternal(href) {
  return href.startsWith("/") || href.startsWith("#");
}

function isExternalWeb(href) {
  return /^https?:\/\//.test(href);
}

// Renders next/link for internal hrefs, <a> for external ones (new tab for
// http links) and <button> when there is no href.
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = clsx(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    variant === "link" && "text-[0.9375rem]",
    className,
  );

  const content =
    variant === "link" ? (
      <>
        <span>{children}</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      </>
    ) : (
      children
    );

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {content}
      </button>
    );
  }

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  const newTab = isExternalWeb(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={classes} {...newTab} {...props}>
      {content}
    </a>
  );
}
