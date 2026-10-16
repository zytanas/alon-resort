import { experiencesPage } from "@/content/experiences";
import ExperienceGrid from "@/components/sections/ExperienceGrid/ExperienceGrid";
import PageHero from "@/components/sections/PageHero/PageHero";

export const metadata = experiencesPage.meta;

export default function ExperiencesPage() {
  return (
    <>
      <PageHero hero={experiencesPage.hero} />
      <ExperienceGrid />
    </>
  );
}
