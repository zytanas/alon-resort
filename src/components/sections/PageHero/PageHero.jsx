import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import WaveMark from "@/components/ui/WaveMark";
import Reveal from "@/components/motion/Reveal";

// A smaller split hero for inner pages: breadcrumb, WaveMark, heading and
// intro on the left; a 4:3 image card on the right. Stacked on mobile.
// `hero` is { breadcrumb, title, intro, image } from the page's content file.
export default function PageHero({ hero }) {
  return (
    <section aria-labelledby="page-title" className="pt-10 pb-section-sm md:pt-14 lg:pt-16">
      <Container className="grid items-end gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="md:pb-4">
          <Breadcrumb items={[{ label: hero.breadcrumb }]} />
          <WaveMark className="mt-10 text-accent lg:mt-14" />
          <h1 id="page-title" className="mt-5 text-h1">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[44ch] text-lead text-ink-muted">{hero.intro}</p>
        </div>
        <Reveal className="relative aspect-4/3 overflow-hidden rounded-image">
          <SmartImage {...hero.image} sizes="(min-width: 768px) 50vw, 100vw" priority />
        </Reveal>
      </Container>
    </section>
  );
}
