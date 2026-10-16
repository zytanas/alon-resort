import { format } from "date-fns";
import { site } from "@/config/site";

const numberFormatter = new Intl.NumberFormat(site.locale, {
  maximumFractionDigits: 0,
});

// formatPrice(8500) → "₱8,500"
export function formatPrice(amount) {
  return `${site.currency.symbol}${numberFormatter.format(amount)}`;
}

// formatUsd(8500) → "about $145" (rounded to the nearest $5)
export function formatUsd(amount) {
  const usd = Math.max(5, Math.round((amount * site.currency.usdRate) / 5) * 5);
  return `about $${usd.toLocaleString("en-US")}`;
}

// formatDate(new Date(2026, 9, 16)) → "Fri, 16 Oct"
export function formatDate(date) {
  return format(date, "EEE, d MMM");
}
