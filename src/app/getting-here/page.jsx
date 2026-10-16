import { gettingHerePage } from "@/content/getting-here";
import GettingHere from "@/components/sections/GettingHere/GettingHere";
import GoodToKnow from "@/components/sections/GoodToKnow/GoodToKnow";
import PageHero from "@/components/sections/PageHero/PageHero";

export const metadata = gettingHerePage.meta;

export default function GettingHerePage() {
  return (
    <>
      <PageHero hero={gettingHerePage.hero} />
      <GettingHere showCta={false} />
      <GoodToKnow />
    </>
  );
}
