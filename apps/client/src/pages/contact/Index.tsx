import "./Index.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Routing } from "./sections/Routing";
import { OfficeInfo } from "./sections/OfficeInfo";

export function ContactPage() {
  return (
    <SiteLayout>
      <section className="contact-hero"><div className="shell"><p className="eyebrow eyebrow--gold">Contact AXP</p><h1>Choose why you’re here.</h1><p>Select the reason closest to your enquiry to see the most relevant next step.</p></div></section>
      <Routing />
      <OfficeInfo />
    </SiteLayout>
  );
}
