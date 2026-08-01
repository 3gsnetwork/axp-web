import "./Hero.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="home-hero">
      <img className="hero-image" src="https://res.cloudinary.com/gxhmv4fu/image/upload/w_2400,c_limit,f_auto,q_auto/axp_hero_building_m7lbh5" alt="A connected contemporary African coastal city at first light" fetchPriority="high" />
      <div className="hero-scrim" />
      <div className="shell hero-content">
        <p className="eyebrow eyebrow--gold">Making Urban Living Possible</p>
        <h1>Building Africa’s Future Through Housing, Finance &amp; Strategic Partnerships.</h1>
        <p>AXP Africa helps individuals and organisations unlock homeownership and urban-living opportunities through trusted guidance, thoughtful preparation and clearer next steps.</p>
        <div className="button-row"><Link to="/home-ownership-opportunities" className="button button--gold">Explore opportunities <ArrowRight size={17} /></Link><Link to="/homeready" className="button button--glass">Start your HomeReady™ journey</Link><Link to="/contact" className="text-cta">Speak to an advisor <ArrowRight size={15} /></Link></div>
      </div>
      <div className="hero-index"><span>Trust</span><span>Opportunity</span><span>Readiness</span><span>Urban living</span></div>
    </section>
  );
}
