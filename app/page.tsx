import { FinalCta } from "@/components/sections/final-cta";
import { HomeCategories } from "@/components/sections/home-categories";
import { HomeFeaturePanels } from "@/components/sections/home-feature-panels";
import { HomeGallery } from "@/components/sections/home-gallery";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeProcess } from "@/components/sections/home-process";
import { HomeStory } from "@/components/sections/home-story";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeProcess />
      <HomeGallery />
      <HomeFeaturePanels />
      <HomeStory />
      <FinalCta />
    </>
  );
}
