import "./JourneySection.css";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { title: "Discover", copy: "Understand the ownership journey and what lenders typically consider.", label: "Start with clarity" },
  { title: "Assess", copy: "Build a structured view of financial and mortgage readiness.", label: "Know your position" },
  { title: "Plan", copy: "Receive a personalised roadmap with practical next actions.", label: "Create your pathway" },
  { title: "Build", copy: "Progress through learning, financial preparation and document readiness.", label: "Improve over time" },
  { title: "Next step", copy: "Identify the most relevant conversation or action when you feel ready to move forward.", label: "Move with confidence" },
];

export function JourneySection() {
  const [step, setStep] = useState(0);
  return (
    <section id="journey" className="section journey-section section--alabaster">
      <div className="shell">
        <SectionHeading eyebrow="Interactive journey" title="Five stages. One visible path forward." copy="Select a stage to preview the customer experience." />
        <div className="journey-tabs">{steps.map((item, index) => <button key={item.title} className={step === index ? "active" : ""} onClick={() => setStep(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button>)}</div>
        <div className="journey-stage">
          <div className="journey-path">
            <div className="journey-line"><i style={{ width: `${step * 25}%` }} /></div>
            {steps.map((item, index) => <button key={item.title} className={index <= step ? "reached" : ""} onClick={() => setStep(index)}>{index < step ? <Check /> : index + 1}</button>)}
          </div>
          <div><p className="eyebrow">{steps[step].label}</p><h3>{steps[step].title}</h3><p>{steps[step].copy}</p></div>
          <ArrowRight />
        </div>
      </div>
    </section>
  );
}
