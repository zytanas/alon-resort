import { offers, offersSection } from "@/content/offers";
import { fill } from "@/lib/format";
import { whatsappLink } from "@/lib/links";
import ArrowButton from "@/components/ui/ArrowButton";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

// Horizontal card: square image on the left (on top on mobile), then the tag,
// title and text, with an arrow that opens a WhatsApp enquiry.
function OfferCard({ offer }) {
  return (
    <article className="grid h-full gap-5 rounded-card bg-bg p-3 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6 lg:grid-cols-[minmax(0,12.5rem)_1fr]">
      <div className="relative aspect-16/10 overflow-hidden rounded-thumb sm:aspect-square">
        <SmartImage {...offer.image} sizes="(min-width: 640px) 200px, 90vw" />
      </div>
      <div className="flex flex-col px-2 pb-2 sm:px-0 sm:py-2 sm:pr-2">
        <Pill variant="coral" className="self-start">
          {offer.tag}
        </Pill>
        <h3 className="mt-4 text-h4">{offer.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{offer.text}</p>
        <ArrowButton
          href={whatsappLink(fill(offersSection.message, { title: offer.title }))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={fill(offersSection.enquire, { title: offer.title })}
          className="mt-5 self-end sm:mt-auto"
        />
      </div>
    </article>
  );
}

export default function Offers() {
  return (
    <Section id="offers" tone="surface" aria-labelledby="offers-title">
      <Container>
        <Reveal>
          <SectionHeading id="offers-title" title={offersSection.title} intro={offersSection.intro} />
        </Reveal>
        <Stagger as="ul" className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {offers.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
