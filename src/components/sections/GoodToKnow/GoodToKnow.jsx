import { gettingHerePage } from "@/content/getting-here";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const { goodToKnow } = gettingHerePage;

// Four practical tips, for /getting-here.
export default function GoodToKnow() {
  return (
    <Section aria-labelledby="good-to-know-title">
      <Container>
        <Reveal>
          <SectionHeading id="good-to-know-title" title={goodToKnow.title} intro={goodToKnow.intro} />
        </Reveal>
        <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {goodToKnow.items.map((item, index) => (
            <li key={item.title} className="rounded-card bg-surface p-6 sm:p-8">
              <span aria-hidden="true" className="font-display text-h4 text-accent-deep tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h4">{item.title}</h3>
              <p className="mt-3 text-sm text-ink-muted">{item.text}</p>
            </li>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
