import "./FAQ.css";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items: [string, string][] = [
  ["Is HomeReady™ a mortgage lender?", "No. HomeReady™ is a guidance and preparation experience. Any formal finance decision would remain with an approved financial institution and be subject to its criteria."],
  ["Does a readiness score guarantee a mortgage?", "No. Readiness indicators support planning and education; they do not constitute an approval, offer or guarantee of finance."],
  ["Who is HomeReady™ for?", "It is designed for aspiring homeowners who want to understand the journey, improve their preparation and ask more informed questions."],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], index) => {
        const isOpen = open === index;
        return (
          <div key={q} className={isOpen ? "active" : ""}>
            <button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span>{q}</span>
              <ChevronDown aria-hidden />
            </button>
            <div className="faq-answer" aria-hidden={!isOpen}>
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
