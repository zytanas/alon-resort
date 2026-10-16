// Internal style guide for checking tokens, type, buttons and motion.
// Not linked from the site. TODO: exclude from sitemap.js and robots.js once
// those are added.
import { site } from "@/config/site";
import { formatDate, formatPrice, formatUsd } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export const metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const swatches = [
  { token: "bg", className: "bg-bg", note: "Page background" },
  { token: "surface", className: "bg-surface", note: "Cards, alternate sections" },
  { token: "surface-2", className: "bg-surface-2", note: "Card borders, hovers" },
  { token: "line", className: "bg-line", note: "Dividers" },
  { token: "ink", className: "bg-ink", note: "Headings and body" },
  { token: "ink-muted", className: "bg-ink-muted", note: "Secondary text" },
  { token: "sea", className: "bg-sea", note: "Dark sections, primary buttons" },
  { token: "sea-soft", className: "bg-sea-soft", note: "Hover for sea" },
  { token: "accent", className: "bg-accent", note: "Large text, shapes, icons" },
  { token: "accent-deep", className: "bg-accent-deep", note: "Small coral text" },
  { token: "on-dark", className: "bg-on-dark", note: "Text on sea" },
];

const headings = [
  { size: "display", label: "Display · 48 → 120px" },
  { size: "h1", label: "H1 · 40 → 80px" },
  { size: "h2", label: "H2 · 34 → 60px" },
  { size: "h3", label: "H3 · 26 → 36px" },
  { size: "h4", label: "H4 · 21 → 26px" },
];

function GuideSection({ title, children, className }) {
  return (
    <section className={className}>
      <Container className="py-section-sm">
        <p className="mb-8 text-eyebrow font-medium uppercase text-accent-deep">
          {title}
        </p>
        {children}
      </Container>
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <>
      <GuideSection title="Style guide">
        <Heading as="h1" size="display">
          Slow mornings <em>by the waves.</em>
        </Heading>
        <p className="mt-6 max-w-2xl text-lead text-ink-muted">
          Foundation check for {site.name}, {site.location.area},{" "}
          {site.location.island}. Tokens, type, buttons and motion.
        </p>
      </GuideSection>

      <GuideSection title="Colour tokens" className="bg-surface">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map((swatch) => (
            <li key={swatch.token} className="rounded-card border border-surface-2 bg-bg p-3">
              <div className={`h-20 rounded-2xl border border-line ${swatch.className}`} />
              <p className="mt-3 text-sm font-medium">{swatch.token}</p>
              <p className="text-xs text-ink-muted">{swatch.note}</p>
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection title="Type scale · Cormorant Garamond">
        <div className="space-y-10">
          {headings.map((heading) => (
            <div key={heading.size} className="border-b border-line pb-8">
              <p className="mb-3 text-xs text-ink-muted">{heading.label}</p>
              <Heading as={heading.size === "display" ? "h2" : heading.size} size={heading.size}>
                Island <em>days</em>, unhurried
              </Heading>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title="Body · DM Sans" className="bg-surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs text-ink-muted">Lead · 18 → 21px</p>
            <p className="text-lead">
              Wake to the sound of the reef break, take your coffee to the
              deck and let the day decide itself.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs text-ink-muted">Body · 16px</p>
            <p>
              Each villa opens onto a private garden with an outdoor shower.
              Check-in from {site.checkIn}, check-out by {site.checkOut}.
              Transfers from {site.nearestAirport.name} take about{" "}
              {site.nearestAirport.transferTime}.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Formatting: {formatPrice(8500)} per night ({formatUsd(8500)}) ·{" "}
              {formatDate(new Date(2026, 9, 16))}
            </p>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button href={site.bookingUrl}>Book your stay</Button>
          <Button href="/rooms" variant="outline">
            View rooms
          </Button>
          <Button href="/experiences" variant="link">
            Explore experiences
          </Button>
          <Button size="sm">Small primary</Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-card bg-sea p-8">
          <Button href={site.bookingUrl} variant="light">
            Light on sea
          </Button>
          <p className="text-sm text-on-dark">On-dark text sits on sea only.</p>
        </div>
      </GuideSection>

      <GuideSection title="Radii" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-card border border-surface-2 bg-bg p-6 text-sm">Card · 24px</div>
          <div className="aspect-[4/3] rounded-image bg-sea-soft p-6 text-sm text-on-dark">Image · 28px</div>
          <div className="flex items-start">
            <span className="rounded-full border border-ink px-5 py-2 text-sm">Button · full</span>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Motion · scroll down">
        <p className="max-w-xl text-ink-muted">
          Below-the-fold content fades up once as it enters the viewport.
          Content is server-rendered visible, and reduced-motion users see no
          animation.
        </p>

        <Reveal className="mt-[60vh] rounded-card bg-surface p-8">
          <Heading as="h3">Reveal</Heading>
          <p className="mt-2 text-ink-muted">Fades up into view once.</p>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-3">
          {["Surf", "Island hop", "Sunset"].map((item) => (
            <div key={item} className="rounded-card border border-surface-2 bg-bg p-8">
              <Heading as="h4">{item}</Heading>
              <p className="mt-2 text-sm text-ink-muted">Staggered child</p>
            </div>
          ))}
        </Stagger>
      </GuideSection>
    </>
  );
}
