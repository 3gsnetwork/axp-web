import "./FaqSection.css";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQ } from "@/components/shared/FAQ";
import { ArrowLink } from "@/components/shared/ArrowLink";

export function FaqSection() {
  return (
    <section className="section faq-section section--alabaster">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading eyebrow="FAQs" title="Start with the essentials." />
          <ArrowLink to="/contact">Talk to our team</ArrowLink>
        </div>
        <FAQ />
      </div>
    </section>
  );
}
