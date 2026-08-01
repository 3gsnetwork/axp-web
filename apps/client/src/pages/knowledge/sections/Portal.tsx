import "./Portal.css";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { knowledgeItems } from "@/data/knowledge";

const types = ["All", "Housing guides", "Mortgage education", "Market intelligence", "Urban Living Reports", "Policy insights", "ReadyIQ™", "Research publications", "Videos", "Downloads"];

export function Portal() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = knowledgeItems.filter((item) => (filter === "All" || item.type === filter) && item.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="section knowledge-portal">
      <div className="shell">
        <div className="knowledge-controls">
          <div className="filter-row">{types.map((type) => <button key={type} className={filter === type ? "active" : ""} onClick={() => setFilter(type)}>{type}</button>)}</div>
          <label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guidance" /></label>
        </div>
        <p className="opportunity-disclaimer">All items shown are editorial concepts. No article, report, video or download is currently published or available.</p>
        <div className="knowledge-grid">{filtered.map((item) => <article key={item.title} className={item.featured ? "featured" : ""}>{item.featured && <img src="/images/community_system_2.png" alt="An African urban community" />}<div><span>{item.type}</span><h2>{item.title}</h2><p>{item.date} · {item.read}</p><button disabled>Preview coming soon <ArrowRight size={15} /></button></div></article>)}</div>
        {filtered.length === 0 && <div className="empty-state"><Search /><h3>No matching guidance</h3><p>Try a broader topic or reset the filter.</p><button onClick={() => { setFilter("All"); setQuery(""); }}>Reset search</button></div>}
      </div>
    </section>
  );
}
