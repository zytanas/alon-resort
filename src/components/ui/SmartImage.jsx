import Image from "next/image";
import clsx from "clsx";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

// A cover-fit image that fills its (positioned) parent, or a placeholder
// showing the hint while src is still null. `priority` maps to next/image's
// `preload` (which replaced `priority` in Next.js 16); use it only for
// above-the-fold images.
export default function SmartImage({
  src,
  alt,
  hint,
  hintPosition,
  sizes,
  priority = false,
  className,
}) {
  if (!src) {
    return (
      <ImagePlaceholder alt={alt} hint={hint} hintPosition={hintPosition} className={className} />
    );
  }

  // Static imports carry a blur preview; remote URLs don't.
  const blur = typeof src === "object" && "blurDataURL" in src;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={priority}
      placeholder={blur ? "blur" : "empty"}
      className={clsx("object-cover", className)}
    />
  );
}
