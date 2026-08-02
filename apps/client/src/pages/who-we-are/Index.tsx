import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Story } from "./sections/Story";
import { PurposeGrid } from "./sections/PurposeGrid";
import { ArchitectureStack } from "./sections/ArchitectureStack";
import { Governance } from "./sections/Governance";

export function WhoWeArePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Who we are" title="Helping make homeownership feel more possible." copy="AXP helps individuals and organisations unlock homeownership and urban-living opportunities through trusted guidance, practical preparation and clearer next steps." image="https://res.cloudinary.com/gxhmv4fu/image/upload/w_2400,c_limit,f_auto,q_auto/v1785641067/who-we-are-hero-image_pyiov4.jpg" breathe>
        <Link to="/home-ownership-opportunities" className="button button--gold">Explore opportunities <ArrowRight size={16} /></Link>
      </PageHero>
      <Story />
      <PurposeGrid />
      <ArchitectureStack />
      <Governance />
    </SiteLayout>
  );
}
