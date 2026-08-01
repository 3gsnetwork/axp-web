import "./ArchitectureStack.css";
import { SectionHeading } from "@/components/shared/SectionHeading";

const stages = [
  { n: "01", t: "Understand", d: "Learn who AXP is and what we stand for" },
  { n: "02", t: "Explore", d: "Review clearly labelled homeownership concepts" },
  { n: "03", t: "Prepare", d: "Build readiness through HomeReady™ guidance" },
  { n: "04", t: "Connect", d: "Start a straightforward conversation with AXP" },
];

export function ArchitectureStack() {
  return (
    <section className="section architecture-section">
      <div className="shell">
        <SectionHeading eyebrow="What visitors can expect" title="A practical, customer-first experience." copy="Every public AXP journey is designed to answer a useful question without exposing unnecessary complexity." />
        <div className="architecture-stack">
          {stages.map((item) => <article key={item.n}><span>{item.n}</span><div><h3>{item.t}</h3><p>{item.d}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
