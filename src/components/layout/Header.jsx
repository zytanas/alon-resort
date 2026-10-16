import { site } from "@/config/site";
import { header } from "@/content/header";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import WaveMark from "@/components/ui/WaveMark";
import HeaderShell from "@/components/layout/HeaderShell";
import MobileMenu from "@/components/layout/MobileMenu";
import NavLink from "@/components/layout/NavLink";
import TopBar from "@/components/layout/TopBar";
import Wordmark from "@/components/layout/Wordmark";

// Top bar, then the server-rendered header markup. HeaderShell (client) makes
// the header sticky once the top bar has scrolled away.
export default function Header() {
  return (
    <>
      <TopBar />
      <HeaderShell>
        <Container>
          <div className="flex h-header items-center justify-between gap-6 border-b border-line lg:h-header-lg">
            <Wordmark />

            <div className="hidden items-center gap-10 lg:flex">
              <nav aria-label={header.navLabel}>
                <ul className="flex items-center gap-8">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        className="group/nav relative flex flex-col items-center py-2 text-xs font-medium tracking-[0.16em] text-ink-muted uppercase transition-colors duration-300 hover:text-ink aria-[current=page]:text-sea"
                      >
                        {item.label}
                        <WaveMark className="invisible absolute top-full h-1.5 w-auto text-sea group-aria-[current=page]/nav:visible" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button href={site.bookingUrl} size="sm">
                {header.book}
              </Button>
            </div>

            <MobileMenu className="lg:hidden" />
          </div>
        </Container>
      </HeaderShell>
    </>
  );
}
