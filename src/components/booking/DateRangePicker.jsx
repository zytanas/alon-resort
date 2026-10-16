"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { addDays, startOfToday } from "date-fns";
import clsx from "clsx";
import { site } from "@/config/site";

// Range calendar styled by the .calendar rules in globals.css.
//
// Selection is driven by the parent through onDayClick, which receives the
// clicked day, so it can decide whether the click sets check-in or check-out.
// Only mounts after user interaction, so "today" is always the visitor's own.
export default function DateRangePicker({
  range,
  onDayClick,
  months = 1,
  autoFocus = false,
  className,
}) {
  const [today] = useState(startOfToday);
  const lastDay = addDays(today, site.maxNightsAhead);

  return (
    <DayPicker
      mode="range"
      min={1}
      selected={range.from ? range : undefined}
      onSelect={(_, day) => onDayClick(day)}
      numberOfMonths={months}
      defaultMonth={range.from ?? today}
      startMonth={today}
      endMonth={lastDay}
      disabled={[{ before: today }, { after: lastDay }]}
      autoFocus={autoFocus}
      className={clsx("calendar", className)}
    />
  );
}
