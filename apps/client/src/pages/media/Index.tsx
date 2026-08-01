import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Feature } from "./sections/Feature";
import { Downloads } from "./sections/Downloads";

export function MediaPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Media Centre" title="The conversations shaping Africa’s housing future." copy="Future news, perspectives, films, events and approved media resources from AXP Africa." />
      <Feature />
      <Downloads />
    </SiteLayout>
  );
}
