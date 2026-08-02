import "./Governance.css";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const commitments = [
  "Clear and responsible communication",
  "Visible concept and illustrative labels",
  "No unverified availability claims",
  "Respect for future customer information",
  "Straightforward next steps",
];

export function Governance() {
  return (
    <section className="section governance-section section--navy">
      <div className="shell governance-grid">
        <SectionHeading light eyebrow="Our public commitments" title="Trust begins with clarity." copy="AXP aims to make every public interaction responsible, understandable and honest about what is available today." />
        <div className="governance-list">
          {commitments.map((item) => <div key={item}><ShieldCheck /><span>{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}
