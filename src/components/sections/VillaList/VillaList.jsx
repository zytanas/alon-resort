import clsx from "clsx";
import { rooms, roomsPage } from "@/content/rooms";
import { fill, formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/motion/Reveal";

const copy = roomsPage;

// One villa: image on one side, details on the other, alternating sides
// from lg up. Stacked (image first) below lg.
function VillaRow({ room, flip }) {
  const specs = [
    { label: copy.guestsLabel, value: room.guests },
    { label: copy.sizeLabel, value: fill(copy.sizeValue, { size: room.size }) },
    { label: copy.bedLabel, value: room.bed },
  ];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal
        className={clsx(
          "relative aspect-4/3 overflow-hidden rounded-image lg:aspect-5/4",
          flip && "lg:order-2",
        )}
      >
        <SmartImage {...room.image} sizes="(min-width: 1024px) 50vw, 100vw" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-h2">{room.name}</h2>
        <p className="mt-4 max-w-[46ch] text-lead text-ink-muted">{room.shortDescription}</p>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
          {specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-xs tracking-wide text-ink-muted">{spec.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {room.highlights.map((highlight) => (
            <li key={highlight}>
              <Pill variant="sand" className="px-3.5 py-1.5 text-[0.8125rem]">
                {highlight}
              </Pill>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="font-display text-h4">
            {fill(copy.price, { price: formatPrice(room.priceFrom) })}
          </p>
          <Button href={`/rooms/${room.slug}`}>
            {copy.view}
            <span className="sr-only">: {room.name}</span>
          </Button>
        </div>
      </Reveal>
    </article>
  );
}

// All villas as large alternating rows, for /rooms.
export default function VillaList() {
  return (
    <Section aria-label={copy.hero.breadcrumb} className="pt-0">
      <Container as="ul" className="space-y-section-sm">
        {rooms.map((room, index) => (
          <li key={room.slug}>
            <VillaRow room={room} flip={index % 2 === 1} />
          </li>
        ))}
      </Container>
    </Section>
  );
}
