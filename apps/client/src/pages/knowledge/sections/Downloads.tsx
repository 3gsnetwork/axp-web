import "./Downloads.css";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const resources = ["Homeownership preparation guide", "Mortgage questions checklist", "Urban living perspective", "HomeReady™ overview"];

export function Downloads() {
  return (
    <section className="section download-section section--alabaster">
      <div className="shell">
        <SectionHeading eyebrow="Resource library" title="Practical materials for future release." copy="These placeholders show the kinds of approved resources AXP may publish. No file has been supplied for download." />
        <div className="download-grid">{resources.map((name) => <article key={name}><FileText /><div><h3>{name}</h3><p>Download placeholder · file not yet supplied</p></div><Download /></article>)}</div>
      </div>
    </section>
  );
}
