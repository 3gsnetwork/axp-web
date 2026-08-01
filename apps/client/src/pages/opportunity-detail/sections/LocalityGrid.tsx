import "./LocalityGrid.css";
import { Map as MapIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const localityItems = ["Amenities", "Nearby schools", "Healthcare", "Transport", "Shopping", "Infrastructure"];

export function LocalityGrid() {
  return (
    <section className="section section--alabaster">
      <div className="shell">
        <SectionHeading eyebrow="Place and possibility" title="The details that shape everyday living." />
        <div className="locality-grid">
          {localityItems.map((item) => <article key={item}><MapIcon /><h3>{item}</h3><p>Representative information for this concept only. Specific local details require a verified live opportunity.</p></article>)}
        </div>
      </div>
    </section>
  );
}
