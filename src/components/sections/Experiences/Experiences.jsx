import { experiences } from "@/content/experiences";
import { home } from "@/content/home";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import ExperienceCard from "./ExperienceCard";

const { experiences: copy } = home;

// The first five experiences: one large card (2×2) and four small ones on
// desktop; the large card spans both columns on tablet; stacked on mobile.
export default function Experiences() {
  const [featured, ...rest] = experiences.slice(0, 5);

  return (
    <Section id="experiences" aria-labelledby="experiences-title">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="experiences-title" title={copy.title} intro={copy.intro} align="left" />
          <Button href={copy.all.href} variant="link" className="shrink-0">
            {copy.all.label}
          </Button>
        </Reveal>

        <Stagger
          as="ul"
          className="mt-12 grid gap-4 md:grid-cols-2 md:auto-rows-[18rem] lg:mt-16 lg:grid-cols-4 lg:auto-rows-[17rem] lg:gap-5"
        >
          <li className="aspect-4/5 md:col-span-2 md:row-span-1 md:aspect-auto lg:row-span-2">
            <ExperienceCard
              experience={featured}
              large
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </li>
          {rest.map((experience) => (
            <li key={experience.slug} className="aspect-4/3 md:aspect-auto">
              <ExperienceCard
                experience={experience}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </li>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
