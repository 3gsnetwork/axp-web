import "./DetailHero.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Opportunity } from "@/data/opportunities";

export function DetailHero({ opportunity }: { opportunity: Opportunity }) {
  return (
    <section className="opportunity-detail-hero">
      <img src={opportunity.image} alt="Illustrative lifestyle image; not the named concept property" />
      <div className="page-hero-scrim" />
      <div className="shell opportunity-detail-hero-content">
        <span className="concept-label">Illustrative concept opportunity</span>
        <p>{opportunity.location}</p>
        <h1>{opportunity.headline}</h1>
        <strong>{opportunity.price}</strong>
        <div className="button-row"><Link to="/contact?route=Looking%20for%20a%20Home" className="button button--gold">Discuss this concept <ArrowRight size={16} /></Link><button className="button button--glass" disabled>Download brochure</button></div>
        <small>Prototype state · no personal information is collected, stored or transmitted, and no brochure has been supplied.</small>
      </div>
    </section>
  );
}
