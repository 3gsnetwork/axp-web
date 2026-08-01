import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Culture } from "./sections/Culture";
import { Roles } from "./sections/Roles";

export function CareersPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Help make homeownership and urban living more possible." copy="AXP values people who bring curiosity, care, clarity and practical thinking to important housing questions." image="/images/partnership_studio_2.png" />
      <Culture />
      <Roles />
    </SiteLayout>
  );
}
