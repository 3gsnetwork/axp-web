import "./ReadyIqBand.css";
import { BarChart3 } from "lucide-react";

const signals = [
  { l: "Knowledge", v: 70 },
  { l: "Savings", v: 45 },
  { l: "Documents", v: 60 },
  { l: "Affordability", v: 38 },
];

export function ReadyIqBand() {
  return (
    <section className="section readyiq-band">
      <div className="shell readyiq-grid">
        <div>
          <span className="product-badge"><BarChart3 size={15} /> ReadyIQ™</span>
          <h2>Use simple readiness signals to plan your next step.</h2>
          <p>ReadyIQ™ is a self-reflection tool designed to help an aspiring homeowner think about knowledge, savings, documents and affordability before a formal conversation.</p>
        </div>
        <div className="insight-widget">
          <div className="widget-head"><span>Your preparation areas</span></div>
          {signals.map((x) => <div className="bar-row" key={x.l}><span>{x.l}</span><i><b style={{ width: `${x.v}%` }} /></i><strong>{x.v}%</strong></div>)}
        </div>
      </div>
    </section>
  );
}
