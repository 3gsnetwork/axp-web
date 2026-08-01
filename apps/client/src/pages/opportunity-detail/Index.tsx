import { useParams } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { opportunityData } from "@/data/opportunities";
import { DetailHero } from "./sections/DetailHero";
import { DetailOverview } from "./sections/DetailOverview";
import { LocalityGrid } from "./sections/LocalityGrid";
import { InterestForm } from "./sections/InterestForm";

export function OpportunityDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const opportunity = opportunityData.find((item) => item.slug === slug) ?? opportunityData[0];
  return (
    <SiteLayout>
      <DetailHero opportunity={opportunity} />
      <DetailOverview opportunity={opportunity} />
      <LocalityGrid />
      <InterestForm />
    </SiteLayout>
  );
}
