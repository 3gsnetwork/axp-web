import "./ProductStory.css";

export function ProductStory() {
  return (
    <section className="section product-story">
      <div className="shell story-grid">
        <div className="story-headline"><p className="eyebrow">What is HomeReady™?</p><h2>Readiness is a journey—not a pass or fail.</h2></div>
        <div className="story-copy">
          <p className="lead">HomeReady™ is a guided preparation experience for aspiring homeowners.</p>
          <p>It helps people understand the financial, documentary and practical foundations of mortgage readiness, then identify a realistic next step without suggesting that finance or a home is guaranteed.</p>
          <ul className="story-pillars">
            <li>Financial</li>
            <li>Documentary</li>
            <li>Practical</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
