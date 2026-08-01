import "./Benefits.css";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const understandItems = ["A clearer view of the journey", "Useful mortgage and affordability education", "Awareness of common document needs", "Realistic expectations before a formal application"];
const prepareItems = ["A personal readiness roadmap", "Guided learning at your own pace", "A clearer sense of suitable opportunities", "Confidence to ask more informed questions"];

export function Benefits() {
  return (
    <section className="section benefits-section section--navy">
      <div className="shell">
        <SectionHeading light eyebrow="What you gain" title="More clarity. Better preparation. Greater confidence." />
        <div className="benefit-columns">
          <div><h3>Understand your position</h3>{understandItems.map((x) => <p key={x}><Check />{x}</p>)}</div>
          <div><h3>Prepare your next step</h3>{prepareItems.map((x) => <p key={x}><Check />{x}</p>)}</div>
        </div>
      </div>
    </section>
  );
}
