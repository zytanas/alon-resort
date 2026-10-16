import { format } from "date-fns";
import { site } from "@/config/site";

const numberFormatter = new Intl.NumberFormat(site.locale, {
  maximumFractionDigits: 0,
});

// formatPrice(8500) → "₱8,500"
export function formatPrice(amount) {
  return `${site.currency.symbol}${numberFormatter.format(amount)}`;
}

// formatUsdAmount(8500) → "$145" (converted from PHP, rounded to the nearest $5)
export function formatUsdAmount(amount) {
  const usd = Math.max(5, Math.round((amount * site.currency.usdRate) / 5) * 5);
  return `$${usd.toLocaleString("en-US")}`;
}

// formatUsd(8500) → "about $145"
export function formatUsd(amount) {
  return `about ${formatUsdAmount(amount)}`;
}

// formatDate(new Date(2026, 9, 16)) → "Fri, 16 Oct"
export function formatDate(date) {
  return format(date, "EEE, d MMM");
}

// formatShortDate(new Date(2026, 9, 16)) → "16 Oct"
export function formatShortDate(date) {
  return format(date, "d MMM");
}

// formatIsoDate(new Date(2026, 9, 16)) → "2026-10-16" (local date, no time zone shift)
export function formatIsoDate(date) {
  return format(date, "yyyy-MM-dd");
}

// fill("Villas from {price}", { price: "₱8,500" }) → "Villas from ₱8,500"
export function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

const pluralRules = new Intl.PluralRules("en");

// plural({ one: "{n} night", other: "{n} nights" }, 3) → "3 nights"
export function plural(forms, count) {
  return fill(forms[pluralRules.select(count)] ?? forms.other, { n: count });
}
