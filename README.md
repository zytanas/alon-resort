# Alon Boutique Resort

Website for Alon Boutique Resort, a (fictional) boutique resort in General
Luna, Siargao, Philippines.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack), JavaScript only
- [Tailwind CSS v4](https://tailwindcss.com), with design tokens in `@theme`
- [Motion](https://motion.dev) for animation (`motion/react`)
- `next/font`: Cormorant Garamond (display) and DM Sans (body)
- Embla Carousel, React Day Picker + date-fns, MapLibre GL and clsx (installed
  for upcoming sections)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Folder structure

```
src/
  app/                 Routes (server components by default)
    layout.jsx         Fonts, metadata, Header/Footer, motion Providers
    page.jsx           Home (temporary style guide for now)
    globals.css        Tailwind import, @theme design tokens, base styles
    rooms/             /rooms and /rooms/[slug] (statically generated)
    experiences/       /experiences
    getting-here/      /getting-here
    not-found.jsx      Branded 404
  config/site.js       Brand and business details: the single source of truth
  content/             Page copy and data (.js files)
  components/
    ui/                Button, Container, Heading
    layout/            Header, Footer, ComingSoon
    sections/          One folder per page section
    motion/            Reveal, Stagger, Providers ("use client")
  lib/
    format.js          formatPrice, formatUsd, formatDate
    motion.js          Shared easing, durations and distances
  assets/images/       rooms/, experiences/, gallery/, hero/
```

## Conventions

- **Business details** (name, contact, address, prices) come from
  `src/config/site.js`. Never hardcode them in components.
- **Copy and data** live in `src/content/`.
- **Colours** use the semantic tokens (`bg-sea`, `text-ink-muted`,
  `text-accent-deep`, ...). No raw hex values in components. Coral (`accent`)
  is only for large text, shapes and icons; small coral text uses
  `accent-deep`. Light text sits only on `sea`.
- **Client components** only where needed (state, effects, events, Motion),
  kept as small as possible.
- **Motion**: content is server-rendered visible. `Reveal` and `Stagger` hide
  only below-the-fold content after hydration, then animate it in. All
  animation respects `prefers-reduced-motion`.
