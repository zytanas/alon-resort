import clsx from "clsx";
import Heading from "@/components/ui/Heading";
import WaveMark from "@/components/ui/WaveMark";

// WaveMark, heading and optional intro. Centred by default; align="left"
// for headings that sit beside other content.
export default function SectionHeading({
  as = "h2",
  size,
  title,
  intro,
  align = "center",
  id,
  className,
}) {
  const centred = align === "center";

  return (
    <div className={clsx("flex flex-col", centred ? "items-center text-center" : "items-start", className)}>
      <WaveMark />
      <Heading as={as} size={size} id={id} className="mt-5">
        {title}
      </Heading>
      {intro && (
        <p className={clsx("mt-5 max-w-[52ch] text-lead text-ink-muted", centred && "mx-auto")}>
          {intro}
        </p>
      )}
    </div>
  );
}
