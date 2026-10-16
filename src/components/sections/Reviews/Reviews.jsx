import { site } from "@/config/site";
import { home } from "@/content/home";
import { fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

const { reviews } = home;
const { rating } = site;

export default function Reviews() {
  return (
    <Section id="reviews" aria-labelledby="reviews-title">
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="reviews-title" title={reviews.title} align="left" />
          <div className="flex items-center gap-4">
            <p className="font-display text-h1 leading-none font-medium">
              <span aria-hidden="true">{rating.score}</span>
              <span className="sr-only">{fill(reviews.ratingLabel, rating)}</span>
            </p>
            <div>
              <Stars starClassName="size-4" />
              <p className="mt-1 text-sm text-ink-muted">{fill(reviews.summary, rating)}</p>
            </div>
          </div>
        </Reveal>

        <Stagger as="ul" className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {reviews.items.map((review) => (
            <li key={review.name}>
              <figure className="flex h-full flex-col rounded-card bg-surface p-6 lg:p-8">
                <Stars label={reviews.starsLabel} />
                <blockquote className="mt-5 flex-1 font-display text-[1.375rem] leading-snug text-ink">
                  <p>“{review.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5 text-sm">
                  <span className="block font-medium text-ink">
                    {review.name} · {review.country}
                  </span>
                  <span className="mt-0.5 block text-ink-muted">
                    {fill(reviews.stayed, { villa: review.villa })}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-xs text-ink-muted">{reviews.disclaimer}</p>
      </Container>
    </Section>
  );
}
