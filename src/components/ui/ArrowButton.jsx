import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRightIcon } from "@/components/ui/icons";

// A 40px round sea link with a diagonal arrow, e.g. in the corner of an image
// card. It has no visible text, so an aria-label is required.
export default function ArrowButton({ href, "aria-label": ariaLabel, className, ...props }) {
  if (process.env.NODE_ENV !== "production" && !ariaLabel) {
    console.error("ArrowButton needs an aria-label describing where it goes.");
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        "group/arrow inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-sea text-on-dark transition-colors duration-300 ease-soft hover:bg-sea-soft",
        className,
      )}
      {...props}
    >
      <ArrowUpRightIcon className="size-4.5 transition-transform duration-300 ease-out-expo group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
