import "./Index.css";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";

export function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="not-found">
        <div>
          <span>404</span>
          <h1>We couldn’t find that page.</h1>
          <p>Return to the AXP Africa homepage or choose a clear next step.</p>
          <div className="button-row"><Link to="/" className="button button--primary">Return home</Link><Link to="/contact" className="button button--outline">Contact AXP</Link></div>
        </div>
      </section>
    </SiteLayout>
  );
}
