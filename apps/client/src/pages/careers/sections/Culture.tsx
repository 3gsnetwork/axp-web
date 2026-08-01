import "./Culture.css";
const values = [
  { t: "Start with people", d: "Keep real aspirations and everyday realities in view." },
  { t: "Earn trust through clarity", d: "Communicate precisely and set realistic expectations." },
  { t: "Design for inclusion", d: "Recognise different household and market contexts." },
  { t: "Keep learning", d: "Use research and feedback to improve the public experience." },
];

export function Culture() {
  return (
    <>
      <section className="section culture-section">
        <div className="shell story-grid">
          <div><p className="eyebrow">Our culture</p><h2>Act with purpose. Earn trust.</h2></div>
          <div className="story-copy">
            <p className="lead">Our work begins with the people and communities housing is meant to serve.</p>
            <p>That calls for thoughtful communication, practical execution, respect for different perspectives and a commitment to making complex choices easier to understand.</p>
          </div>
        </div>
      </section>
      <section className="section section--alabaster">
        <div className="shell">
          <div className="culture-grid">{values.map((x) => <article key={x.t}><h3>{x.t}</h3><p>{x.d}</p></article>)}</div>
        </div>
      </section>
    </>
  );
}
