import "./Audiences.css";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Building2, Handshake, Landmark } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const audiences = [
  { icon: Building2, question: "Are you a developer looking to reach qualified buyers?", copy: "Talk to AXP about presenting approved opportunities clearly and helping prospective buyers approach them with better preparation." },
  { icon: Landmark, question: "Are you a financial institution expanding mortgage access?", copy: "Explore customer education and readiness conversations that can help aspiring homeowners understand what a formal finance journey may require." },
  { icon: BriefcaseBusiness, question: "Supporting employees or communities?", copy: "Discuss practical homeownership education, financial-wellbeing guidance and responsible routes for the people you serve." },
  { icon: Handshake, question: "Looking to collaborate?", copy: "If your organisation can support accessible homeownership or sustainable urban living, start a straightforward conversation with AXP." },
];

export function Audiences() {
  return (
    <section className="section collaboration-audiences">
      <div className="shell">
        <SectionHeading eyebrow="Who collaboration is for" title="Start with the question closest to your organisation." copy="We keep the public journey simple: identify your goal, understand why a conversation may be useful and contact AXP." />
        <div className="collaboration-grid">{audiences.map(({ icon: Icon, question, copy }) => <article key={question}><Icon /><h3>{question}</h3><p>{copy}</p><Link to="/contact?route=Looking%20to%20Collaborate">Start a conversation <ArrowRight size={15} /></Link></article>)}</div>
      </div>
    </section>
  );
}
