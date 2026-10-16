import { rooms, villaPage } from "@/content/rooms";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import VillaCardRow from "@/components/sections/Villas/VillaCardRow";

// The villa cards for every villa except `currentSlug`.
export default function OtherVillas({ currentSlug }) {
  const others = rooms.filter((room) => room.slug !== currentSlug);

  return (
    <Section tone="surface" aria-labelledby="other-villas-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="other-villas-title"
            title={villaPage.otherVillas}
            intro={villaPage.otherVillasIntro}
          />
        </Reveal>
        <VillaCardRow rooms={others} className="mt-12 lg:mt-16" />
      </Container>
    </Section>
  );
}
