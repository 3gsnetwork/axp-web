import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQ } from "@/components/shared/FAQ";

export function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="shell">
        <SectionHeading eyebrow="FAQs" title="Start with the essentials." />
        <FAQ />
      </div>
    </section>
  );
}
