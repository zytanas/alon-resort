import { home } from "@/content/home";
import { fill, formatPrice } from "@/lib/format";
import ArrowButton from "@/components/ui/ArrowButton";
import Pill from "@/components/ui/Pill";
import SmartImage from "@/components/ui/SmartImage";

const labels = home.villas.card;

// Tall image with guests/size, name and price pills; the short description
// and an arrow link to the villa page below.
export default function VillaCard({ room, headingLevel: Heading = "h3", sizes }) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-4/5 overflow-hidden rounded-card">
        <SmartImage
          {...room.image}
          sizes={sizes ?? "(min-width: 1024px) 300px, (min-width: 768px) 45vw, 80vw"}
        />
        <Pill variant="light" className="absolute top-3 left-3">
          {fill(labels.specs, { guests: room.guests, size: room.size })}
        </Pill>
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-1.5">
          <Pill as={Heading} variant="light" className="px-3.5 py-1.5 font-body text-sm">
            {room.name}
          </Pill>
          <Pill variant="sea" className="px-3.5 py-1.5 text-sm">
            {fill(labels.price, { price: formatPrice(room.priceFrom) })}
          </Pill>
        </div>
      </div>
      <div className="mt-4 flex flex-1 items-start justify-between gap-4">
        <p className="text-sm text-ink-muted">{room.shortDescription}</p>
        <ArrowButton
          href={`/rooms/${room.slug}`}
          aria-label={fill(labels.viewLabel, { name: room.name })}
        />
      </div>
    </article>
  );
}
