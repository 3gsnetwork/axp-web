import "./FaqSection.css";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQ } from "@/components/shared/FAQ";
import { ArrowLink } from "@/components/shared/ArrowLink";

export function FaqSection() {
  const reduce = useReducedMotion();
  return (
    <section className="section faq-section section--alabaster">
      <div className="shell">
        <motion.div className="split-heading" variants={fadeInUp} initial={reduce ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <SectionHeading eyebrow="FAQs" title="Start with the essentials." />
          <ArrowLink to="/contact">Talk to our team</ArrowLink>
        </motion.div>
        <FAQ />
      </div>
    </section>
  );
}
