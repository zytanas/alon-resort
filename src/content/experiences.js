// Island experiences, shown on the home page (first five) and /experiences.
// priceFrom is per person, in PHP.
export const experiences = [
  {
    slug: "surf-lessons",
    title: "Surf lessons at Cloud 9",
    text: "Learn on the gentle inside breaks with local coaches who grew up surfing this reef, then watch the pros on the main peak.",
    duration: "2 hrs",
    priceFrom: 1800,
    image: {
      src: null,
      alt: "Surf coach pushing a student into a small wave",
      hint: "Surf lesson on a small wave, landscape",
    },
  },
  {
    slug: "island-hopping",
    title: "Island hopping",
    text: "Naked, Daku and Guyam islands: a sandbar in the middle of the sea, a fishing village lunch and a palm-ringed islet.",
    duration: "Full day",
    priceFrom: 2500,
    image: {
      src: null,
      alt: "Outrigger boat pulled up on a white sandbar",
      hint: "Outrigger boat on Naked Island sandbar, portrait",
    },
  },
  {
    slug: "sugba-lagoon",
    title: "Sugba Lagoon",
    text: "Paddle a board across emerald water ringed by mangroves, jump from the diving platform and float until lunch.",
    duration: "Full day",
    priceFrom: 2800,
    image: {
      src: null,
      alt: "Paddleboarder on the emerald water of Sugba Lagoon",
      hint: "Paddleboarder on Sugba Lagoon, landscape",
    },
  },
  {
    slug: "magpupungko",
    title: "Magpupungko rock pools",
    text: "At low tide the sea pulls back to reveal clear natural pools in the rocks. We time the trip so you arrive at the right moment.",
    duration: "Half day",
    priceFrom: 1500,
    image: {
      src: null,
      alt: "Swimmers in a clear rock pool at low tide",
      hint: "Magpupungko rock pools at low tide, landscape",
    },
  },
  {
    slug: "sunset-yoga",
    title: "Sunset yoga on the deck",
    text: "An unhurried flow on our open-air deck as the light turns gold, for every level and every kind of stiff surfer.",
    duration: "1 hr",
    priceFrom: 600,
    image: {
      src: null,
      alt: "Yoga class on a wooden deck at sunset",
      hint: "Sunset yoga on the deck, landscape",
    },
  },
  {
    slug: "motorbike-tour",
    title: "Motorbike island tour",
    text: "Ride the coconut road to the Maasin river swing and viewpoints, with a guide who knows every turn and the best halo-halo stop.",
    duration: "Half day",
    priceFrom: 1200,
    image: {
      src: null,
      alt: "Scooter on a road through endless coconut palms",
      hint: "Scooter on the coconut palm road, landscape",
    },
  },
];

// Card labels, shared by the home section and /experiences.
export const experienceLabels = {
  price: "from {price}",
  enquire: "Enquire",
  enquireLabel: "Enquire about {title} on WhatsApp",
  message: "Hi Alon! I'd like to book {title}. Which days are available?",
};

// /experiences
export const experiencesPage = {
  meta: {
    title: "Experiences",
    description:
      "Surf lessons at Cloud 9, island hopping, Sugba Lagoon and more, arranged by the Alon team in Siargao.",
  },
  hero: {
    breadcrumb: "Experiences",
    title: "Island days.",
    intro:
      "Surf, swim, ride or do nothing at all. Our front desk arranges every trip with local guides we've known for years. Just message us the day before.",
    image: {
      src: null,
      alt: "Sandbar in the middle of a turquoise sea with outrigger boats",
      hint: "Naked Island sandbar from above, landscape 4:3",
    },
  },
  title: "Choose your day.",
  intro: "Prices are per person and include transport from the resort.",
};
