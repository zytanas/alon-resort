import { home } from "@/content/home";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import WaveMark from "@/components/ui/WaveMark";
import Stagger from "@/components/motion/Stagger";
import StoryStatement from "./StoryStatement";

const { story } = home;

// "Our way": the brand statement on sea, then three quick facts.
export default function Story() {
  return (
    <Section id="story" tone="sea" aria-label="Our way">
      <Container className="flex flex-col items-center text-center">
        <WaveMark className="h-4 w-auto text-accent" />
        <StoryStatement
          text={story.statement}
          className="mt-8 max-w-[22ch] font-display text-statement font-medium text-balance text-on-dark"
        />
        <Stagger
          as="dl"
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-on-dark/15 pt-10 lg:mt-20"
        >
          {story.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center gap-2">
              <dt className="text-xs tracking-[0.14em] text-on-dark/75 uppercase sm:text-sm">
                {stat.label}
              </dt>
              <dd className="font-display text-h2 font-medium">{stat.value}</dd>
            </div>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
