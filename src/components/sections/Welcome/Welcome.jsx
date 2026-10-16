import { home } from "@/content/home";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";
import SmartImage from "@/components/ui/SmartImage";
import WaveMark from "@/components/ui/WaveMark";
import { PlayIcon } from "@/components/ui/icons";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const { welcome } = home;

// Wide image card with the film button on the left (top on mobile), and the
// welcome heading, paragraph and amenity chips on the right.
export default function Welcome() {
  return (
    <Section id="welcome" aria-labelledby="welcome-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <Reveal className="relative aspect-16/10 overflow-hidden rounded-image">
          <SmartImage {...welcome.image} sizes="(min-width: 1024px) 60vw, 100vw" />
          {/* TODO: enable once the island film is ready, and open it in a dialog. */}
          <button
            type="button"
            disabled
            className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full bg-bg/90 py-1.5 pr-5 pl-1.5 text-sm font-medium text-ink backdrop-blur-md disabled:cursor-not-allowed sm:bottom-6 sm:left-6"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-sea text-on-dark">
              <PlayIcon className="ml-0.5 size-3.5" />
            </span>
            {welcome.film}
          </button>
        </Reveal>

        <div>
          <Reveal className="flex items-start gap-4">
            <WaveMark className="mt-[0.45em] text-accent" />
            <h2 id="welcome-title" className="text-h3">
              {welcome.title}
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 text-ink-muted">
            {welcome.body}
          </Reveal>
          <Stagger as="ul" delay={0.15} interval={0.03} className="mt-8 flex flex-wrap gap-2">
            {welcome.amenities.map((amenity) => (
              <li key={amenity}>
                <Pill variant="sand" className="px-3.5 py-1.5 text-[0.8125rem]">
                  {amenity}
                </Pill>
              </li>
            ))}
            <li>
              <Pill variant="outline" className="px-3.5 py-1.5 text-[0.8125rem]">
                {welcome.more}
              </Pill>
            </li>
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
