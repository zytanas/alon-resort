"use client";

import {
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { differenceInCalendarDays } from "date-fns";
import clsx from "clsx";
import {
  bookingUrl,
  DEFAULT_GUESTS,
  DESKTOP_QUERY,
  EMPTY_RANGE,
  guestSummary,
  pickDay,
} from "@/lib/booking";
import { formatDate } from "@/lib/format";
import { getFocusable } from "@/hooks/useModal";
import Button from "@/components/ui/Button";
import BookingPopover from "@/components/booking/BookingPopover";
import BookingSheet from "@/components/booking/BookingSheet";
import DateRangePicker from "@/components/booking/DateRangePicker";
import DatesFooter from "@/components/booking/DatesFooter";
import GuestPicker from "@/components/booking/GuestPicker";

const subscribe = () => () => {};

const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

// Field and button styles: "overlay" sits over a dark image (hero card),
// "card" sits on a sand card (villa pages).
const fieldTones = {
  overlay: {
    base: "backdrop-blur-md hover:bg-bg focus-visible:outline-on-dark",
    idle: "bg-bg/90",
    active: "bg-bg",
  },
  card: {
    base: "border bg-bg hover:border-ink",
    idle: "border-line",
    active: "border-ink",
  },
};
const buttonVariants = { overlay: "light", card: "primary" };

// A pill with a tiny label above the value.
function Field({ label, value, placeholder, active, tone, className, ...props }) {
  const styles = fieldTones[tone];

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      className={clsx(
        "flex min-w-0 flex-col items-start rounded-full px-5 py-2.5 text-left transition-colors duration-200",
        styles.base,
        active ? styles.active : styles.idle,
        className,
      )}
      {...props}
    >
      <span className="text-[0.6875rem] tracking-wide text-ink-muted">{label}</span>
      <span
        className={clsx(
          "mt-0.5 max-w-full truncate text-[0.9375rem]",
          value ? "font-medium text-ink" : "text-ink-muted",
        )}
      >
        {value ?? placeholder}
      </span>
    </button>
  );
}

// Check-in and check-out side by side, then guests and the submit button,
// stacked. Used in the hero image card and on villa pages (where `villa`
// preselects that villa in the booking URL). From md up the fields
// open popovers; below md they open the bottom sheet.
export default function BookingForm({ labels, submitLabel = labels.submit, tone = "overlay", villa }) {
  const [range, setRange] = useState(EMPTY_RANGE);
  const [field, setField] = useState("checkIn"); // which date the next click sets
  const [guests, setGuests] = useState(DEFAULT_GUESTS);
  const [panel, setPanel] = useState(null); // popover: "dates" | "guests"
  const [sheetOpen, setSheetOpen] = useState(false);
  const [message, setMessage] = useState("");

  const formRef = useRef(null);
  const openerRef = useRef(null); // gets focus back when a popover or the sheet closes
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const guestsPopoverRef = useRef(null);
  const ids = useId();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const nights = range.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;
  const datesOpen = panel === "dates";
  const guestsOpen = panel === "guests";

  function open(next, opener) {
    openerRef.current = opener;
    if (isDesktop()) setPanel(next);
    else setSheetOpen(true);
  }

  function closePanel({ restoreFocus = true } = {}) {
    setPanel(null);
    if (restoreFocus) openerRef.current?.focus({ preventScroll: true });
  }

  function toggleDates(nextField, event) {
    if (datesOpen && field === nextField) {
      closePanel({ restoreFocus: false });
      return;
    }
    setField(nextField);
    open("dates", event.currentTarget);
  }

  function toggleGuests(event) {
    if (guestsOpen) closePanel({ restoreFocus: false });
    else open("guests", event.currentTarget);
  }

  function selectDay(day) {
    setRange(pickDay(range, day, field));
    setField("checkOut");
    setMessage("");
    if (datesOpen) openerRef.current = checkOutRef.current;
  }

  function clearDates() {
    setRange(EMPTY_RANGE);
    setField("checkIn");
    if (datesOpen) openerRef.current = checkInRef.current;
  }

  function submit(event, { inSheet = false } = {}) {
    if (!range.from || !range.to) {
      const nextField = range.from ? "checkOut" : "checkIn";
      setMessage(labels.missingDates);
      setField(nextField);
      if (!inSheet) {
        // Popover: return focus to the missing date. Sheet: to this button.
        const opener = isDesktop()
          ? (nextField === "checkIn" ? checkInRef : checkOutRef).current
          : event.currentTarget;
        open("dates", opener);
      }
      return;
    }

    window.open(bookingUrl(range, guests, villa), "_blank", "noopener,noreferrer");
  }

  // Popovers: close on Escape (returning focus to the field that opened
  // them), on clicks outside the form, and when focus moves out of the form.
  const onOutside = useEffectEvent((event) => {
    if (formRef.current?.contains(event.target)) return;
    // Clicking a blank spot would leave focus nowhere, so send it back.
    const focusable = event.target.closest?.("a, button, input, select, textarea, [tabindex]");
    closePanel({ restoreFocus: false });
    if (!focusable) {
      requestAnimationFrame(() => openerRef.current?.focus({ preventScroll: true }));
    }
  });
  const onKeyDown = useEffectEvent((event) => {
    if (event.key === "Escape") closePanel();
  });
  const onFocusIn = useEffectEvent((event) => {
    if (!formRef.current?.contains(event.target)) closePanel({ restoreFocus: false });
  });

  useEffect(() => {
    if (!panel) return;
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [panel]);

  // Move focus into the guests popover when it opens.
  useEffect(() => {
    if (guestsOpen && guestsPopoverRef.current) {
      getFocusable(guestsPopoverRef.current)[0]?.focus({ preventScroll: true });
    }
  }, [guestsOpen]);

  // Crossing md swaps popovers and the sheet, so close whichever is open.
  useEffect(() => {
    if (!panel && !sheetOpen) return;
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (query.matches) setSheetOpen(false);
      else setPanel(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [panel, sheetOpen]);

  const datesId = `${ids}-dates`;
  const guestsId = `${ids}-guests`;
  const sheetId = `${ids}-sheet`;
  const datesTarget = datesOpen ? datesId : sheetOpen ? sheetId : undefined;
  const guestsTarget = guestsOpen ? guestsId : sheetOpen ? sheetId : undefined;

  return (
    <>
      {/* Announces "Choose your dates first" to screen readers. */}
      <p role="status" className="sr-only">
        {message}
      </p>

      <div ref={formRef} role="group" aria-label={labels.label} className="relative">
        <div className="grid grid-cols-2 gap-2">
          <Field
            ref={checkInRef}
            label={labels.checkIn}
            value={range.from && formatDate(range.from)}
            placeholder={labels.addDates}
            active={datesOpen && field === "checkIn"}
            aria-expanded={Boolean(datesTarget)}
            aria-controls={datesTarget}
            onClick={(event) => toggleDates("checkIn", event)}
            tone={tone}
          />
          <Field
            ref={checkOutRef}
            label={labels.checkOut}
            value={range.to && formatDate(range.to)}
            placeholder={labels.addDates}
            active={datesOpen && field === "checkOut"}
            aria-expanded={Boolean(datesTarget)}
            aria-controls={datesTarget}
            onClick={(event) => toggleDates("checkOut", event)}
            tone={tone}
          />
        </div>

        <Field
          label={labels.guests}
          value={guestSummary(guests, labels)}
          active={guestsOpen}
          aria-expanded={Boolean(guestsTarget)}
          aria-controls={guestsTarget}
          onClick={toggleGuests}
          tone={tone}
          className="mt-2 w-full"
        />

        <Button variant={buttonVariants[tone]} onClick={submit} className="mt-2 w-full">
          {submitLabel}
        </Button>

        <AnimatePresence>
          {datesOpen && (
            <BookingPopover key="dates" id={datesId} label={labels.datesDialog}>
              {message && <p className="mb-4 text-sm font-medium text-accent-deep">{message}</p>}
              <DateRangePicker months={2} range={range} onDayClick={selectDay} autoFocus />
              <DatesFooter range={range} nights={nights} labels={labels} onClear={clearDates}>
                <Button size="sm" onClick={() => closePanel()}>
                  {labels.done}
                </Button>
              </DatesFooter>
            </BookingPopover>
          )}

          {guestsOpen && (
            <BookingPopover
              key="guests"
              id={guestsId}
              label={labels.guestsDialog}
              align="end"
              className="w-80 py-3"
            >
              <div ref={guestsPopoverRef}>
                <GuestPicker guests={guests} onChange={setGuests} labels={labels} />
                <div className="flex justify-end border-t border-line pt-3">
                  <Button size="sm" onClick={() => closePanel()}>
                    {labels.done}
                  </Button>
                </div>
              </div>
            </BookingPopover>
          )}
        </AnimatePresence>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {sheetOpen && (
              <BookingSheet
                key="sheet"
                id={sheetId}
                labels={labels}
                submitLabel={submitLabel}
                range={range}
                nights={nights}
                field={field}
                onFieldChange={setField}
                onDayClick={selectDay}
                onClearDates={clearDates}
                guests={guests}
                onGuestsChange={setGuests}
                message={message}
                onSubmit={(event) => submit(event, { inSheet: true })}
                onClose={() => setSheetOpen(false)}
                returnFocusRef={openerRef}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
