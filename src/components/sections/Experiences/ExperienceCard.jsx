import Link from "next/link";
import clsx from "clsx";
import { experienceLabels } from "@/content/experiences";
import { fill, formatPrice } from "@/lib/format";
import Pill from "@/components/ui/Pill";
import SmartImage from "@/components/ui/SmartImage";

// Image-filled card linking to /experiences: an ink gradient at the bottom
// with the title and duration/price pills. Fills its grid cell; pass an
// aspect class for stacked layouts.
export default function ExperienceCard({ experience, large = false, sizes, className }) {
  return (
    <Link
      href="/experiences"
      className={clsx(
        "group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-card p-5 text-on-dark sm:p-6",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none">
        <SmartImage {...experience.image} hintPosition="top" sizes={sizes} />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-ink/80 via-ink/35 to-transparent" />

      <h3 className={clsx("text-on-dark", large ? "text-h3" : "text-h4")}>{experience.title}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Pill variant="light">{experience.duration}</Pill>
        <Pill variant="light">
          {fill(experienceLabels.price, { price: formatPrice(experience.priceFrom) })}
        </Pill>
      </div>
    </Link>
  );
}
