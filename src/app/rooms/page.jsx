import { roomsPage } from "@/content/rooms";
import Offers from "@/components/sections/Offers/Offers";
import PageHero from "@/components/sections/PageHero/PageHero";
import VillaList from "@/components/sections/VillaList/VillaList";

export const metadata = roomsPage.meta;

export default function RoomsPage() {
  return (
    <>
      <PageHero hero={roomsPage.hero} />
      <VillaList />
      <Offers />
    </>
  );
}
