import "./ProductHero.css";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, FileText, Smartphone, Sparkles, Target } from "lucide-react";

export function ProductHero() {
  return (
    <section className="product-hero">
      <div className="shell product-hero-grid">
        <div>
          <span className="product-badge"><Sparkles size={15} /> AXP homeownership journey</span>
          <h1>HomeReady<span>™</span></h1>
          <h2>Your Journey to Homeownership Starts Here.</h2>
          <p>Build confidence through guidance, financial readiness, mortgage education and better-matched opportunities—at a pace that works for you.</p>
          <div className="button-row"><Link to="/contact?route=Looking%20for%20a%20Home" className="button button--gold">Register interest <ArrowRight size={16} /></Link><button className="button button--glass" onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}>See how it works</button></div>
          <small className="prototype-note">Product experience concept · customer registration is not yet connected</small>
        </div>
        <div className="phone-shell">
          <div className="phone-top"><span>HomeReady™</span><Smartphone size={17} /></div>
          <div className="phone-score"><small>Your readiness journey</small><strong>62</strong><span>of 100 · Building</span></div>
          <div className="phone-progress"><i style={{ width: "62%" }} /></div>
          <div className="phone-task"><Check /><div><strong>Income profile</strong><span>Complete</span></div></div>
          <div className="phone-task active"><Target /><div><strong>Next: savings plan</strong><span>12-minute guided module</span></div><ChevronRight /></div>
          <div className="phone-task"><FileText /><div><strong>Document readiness</strong><span>2 of 5 prepared</span></div></div>
        </div>
      </div>
    </section>
  );
}
