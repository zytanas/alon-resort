import { site } from "@/config/site";
import { gettingHere } from "@/content/getting-here";
import { fill, formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const values = {
  airport: site.nearestAirport.name,
  time: site.nearestAirport.transferTime,
  price: formatPrice(site.nearestAirport.transferPrice),
  checkIn: site.checkIn,
};

// Map card and three numbered arrival steps. On /getting-here itself, pass
// showCta={false} to drop the button that links there.
export default function GettingHere({ showCta = true }) {
  return (
    <Section id="getting-here" tone="surface" aria-labelledby="getting-here-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* TODO: replace with the MapLibre map. */}
        <Reveal className="relative aspect-4/3 overflow-hidden rounded-image lg:aspect-square">
          <ImagePlaceholder {...gettingHere.map} />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="getting-here-title"
              title={gettingHere.title}
              intro={gettingHere.intro}
              align="left"
            />
          </Reveal>
          <Stagger as="ol" className="mt-10 space-y-6">
            {gettingHere.steps.map((step, index) => (
              <li key={step.title} className="flex gap-5 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="font-display text-h4 leading-none text-accent-deep tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-body text-base font-medium text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{fill(step.text, values)}</p>
                </div>
              </li>
            ))}
          </Stagger>
          {showCta && (
            <Reveal className="mt-10">
              <Button href={gettingHere.cta.href}>{gettingHere.cta.label}</Button>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
