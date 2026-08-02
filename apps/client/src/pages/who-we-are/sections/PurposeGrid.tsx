import "./PurposeGrid.css";
import { Target, Lightbulb, Globe2 } from "lucide-react";

export function PurposeGrid() {
  return (
    <section className="section section--alabaster">
      <div className="shell">
        <div className="purpose-grid">
          <article><Target /><span>Vision</span><h3>An Africa where sustainable homeownership is within reach and urban living supports long-term prosperity.</h3></article>
          <article><Lightbulb /><span>Mission</span><h3>To make the path from aspiration to informed homeownership more understandable, accessible and trusted.</h3></article>
          <article><Globe2 /><span>Promise</span><h3>To communicate clearly, present opportunities responsibly and keep people’s confidence at the centre.</h3></article>
        </div>
      </div>
    </section>
  );
}
