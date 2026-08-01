import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Audiences } from "./sections/Audiences";
import { Reasons } from "./sections/Reasons";
import { ContactBand } from "./sections/ContactBand";

export function WorkWithAXPPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Work with AXP" title="Can your organisation help make homeownership more possible?" copy="AXP welcomes purposeful conversations with organisations that share an interest in accessible homeownership, informed customers and sustainable urban living." image="/images/partnership_studio_2.png">
        <Link to="/contact?route=Looking%20to%20Collaborate" className="button button--gold">Become a partner <ArrowRight size={16} /></Link>
      </PageHero>
      <Audiences />
      <Reasons />
      <ContactBand />
    </SiteLayout>
  );
}
