// Home page copy and data. Placeholders in {braces} are filled by components
// with lib/format's fill() and plural(). Villas, offers and experiences come
// from their own content files.
import { site } from "@/config/site";

export const home = {
  hero: {
    // An image pill sits after line 1; line 3 is set in italics with the
    // full stop in coral.
    headlineLine1: "Slow mornings",
    headlineLine2: "by the",
    headlineLine3: "waves.",
    subhead:
      "Twelve ocean-view villas a short walk from Cloud 9, made for surfing, wandering and doing beautifully little.",
    location: `${site.location.area}, ${site.location.island} Island, ${site.location.country}`,
    locationLink: { label: "Getting here", href: "/getting-here" },
    rate: "Villas from {price} a night · about {usd}",
    card: { title: "Plan your stay", button: "Check availability" },
    // src: null shows a placeholder with the hint. To add a photo, import it
    // (e.g. `import aerial from "@/assets/images/hero/aerial.jpg"`) and use
    // it as src.
    images: {
      card: {
        src: null,
        alt: "Aerial view of thatched villas among coconut palms beside a turquoise lagoon",
        hint: "Aerial view of the resort, vertical 4:5",
      },
      pill: {
        src: null,
        alt: "Surfer paddling out at sunrise",
        hint: "Surf shot, wide crop",
      },
    },
  },

  welcome: {
    title: "Everything you need, nothing you don't.",
    body: "Alon is small on purpose: twelve villas, one pool, a kitchen that cooks what came off the boats this morning and a team who'll remember how you take your coffee. Everything else is the island.",
    film: "Watch the island film",
    image: {
      src: null,
      alt: "Sunrise over a villa terrace with a plunge pool",
      hint: "Sunrise over the villa terrace and plunge pool",
    },
    amenities: [
      "Ocean-view villas",
      "Private plunge pools",
      "Daily breakfast",
      "Surfboard rental",
      "Yoga deck",
      "Beach bar",
      "Restaurant",
      "Airport transfers",
      "Scooter hire",
      "Free Wi-Fi",
      "Laundry",
      "24-hour front desk",
    ],
    more: "+4 more",
  },

  villas: {
    title: "Villas made for slow days.",
    intro:
      "Four kinds of thatched villa, from a quiet garden hideaway to a private plunge pool. All with breakfast, all a short walk from the waves.",
    card: {
      specs: "{guests} · {size} m²",
      price: "{price} / night",
      viewLabel: "View the {name}",
    },
    all: { label: "See all villas", href: "/rooms" },
  },

  story: {
    statement:
      "We built Alon for the hours between surf sessions: long breakfasts, salt in your hair, and nowhere you need to be.",
    stats: [
      { value: "12", label: "Villas" },
      { value: "5 min", label: "Walk to Cloud 9" },
      { value: "45 min", label: "From Sayak Airport" },
    ],
  },

  experiences: {
    title: "Island days, your way.",
    intro: "Surf, swim, ride or float. We'll arrange it all with local guides.",
    all: { label: "All experiences", href: "/experiences" },
  },

  dining: {
    eyebrow: "Our restaurant",
    body: "Kusina Alon is our open-air kitchen under a big thatched roof. Breakfast is long and unhurried; dinner is whatever the fishermen brought in, grilled over coconut husks and served with calamansi, chilli and a cold San Mig.",
    hoursTitle: "Opening hours",
    menuTitle: "From the menu",
    dishes: [
      { name: "Kinilaw of the day, coconut and ginger", price: 420 },
      { name: "Grilled catch with calamansi butter", price: 680 },
      { name: "Ube pancakes with mango and coconut cream", price: 320 },
    ],
    menu: { label: "See the menu", href: "#" }, // TODO: link the menu PDF
    images: {
      main: {
        src: null,
        alt: "Breakfast table on the deck with tropical fruit and coffee",
        hint: "Breakfast table on the deck with tropical fruit",
      },
      detail: {
        src: null,
        alt: "Grilled fish with coconut and calamansi on a banana leaf",
        hint: "Grilled fish with coconut and calamansi",
      },
    },
  },

  gallery: {
    title: "Life at Alon.",
    intro: "Salt, sun and very little schedule.",
    follow: "Follow @alonsiargao",
    // Aspect ratios vary to make the masonry layout.
    images: [
      { src: null, alt: "Sandy path between coconut palms", hint: "Palm-lined sandy path, portrait", aspect: "portrait" },
      { src: null, alt: "Surfer on a barrelling wave at Cloud 9", hint: "Surf break at Cloud 9, landscape", aspect: "landscape" },
      { src: null, alt: "Hammock strung between palms over the sand", hint: "Hammock between palms, square", aspect: "square" },
      { src: null, alt: "Villa interior with linen bed and woven lamp", hint: "Villa interior, portrait", aspect: "tall" },
      { src: null, alt: "Coconut cocktail on the bar at sunset", hint: "Cocktail at sunset, portrait", aspect: "portrait" },
      { src: null, alt: "Clear rock pools at Magpupungko at low tide", hint: "Magpupungko rock pools, landscape", aspect: "landscape" },
      { src: null, alt: "Aerial view of a turquoise lagoon and mangroves", hint: "Aerial lagoon, square", aspect: "square" },
      { src: null, alt: "Yoga mats laid out on the wooden deck at dawn", hint: "Yoga deck at dawn, landscape", aspect: "landscape" },
    ],
  },

  reviews: {
    title: "Guests say it best.",
    summary: "from {count} {label}",
    ratingLabel: "Rated {score} out of 5",
    starsLabel: "5 out of 5 stars",
    stayed: "Stayed in the {villa}",
    disclaimer: "Concept site: reviews are illustrative.",
    items: [
      {
        quote:
          "We came for the surf and stayed for the breakfasts. Waking up in the Ocean View Villa to the sound of the reef, then walking five minutes to Cloud 9, was exactly the trip we'd been dreaming of.",
        name: "Mia T.",
        country: "Australia",
        villa: "Ocean View Villa",
      },
      {
        quote:
          "The plunge pool was perfect after long days island hopping, and the staff arranged everything for us, even a birthday cake at dinner. Quiet, beautiful and so thoughtful.",
        name: "Ji-woo P.",
        country: "South Korea",
        villa: "Pool Villa",
      },
      {
        quote:
          "Travelling with two kids is rarely relaxing, but here it was. The Family Villa had room for everyone, the kids learned to surf, and we finally read our books on the veranda.",
        name: "Lukas B.",
        country: "Germany",
        villa: "Family Villa",
      },
    ],
  },
};
