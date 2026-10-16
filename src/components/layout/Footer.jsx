import { site } from "@/config/site";
import Container from "@/components/ui/Container";

// Placeholder footer. The full version comes later.
export default function Footer() {
  return (
    <footer className="bg-sea text-on-dark">
      <Container className="grid gap-8 py-section-sm md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-display text-h3">{site.name}</p>
          <p className="mt-2 font-display text-lead italic opacity-80">{site.tagline}</p>
        </div>
        <address className="space-y-2 text-sm not-italic opacity-90">
          <p>{site.location.address}</p>
          <p>
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline focus-visible:outline-on-dark">
              {site.email}
            </a>
          </p>
          <p>
            <a href={site.phoneHref} className="underline-offset-4 hover:underline focus-visible:outline-on-dark">
              {site.phone}
            </a>
          </p>
        </address>
      </Container>
    </footer>
  );
}
