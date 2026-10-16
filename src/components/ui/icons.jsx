// Small line icons. They inherit colour from the text (currentColor) and are
// hidden from assistive tech; the control that uses them provides the label.

function Icon({ children, className, strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 3.25a8.75 8.75 0 0 0-7.6 13.08L3.25 20.75l4.53-1.12A8.75 8.75 0 1 0 12 3.25Z" />
      <path d="M9.2 8.1c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.7l-.5.6c-.1.2-.1.4 0 .6.6 1.1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.6-.6c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.8-.6 1-1 .5-2.2.4-3.2-.1a9.3 9.3 0 0 1-4.3-4.3c-.5-1-.6-2.3.1-3.4Z" />
    </Icon>
  );
}

export function MenuIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M3.5 8h17M3.5 16h17" />
    </Icon>
  );
}

export function CloseIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function SearchIcon({ className }) {
  return (
    <Icon className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </Icon>
  );
}

export function MinusIcon({ className }) {
  return (
    <Icon className={className} strokeWidth={1.75}>
      <path d="M6 12h12" />
    </Icon>
  );
}

export function PlusIcon({ className }) {
  return (
    <Icon className={className} strokeWidth={1.75}>
      <path d="M12 6v12M6 12h12" />
    </Icon>
  );
}

export function PinIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </Icon>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Icon>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <Icon className={className} strokeWidth={1.75}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </Icon>
  );
}

// Filled, for ratings.
export function StarIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="m12 2.75 2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17.35l-5.72 3.01 1.09-6.37-4.63-4.51 6.4-.93L12 2.75Z" />
    </svg>
  );
}

// Filled triangle, for play buttons.
export function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M8 5.5v13a.75.75 0 0 0 1.14.64l10.4-6.5a.75.75 0 0 0 0-1.28L9.14 4.86A.75.75 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <Icon className={className} strokeWidth={1.75}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Icon>
  );
}

export function InstagramIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.5" fill="currentColor" />
    </Icon>
  );
}

export function FacebookIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M14.5 8H17V4.5h-2.5A4 4 0 0 0 10.5 8.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V8.5a.5.5 0 0 1 .5-.5Z" />
    </Icon>
  );
}

export function TikTokIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M14 3.5v11.25a3.75 3.75 0 1 1-3.75-3.75" />
      <path d="M14 3.5a5 5 0 0 0 5 5" />
    </Icon>
  );
}
