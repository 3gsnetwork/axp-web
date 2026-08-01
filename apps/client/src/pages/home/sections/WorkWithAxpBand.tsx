import "./WorkWithAxpBand.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partnerTypes = ["Developers", "Financial institutions", "Employers", "Public institutions", "Investors", "Specialists"];

export function WorkWithAxpBand() {
  return (
    <section className="section partner-band">
      <div className="shell partner-band-inner"><div><p className="eyebrow eyebrow--gold">Work with AXP</p><h2>Looking to collaborate?</h2><p>If your organisation can help expand access to homeownership or improve urban living, we would like to hear from you.</p></div><div className="partner-types">{partnerTypes.map((name) => <span key={name}>{name}</span>)}</div><Link className="button button--gold" to="/work-with-axp">Explore collaboration <ArrowRight size={16} /></Link></div>
    </section>
  );
}
