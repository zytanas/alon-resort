// Shared animation presets. Keep timing consistent across the site.

export const ease = [0.16, 1, 0.3, 1];

export const duration = {
  fast: 0.6,
  base: 0.9,
  slow: 1.2,
};

export const distance = {
  mobile: 16,
  desktop: 24,
};

export const staggerInterval = 0.08;

// Fraction of an element that must be visible before it animates in.
export const viewportAmount = 0.3;

export function getRevealDistance() {
  if (typeof window === "undefined") return distance.desktop;
  return window.matchMedia("(min-width: 768px)").matches
    ? distance.desktop
    : distance.mobile;
}

// True if any part of the element is currently on screen.
export function isOnScreen(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
