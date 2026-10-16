"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { site } from "@/config/site";
import { header } from "@/content/header";
import { useModal } from "@/hooks/useModal";
import { duration, ease } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import NavLink from "@/components/layout/NavLink";
import Wordmark from "@/components/layout/Wordmark";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const MENU_ID = "mobile-menu";

const listVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
  closed: { opacity: 0, y: 28 },
  open: { opacity: 1, y: 0, transition: { duration: duration.base, ease } },
};

const subscribe = () => () => {};

// Menu button plus the full-screen sea overlay used below lg.
export default function MobileMenu({ className }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  // Portals need document, which only exists after hydration.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  // Close on any route change (covers links, back/forward and redirects).
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const close = () => setOpen(false);

  useModal({ open, containerRef: panelRef, onClose: close, returnFocusRef: buttonRef });

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-label={header.openMenu}
        onClick={() => setOpen(true)}
        className={clsx(
          "-mr-2 inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-current/10",
          className,
        )}
      >
        <MenuIcon className="size-6" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="menu"
                id={MENU_ID}
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={header.menuLabel}
                tabIndex={-1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3, ease } }}
                transition={{ duration: 0.4, ease }}
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-sea text-on-dark lg:hidden"
              >
                <Container className="flex h-header shrink-0 items-center justify-between">
                  <Wordmark className="focus-visible:outline-on-dark" onClick={close} />
                  <button
                    type="button"
                    aria-label={header.closeMenu}
                    onClick={close}
                    className="-mr-2 inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-on-dark/10 focus-visible:outline-on-dark"
                  >
                    <CloseIcon className="size-6" />
                  </button>
                </Container>

                <Container
                  as="nav"
                  aria-label={header.navLabel}
                  className="flex flex-1 flex-col justify-center py-10"
                >
                  <motion.ul
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    className="space-y-2"
                  >
                    {site.nav.map((item) => (
                      <motion.li key={item.href} variants={itemVariants}>
                        <NavLink
                          href={item.href}
                          onClick={close}
                          className="inline-block py-1 font-display text-h2 decoration-1 underline-offset-[0.18em] hover:italic aria-[current=page]:italic aria-[current=page]:underline focus-visible:outline-on-dark"
                        >
                          {item.label}
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                </Container>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration.base, ease, delay: 0.45 }}
                >
                  <Container className="border-t border-on-dark/15 pt-8 pb-10">
                    <p className="text-eyebrow font-medium uppercase opacity-70">
                      {header.contactHeading}
                    </p>
                    <ul className="mt-4 space-y-2 text-[0.9375rem]">
                      <li>
                        <a href={site.phoneHref} className="underline-offset-4 hover:underline focus-visible:outline-on-dark">
                          {site.phone}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline focus-visible:outline-on-dark">
                          {site.email}
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:underline focus-visible:outline-on-dark"
                        >
                          {header.whatsappShort}
                        </a>
                      </li>
                    </ul>
                    <Button href={site.bookingUrl} variant="light" className="mt-8 w-full sm:w-auto">
                      {header.book}
                    </Button>
                  </Container>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
