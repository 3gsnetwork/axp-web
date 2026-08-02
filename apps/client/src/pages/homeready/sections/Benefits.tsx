import "./Benefits.css";
import { Check, Compass, Footprints } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const understandItems = ["A clearer view of the journey", "Useful mortgage and affordability education", "Awareness of common document needs", "Realistic expectations before a formal application"];
const prepareItems = ["A personal readiness roadmap", "Guided learning at your own pace", "A clearer sense of suitable opportunities", "Confidence to ask more informed questions"];

export function Benefits() {
  return (
    <section className="section benefits-section section--navy">
      <div className="shell">
        <SectionHeading light eyebrow="What you gain" title="More clarity. Better preparation. Greater confidence." />
        <div className="benefit-columns">
          <div className="benefit-column">
            <Compass className="benefit-icon" aria-hidden size={20} />
            <h3>Understand your position</h3>
            <ul>{understandItems.map((x) => <li key={x}><Check aria-hidden />{x}</li>)}</ul>
          </div>
          <div className="benefit-column">
            <Footprints className="benefit-icon" aria-hidden size={20} />
            <h3>Prepare your next step</h3>
            <ul>{prepareItems.map((x) => <li key={x}><Check aria-hidden />{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
