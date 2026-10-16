import { isAfter } from "date-fns";
import { site } from "@/config/site";
import { formatIsoDate, plural } from "@/lib/format";

export const EMPTY_RANGE = { from: undefined, to: undefined };
export const DEFAULT_GUESTS = { adults: 2, children: 0 };

// Popovers from md up, the bottom sheet below.
export const DESKTOP_QUERY = "(min-width: 768px)";

// Applies a calendar click to the range. Clicking while check-in is active
// (or on/before the current check-in) starts the stay there, keeping a later
// check-out; otherwise the click sets check-out. Check-out is always next.
export function pickDay(range, day, field) {
  if (field === "checkIn" || !range.from || !isAfter(day, range.from)) {
    const keepTo = field === "checkIn" && range.to && isAfter(range.to, day);
    return { from: day, to: keepTo ? range.to : undefined };
  }
  return { from: range.from, to: day };
}

// "2 adults" or "2 adults · 1 child"
export function guestSummary(guests, labels) {
  const adults = plural(labels.adultCount, guests.adults);
  if (guests.children === 0) return adults;
  return `${adults} · ${plural(labels.childCount, guests.children)}`;
}

// The booking engine URL for a complete stay. Pass a villa slug to preselect
// that villa.
export function bookingUrl(range, guests, villa) {
  const url = new URL(site.bookingUrl);
  url.searchParams.set("checkin", formatIsoDate(range.from));
  url.searchParams.set("checkout", formatIsoDate(range.to));
  url.searchParams.set("adults", String(guests.adults));
  url.searchParams.set("children", String(guests.children));
  if (villa) url.searchParams.set("villa", villa);
  return url.toString();
}
