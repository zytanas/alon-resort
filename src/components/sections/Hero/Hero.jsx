import Link from "next/link";
import { site } from "@/config/site";
import { booking } from "@/content/booking";
import { home } from "@/content/home";
import { fill, formatPrice, formatUsdAmount } from "@/lib/format";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import WaveMark from "@/components/ui/WaveMark";
import { ArrowRightIcon, PinIcon } from "@/components/ui/icons";
import BookingForm from "@/components/booking/BookingForm";
import HeroMotion, { CardParallax } from "./HeroMotion";

const { hero } = home;

// Wraps a headline line in a mask so it can slide up from behind it. The
// padding keeps descenders and italic overhangs from being clipped.
function MaskedLine({ children }) {
  return (
    <span className="mb-[-0.12em] block overflow-hidden pb-[0.12em]">
      <span data-hero="line" className="block">
        {children}
      </span>
    </span>
  );
}

// The rounded image set into line 1. Decorative, so hidden from screen
// readers to keep the heading reading as one sentence.
function InlinePill() {
  return (
    <span
      aria-hidden="true"
      data-hero="pill"
      className="relative ml-[0.2em] inline-block h-[0.9em] w-[2.4em] translate-y-[-0.06em] overflow-hidden rounded-full align-middle"
    >
      <SmartImage {...hero.images.pill} sizes="(min-width: 1024px) 200px, 120px" priority />
    </span>
  );
}

// "waves." with the full stop in coral.
function LastLine({ text }) {
  const word = text.replace(/\.$/, "");

  return (
    <>
      <em>{word}</em>
      {word !== text && <span className="text-accent">.</span>}
    </>
  );
}

export default function Hero() {
  const rate = fill(hero.rate, {
    price: formatPrice(site.ratesFrom),
    usd: formatUsdAmount(site.ratesFrom),
  });

  return (
    <HeroMotion aria-labelledby="hero-title" className="pt-10 pb-section-sm md:pt-14 lg:pt-20">
      <Container className="grid gap-y-10 md:grid-cols-[52fr_48fr] md:grid-rows-[1fr_auto] md:gap-x-10 lg:grid-cols-[56fr_44fr] lg:gap-x-16">
        {/* Headline and subhead. The column is a size container for text-hero. */}
        <div className="@container md:col-start-1 md:row-start-1">
          <WaveMark data-hero="mark" />
          <h1 id="hero-title" className="mt-6 font-display text-hero font-medium text-ink lg:mt-8">
            <MaskedLine>
              <span className="whitespace-nowrap">
                {hero.headlineLine1}
                <InlinePill />
              </span>
            </MaskedLine>
            <MaskedLine>{hero.headlineLine2}</MaskedLine>
            <MaskedLine>
              <LastLine text={hero.headlineLine3} />
            </MaskedLine>
          </h1>
          <p data-hero="fade" className="mt-6 max-w-[44ch] text-lead text-ink-muted lg:mt-8">
            {hero.subhead}
          </p>
        </div>

        {/* Image card with the booking form. The image is clipped by its own
            layer, not the card, so the booking popovers can overflow it. */}
        <div
          data-hero="card"
          className="relative isolate z-10 aspect-4/5 self-start md:col-start-2 md:row-span-2 md:aspect-3/4 lg:aspect-4/5"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-image bg-surface-2">
            <CardParallax>
              <div data-hero="image" className="absolute inset-0">
                <SmartImage
                  {...hero.images.card}
                  hintPosition="top"
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 48vw, 100vw"
                  priority
                />
              </div>
            </CardParallax>
            {/* Keeps the title and form readable over any photo. */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-ink/85 via-ink/45 via-45% to-transparent" />
          </div>

          <div data-hero="form" className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <h2 className="mb-4 font-display text-h4 text-on-dark">{hero.card.title}</h2>
            <BookingForm labels={booking} submitLabel={hero.card.button} />
          </div>
        </div>

        {/* Location bar and rate, aligned with the bottom of the card. */}
        <div className="self-end md:col-start-1 md:row-start-2">
          <div
            data-hero="fade"
            className="flex items-center justify-between gap-3 rounded-full bg-surface py-2 pr-2 pl-4 text-[0.8125rem] sm:gap-4 sm:pl-5 sm:text-sm"
          >
            <p className="flex min-w-0 items-center gap-2.5 text-ink">
              <PinIcon className="size-4.5 shrink-0 text-accent-deep" />
              <span>{hero.location}</span>
            </p>
            <Link
              href={hero.locationLink.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-bg px-3.5 py-2.5 font-medium sm:px-4 text-ink transition-colors duration-300 hover:bg-surface-2"
            >
              {hero.locationLink.label}
              <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
          <p data-hero="fade" className="mt-3 pl-5 text-sm text-ink-muted">
            {rate}
          </p>
        </div>
      </Container>
    </HeroMotion>
  );
}
