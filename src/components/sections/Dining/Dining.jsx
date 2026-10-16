import { site } from "@/config/site";
import { home } from "@/content/home";
import { formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SmartImage from "@/components/ui/SmartImage";
import WaveMark from "@/components/ui/WaveMark";
import Reveal from "@/components/motion/Reveal";

const { dining } = home;
const { restaurant } = site;

// Tall image with a smaller square overlapping its bottom-right corner, then
// the restaurant name, hours, a few dishes and the menu link.
export default function Dining() {
  return (
    <Section id="dining" aria-labelledby="dining-title">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Right and bottom padding make room for the overlapping square. */}
        <Reveal className="relative pr-[12%] pb-[12%]">
          <div className="relative aspect-4/5 overflow-hidden rounded-image">
            <SmartImage {...dining.images.main} hintPosition="top" sizes="(min-width: 1024px) 45vw, 90vw" />
          </div>
          <div className="absolute right-0 bottom-0 aspect-square w-[44%] overflow-hidden rounded-card ring-8 ring-bg">
            <SmartImage {...dining.images.detail} sizes="(min-width: 1024px) 22vw, 40vw" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <WaveMark />
            <p className="mt-5 text-eyebrow font-medium text-accent-deep uppercase">{dining.eyebrow}</p>
            <h2 id="dining-title" className="mt-3 text-h2">
              {restaurant.name}
            </h2>
            <p className="mt-6 text-ink-muted">{dining.body}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
            <div>
              <h3 className="font-body text-sm font-medium text-ink">{dining.hoursTitle}</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {restaurant.hours.map((item) => (
                  <div key={item.meal} className="flex gap-3">
                    <dt className="w-20 text-ink-muted">{item.meal}</dt>
                    <dd className="text-ink tabular-nums">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-body text-sm font-medium text-ink">{dining.menuTitle}</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {dining.dishes.map((dish) => (
                  <li key={dish.name} className="flex items-baseline gap-2">
                    <span className="text-ink">{dish.name}</span>
                    <span aria-hidden="true" className="min-w-6 flex-1 border-b border-dotted border-ink-muted/50" />
                    <span className="text-ink-muted tabular-nums">{formatPrice(dish.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Button href={dining.menu.href} variant="outline">
              {dining.menu.label}
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
