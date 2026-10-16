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
    layout.jsx         Fonts, metadata, TopBar/Header/Footer, motion Providers
    page.jsx           Home: the hero, then every home section in order
    globals.css        Tailwind import, @theme design tokens, base styles
    rooms/             /rooms and /rooms/[slug] (statically generated)
    experiences/       /experiences
    getting-here/      /getting-here
    style-guide/       Token and component reference
    not-found.jsx      Branded 404
  config/site.js       Brand and business details: the single source of truth
  content/             Page copy and data: home, rooms, offers, experiences,
                       getting-here, booking, header, footer
  components/
    ui/                Button, Container, Heading, Section, SectionHeading,
                       WaveMark, Pill, ArrowButton, Stars, Breadcrumb,
                       SmartImage, ImagePlaceholder, icons
    layout/            TopBar, Header, MobileMenu, Footer, Wordmark
    booking/           BookingForm, its date/guest popovers and mobile sheet
    sections/          One folder per section (Hero, Welcome, Villas, ...)
    motion/            Reveal, Stagger, Providers ("use client")
  hooks/useModal.js    Focus trap, Escape and scroll lock for overlays
  lib/
    format.js          formatPrice, formatUsd, formatDate, fill, plural
    booking.js         Date-range logic and the booking engine URL
    links.js           WhatsApp links with a prefilled message
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

## Images

Every photo slot currently has `src: null`, so it shows a sand placeholder
with its hint. To add a photo, save it under `src/assets/images/`, import it
in the content file listed below and use the import as that image's `src`
(static imports get a blur preview automatically). Each image also has an
`alt` in the same place; update it if the photo differs from the hint.

The shape is how the slot displays; crop a little wider than that, because
cards crop with `object-cover` and some slots change ratio by breakpoint.
Villa card images also appear on `/rooms` at about 5:4, so keep the subject
centred.

| # | Where it shows | Hint | Shape | Content file |
| -: | --- | --- | --- | --- |
| 1 | Home hero, image card | Aerial view of the resort, vertical 4:5 | 4:5 (3:4 on tablet) | `home.js` → `hero.images.card` |
| 2 | Home hero, pill inside the headline | Surf shot, wide crop | very wide, about 8:3 | `home.js` → `hero.images.pill` |
| 3 | Home, Welcome | Sunrise over the villa terrace and plunge pool | 16:10 | `home.js` → `welcome.image` |
| 4 | Villa card, Garden Villa (home, /rooms, other villas) | Garden Villa exterior in lush garden, portrait 4:5 | 4:5 | `rooms.js` → `garden-villa.image` |
| 5 | Villa card, Ocean View Villa | Ocean View Villa with deck and sea, portrait 4:5 | 4:5 | `rooms.js` → `ocean-view-villa.image` |
| 6 | Villa card, Pool Villa | Pool Villa plunge pool and villa, portrait 4:5 | 4:5 | `rooms.js` → `pool-villa.image` |
| 7 | Villa card, Family Villa | Family Villa exterior with veranda, portrait 4:5 | 4:5 | `rooms.js` → `family-villa.image` |
| 8 | /rooms/garden-villa gallery, large | Garden Villa bedroom, wide | about 4:3 | `rooms.js` → `garden-villa.gallery[0]` |
| 9 | /rooms/garden-villa gallery | Garden Villa porch with loungers | 4:3 | `rooms.js` → `garden-villa.gallery[1]` |
| 10 | /rooms/garden-villa gallery | Garden Villa rain shower | 4:3 | `rooms.js` → `garden-villa.gallery[2]` |
| 11 | /rooms/ocean-view-villa gallery, large | Ocean View Villa bedroom facing the sea, wide | about 4:3 | `rooms.js` → `ocean-view-villa.gallery[0]` |
| 12 | /rooms/ocean-view-villa gallery | Coffee on the deck at sunrise | 4:3 | `rooms.js` → `ocean-view-villa.gallery[1]` |
| 13 | /rooms/ocean-view-villa gallery | Ocean View Villa bathroom | 4:3 | `rooms.js` → `ocean-view-villa.gallery[2]` |
| 14 | /rooms/pool-villa gallery, large | Pool Villa plunge pool from above, wide | about 4:3 | `rooms.js` → `pool-villa.gallery[0]` |
| 15 | /rooms/pool-villa gallery | Pool Villa daybed | 4:3 | `rooms.js` → `pool-villa.gallery[1]` |
| 16 | /rooms/pool-villa gallery | Pool Villa outdoor shower | 4:3 | `rooms.js` → `pool-villa.gallery[2]` |
| 17 | /rooms/family-villa gallery, large | Family Villa lounge, wide | about 4:3 | `rooms.js` → `family-villa.gallery[0]` |
| 18 | /rooms/family-villa gallery | Family Villa twin bedroom | 4:3 | `rooms.js` → `family-villa.gallery[1]` |
| 19 | /rooms/family-villa gallery | Family Villa veranda | 4:3 | `rooms.js` → `family-villa.gallery[2]` |
| 20 | Offer: Surf Week (home, /rooms) | Surfboards against a palm, square | square (16:10 on mobile) | `offers.js` → `surf-week.image` |
| 21 | Offer: Honeymoon | Floating breakfast in the plunge pool, square | square (16:10 on mobile) | `offers.js` → `honeymoon.image` |
| 22 | Offer: Family Escape | Family on the beach at low tide, square | square (16:10 on mobile) | `offers.js` → `family-escape.image` |
| 23 | Offer: Slow Season | Hammock between palms, square | square (16:10 on mobile) | `offers.js` → `slow-season.image` |
| 24 | Experience: Surf lessons (large card on home) | Surf lesson on a small wave, landscape | 4:3, large card about 1:1 | `experiences.js` → `surf-lessons.image` |
| 25 | Experience: Island hopping | Outrigger boat on Naked Island sandbar, portrait | 4:3 to 1:1 | `experiences.js` → `island-hopping.image` |
| 26 | Experience: Sugba Lagoon | Paddleboarder on Sugba Lagoon, landscape | 4:3 to 1:1 | `experiences.js` → `sugba-lagoon.image` |
| 27 | Experience: Magpupungko | Magpupungko rock pools at low tide, landscape | 4:3 to 1:1 | `experiences.js` → `magpupungko.image` |
| 28 | Experience: Sunset yoga | Sunset yoga on the deck, landscape | 4:3 to 1:1 | `experiences.js` → `sunset-yoga.image` |
| 29 | Experience: Motorbike tour (/experiences only) | Scooter on the coconut palm road, landscape | 4:3 | `experiences.js` → `motorbike-tour.image` |
| 30 | Home, Dining, tall image | Breakfast table on the deck with tropical fruit | 4:5 | `home.js` → `dining.images.main` |
| 31 | Home, Dining, overlapping square | Grilled fish with coconut and calamansi | square | `home.js` → `dining.images.detail` |
| 32 | Home, Gallery | Palm-lined sandy path, portrait | 4:5 | `home.js` → `gallery.images[0]` |
| 33 | Home, Gallery | Surf break at Cloud 9, landscape | 4:3 | `home.js` → `gallery.images[1]` |
| 34 | Home, Gallery | Hammock between palms, square | square | `home.js` → `gallery.images[2]` |
| 35 | Home, Gallery | Villa interior, portrait | 2:3 | `home.js` → `gallery.images[3]` |
| 36 | Home, Gallery | Cocktail at sunset, portrait | 4:5 | `home.js` → `gallery.images[4]` |
| 37 | Home, Gallery | Magpupungko rock pools, landscape | 4:3 | `home.js` → `gallery.images[5]` |
| 38 | Home, Gallery | Aerial lagoon, square | square | `home.js` → `gallery.images[6]` |
| 39 | Home, Gallery | Yoga deck at dawn, landscape | 4:3 | `home.js` → `gallery.images[7]` |
| 40 | Getting here map (home, /getting-here) | Map: Sayak Airport to General Luna | 4:3 (square on desktop) | `getting-here.js` → `gettingHere.map` (becomes a MapLibre map, not a photo) |
| 41 | /rooms page hero | Villas along the garden path at golden hour, landscape 4:3 | 4:3 | `rooms.js` → `roomsPage.hero.image` |
| 42 | /experiences page hero | Naked Island sandbar from above, landscape 4:3 | 4:3 | `experiences.js` → `experiencesPage.hero.image` |
| 43 | /getting-here page hero | Plane landing at Sayak Airport among palms, landscape 4:3 | 4:3 | `getting-here.js` → `gettingHerePage.hero.image` |
| 44 | Footer closing card (every page) | Palm silhouettes over the sea at dusk, wide | 21:9 (taller on mobile) | `footer.js` → `closing.image` |
