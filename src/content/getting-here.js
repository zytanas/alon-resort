// Getting here section (home and /getting-here) and the /getting-here page.
// {time}, {price}, {airport} and {checkIn} are filled from config/site.js.
export const gettingHere = {
  title: "Easy to find, hard to leave.",
  intro:
    "Siargao is a short hop from Manila or Cebu. From the airport, we'll take it from there.",
  map: {
    alt: "Map of Siargao showing the road from Sayak Airport to General Luna",
    hint: "Map: Sayak Airport to General Luna",
  },
  steps: [
    {
      title: "Fly to Siargao",
      text: "Direct flights land at {airport} from Manila, Cebu and Clark, several times a day.",
    },
    {
      title: "Take our transfer",
      text: "{time} by private van. We'll meet you at arrivals with a cold towel and a coconut; {price} per van.",
    },
    {
      title: "Check in and slow down",
      text: "Check-in is from {checkIn}. Arriving early? Our lounge has showers, coffee and a hammock with your name on it.",
    },
  ],
  cta: { label: "Plan your trip", href: "/getting-here" },
};

export const gettingHerePage = {
  meta: {
    title: "Getting here",
    description:
      "How to reach Alon Boutique Resort in General Luna, Siargao: flights to Sayak Airport, our private transfer and tips for your trip.",
  },
  hero: {
    breadcrumb: "Getting here",
    title: "Getting here.",
    intro:
      "Siargao feels far away, and that's half the point. Getting here is simpler than you'd think.",
    image: {
      src: null,
      alt: "Small plane on the runway at Sayak Airport surrounded by palms",
      hint: "Plane landing at Sayak Airport among palms, landscape 4:3",
    },
  },
  goodToKnow: {
    title: "Good to know.",
    intro: "A few things we tell every guest before they arrive.",
    items: [
      {
        title: "Best time to visit",
        text: "March to October is dry and sunny. Surf season peaks from August to November, when Cloud 9 is at its best. The rains come between December and February, and so do the quiet, cheaper weeks.",
      },
      {
        title: "Getting around",
        text: "Most guests rent a scooter (we can arrange one for you) or hop on a habal-habal motorbike taxi. Tricycles are easy to flag down in General Luna, and Cloud 9 is a five-minute walk away.",
      },
      {
        title: "Money and cards",
        text: "Cards are accepted at Alon and most restaurants in town, but many small shops and boatmen are cash only. There are a few ATMs in General Luna; bring some pesos from Manila or Cebu in case they run dry.",
      },
      {
        title: "What to pack",
        text: "Reef-safe sunscreen, a rash guard, sandals you can get wet and a light layer for scooter rides at night. Leave the heels at home; the roads and beaches are sand.",
      },
    ],
  },
};
