import { site } from "@/config/site";
import { booking } from "@/content/booking";
import { roomsPage, villaAmenities, villaPage } from "@/content/rooms";
import { fill, formatPrice, formatUsdAmount } from "@/lib/format";
import BookingForm from "@/components/booking/BookingForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import SmartImage from "@/components/ui/SmartImage";
import { CheckIcon } from "@/components/ui/icons";
import Reveal from "@/components/motion/Reveal";

const times = { checkIn: site.checkIn, checkOut: site.checkOut };

// One large photo and two smaller ones beside it (below it on mobile).
function VillaGallery({ room }) {
  const [main, ...others] = room.gallery;

  return (
    <Reveal
      as="ul"
      aria-label={fill(villaPage.galleryLabel, { name: room.name })}
      className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:gap-4"
    >
      <li className="relative col-span-2 aspect-4/3 overflow-hidden rounded-image md:col-span-1 md:row-span-2 md:aspect-auto">
        <SmartImage {...main} sizes="(min-width: 768px) 66vw, 100vw" priority />
      </li>
      {others.map((image) => (
        <li key={image.hint} className="relative aspect-4/3 overflow-hidden rounded-card">
          <SmartImage {...image} sizes="(min-width: 768px) 33vw, 50vw" />
        </li>
      ))}
    </Reveal>
  );
}

function Block({ title, children }) {
  return (
    <div className="border-t border-line pt-8">
      <h2 className="text-h4">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

// Breadcrumb and gallery, then the villa details beside a sticky booking card.
export default function VillaDetail({ room }) {
  const specs = [
    { label: roomsPage.guestsLabel, value: room.guests },
    { label: roomsPage.sizeLabel, value: fill(roomsPage.sizeValue, { size: room.size }) },
    { label: roomsPage.bedLabel, value: room.bed },
  ];

  return (
    <section aria-labelledby="villa-title" className="pt-8 pb-section md:pt-10">
      <Container>
        <Breadcrumb items={[{ label: villaPage.breadcrumbParent, href: "/rooms" }, { label: room.name }]} />
        <div className="mt-6">
          <VillaGallery room={room} />
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_24rem] lg:gap-16 xl:gap-24">
          <div className="space-y-10">
            <Reveal>
              <h1 id="villa-title" className="text-h1">
                {room.name}
              </h1>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs tracking-wide text-ink-muted">{spec.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 max-w-[60ch] text-lead text-ink-muted">{room.description}</p>
            </Reveal>

            <Block title={villaPage.highlights}>
              <ul className="flex flex-wrap gap-2">
                {room.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Pill variant="sand" className="px-3.5 py-1.5 text-[0.8125rem]">
                      {highlight}
                    </Pill>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={villaPage.amenities}>
              <ul className="grid gap-x-8 gap-y-3 text-sm text-ink sm:grid-cols-2">
                {villaAmenities.map((amenity) => (
                  <li key={amenity} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-sea" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={villaPage.rules}>
              <ul className="space-y-2.5 text-sm text-ink-muted">
                {villaPage.rulesList.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {fill(rule, times)}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside aria-labelledby="villa-booking-title" className="lg:sticky lg:top-[calc(var(--spacing-header-lg)+1.5rem)] lg:self-start">
            <div className="rounded-card bg-surface p-6 sm:p-8">
              <h2 id="villa-booking-title" className="sr-only">
                {villaPage.bookingTitle}
              </h2>
              <p className="flex items-baseline gap-2">
                <span className="font-display text-h3 font-medium">
                  {fill(villaPage.price, { price: formatPrice(room.priceFrom) })}
                </span>
                <span className="text-sm text-ink-muted">{villaPage.perNight}</span>
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                {fill(villaPage.priceNote, { usd: formatUsdAmount(room.priceFrom) })}
              </p>
              <div className="mt-6">
                <BookingForm labels={booking} tone="card" villa={room.slug} />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
