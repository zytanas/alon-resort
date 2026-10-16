import Link from "next/link";
import clsx from "clsx";
import { site } from "@/config/site";
import { header } from "@/content/header";
import { fill } from "@/lib/format";
import WaveMark from "@/components/ui/WaveMark";

// "ALON" in the display font with a small WaveMark after it. The letters take
// their colour from the surrounding text.
export default function Wordmark({ className, ...props }) {
  return (
    <Link
      href="/"
      aria-label={fill(header.homeLabel, { name: site.name })}
      className={clsx("inline-flex items-center gap-2.5 leading-none", className)}
      {...props}
    >
      {/* Negative margin cancels the trailing letter-spacing. */}
      <span className="mr-[-0.38em] font-display text-[1.625rem] font-medium tracking-[0.38em] lg:text-[1.75rem]">
        {site.shortName.toUpperCase()}
      </span>
      <WaveMark className="ml-1.5 h-2.5 w-auto text-accent" />
    </Link>
  );
}
