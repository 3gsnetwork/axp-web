import "./ChallengePanel.css";
import { SourceNote } from "@/components/shared/SourceNote";
import { ArrowLink } from "@/components/shared/ArrowLink";

export function ChallengePanel() {
  return (
    <section className="challenge section section--navy">
      <div className="shell challenge-grid">
        <div>
          <p className="eyebrow eyebrow--gold">The Africa housing challenge</p>
          <h2 className="display-heading">More people need a clearer path to homeownership.</h2>
          <p className="lead-light">Trusted information, practical preparation and access to suitable opportunities can help people make more confident decisions.</p>
          <ArrowLink to="/knowledge" light>Explore homeownership guidance</ArrowLink>
        </div>
        <div className="challenge-facts">
          <article><strong>70m</strong><span>estimated housing-unit deficit across Africa</span><SourceNote href="https://unhabitat.org/news/30-may-2025/united-nations-habitat-assembly-adopts-strategic-plan-2026-2029-to-advance-adequate-housing-for-all">UN-Habitat, 2025</SourceNote></article>
          <article><strong>900m+</strong><span>additional urban residents projected by 2050</span><SourceNote href="https://unhabitat.org/world-cities-report-2026">UN-Habitat World Cities Report 2026</SourceNote></article>
          <article><strong>&lt;5%</strong><span>mortgage penetration as a share of GDP in most African countries</span><SourceNote href="https://housingfinanceafrica.org/wp-content/uploads/2025/03/2024-CAHF-yearbook.pdf">CAHF Yearbook 2024</SourceNote></article>
        </div>
      </div>
    </section>
  );
}
