import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { OpportunitySearch } from "./sections/OpportunitySearch";
import { OpportunityGuidance } from "./sections/OpportunityGuidance";

export function HomeOwnershipOpportunitiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Home ownership opportunities" title="Find a pathway that feels possible." copy="AXP presents curated opportunity concepts to help people explore the kinds of homes, locations and ownership routes that may fit their goals." image="/images/axp_hero_city_2.png">
        <span className="prototype-note">Concept experience · not a live property database</span>
      </PageHero>
      <OpportunitySearch />
      <OpportunityGuidance />
    </SiteLayout>
  );
}
