// Single source of truth for business details. Components read from here;
// never hardcode contact details or brand names elsewhere.
export const site = {
  name: "Alon Boutique Resort",
  shortName: "Alon",
  tagline: "Slow mornings by the waves.",
  location: {
    area: "General Luna",
    island: "Siargao",
    country: "Philippines",
    address:
      "Tourism Road, General Luna, Siargao Island, Surigao del Norte, Philippines",
  },
  coordinates: { lat: 9.7836, lng: 126.158 },
  phone: "+63 917 555 0142",
  phoneHref: "tel:+639175550142",
  whatsapp: "https://wa.me/639175550142",
  email: "stay@alonsiargao.com",
  bookingUrl: "https://example.com/book", // placeholder
  ratesFrom: 8500, // lowest nightly rate, in PHP
  guests: { maxAdults: 6, maxChildren: 4 },
  maxNightsAhead: 365, // how far ahead guests can book, in days
  currency: {
    primary: "PHP",
    symbol: "₱",
    secondary: "USD",
    usdRate: 0.017, // approximate, for "about $X" hints
  },
  locale: "en-PH",
  checkIn: "2:00 PM",
  checkOut: "12:00 NN",
  nearestAirport: {
    name: "Sayak Airport (IAO)",
    shortName: "Sayak Airport",
    transferTime: "45 minutes",
    transferPrice: 1500, // per private van, in PHP
  },
  restaurant: {
    name: "Kusina Alon",
    hours: [
      { meal: "Breakfast", time: "6:30–10:30 AM" },
      { meal: "Lunch", time: "12–3 PM" },
      { meal: "Dinner", time: "6–10 PM" },
    ],
  },
  social: { instagram: "#", facebook: "#", tiktok: "#" },
  rating: { score: 4.9, count: 286, label: "guest reviews" },
  nav: [
    { label: "Villas", href: "/rooms" },
    { label: "Experiences", href: "/experiences" },
    { label: "Dining", href: "/#dining" },
    { label: "Getting here", href: "/getting-here" },
  ],
};
