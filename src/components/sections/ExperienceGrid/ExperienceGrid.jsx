import { experienceLabels, experiences, experiencesPage } from "@/content/experiences";
import { fill, formatPrice } from "@/lib/format";
import { whatsappLink } from "@/lib/links";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { WhatsAppIcon } from "@/components/ui/icons";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

function ExperienceTile({ experience }) {
  const { title } = experience;

  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-4/3 overflow-hidden rounded-card">
        <SmartImage {...experience.image} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Pill variant="light">{experience.duration}</Pill>
          <Pill variant="light">
            {fill(experienceLabels.price, { price: formatPrice(experience.priceFrom) })}
          </Pill>
        </div>
      </div>
      <h3 className="mt-5 text-h4">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-muted">{experience.text}</p>
      <a
        href={whatsappLink(fill(experienceLabels.message, { title }))}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-ink underline-offset-4 hover:underline"
      >
        <WhatsAppIcon className="size-4.5 text-sea" />
        {experienceLabels.enquire}
        <span className="sr-only">: {title}</span>
        <span aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1 motion-reduce:transition-none">
          →
        </span>
      </a>
    </article>
  );
}

// All experiences in a 3-column grid, for /experiences.
export default function ExperienceGrid() {
  return (
    <Section aria-labelledby="experience-grid-title" className="pt-0">
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-grid-title"
            title={experiencesPage.title}
            intro={experiencesPage.intro}
            align="left"
          />
        </Reveal>
        <Stagger
          as="ul"
          className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {experiences.map((experience) => (
            <li key={experience.slug}>
              <ExperienceTile experience={experience} />
            </li>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
