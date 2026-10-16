import clsx from "clsx";
import { StarIcon } from "@/components/ui/icons";

// A row of coral stars. Decorative unless given a label, e.g.
// label="5 out of 5 stars" when the stars are the only rating shown.
export default function Stars({ count = 5, label, className, starClassName = "size-3" }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={clsx("inline-flex gap-0.5 text-accent", className)}
    >
      {Array.from({ length: count }, (_, index) => (
        <StarIcon key={index} className={starClassName} />
      ))}
    </span>
  );
}
