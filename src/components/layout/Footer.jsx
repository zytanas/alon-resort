import Link from "next/link";
import { site } from "@/config/site";
import { footer } from "@/content/footer";
import { fill } from "@/lib/format";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/icons";
import Reveal from "@/components/motion/Reveal";
import Wordmark from "@/components/layout/Wordmark";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
};

const linkClass = "underline-offset-4 transition-colors hover:text-ink hover:underline";

function Column({ title, children }) {
  return (
    <div>
      <h2 className="font-body text-xs font-medium tracking-[0.16em] text-ink uppercase">{title}</h2>
      <div className="mt-4 space-y-2.5 text-sm text-ink-muted">{children}</div>
    </div>
  );
}

// Closing booking card, four link columns, social icons and a giant wordmark.
export default function Footer() {
  const { closing } = footer;

  return (
    <footer className="bg-bg pt-section-sm">
      <Container>
        <Reveal className="relative isolate flex min-h-96 flex-col items-start justify-end overflow-hidden rounded-image p-6 sm:p-10 md:aspect-21/9 md:min-h-0 lg:p-14">
          <div className="absolute inset-0 -z-10">
            <SmartImage {...closing.image} hintPosition="top" sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink/85 via-ink/55 to-ink/20" />
          <h2 className="max-w-[14ch] text-h1 text-on-dark">{closing.title}</h2>
          <p className="mt-4 max-w-[40ch] text-on-dark/85">{closing.text}</p>
          <Button href={site.bookingUrl} variant="light" className="mt-8">
            {closing.cta}
          </Button>
        </Reveal>

        <div className="mt-section-sm grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[32ch] text-sm text-ink-muted">{footer.description}</p>
            <ul className="mt-6 flex gap-2">
              {Object.entries(socialIcons).map(([network, Icon]) => (
                <li key={network}>
                  <a
                    href={site.social[network]}
                    aria-label={fill(footer.socialLabel, { network: footer.social[network] })}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
                  >
                    <Icon className="size-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Column title={footer.visit}>
            <address className="not-italic">{site.location.address}</address>
            <p>
              <Link href={footer.gettingHere.href} className={`font-medium text-ink ${linkClass}`}>
                {footer.gettingHere.label} →
              </Link>
            </p>
          </Column>

          <Column title={footer.contact}>
            <p>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {footer.whatsapp}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
          </Column>

          <Column title={footer.explore}>
            <ul className="space-y-2.5">
              {[...site.nav, ...footer.legal].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
        </div>
      </Container>

      {/* Giant decorative wordmark; the name is already in the logo above. */}
      <div aria-hidden="true" className="mt-section-sm overflow-hidden">
        <p className="mr-[-0.12em] text-center font-display text-[24vw] leading-[0.75] font-medium tracking-[0.12em] text-sea/10 select-none">
          {site.shortName.toUpperCase()}
        </p>
      </div>

      <Container>
        <p className="border-t border-line py-6 text-xs text-ink-muted">
          {fill(footer.copyright, { year: new Date().getFullYear(), name: site.name })}
        </p>
      </Container>
    </footer>
  );
}
