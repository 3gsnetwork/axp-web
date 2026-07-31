import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useParams, type NavLinkRenderProps } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Mail,
  Map as MapIcon,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  WalletCards,
  X,
} from "lucide-react";

type NavItem = { label: string; to: string };
const navItems: NavItem[] = [
  { label: "Who we are", to: "/who-we-are" },
  { label: "Home ownership opportunities", to: "/home-ownership-opportunities" },
  { label: "HomeReady™", to: "/homeready" },
  { label: "Knowledge Centre", to: "/knowledge" },
  { label: "Impact", to: "/impact" },
  { label: "Work with AXP", to: "/work-with-axp" },
];

type Opportunity = {
  slug: string;
  title: string;
  headline: string;
  location: string;
  price: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  tags: string[];
  image: string;
  overview: string;
};

const opportunityData: Opportunity[] = [
  { slug: "lekki-modern-terrace", title: "Own a Home in Lekki – From ₦85m.", headline: "Modern 3-Bedroom Terrace", location: "Lekki, Lagos", price: "From ₦85,000,000", type: "Terrace", bedrooms: "3 Bedrooms", bathrooms: "2 Bathrooms", parking: "2 Parking Spaces", tags: ["Mortgage Available", "Flexible Payment", "Ready to Move"], image: "/images/axp_hero_city_2.png", overview: "A representative modern terrace concept for buyers exploring accessible ownership pathways in a well-connected Lagos neighbourhood." },
  { slug: "abuja-family-living", title: "Family Living in Abuja – Mortgage Available.", headline: "Family Living Residence", location: "Abuja", price: "Mortgage pathway available", type: "Family Home", bedrooms: "3 Bedrooms", bathrooms: "2 Bathrooms", parking: "2 Parking Spaces", tags: ["Mortgage Available", "Flexible Payment", "Ready to Move"], image: "/images/community_system_2.png", overview: "A representative family-living concept for buyers seeking a considered homeownership route in Abuja." },
  { slug: "ibadan-modern-apartments", title: "Modern Apartments in Ibadan – Flexible Payment.", headline: "Modern Apartment Collection", location: "Ibadan, Oyo", price: "Flexible payment concept", type: "Apartment", bedrooms: "2 Bedrooms", bathrooms: "2 Bathrooms", parking: "1 Parking Space", tags: ["Flexible Payment", "Off-Plan", "Mortgage Available"], image: "/images/homeready_people_2.png", overview: "A representative apartment concept that illustrates how phased payment and guidance could support an ownership journey." },
  { slug: "upcoming-opportunity", title: "Upcoming Opportunity – Register Interest.", headline: "Future Urban Living Opportunity", location: "Nigeria", price: "Details to be confirmed", type: "Upcoming", bedrooms: "To be confirmed", bathrooms: "To be confirmed", parking: "To be confirmed", tags: ["Upcoming", "Flexible Payment", "Off-Plan"], image: "/images/partnership_studio_2.png", overview: "A placeholder for a future curated opportunity. No developer, property, price or availability has been confirmed." },
];

function OpportunityCard({ opportunity, compact = false }: { opportunity: Opportunity; compact?: boolean }) {
  return <article className={`opportunity-card ${compact ? "opportunity-card--compact" : ""}`}>
    <div className="opportunity-card-image"><img src={opportunity.image} alt="Illustrative lifestyle image; not the named concept property" /><span className="concept-label">Concept opportunity</span></div>
    <div className="opportunity-card-body"><p className="opportunity-location">{opportunity.location}</p><h3>{opportunity.headline}</h3><p className="opportunity-title">{opportunity.title}</p><strong>{opportunity.price}</strong><div className="opportunity-tags">{opportunity.tags.slice(0, compact ? 2 : 3).map((tag) => <span key={tag}>{tag}</span>)}</div>{!compact && <div className="opportunity-specs"><span>{opportunity.bedrooms}</span><span>{opportunity.bathrooms}</span><span>{opportunity.parking}</span></div>}<Link to={`/opportunities/${opportunity.slug}`} className="arrow-link">View opportunity <ArrowRight size={16} /></Link></div>
  </article>;
}

const knowledgeItems = [
  { type: "Housing guides", title: "The readiness gap: why affordable supply alone is not enough", date: "Perspective concept", read: "8 min", featured: true },
  { type: "Market intelligence", title: "Housing finance pathways for Africa’s next urban generation", date: "Research concept", read: "12 min", featured: false },
  { type: "Policy insights", title: "What aspiring homeowners should know about changing urban markets", date: "Policy concept", read: "10 min", featured: false },
  { type: "ReadyIQ™", title: "Five signals that shape household mortgage readiness", date: "Insight concept", read: "6 min", featured: false },
  { type: "Mortgage education", title: "Understanding the journey from income to affordability", date: "Guide concept", read: "7 min", featured: false },
  { type: "Urban Living Reports", title: "What sustainable urban living can mean for everyday households", date: "Report concept", read: "9 min", featured: false },
  { type: "Research publications", title: "A practical case for homeownership guidance", date: "Publication concept", read: "11 min", featured: false },
  { type: "Videos", title: "How to approach a more confident ownership journey", date: "Video concept", read: "5 min", featured: false },
  { type: "Downloads", title: "Homeownership pathway worksheet", date: "Download concept", read: "4 min", featured: false },
];

function useScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} aria-label="AXP Africa home">
      <img src="/images/axp_logo_cropped.png" alt="AXP Africa Limited" />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }: NavLinkRenderProps) => (isActive ? "nav-link active" : "nav-link")}>
              {item.label}
            </NavLink>
          ))}
          <div className="nav-more">
            <button className="nav-link nav-more-button" onClick={() => setMoreOpen((value) => !value)} aria-expanded={moreOpen}>
              More <ChevronDown size={14} />
            </button>
            {moreOpen && (
              <div className="more-menu">
                <NavLink to="/media">Media Centre</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            )}
          </div>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="button button--small button--primary">Speak to an advisor <ArrowRight size={15} /></Link>
          <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {[...navItems, { label: "Media Centre", to: "/media" }, { label: "Careers", to: "/careers" }, { label: "Contact", to: "/contact" }].map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}<ChevronRight size={18} /></NavLink>
          ))}
          <Link to="/contact" className="button button--primary">Choose why you’re here <ArrowRight size={16} /></Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <p className="eyebrow eyebrow--gold">Making urban living possible</p>
        <h2>Ready to take the next step?</h2>
        <div className="button-row">
          <Link to="/home-ownership-opportunities" className="button button--gold">Explore opportunities <ArrowRight size={16} /></Link>
          <Link to="/contact" className="button button--ghost-light">Contact AXP</Link>
        </div>
      </div>
      <div className="footer-main shell">
        <div className="footer-brand">
          <BrandMark inverse />
          <p>Building Africa’s future through housing, finance and strategic partnerships.</p>
          <span>We are invested in your investment.</span>
        </div>
        <div className="footer-links">
          <div><h3>Explore</h3><Link to="/who-we-are">Who we are</Link><Link to="/home-ownership-opportunities">Home ownership opportunities</Link><Link to="/homeready">HomeReady™</Link><Link to="/impact">Impact</Link></div>
          <div><h3>Learn</h3><Link to="/knowledge">Knowledge Centre</Link><Link to="/work-with-axp">Work with AXP</Link><Link to="/contact">Contact AXP</Link></div>
          <div><h3>Company</h3><Link to="/media">Media Centre</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="footer-bottom shell"><span>© 2026 AXP Africa Limited. Website concept.</span><span>Making Urban Living Possible · Africa</span></div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isOpportunityRoute = pathname === "/home-ownership-opportunities" || pathname.startsWith("/opportunities/");
  useScrollTop();
  return <><Header /><main>{children}</main><Footer />{!isOpportunityRoute && <Link className="persistent-cta" to="/contact"><span>Start a conversation</span><ArrowRight size={16} /></Link>}</>;
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading--light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function ArrowLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return <Link to={to} className={`arrow-link ${light ? "arrow-link--light" : ""}`}>{children}<ArrowRight size={16} /></Link>;
}

function SourceNote({ children, href }: { children: React.ReactNode; href: string }) {
  return <a className="source-note" href={href} target="_blank" rel="noreferrer">Source: {children} <ExternalLink size={12} /></a>;
}

function ChallengePanel() {
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

{/* @section: home */}
export function HomePage() {
  return (
    <SiteLayout>
      {/* @section: hero-title */}
      <section className="home-hero">
        <img className="hero-image" src="/images/axp_hero_city_2.png" alt="A connected contemporary African coastal city at first light" />
        <div className="hero-scrim" />
        <div className="shell hero-content">
          <p className="eyebrow eyebrow--gold">Making Urban Living Possible</p>
          <h1>Building Africa’s Future Through Housing, Finance &amp; Strategic Partnerships.</h1>
          <p>AXP Africa helps individuals and organisations unlock homeownership and urban-living opportunities through trusted guidance, thoughtful preparation and clearer next steps.</p>
          <div className="button-row"><Link to="/home-ownership-opportunities" className="button button--gold">Explore opportunities <ArrowRight size={17} /></Link><Link to="/homeready" className="button button--glass">Start your HomeReady™ journey</Link><Link to="/contact" className="text-cta">Speak to an advisor <ArrowRight size={15} /></Link></div>
        </div>
        <div className="hero-index"><span>Trust</span><span>Opportunity</span><span>Readiness</span><span>Urban living</span></div>
      </section>

      {/* @section: featured-opportunities */}
      <section className="section featured-opportunities">
        <div className="shell">
          <div className="split-heading"><SectionHeading eyebrow="Featured opportunities" title="Start with an opportunity that fits your next chapter." copy="A curated view of the kinds of homeownership pathways AXP is designed to help people explore." /><Link to="/home-ownership-opportunities" className="button button--outline">View all opportunities <ArrowRight size={16} /></Link></div>
          <p className="opportunity-disclaimer">Illustrative concept opportunities only. These are not verified listings, offers or currently available AXP properties.</p>
          <div className="featured-opportunities-grid">
            {opportunityData.map((opportunity) => <OpportunityCard key={opportunity.slug} opportunity={opportunity} compact />)}
          </div>
        </div>
      </section>

      <ChallengePanel />

      {/* @section: axp-public-promise */}
      <section className="section public-promise-section">
        <div className="shell public-promise-grid">
          <div>
            <SectionHeading eyebrow="What AXP offers" title="A clearer way to explore homeownership and urban living." copy="AXP helps individuals and organisations unlock homeownership and urban-living opportunities through useful guidance, carefully presented opportunities and straightforward conversations." />
            <ArrowLink to="/who-we-are">Discover who AXP is</ArrowLink>
          </div>
          <div className="public-promise-cards">
            <article><span>01</span><h3>Explore opportunities</h3><p>Review clearly labelled homeownership concepts and the kinds of ownership routes that may fit your goals.</p><Link to="/home-ownership-opportunities">View opportunities <ArrowRight size={15} /></Link></article>
            <article><span>02</span><h3>Prepare with confidence</h3><p>Use HomeReady™ to understand the journey, build readiness and identify a practical next step.</p><Link to="/homeready">Explore HomeReady™ <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      {/* @section: visitor-pathways */}
      <section className="section platforms-section">
        <div className="shell">
          <SectionHeading eyebrow="Where do I start?" title="Choose the next step that fits your goal." copy="The AXP website is organised around the questions visitors are most likely to ask—from understanding who we are to exploring a home or starting a conversation." />
          <div className="platforms-grid">
            <Link to="/home-ownership-opportunities" className="platform-card platform-card--feature">
              <div className="platform-number">01</div><div><span className="platform-kicker">Core offering</span><h3>Explore opportunities</h3><p>See clearly labelled homeownership concepts, locations and possible ownership pathways in one customer-friendly experience.</p></div><ArrowRight />
            </Link>
            {[{ n: "02", t: "Who is AXP?", c: "Learn what AXP stands for and why our customer-first approach matters.", to: "/who-we-are" }, { n: "03", t: "How can I prepare?", c: "Explore HomeReady™ and build confidence for your homeownership journey.", to: "/homeready" }, { n: "04", t: "What should I know?", c: "Use practical guides and insights to make more informed housing decisions.", to: "/knowledge" }, { n: "05", t: "Can my organisation collaborate?", c: "See who can work with AXP and start a straightforward conversation.", to: "/work-with-axp" }].map((item) => <Link to={item.to} className="platform-card" key={item.n}><div className="platform-number">{item.n}</div><div><h3>{item.t}</h3><p>{item.c}</p></div><ArrowRight /></Link>)}
          </div>
        </div>
      </section>

      {/* @section: homeready-feature */}
      <section className="section homeready-feature">
        <div className="shell feature-split">
          <div className="feature-image-wrap"><img src="/images/homeready_people_2.png" alt="A young African couple reviewing a digital financial journey together" /><div className="floating-score"><span>Readiness pathway</span><strong>One clear next step</strong><small>HomeReady™ concept</small></div></div>
          <div className="feature-copy"><p className="eyebrow">HomeReady™</p><h2>Homeownership starts long before a mortgage application.</h2><p>HomeReady™ helps aspiring homeowners build useful knowledge, understand financial readiness and identify a practical path towards sustainable ownership.</p><ul className="check-list"><li><Check /> Understand your starting point</li><li><Check /> Build a personalised readiness plan</li><li><Check /> Progress through guided learning</li><li><Check /> Identify your most relevant next step</li></ul><Link to="/homeready" className="button button--primary">Experience HomeReady™ <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      {/* @section: impact-preview */}
      <section className="section impact-preview section--alabaster">
        <div className="shell">
          <div className="split-heading"><SectionHeading eyebrow="Our intended impact" title="Progress should be meaningful to people and communities." copy="AXP is focused on practical outcomes: greater confidence, stronger readiness, clearer opportunities and more inclusive urban-living possibilities." /><span className="concept-label">Impact commitments · not reported performance</span></div>
          <div className="impact-framework">
            {[{ name: "Customer confidence", icon: ShieldCheck, note: "People better equipped to understand their choices" }, { name: "Homeownership readiness", icon: Users, note: "Aspiring homeowners with a clearer next step" }, { name: "Opportunity access", icon: Building2, note: "More understandable routes to explore a home" }, { name: "Useful knowledge", icon: GraduationCap, note: "Practical guidance for better-informed decisions" }, { name: "Urban wellbeing", icon: MapIcon, note: "Long-term value for people and places" }].map(({ name, icon: Icon, note }, i) => <article key={name} className={`impact-frame impact-frame--${i + 1}`}><Icon /><span>{name}</span><p>{note}</p></article>)}
          </div>
          <ArrowLink to="/impact">Explore AXP’s impact commitments</ArrowLink>
        </div>
      </section>

      {/* @section: knowledge-preview */}
      <section className="section knowledge-preview">
        <div className="shell">
          <div className="split-heading"><SectionHeading eyebrow="Knowledge Centre" title="Clear guidance for important housing decisions." copy="Practical tools, market perspectives and homeownership education for people and organisations considering Africa’s urban future." /><ArrowLink to="/knowledge">Visit the Knowledge Centre</ArrowLink></div>
          <div className="knowledge-home-grid">
            <article className="knowledge-feature-card"><div className="knowledge-visual"><img src="/images/community_system_2.png" alt="An African urban community with housing, public spaces and mobility links" /></div><div className="knowledge-card-body"><span>Homeownership guidance</span><h3>A practical case for clearer homeownership journeys</h3><p>How useful information, financial preparation and realistic expectations can help aspiring homeowners move forward with confidence.</p><ArrowLink to="/knowledge">Read the perspective</ArrowLink></div></article>
            <div className="knowledge-list">{knowledgeItems.slice(1, 4).map((item, index) => <Link to="/knowledge" key={item.title}><span>0{index + 2}</span><div><small>{item.type}</small><h3>{item.title}</h3><p>{item.read}</p></div><ArrowRight /></Link>)}</div>
          </div>
        </div>
      </section>

      {/* @section: work-with-axp */}
      <section className="section partner-band">
        <div className="shell partner-band-inner"><div><p className="eyebrow eyebrow--gold">Work with AXP</p><h2>Looking to collaborate?</h2><p>If your organisation can help expand access to homeownership or improve urban living, we would like to hear from you.</p></div><div className="partner-types">{["Developers", "Financial institutions", "Employers", "Public institutions", "Investors", "Specialists"].map((name) => <span key={name}>{name}</span>)}</div><Link className="button button--gold" to="/work-with-axp">Explore collaboration <ArrowRight size={16} /></Link></div>
      </section>
    </SiteLayout>
  );
}

function PageHero({ eyebrow, title, copy, image, children }: { eyebrow: string; title: string; copy: string; image?: string; children?: React.ReactNode }) {
  return <section className={`page-hero ${image ? "page-hero--image" : ""}`}>{image && <><img src={image} alt="" /><div className="page-hero-scrim" /></>}<div className="shell page-hero-inner"><p className="eyebrow eyebrow--gold">{eyebrow}</p><h1>{title}</h1><p>{copy}</p>{children}</div></section>;
}

{/* @section: home-ownership-opportunities */}
export function HomeOwnershipOpportunitiesPage() {
  const [locationFilter, setLocationFilter] = useState("All locations");
  const [typeFilter, setTypeFilter] = useState("All types");
  const [budgetFilter, setBudgetFilter] = useState("All budgets");
  const [bedroomFilter, setBedroomFilter] = useState("All bedrooms");
  const [pathwayFilters, setPathwayFilters] = useState<string[]>([]);
  const togglePathway = (pathway: string) => setPathwayFilters((current) => current.includes(pathway) ? current.filter((item) => item !== pathway) : [...current, pathway]);
  const visible = opportunityData.filter((item) => {
    const matchesLocation = locationFilter === "All locations" || item.location.includes(locationFilter);
    const matchesType = typeFilter === "All types" || item.type === typeFilter;
    const matchesBudget = budgetFilter === "All budgets" || (budgetFilter === "Up to ₦100m" && item.price.includes("₦85")) || (budgetFilter === "Flexible payment" && item.tags.includes("Flexible Payment")) || (budgetFilter === "Mortgage pathway" && item.tags.includes("Mortgage Available")) || (budgetFilter === "To be confirmed" && item.price === "Details to be confirmed");
    const matchesBedrooms = bedroomFilter === "All bedrooms" || item.bedrooms === bedroomFilter || (bedroomFilter === "To be confirmed" && item.bedrooms === "To be confirmed");
    const matchesPathways = pathwayFilters.every((pathway) => item.tags.includes(pathway));
    return matchesLocation && matchesType && matchesBudget && matchesBedrooms && matchesPathways;
  });
  const resetFilters = () => { setLocationFilter("All locations"); setTypeFilter("All types"); setBudgetFilter("All budgets"); setBedroomFilter("All bedrooms"); setPathwayFilters([]); };
  return <SiteLayout><PageHero eyebrow="Home ownership opportunities" title="Find a pathway that feels possible." copy="AXP presents curated opportunity concepts to help people explore the kinds of homes, locations and ownership routes that may fit their goals." image="/images/axp_hero_city_2.png"><span className="prototype-note">Concept experience · not a live property database</span></PageHero>
    <section className="section opportunity-search"><div className="shell"><div className="opportunity-filter-panel"><div><p className="eyebrow">Explore concepts</p><h2>Start with what matters to you.</h2></div><div className="opportunity-filters"><label>Location<select value={locationFilter} onChange={(event) => setLocationFilter(event.target.value)}><option>All locations</option><option>Lekki</option><option>Abuja</option><option>Ibadan</option><option>Nigeria</option></select></label><label>Property type<select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option>All types</option><option>Terrace</option><option>Family Home</option><option>Apartment</option><option>Upcoming</option></select></label><label>Budget / pathway<select value={budgetFilter} onChange={(event) => setBudgetFilter(event.target.value)}><option>All budgets</option><option>Up to ₦100m</option><option>Flexible payment</option><option>Mortgage pathway</option><option>To be confirmed</option></select></label><label>Bedrooms<select value={bedroomFilter} onChange={(event) => setBedroomFilter(event.target.value)}><option>All bedrooms</option><option>2 Bedrooms</option><option>3 Bedrooms</option><option>To be confirmed</option></select></label></div><fieldset className="pathway-filter-group"><legend>Ownership features</legend>{["Mortgage Available", "Ready to Move", "Off-Plan", "Flexible Payment"].map((pathway) => <label key={pathway}><input type="checkbox" checked={pathwayFilters.includes(pathway)} onChange={() => togglePathway(pathway)} /> <span>{pathway}</span></label>)}</fieldset><p className="filter-note">Filter interactions demonstrate how a future curated-opportunities experience could work. Prices, availability and financing are not live or verified.</p></div>
      <div className="opportunity-results-head"><div><p className="eyebrow">Curated concepts</p><h2>{visible.length} opportunity {visible.length === 1 ? "concept" : "concepts"} to explore</h2></div><span className="concept-label">Illustrative content only</span></div><div className="opportunity-grid">{visible.map((opportunity) => <OpportunityCard key={opportunity.slug} opportunity={opportunity} />)}</div>{visible.length === 0 && <div className="empty-state"><Search /><h3>No concept matches</h3><p>Try another filter combination to explore the full illustrative set.</p><button onClick={resetFilters}>Reset filters</button></div>}</div></section>
    <section className="section section--navy opportunity-guidance"><div className="shell feature-split"><div><p className="eyebrow eyebrow--gold">The AXP difference</p><h2>AXP is not selling houses. AXP is helping people own homes.</h2></div><div className="feature-copy feature-copy--light"><p>Every concept is framed around a more confident ownership journey: understand your readiness, explore suitable pathways, and connect to appropriate support when live opportunities are approved.</p><Link to="/homeready" className="button button--gold">Start with HomeReady™ <ArrowRight size={16} /></Link></div></div></section>
  </SiteLayout>;
}

/* @section: opportunity-detail */
export function OpportunityDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const opportunity = opportunityData.find((item) => item.slug === slug) ?? opportunityData[0];
  return <SiteLayout><section className="opportunity-detail-hero"><img src={opportunity.image} alt="Illustrative lifestyle image; not the named concept property" /><div className="page-hero-scrim" /><div className="shell opportunity-detail-hero-content"><span className="concept-label">Illustrative concept opportunity</span><p>{opportunity.location}</p><h1>{opportunity.headline}</h1><strong>{opportunity.price}</strong><div className="button-row"><Link to="/contact?route=Looking%20for%20a%20Home" className="button button--gold">Discuss this concept <ArrowRight size={16} /></Link><button className="button button--glass" disabled>Download brochure</button></div><small>Prototype state · no personal information is collected, stored or transmitted, and no brochure has been supplied.</small></div></section>
    <section className="section"><div className="shell opportunity-detail-grid"><div><SectionHeading eyebrow="Overview" title="A concept for a more considered ownership journey." copy={opportunity.overview} /><div className="detail-feature-grid"><article><span>Key features</span><strong>{opportunity.bedrooms}</strong><strong>{opportunity.bathrooms}</strong><strong>{opportunity.parking}</strong></article><article><span>Ownership options</span><strong>Mortgage</strong><strong>Outright purchase</strong><strong>Flexible payment plan</strong></article></div></div><aside className="selection-note"><p className="eyebrow">Why this opportunity?</p><h3>Considered through an AXP lens.</h3><p>This illustrative concept highlights the qualities people may weigh when exploring a homeownership pathway: accessibility, location, everyday living and long-term possibility.</p><small>Partner attribution is intentionally undisclosed: this is not a confirmed project or live opportunity.</small></aside></div></section>
    <section className="section section--alabaster"><div className="shell"><SectionHeading eyebrow="Place and possibility" title="The details that shape everyday living." /><div className="locality-grid">{["Amenities", "Nearby schools", "Healthcare", "Transport", "Shopping", "Infrastructure"].map((item) => <article key={item}><MapIcon /><h3>{item}</h3><p>Representative information for this concept only. Specific local details require a verified live opportunity.</p></article>)}</div></div></section>
    <section className="section interest-concept"><div className="shell interest-grid"><div><p className="eyebrow">Register interest</p><h2>When this experience is live, we’ll help you take the next step.</h2><p>For now, the form below is a disabled prototype. No personal information is collected, stored or transmitted.</p></div><form className="interest-form"><label>Name<input disabled placeholder="Your name" /></label><label>Email<input disabled placeholder="you@example.com" /></label><label>Phone<input disabled placeholder="Your phone number" /></label><label>Budget<select disabled><option>Select a range</option></select></label><label>Preferred contact method<select disabled><option>Select a preference</option></select></label><label>Timeline<select disabled><option>Select a timeline</option></select></label><button className="button button--primary" disabled>Register interest</button><small>Prototype state · no personal information is collected, stored or transmitted</small></form></div></section>
  </SiteLayout>;
}

{/* @section: who-we-are */}
export function WhoWeArePage() {
  return <SiteLayout><PageHero eyebrow="Who we are" title="Helping make homeownership feel more possible." copy="AXP helps individuals and organisations unlock homeownership and urban-living opportunities through trusted guidance, practical preparation and clearer next steps." image="/images/partnership_studio_2.png"><Link to="/home-ownership-opportunities" className="button button--gold">Explore opportunities <ArrowRight size={16} /></Link></PageHero>
    <section className="section"><div className="shell story-grid"><div><p className="eyebrow">Our purpose</p><h2>Making Urban Living Possible.</h2></div><div className="story-copy"><p className="lead">AXP is not selling houses. AXP is helping people own homes.</p><p>We believe people should be able to explore homeownership with clearer information, stronger preparation and greater confidence.</p><p>Our public role is simple: help visitors understand their options, prepare for the journey and take an appropriate next step.</p></div></div></section>
    <section className="section section--alabaster"><div className="shell"><div className="purpose-grid"><article><Target /><span>Vision</span><h3>An Africa where sustainable homeownership is within reach and urban living supports long-term prosperity.</h3></article><article><Lightbulb /><span>Mission</span><h3>To make the path from aspiration to informed homeownership more understandable, accessible and trusted.</h3></article><article><Globe2 /><span>Promise</span><h3>To communicate clearly, present opportunities responsibly and keep people’s confidence at the centre.</h3></article></div></div></section>
    <section className="section architecture-section"><div className="shell"><SectionHeading eyebrow="What visitors can expect" title="A practical, customer-first experience." copy="Every public AXP journey is designed to answer a useful question without exposing unnecessary complexity." /><div className="architecture-stack">{[{ n: "01", t: "Understand", d: "Learn who AXP is and what we stand for" }, { n: "02", t: "Explore", d: "Review clearly labelled homeownership concepts" }, { n: "03", t: "Prepare", d: "Build readiness through HomeReady™ guidance" }, { n: "04", t: "Connect", d: "Start a straightforward conversation with AXP" }].map((item) => <article key={item.n}><span>{item.n}</span><div><h3>{item.t}</h3><p>{item.d}</p></div></article>)}</div></div></section>
    <section className="section governance-section section--navy"><div className="shell governance-grid"><SectionHeading light eyebrow="Our public commitments" title="Trust begins with clarity." copy="AXP aims to make every public interaction responsible, understandable and honest about what is available today." /><div className="governance-list">{["Clear and responsible communication", "Visible concept and illustrative labels", "No unverified availability claims", "Respect for future customer information", "Straightforward next steps"].map((item) => <div key={item}><ShieldCheck /><span>{item}</span></div>)}</div></div></section>
  </SiteLayout>;
}

{/* @section: homeready */}
export function HomeReadyPage() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Discover", copy: "Understand the ownership journey and what lenders typically consider.", label: "Start with clarity" },
    { title: "Assess", copy: "Build a structured view of financial and mortgage readiness.", label: "Know your position" },
    { title: "Plan", copy: "Receive a personalised roadmap with practical next actions.", label: "Create your pathway" },
    { title: "Build", copy: "Progress through learning, financial preparation and document readiness.", label: "Improve over time" },
    { title: "Next step", copy: "Identify the most relevant conversation or action when you feel ready to move forward.", label: "Move with confidence" }
  ];
  return <SiteLayout><section className="product-hero"><div className="shell product-hero-grid"><div><span className="product-badge"><Sparkles size={15} /> AXP homeownership journey</span><h1>HomeReady<span>™</span></h1><h2>Your Journey to Homeownership Starts Here.</h2><p>Build confidence through guidance, financial readiness, mortgage education and better-matched opportunities—at a pace that works for you.</p><div className="button-row"><Link to="/contact?route=Looking%20for%20a%20Home" className="button button--gold">Register interest <ArrowRight size={16} /></Link><button className="button button--glass" onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}>See how it works</button></div><small className="prototype-note">Product experience concept · customer registration is not yet connected</small></div><div className="phone-shell"><div className="phone-top"><span>HomeReady™</span><Smartphone size={17} /></div><div className="phone-score"><small>Your readiness journey</small><strong>62</strong><span>of 100 · Building</span></div><div className="phone-progress"><i style={{ width: "62%" }} /></div><div className="phone-task"><Check /><div><strong>Income profile</strong><span>Complete</span></div></div><div className="phone-task active"><Target /><div><strong>Next: savings plan</strong><span>12-minute guided module</span></div><ChevronRight /></div><div className="phone-task"><FileText /><div><strong>Document readiness</strong><span>2 of 5 prepared</span></div></div></div></div></section>
    <section className="section product-story"><div className="shell story-grid"><div><p className="eyebrow">What is HomeReady™?</p><h2>Readiness is a journey—not a pass or fail.</h2></div><div className="story-copy"><p className="lead">HomeReady™ is a guided preparation experience for aspiring homeowners.</p><p>It helps people understand the financial, documentary and practical foundations of mortgage readiness, then identify a realistic next step without suggesting that finance or a home is guaranteed.</p></div></div></section>
    <section id="journey" className="section journey-section section--alabaster"><div className="shell"><SectionHeading eyebrow="Interactive journey" title="Five stages. One visible path forward." copy="Select a stage to preview the customer experience." /><div className="journey-tabs">{steps.map((item, index) => <button key={item.title} className={step === index ? "active" : ""} onClick={() => setStep(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button>)}</div><div className="journey-stage"><div className="journey-path"><div className="journey-line"><i style={{ width: `${step * 25}%` }} /></div>{steps.map((item, index) => <button key={item.title} className={index <= step ? "reached" : ""} onClick={() => setStep(index)}>{index < step ? <Check /> : index + 1}</button>)}</div><div><p className="eyebrow">{steps[step].label}</p><h3>{steps[step].title}</h3><p>{steps[step].copy}</p></div><ArrowRight /></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Practical support" title="Build confidence one practical step at a time." /><div className="module-grid">{[{ t: "Financial readiness", d: "Understand income, expenditure, savings and affordability in context", icon: WalletCards }, { t: "Mortgage education", d: "Learn the core concepts and questions to consider before formal assessment", icon: GraduationCap }, { t: "Homeownership guidance", d: "Make sense of the stages, decisions and documents that may sit ahead", icon: BarChart3 }, { t: "Opportunity awareness", d: "Explore the kinds of locations, homes and ownership routes that may fit your goals", icon: FileText }, { t: "Readiness planning", d: "Turn what you learn into a realistic sequence of next actions", icon: Target }, { t: "Next-step guidance", d: "Know which question to ask and when a formal conversation may be appropriate", icon: ArrowRight }].map(({ t, d, icon: ModuleIcon }) => <article key={t}><ModuleIcon /><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="section benefits-section section--navy"><div className="shell"><SectionHeading light eyebrow="What you gain" title="More clarity. Better preparation. Greater confidence." /><div className="benefit-columns"><div><h3>Understand your position</h3>{["A clearer view of the journey", "Useful mortgage and affordability education", "Awareness of common document needs", "Realistic expectations before a formal application"].map((x) => <p key={x}><Check />{x}</p>)}</div><div><h3>Prepare your next step</h3>{["A personal readiness roadmap", "Guided learning at your own pace", "A clearer sense of suitable opportunities", "Confidence to ask more informed questions"].map((x) => <p key={x}><Check />{x}</p>)}</div></div></div></section>
    <section className="section faq-section"><div className="shell"><SectionHeading eyebrow="FAQs" title="Start with the essentials." /><FAQ /></div></section>
  </SiteLayout>;
}

function FAQ() {
  const items = [
    ["Is HomeReady™ a mortgage lender?", "No. HomeReady™ is a guidance and preparation experience. Any formal finance decision would remain with an approved financial institution and be subject to its criteria."],
    ["Does a readiness score guarantee a mortgage?", "No. Readiness indicators support planning and education; they do not constitute an approval, offer or guarantee of finance."],
    ["Who is HomeReady™ for?", "It is designed for aspiring homeowners who want to understand the journey, improve their preparation and ask more informed questions."],
    ["Can I register today?", "Not yet. This website shows a concept experience only. Registration is disabled, and no personal information is collected, stored or transmitted."],
  ];
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map(([q, a], index) => <div key={q} className={open === index ? "active" : ""}><button onClick={() => setOpen(open === index ? -1 : index)}><span>{q}</span><ChevronDown /></button>{open === index && <p>{a}</p>}</div>)}</div>;
}

{/* @section: work-with-axp */}
export function WorkWithAXPPage() {
  const audiences = [
    { icon: Building2, question: "Are you a developer looking to reach qualified buyers?", copy: "Talk to AXP about presenting approved opportunities clearly and helping prospective buyers approach them with better preparation." },
    { icon: Landmark, question: "Are you a financial institution expanding mortgage access?", copy: "Explore customer education and readiness conversations that can help aspiring homeowners understand what a formal finance journey may require." },
    { icon: BriefcaseBusiness, question: "Supporting employees or communities?", copy: "Discuss practical homeownership education, financial-wellbeing guidance and responsible routes for the people you serve." },
    { icon: Handshake, question: "Looking to collaborate?", copy: "If your organisation can support accessible homeownership or sustainable urban living, start a straightforward conversation with AXP." },
  ];
  return <SiteLayout><PageHero eyebrow="Work with AXP" title="Can your organisation help make homeownership more possible?" copy="AXP welcomes purposeful conversations with organisations that share an interest in accessible homeownership, informed customers and sustainable urban living." image="/images/partnership_studio_2.png"><Link to="/contact?route=Looking%20to%20Collaborate" className="button button--gold">Become a partner <ArrowRight size={16} /></Link></PageHero>
    {/* @section: collaboration-audiences */}
    <section className="section collaboration-audiences"><div className="shell"><SectionHeading eyebrow="Who collaboration is for" title="Start with the question closest to your organisation." copy="We keep the public journey simple: identify your goal, understand why a conversation may be useful and contact AXP." /><div className="collaboration-grid">{audiences.map(({ icon: Icon, question, copy }) => <article key={question}><Icon /><h3>{question}</h3><p>{copy}</p><Link to="/contact?route=Looking%20to%20Collaborate">Start a conversation <ArrowRight size={15} /></Link></article>)}</div></div></section>
    {/* @section: collaboration-reasons */}
    <section className="section section--alabaster"><div className="shell work-reasons-grid"><div><p className="eyebrow">Why work with AXP</p><h2>Keep people, confidence and long-term value in view.</h2><p>AXP brings a customer-first perspective to homeownership and urban-living conversations. We focus on clarity, responsible communication and practical outcomes.</p></div><div className="work-reasons-list">{["Reach people through a clearer, more responsible experience", "Support better-informed homeownership and finance conversations", "Contribute to accessible and sustainable urban-living outcomes", "Build trust through transparent communication and realistic expectations"].map((reason) => <div key={reason}><Check /><span>{reason}</span></div>)}</div></div></section>
    {/* @section: collaboration-contact */}
    <section className="section work-contact section--navy"><div className="shell work-contact-grid"><div><p className="eyebrow eyebrow--gold">Become a partner</p><h2>Tell us what you would like to make possible.</h2><p>Enquiry forms remain disabled until routing, recipients, privacy language, retention rules and data handling are approved. No personal information is collected, stored or transmitted on this private concept website.</p></div><div className="work-contact-action"><Link to="/contact?route=Looking%20to%20Collaborate" className="button button--gold">Choose your contact route <ArrowRight size={16} /></Link><small>Prototype state · no personal information is collected, stored or transmitted</small></div></div></section>
  </SiteLayout>;
}

{/* @section: knowledge */}
export function KnowledgePage() {
  const types = ["All", "Housing guides", "Mortgage education", "Market intelligence", "Urban Living Reports", "Policy insights", "ReadyIQ™", "Research publications", "Videos", "Downloads"];
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = knowledgeItems.filter((item) => (filter === "All" || item.type === filter) && item.title.toLowerCase().includes(query.toLowerCase()));
  return <SiteLayout><PageHero eyebrow="Knowledge Centre" title="Clear guidance for more confident housing decisions." copy="Explore practical homeownership education, market perspectives and useful tools for people and organisations considering Africa’s urban future." />
    <section className="section knowledge-portal"><div className="shell"><div className="knowledge-controls"><div className="filter-row">{types.map((type) => <button key={type} className={filter === type ? "active" : ""} onClick={() => setFilter(type)}>{type}</button>)}</div><label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guidance" /></label></div><p className="opportunity-disclaimer">All items shown are editorial concepts. No article, report, video or download is currently published or available.</p><div className="knowledge-grid">{filtered.map((item) => <article key={item.title} className={item.featured ? "featured" : ""}>{item.featured && <img src="/images/community_system_2.png" alt="An African urban community" />}<div><span>{item.type}</span><h2>{item.title}</h2><p>{item.date} · {item.read}</p><button disabled>Preview coming soon <ArrowRight size={15} /></button></div></article>)}</div>{filtered.length === 0 && <div className="empty-state"><Search /><h3>No matching guidance</h3><p>Try a broader topic or reset the filter.</p><button onClick={() => { setFilter("All"); setQuery(""); }}>Reset search</button></div>}</div></section>
    <section className="section readyiq-band"><div className="shell readyiq-grid"><div><span className="product-badge"><BarChart3 size={15} /> ReadyIQ™</span><h2>Use simple readiness signals to plan your next step.</h2><p>ReadyIQ™ is an illustrative self-reflection concept designed to help an aspiring homeowner think about knowledge, savings, documents and affordability before a formal conversation.</p><span className="concept-label">Concept only · not an assessment or finance decision</span></div><div className="insight-widget"><div className="widget-head"><span>Your preparation areas</span><small>Illustrative example</small></div>{[{ l: "Knowledge", v: 70 }, { l: "Savings", v: 45 }, { l: "Documents", v: 60 }, { l: "Affordability", v: 38 }].map((x) => <div className="bar-row" key={x.l}><span>{x.l}</span><i><b style={{ width: `${x.v}%` }} /></i><strong>{x.v}%</strong></div>)}</div></div></section>
    <section className="section download-section section--alabaster"><div className="shell"><SectionHeading eyebrow="Resource library" title="Practical materials for future release." copy="These placeholders show the kinds of approved resources AXP may publish. No file has been supplied for download." /><div className="download-grid">{["Homeownership preparation guide", "Mortgage questions checklist", "Urban living perspective", "HomeReady™ overview"].map((name) => <article key={name}><FileText /><div><h3>{name}</h3><p>Download placeholder · file not yet supplied</p></div><Download /></article>)}</div></div></section>
  </SiteLayout>;
}

{/* @section: impact */}
export function ImpactPage() {
  return <SiteLayout><PageHero eyebrow="Impact" title="Progress should be meaningful to people and communities." copy="AXP’s public impact commitments focus on confidence, preparation, opportunity access and long-term urban wellbeing." image="/images/community_system_2.png" />
    {/* @section: impact-commitments */}
    <section className="section impact-preview"><div className="shell"><div className="split-heading"><SectionHeading eyebrow="What impact means to AXP" title="Focus on outcomes people can understand." copy="These are AXP’s intended areas of contribution. They are not performance claims, reported results or forecasts." /><span className="concept-label">Commitments only · no reported metrics</span></div><div className="impact-framework">{[{ name: "Customer confidence", icon: ShieldCheck, note: "People feel better equipped to consider their choices" }, { name: "Readiness", icon: Users, note: "Aspiring homeowners can identify a practical next step" }, { name: "Opportunity access", icon: Building2, note: "Homeownership possibilities are explained clearly and responsibly" }, { name: "Useful knowledge", icon: GraduationCap, note: "Guidance supports more informed housing decisions" }, { name: "Urban wellbeing", icon: MapIcon, note: "Housing choices keep people, place and long-term value in view" }].map(({ name, icon: Icon, note }, index) => <article key={name} className={`impact-frame impact-frame--${index + 1}`}><Icon /><span>{name}</span><p>{note}</p></article>)}</div></div></section>
    {/* @section: impact-evidence */}
    <section className="section section--alabaster"><div className="shell feature-split"><div><img src="/images/homeready_people_2.png" alt="People considering a future homeownership journey" /></div><div className="feature-copy"><p className="eyebrow">Evidence before claims</p><h2>Report only what can be supported.</h2><p>As approved programmes and opportunities develop, AXP intends to communicate progress with clear definitions, appropriate evidence and honest context.</p><ul className="check-list"><li><Check /> Separate commitments from verified results</li><li><Check /> Label concept and illustrative content visibly</li><li><Check /> Explain what each future measure means</li><li><Check /> Avoid implying outcomes that have not been confirmed</li></ul><Link to="/knowledge" className="button button--primary">Explore the Knowledge Centre <ArrowRight size={16} /></Link></div></div></section>
  </SiteLayout>;
}

{/* @section: media */}
export function MediaPage() {
  const categories = ["News", "Press releases", "Documentaries", "Events", "Gallery", "Videos", "Podcasts", "Awards"];
  return <SiteLayout><PageHero eyebrow="Media Centre" title="The conversations shaping Africa’s housing future." copy="Future news, perspectives, films, events and approved media resources from AXP Africa." />
    <section className="section media-section"><div className="shell"><div className="media-feature"><div className="media-image"><img src="/images/partnership_studio_2.png" alt="Professionals reviewing an African city model" /><button aria-label="Documentary concept not yet available" disabled><Play /></button></div><div><span>Featured documentary concept</span><h2>Housing is infrastructure.</h2><p>A proposed film series exploring how homes connect to jobs, finance, transport, community and long-term urban prosperity.</p><span className="concept-label">Concept preview · media not yet produced</span></div></div><p className="opportunity-disclaimer">Category links are placeholders. No news, film, event, podcast or award content has been supplied for publication.</p><div className="media-category-grid">{categories.map((item, i) => <div className="media-category-placeholder" key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3><small>Content coming after approval</small></div>)}</div></div></section>
    <section className="section section--alabaster"><div className="shell"><SectionHeading eyebrow="Media downloads" title="A clear source for approved brand materials." copy="Approved logos, corporate factsheets, leadership profiles and photography may be available in the future media library." /><div className="download-grid"><article><Download /><div><h3>AXP logo pack</h3><p>Placeholder · approval required</p></div><ChevronRight /></article><article><Download /><div><h3>Corporate factsheet</h3><p>Placeholder · content required</p></div><ChevronRight /></article><article><Download /><div><h3>Media photography</h3><p>Placeholder · assets required</p></div><ChevronRight /></article></div></div></section>
  </SiteLayout>;
}

{/* @section: careers */}
export function CareersPage() {
  return <SiteLayout><PageHero eyebrow="Careers" title="Help make homeownership and urban living more possible." copy="AXP values people who bring curiosity, care, clarity and practical thinking to important housing questions." image="/images/partnership_studio_2.png" />
    <section className="section culture-section"><div className="shell story-grid"><div><p className="eyebrow">Our culture</p><h2>Act with purpose. Earn trust.</h2></div><div className="story-copy"><p className="lead">Our work begins with the people and communities housing is meant to serve.</p><p>That calls for thoughtful communication, practical execution, respect for different perspectives and a commitment to making complex choices easier to understand.</p></div></div></section>
    <section className="section section--alabaster"><div className="shell"><div className="culture-grid">{[{ t: "Start with people", d: "Keep real aspirations and everyday realities in view." }, { t: "Earn trust through clarity", d: "Communicate precisely and set realistic expectations." }, { t: "Design for inclusion", d: "Recognise different household and market contexts." }, { t: "Keep learning", d: "Use research and feedback to improve the public experience." }].map((x) => <article key={x.t}><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div></section>
    <section className="section roles-section"><div className="shell"><SectionHeading eyebrow="Opportunities" title="Future ways to contribute." copy="No vacancies or application process have been supplied for this private website version." /><div className="roles-grid"><article><GraduationCap /><h3>Early careers</h3><p>Future opportunities may support learning across housing, research, customer experience and programme support.</p><span>Programme concept</span></article><article><BriefcaseBusiness /><h3>Open roles</h3><p>Approved roles will be published with clear responsibilities and selection criteria.</p><span>No roles currently supplied</span></article><article><Handshake /><h3>Specialist collaboration</h3><p>Experienced professionals may start a general conversation about future project-based collaboration.</p><Link to="/work-with-axp">Work with AXP <ArrowRight size={15} /></Link></article></div></div></section>
  </SiteLayout>;
}

{/* @section: contact */}
export function ContactPage() {
  const location = useLocation();
  const initialRoute = useMemo(() => new URLSearchParams(location.search).get("route") || "", [location.search]);
  const [selected, setSelected] = useState(initialRoute);
  useEffect(() => setSelected(initialRoute), [initialRoute]);
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
  return <SiteLayout><section className="contact-hero"><div className="shell"><p className="eyebrow eyebrow--gold">Contact AXP</p><h1>Choose why you’re here.</h1><p>Select the reason closest to your enquiry to see the most relevant next step.</p></div></section>
    <section className="section contact-routing"><div className="shell"><div className="route-question"><span>I am…</span><div className="route-grid">{routes.map((route) => <button className={selected === route ? "active" : ""} onClick={() => setSelected(route)} key={route}>{route}<ChevronRight /></button>)}</div></div>{selected ? <div className="route-result"><span>Your next step</span><h2>{routeDetail[selected]}</h2><p>This private concept website does not send enquiries. A short contact form may be enabled only after recipients, privacy language, retention and data handling are approved.</p><div className="route-form-preview"><label><span>Email</span><input placeholder="you@example.com" disabled /></label><label><span>What would you like to discuss?</span><textarea placeholder="Briefly describe your question" disabled /></label><button className="button button--primary" disabled>Continue</button></div><small>Prototype state · no personal information is collected, stored or transmitted</small></div> : <div className="route-empty"><ArrowRight /><h2>Select the description closest to you.</h2><p>Your suggested next step will appear here.</p></div>}</div></section>
    <section className="section contact-office section--alabaster"><div className="shell contact-office-grid"><div><Mail /><h3>General enquiries</h3><p>Official contact details have not yet been supplied for this private website version.</p></div><div><Globe2 /><h3>Pan-African outlook</h3><p>AXP is an Africa-focused brand; opportunity concepts may use Nigerian examples.</p></div><div><ShieldCheck /><h3>Responsible contact</h3><p>Future forms should collect only the information needed to respond appropriately.</p></div></div></section>
  </SiteLayout>;
}

export function NotFoundPage() {
  return <SiteLayout><section className="not-found"><div><span>404</span><h1>We couldn’t find that page.</h1><p>Return to the AXP Africa homepage or choose a clear next step.</p><div className="button-row"><Link to="/" className="button button--primary">Return home</Link><Link to="/contact" className="button button--outline">Contact AXP</Link></div></div></section></SiteLayout>;
}
