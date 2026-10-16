import Hero from "@/components/sections/Hero/Hero";
import Welcome from "@/components/sections/Welcome/Welcome";
import Villas from "@/components/sections/Villas/Villas";
import Offers from "@/components/sections/Offers/Offers";
import Story from "@/components/sections/Story/Story";
import Experiences from "@/components/sections/Experiences/Experiences";
import Dining from "@/components/sections/Dining/Dining";
import Gallery from "@/components/sections/Gallery/Gallery";
import Reviews from "@/components/sections/Reviews/Reviews";
import GettingHere from "@/components/sections/GettingHere/GettingHere";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Villas />
      <Offers />
      <Story />
      <Experiences />
      <Dining />
      <Gallery />
      <Reviews />
      <GettingHere />
    </>
  );
}
