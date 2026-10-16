import { plural } from "@/lib/format";

// "2 nights" (or a hint while only check-in is set) with Clear dates.
export default function DatesFooter({ range, nights, labels, onClear, children }) {
  const empty = !range.from;

  return (
    <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
      <p aria-live="polite" className="text-sm text-ink">
        {nights > 0 && <span className="font-medium">{plural(labels.nights, nights)}</span>}
        {nights === 0 && range.from && <span className="text-ink-muted">{labels.chooseCheckOut}</span>}
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-disabled={empty || undefined}
          onClick={() => !empty && onClear()}
          className="text-sm font-medium text-ink underline underline-offset-4 transition-opacity aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
        >
          {labels.clearDates}
        </button>
        {children}
      </div>
    </div>
  );
}
