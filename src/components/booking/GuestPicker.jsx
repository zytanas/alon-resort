"use client";

import { useId } from "react";
import clsx from "clsx";
import { site } from "@/config/site";
import { fill } from "@/lib/format";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";

// Uses aria-disabled rather than disabled at the limits so keyboard focus
// stays on the button instead of dropping to the page.
function Stepper({ label, hint, value, min, max, onChange, labels }) {
  const id = useId();
  const name = label.toLowerCase();
  const buttonClass =
    "inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-ink aria-disabled:cursor-not-allowed aria-disabled:opacity-30 aria-disabled:hover:border-line";

  return (
    <div role="group" aria-labelledby={`${id}-label`} className="flex items-center justify-between gap-6 py-4">
      <div>
        <p id={`${id}-label`} className="text-[0.9375rem] font-medium text-ink">
          {label}
        </p>
        {hint && <p className="mt-0.5 text-xs text-ink-muted">{hint}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={buttonClass}
          aria-label={fill(labels.decrease, { label: name })}
          aria-disabled={value <= min || undefined}
          onClick={() => value > min && onChange(value - 1)}
        >
          <MinusIcon className="size-4" />
        </button>
        <output aria-live="polite" className="w-6 text-center tabular-nums text-ink">
          {value}
        </output>
        <button
          type="button"
          className={buttonClass}
          aria-label={fill(labels.increase, { label: name })}
          aria-disabled={value >= max || undefined}
          onClick={() => value < max && onChange(value + 1)}
        >
          <PlusIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}

// Adults and children steppers, limited by site.guests.
export default function GuestPicker({ guests, onChange, labels, className }) {
  return (
    <div className={clsx("divide-y divide-line", className)}>
      <Stepper
        label={labels.adults}
        value={guests.adults}
        min={1}
        max={site.guests.maxAdults}
        onChange={(adults) => onChange({ ...guests, adults })}
        labels={labels}
      />
      <Stepper
        label={labels.children}
        hint={labels.childrenHint}
        value={guests.children}
        min={0}
        max={site.guests.maxChildren}
        onChange={(children) => onChange({ ...guests, children })}
        labels={labels}
      />
    </div>
  );
}
