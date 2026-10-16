import { site } from "@/config/site";
import { home } from "@/content/home";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { InstagramIcon } from "@/components/ui/icons";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const { gallery } = home;

const aspects = {
  square: "aspect-square",
  portrait: "aspect-4/5",
  tall: "aspect-2/3",
  landscape: "aspect-4/3",
};

// Masonry of mixed-ratio photos using CSS columns: 2 columns, 3 from lg.
export default function Gallery() {
  return (
    <Section id="gallery" aria-labelledby="gallery-title">
      <Container>
        <Reveal>
          <SectionHeading id="gallery-title" title={gallery.title} intro={gallery.intro} />
        </Reveal>

        <Stagger as="ul" className="mt-12 columns-2 gap-3 sm:gap-4 lg:mt-16 lg:columns-3 lg:gap-5">
          {gallery.images.map((image) => (
            <li key={image.hint} className="mb-3 break-inside-avoid sm:mb-4 lg:mb-5">
              <div className={`relative overflow-hidden rounded-tile ${aspects[image.aspect]}`}>
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  hint={image.hint}
                  sizes="(min-width: 1024px) 400px, 50vw"
                />
              </div>
            </li>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <Button href={site.social.instagram} variant="outline">
            <InstagramIcon className="size-4.5" />
            {gallery.follow}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
