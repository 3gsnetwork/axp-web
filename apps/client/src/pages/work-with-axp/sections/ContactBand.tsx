import "./ContactBand.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ContactBand() {
  return (
    <section className="section work-contact section--navy">
      <div className="shell work-contact-grid">
        <div><p className="eyebrow eyebrow--gold">Become a partner</p><h2>Tell us what you would like to make possible.</h2><p>Enquiry forms remain disabled until routing, recipients, privacy language, retention rules and data handling are approved. No personal information is collected, stored or transmitted on this private concept website.</p></div>
        <div className="work-contact-action"><Link to="/contact?route=Looking%20to%20Collaborate" className="button button--gold">Choose your contact route <ArrowRight size={16} /></Link><small>Prototype state · no personal information is collected, stored or transmitted</small></div>
      </div>
    </section>
  );
}
