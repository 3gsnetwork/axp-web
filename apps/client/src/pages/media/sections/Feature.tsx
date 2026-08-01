import "./Feature.css";
import { Play } from "lucide-react";

const categories = ["News", "Press releases", "Documentaries", "Events", "Gallery", "Videos", "Podcasts", "Awards"];

export function Feature() {
  return (
    <section className="section media-section">
      <div className="shell">
        <div className="media-feature">
          <div className="media-image"><img src="/images/partnership_studio_2.png" alt="Professionals reviewing an African city model" /><button aria-label="Documentary concept not yet available" disabled><Play /></button></div>
          <div><span>Featured documentary concept</span><h2>Housing is infrastructure.</h2><p>A proposed film series exploring how homes connect to jobs, finance, transport, community and long-term urban prosperity.</p><span className="concept-label">Concept preview · media not yet produced</span></div>
        </div>
        <p className="opportunity-disclaimer">Category links are placeholders. No news, film, event, podcast or award content has been supplied for publication.</p>
        <div className="media-category-grid">{categories.map((item, i) => <div className="media-category-placeholder" key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3><small>Content coming after approval</small></div>)}</div>
      </div>
    </section>
  );
}
