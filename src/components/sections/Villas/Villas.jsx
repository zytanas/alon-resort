import { home } from "@/content/home";
import { rooms } from "@/content/rooms";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import VillaCardRow from "./VillaCardRow";

const { villas } = home;

export default function Villas() {
  return (
    <Section id="villas" aria-labelledby="villas-title">
      <Container>
        <Reveal>
          <SectionHeading id="villas-title" title={villas.title} intro={villas.intro} />
        </Reveal>
        <VillaCardRow rooms={rooms} className="mt-12 lg:mt-16" />
        <Reveal className="mt-12 flex justify-center">
          <Button href={villas.all.href} variant="outline">
            {villas.all.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
