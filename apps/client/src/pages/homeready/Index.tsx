import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductHero } from "./sections/ProductHero";
import { ProductStory } from "./sections/ProductStory";
import { JourneySection } from "./sections/JourneySection";
import { ModuleGrid } from "./sections/ModuleGrid";
import { Benefits } from "./sections/Benefits";
import { FaqSection } from "./sections/FaqSection";

export function HomeReadyPage() {
  return (
    <SiteLayout>
      <ProductHero />
      <ProductStory />
      <JourneySection />
      <ModuleGrid />
      <Benefits />
      <FaqSection />
    </SiteLayout>
  );
}
