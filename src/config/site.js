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
  currency: {
    primary: "PHP",
    symbol: "₱",
    secondary: "USD",
    usdRate: 0.017, // approximate, for "about $X" hints
  },
  locale: "en-PH",
  checkIn: "2:00 PM",
  checkOut: "12:00 NN",
  nearestAirport: { name: "Sayak Airport (IAO)", transferTime: "45 minutes" },
  social: { instagram: "#", facebook: "#", tiktok: "#" },
  nav: [
    { label: "Rooms", href: "/rooms" },
    { label: "Experiences", href: "/experiences" },
    { label: "Getting here", href: "/getting-here" },
  ],
};
