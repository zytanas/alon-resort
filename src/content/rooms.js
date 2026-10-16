// Villa data and villa page copy. app/rooms/[slug] builds one static page per
// villa from `rooms`. Prices are nightly rates in PHP; images with src: null
// show a placeholder with their hint until the photos are added.
export const rooms = [
  {
    slug: "garden-villa",
    name: "Garden Villa",
    shortDescription:
      "A quiet thatched villa wrapped in tropical garden, a few steps from the pool.",
    description:
      "Tucked behind banana palms and frangipani, the Garden Villa is the quietest corner of Alon. Inside it's all woven bamboo, cool tiled floors and linen; outside, a shaded porch with two loungers looks onto the garden, and the pool is a barefoot minute away.",
    priceFrom: 8500,
    guests: "Up to 2 guests",
    size: 38,
    bed: "Queen bed",
    highlights: ["Garden porch", "Rain shower", "Steps from the pool", "Hammock"],
    image: {
      src: null,
      alt: "Thatched Garden Villa among banana palms and frangipani",
      hint: "Garden Villa exterior in lush garden, portrait 4:5",
    },
    gallery: [
      {
        src: null,
        alt: "Garden Villa bedroom with a queen bed in white linen under a bamboo ceiling",
        hint: "Garden Villa bedroom, wide",
      },
      {
        src: null,
        alt: "Shaded porch with two loungers facing the garden",
        hint: "Garden Villa porch with loungers",
      },
      {
        src: null,
        alt: "Open-air rain shower framed by tropical plants",
        hint: "Garden Villa rain shower",
      },
    ],
  },
  {
    slug: "ocean-view-villa",
    name: "Ocean View Villa",
    shortDescription:
      "Wake up to the sea from your bed, with a private deck for slow coffee.",
    description:
      "Raised on stilts at the front of the property, the Ocean View Villa opens straight onto the water. Fold back the shutters and the whole room fills with sea light. The private deck catches the sunrise, and you can hear the reef breaking at Cloud 9 on a big swell.",
    priceFrom: 11500,
    guests: "Up to 2 guests",
    size: 45,
    bed: "King bed",
    highlights: ["Sea view from bed", "Private deck", "Sunrise side", "Outdoor daybed"],
    image: {
      src: null,
      alt: "Ocean View Villa on stilts with its deck facing the sea",
      hint: "Ocean View Villa with deck and sea, portrait 4:5",
    },
    gallery: [
      {
        src: null,
        alt: "King bed facing open shutters and the sea",
        hint: "Ocean View Villa bedroom facing the sea, wide",
      },
      {
        src: null,
        alt: "Two coffee cups on a wooden deck rail at sunrise",
        hint: "Coffee on the deck at sunrise",
      },
      {
        src: null,
        alt: "Stone bathroom with a round mirror and woven baskets",
        hint: "Ocean View Villa bathroom",
      },
    ],
  },
  {
    slug: "pool-villa",
    name: "Pool Villa",
    shortDescription: "Your own plunge pool, an outdoor shower and the ocean beyond.",
    description:
      "The Pool Villa is built around a private plunge pool behind a high bamboo screen, so the only view in is from the sky. There's an outdoor shower under the palms, a daybed for long afternoon naps and, past the garden wall, the ocean.",
    priceFrom: 15800,
    guests: "Up to 3 guests",
    size: 60,
    bed: "King bed and daybed",
    highlights: ["Private plunge pool", "Outdoor shower", "Daybed", "Ocean glimpses"],
    image: {
      src: null,
      alt: "Private plunge pool beside a thatched villa with the ocean beyond",
      hint: "Pool Villa plunge pool and villa, portrait 4:5",
    },
    gallery: [
      {
        src: null,
        alt: "Plunge pool surrounded by palms and a bamboo screen",
        hint: "Pool Villa plunge pool from above, wide",
      },
      {
        src: null,
        alt: "Daybed with cushions in an open-sided pavilion",
        hint: "Pool Villa daybed",
      },
      {
        src: null,
        alt: "Outdoor shower under palm fronds",
        hint: "Pool Villa outdoor shower",
      },
    ],
  },
  {
    slug: "family-villa",
    name: "Family Villa",
    shortDescription:
      "Two bedrooms, a shared lounge and space for everyone to spread out.",
    description:
      "Our largest villa has two bedrooms either side of a breezy shared lounge, so parents and kids each get their own space. There's a big veranda for board games and sandy feet, a fridge for snacks, and the pool and garden right outside.",
    priceFrom: 18500,
    guests: "Up to 6 guests",
    size: 85,
    bed: "King bed and two twins",
    highlights: ["Two bedrooms", "Shared lounge", "Big veranda", "Next to the pool"],
    image: {
      src: null,
      alt: "Two-storey thatched Family Villa with a wide veranda",
      hint: "Family Villa exterior with veranda, portrait 4:5",
    },
    gallery: [
      {
        src: null,
        alt: "Shared lounge with rattan sofas and open doors to the garden",
        hint: "Family Villa lounge, wide",
      },
      {
        src: null,
        alt: "Kids' room with two twin beds and a surfboard on the wall",
        hint: "Family Villa twin bedroom",
      },
      {
        src: null,
        alt: "Veranda with a long wooden table and garden view",
        hint: "Family Villa veranda",
      },
    ],
  },
];

// Every villa has these.
export const villaAmenities = [
  "Air conditioning and ceiling fan",
  "Daily breakfast for two",
  "Rain shower and local bath products",
  "Mini fridge and kettle",
  "Locally roasted coffee and tea",
  "In-room safe",
  "Beach towels and bag",
  "Free Wi-Fi",
  "Daily housekeeping",
];

// /rooms
export const roomsPage = {
  meta: {
    title: "Villas",
    description:
      "Four kinds of thatched villa in General Luna, Siargao, from quiet garden hideaways to a private plunge pool.",
  },
  hero: {
    breadcrumb: "Villas",
    title: "Our villas.",
    intro:
      "Twelve thatched villas in four styles, all a short walk from Cloud 9. Every stay includes breakfast, beach towels and a slow start to the day.",
    image: {
      src: null,
      alt: "Row of thatched villas along a garden path at golden hour",
      hint: "Villas along the garden path at golden hour, landscape 4:3",
    },
  },
  guestsLabel: "Guests",
  sizeLabel: "Size",
  bedLabel: "Bed",
  sizeValue: "{size} m²",
  price: "{price} / night",
  view: "View villa",
};

// /rooms/[slug]
export const villaPage = {
  breadcrumbParent: "Villas",
  galleryLabel: "Photos of the {name}",
  highlights: "Highlights",
  amenities: "In every villa",
  rules: "House rules",
  rulesList: [
    "Check-in from {checkIn}",
    "Check-out by {checkOut}",
    "Quiet hours from 10 PM to 7 AM",
    "No smoking inside the villas",
    "Children of all ages are welcome",
  ],
  bookingTitle: "Plan your stay",
  price: "{price}",
  perNight: "/ night",
  priceNote: "Breakfast included · about {usd} a night",
  otherVillas: "Other villas",
  otherVillasIntro: "Every villa comes with breakfast, garden views and the same slow mornings.",
};
