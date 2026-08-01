import "./OpportunityGuidance.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function OpportunityGuidance() {
  return (
    <section className="section section--navy opportunity-guidance">
      <div className="shell feature-split">
        <div><p className="eyebrow eyebrow--gold">The AXP difference</p><h2>AXP is not selling houses. AXP is helping people own homes.</h2></div>
        <div className="feature-copy feature-copy--light"><p>Every concept is framed around a more confident ownership journey: understand your readiness, explore suitable pathways, and connect to appropriate support when live opportunities are approved.</p><Link to="/homeready" className="button button--gold">Start with HomeReady™ <ArrowRight size={16} /></Link></div>
      </div>
    </section>
  );
}
