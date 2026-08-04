import "./Routing.css";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const routes = ["Looking for a Home", "A Homeowner", "Interested in a Mortgage", "A Property Developer", "An Investor", "A Financial Institution", "Media", "Looking to Collaborate"];

const routeDetail: Record<string, string> = {
  "Looking for a Home": "Explore homeownership opportunities",
  "A Homeowner": "Discuss an urban-living question",
  "Interested in a Mortgage": "Learn about mortgage readiness",
  "A Property Developer": "Discuss presenting an approved opportunity",
  "An Investor": "Discuss urban-living opportunities",
  "A Financial Institution": "Discuss expanding mortgage access",
  Government: "Discuss public-interest urban living",
  Media: "Contact AXP about a media enquiry",
  "Looking to Collaborate": "Start a collaboration conversation",
};

export function Routing() {
  const location = useLocation();
  const initialRoute = useMemo(() => new URLSearchParams(location.search).get("route") || "", [location.search]);
  const [selected, setSelected] = useState(initialRoute);
  useEffect(() => setSelected(initialRoute), [initialRoute]);

  return (
    <section className="section contact-routing">
      <div className="shell">
        <div className="route-question">
          <span>I am…</span>
          <div className="route-grid">{routes.map((route) => <button className={selected === route ? "active" : ""} onClick={() => setSelected(route)} key={route}>{route}<ChevronRight /></button>)}</div>
        </div>
        {selected ? (
          <div className="route-result">
            <span>Your next step</span>
            <h2>{routeDetail[selected]}</h2>
            <div className="route-form-preview">
              <label><span>Email</span><input placeholder="you@example.com" disabled /></label>
              <label><span>What would you like to discuss?</span><textarea placeholder="Briefly describe your question" disabled /></label>
              <button className="button button--primary" disabled>Continue</button>
            </div>
          </div>
        ) : (
          <div className="route-empty"><ArrowRight /><h2>Select the description closest to you.</h2><p>Your suggested next step will appear here.</p></div>
        )}
      </div>
    </section>
  );
}
