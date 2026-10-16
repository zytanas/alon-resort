"use client";

import { useId, useRef } from "react";
import { motion, useDragControls, useIsPresent } from "motion/react";
import clsx from "clsx";
import { formatDate } from "@/lib/format";
import { ease } from "@/lib/motion";
import { useModal } from "@/hooks/useModal";
import Button from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/icons";
import DateRangePicker from "./DateRangePicker";
import DatesFooter from "./DatesFooter";
import GuestPicker from "./GuestPicker";

// Mobile bottom sheet with dates and guests. Slides up, drags down from the
// handle to close, closes on Escape or backdrop tap, and traps focus while
// open. Render it inside <AnimatePresence> in a portal.
export default function BookingSheet({
  id,
  labels,
  submitLabel,
  range,
  nights,
  field,
  onFieldChange,
  onDayClick,
  onClearDates,
  guests,
  onGuestsChange,
  message,
  onSubmit,
  onClose,
  returnFocusRef,
}) {
  const isPresent = useIsPresent();
  const panelRef = useRef(null);
  const dragControls = useDragControls();
  const titleId = useId();

  // Release focus and scroll as soon as the exit animation starts.
  useModal({ open: isPresent, containerRef: panelRef, onClose, returnFocusRef });

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-sea/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="absolute inset-x-0 bottom-0 flex max-h-[92svh] flex-col rounded-t-card bg-bg shadow-float"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, ease }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 1 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120 || info.velocity.y > 600) onClose();
        }}
      >
        <div
          className="shrink-0 cursor-grab touch-none px-5 pt-3 select-none active:cursor-grabbing"
          onPointerDown={(event) => dragControls.start(event)}
        >
          <div title={labels.dragHint} className="mx-auto h-1.5 w-12 rounded-full bg-line" />
          <div className="mt-2 flex items-center justify-between">
            <h2 id={titleId} className="font-display text-h4">
              {labels.sheetTitle}
            </h2>
            <button
              type="button"
              aria-label={labels.close}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={onClose}
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-2">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {[
              { key: "checkIn", label: labels.checkIn, date: range.from },
              { key: "checkOut", label: labels.checkOut, date: range.to },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={field === item.key}
                onClick={() => onFieldChange(item.key)}
                className={clsx(
                  "rounded-2xl border px-4 py-3 text-left transition-colors",
                  field === item.key ? "border-ink bg-surface" : "border-line",
                )}
              >
                <span className="block text-xs text-ink-muted">{item.label}</span>
                <span
                  className={clsx(
                    "mt-0.5 block text-[0.9375rem]",
                    item.date ? "font-medium text-ink" : "text-ink-muted",
                  )}
                >
                  {item.date ? formatDate(item.date) : labels.addDates}
                </span>
              </button>
            ))}
          </div>

          <DateRangePicker range={range} onDayClick={onDayClick} className="mt-4 [--cal-day:2.75rem]" />
          <DatesFooter range={range} nights={nights} labels={labels} onClear={onClearDates} />

          <GuestPicker guests={guests} onChange={onGuestsChange} labels={labels} className="mt-2" />
        </div>

        <div className="shrink-0 border-t border-line px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {message && (
            <p className="mb-3 text-center text-sm font-medium text-accent-deep">{message}</p>
          )}
          <Button onClick={onSubmit} className="w-full">
            {submitLabel}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
