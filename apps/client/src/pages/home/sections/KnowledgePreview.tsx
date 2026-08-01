import "./KnowledgePreview.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { knowledgeItems } from "@/data/knowledge";

export function KnowledgePreview() {
  return (
    <section className="section knowledge-preview">
      <div className="shell">
        <div className="split-heading"><SectionHeading eyebrow="Knowledge Centre" title="Clear guidance for important housing decisions." copy="Practical tools, market perspectives and homeownership education for people and organisations considering Africa’s urban future." /><ArrowLink to="/knowledge">Visit the Knowledge Centre</ArrowLink></div>
        <div className="knowledge-home-grid">
          <article className="knowledge-feature-card"><div className="knowledge-visual"><img src="https://res.cloudinary.com/gxhmv4fu/image/upload/w_1500,c_limit,f_auto,q_auto/v1785537802/housing-decisions_s0ejfn.jpg" alt="An African urban community with housing, public spaces and mobility links" /></div><div className="knowledge-card-body"><span>Homeownership guidance</span><h3>A practical case for clearer homeownership journeys</h3><p>How useful information, financial preparation and realistic expectations can help aspiring homeowners move forward with confidence.</p><ArrowLink to="/knowledge">Read the perspective</ArrowLink></div></article>
          <div className="knowledge-list">{knowledgeItems.slice(1, 4).map((item, index) => <Link to="/knowledge" key={item.title}><span>0{index + 2}</span><div><small>{item.type}</small><h3>{item.title}</h3><p>{item.read}</p></div><ArrowRight /></Link>)}</div>
        </div>
      </div>
    </section>
  );
}
