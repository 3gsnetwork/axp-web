import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Commitments } from "./sections/Commitments";
import { Evidence } from "./sections/Evidence";

export function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Impact" title="Progress should be meaningful to people and communities." copy="AXP’s public impact commitments focus on confidence, preparation, opportunity access and long-term urban wellbeing." image="/images/community_system_2.png" />
      <Commitments />
      <Evidence />
    </SiteLayout>
  );
}
