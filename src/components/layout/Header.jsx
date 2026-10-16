import Link from "next/link";
import { site } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// Placeholder header. The full version (mobile menu, scroll state) comes later.
export default function Header() {
  return (
    <header className="border-b border-line bg-bg">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link
          href="/"
          className="font-display text-2xl font-medium tracking-[0.35em] text-ink"
          aria-label={`${site.name}, home`}
        >
          {site.shortName.toUpperCase()}
        </Link>

        <nav aria-label="Main" className="order-last w-full md:order-none md:w-auto">
          <ul className="flex gap-6 text-sm text-ink-muted">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button href={site.bookingUrl} size="sm">
          Book your stay
        </Button>
      </Container>
    </header>
  );
}
