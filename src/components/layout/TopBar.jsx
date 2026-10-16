import { site } from "@/config/site";
import { header } from "@/content/header";
import { fill } from "@/lib/format";
import Container from "@/components/ui/Container";
import { StarIcon, WhatsAppIcon } from "@/components/ui/icons";

const { topBar } = header;

// Slim sand strip above the header with reservations contact, check-in times
// and the guest rating. The times need the full width, so they show from lg;
// below md it keeps only the phone, WhatsApp and rating.
export default function TopBar() {
  const { rating } = site;

  return (
    <Container className="pt-3">
      <div className="flex h-10 items-center justify-between gap-4 rounded-full bg-surface px-4 text-[0.8125rem] text-ink sm:px-5 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden text-ink-muted md:inline">{topBar.reservations}</span>
          <a
            href={site.phoneHref}
            className="font-medium whitespace-nowrap tabular-nums underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={header.whatsapp}
            className="-m-1.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sea transition-colors hover:bg-surface-2"
          >
            <WhatsAppIcon className="size-4.5" />
          </a>
        </div>

        <p className="hidden text-ink-muted lg:block">
          {fill(topBar.times, { checkIn: site.checkIn, checkOut: site.checkOut })}
        </p>

        <p className="flex items-center justify-end gap-2 whitespace-nowrap">
          <span aria-hidden="true" className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} className={index > 0 ? "hidden size-3 sm:block" : "size-3"} />
            ))}
          </span>
          <span className="sm:hidden">{fill(topBar.ratingShort, rating)}</span>
          <span className="hidden sm:inline">{fill(topBar.rating, rating)}</span>
        </p>
      </div>
    </Container>
  );
}
