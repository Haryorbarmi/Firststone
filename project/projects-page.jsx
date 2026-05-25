/* FirstStone — Projects page (case studies gallery).
   Nav, CtaBanner, Footer, hooks come from shared.jsx. */

const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;
const { useReveal: useRevealP, Nav: NavP, CtaBanner: CtaBannerP, Footer: FooterP, pageLink: pageLinkP } = window;

const ALL_PROJECTS = [
{
  tag: "Hospitality",
  title: "Lakeside Resort & Spa",
  loc: "Victoria Island, Lagos",
  year: 2024,
  img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Student Housing",
  title: "Urban Nest Student Living",
  loc: "Ibadan, Oyo",
  year: 2024,
  img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Hospitality",
  title: "Grand Horizon Hotel & Suites",
  loc: "Abuja, FCT",
  year: 2023,
  img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Commercial",
  title: "Vertex Tech Park",
  loc: "Lekki, Lagos",
  year: 2023,
  img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Mixed-Use",
  title: "Harbour Point Towers",
  loc: "Port Harcourt, Rivers",
  year: 2023,
  img: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Healthcare",
  title: "Northbridge Medical Centre",
  loc: "Kano",
  year: 2022,
  img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Residential",
  title: "Cedar Park Townhomes",
  loc: "Enugu",
  year: 2022,
  img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Education",
  title: "Atlas International School",
  loc: "Abuja, FCT",
  year: 2022,
  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Commercial",
  title: "Meridian Office Pavilion",
  loc: "Victoria Island, Lagos",
  year: 2021,
  img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
},
{
  tag: "Residential",
  title: "Palm Crescent Villas",
  loc: "Lekki, Lagos",
  year: 2021,
  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
}];


const CATEGORIES = ["All", "Hospitality", "Residential", "Commercial", "Student Housing", "Mixed-Use", "Healthcare", "Education"];

/* -------- HEADER -------- */
function ProjectsHeader() {
  return (
    <header className="pp-header">
      <div className="container">
        <div className="pill" style={{ marginBottom: 24 }}>Case Studies</div>
        <h1 className="pp-title" style={{ fontWeight: "500" }}>Built with precision.<br />Delivered with confidence.</h1>
        <p className="pp-sub">Explore a selection of residential, commercial, and hospitality projects — each delivered with precision, quality, and attention to detail.</p>
      </div>
    </header>);

}

/* -------- FILTER PILLS -------- */
function FilterBar({ active, setActive, counts }) {
  return (
    <div className="pp-filters">
      <div className="container">
        <div className="pp-filter-row">
          {CATEGORIES.map((c) =>
          <button
            key={c}
            className={`pp-chip ${active === c ? "is-active" : ""}`}
            onClick={() => setActive(c)}>
            
              {c}
              <span className="pp-chip-count">{counts[c] || 0}</span>
            </button>
          )}
        </div>
      </div>
    </div>);

}

/* -------- GRID -------- */
function ProjectCard({ p }) {
  return (
    <article className="pp-card">
      <div className="pp-card-img" style={{ backgroundImage: `url(${p.img})` }}></div>
      <div className="pp-card-scrim"></div>
      <div className="pp-card-tag">{p.tag}</div>
      <div className="pp-card-meta">
        <h3>{p.title}</h3>
        <div className="pp-card-loc">{p.loc} · {p.year}</div>
      </div>
    </article>);

}

function ProjectsGrid({ projects }) {
  return (
    <section className="pp-grid-section">
      <div className="container">
        <div className="pp-grid">
          {projects.map((p, i) =>
          <ProjectCard p={p} key={`${p.title}-${i}`} />
          )}
        </div>
        {projects.length === 0 &&
        <div className="pp-empty">No projects in this category yet — check back soon.</div>
        }
      </div>
    </section>);

}

/* -------- PAGE -------- */
function ProjectsApp() {
  useRevealP();
  const [active, setActive] = useStateP("All");

  const counts = useMemoP(() => {
    const c = { All: ALL_PROJECTS.length };
    for (const p of ALL_PROJECTS) c[p.tag] = (c[p.tag] || 0) + 1;
    return c;
  }, []);

  const filtered = useMemoP(() => {
    return active === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.tag === active);
  }, [active]);

  return (
    <>
      <NavP />
      <ProjectsHeader />
      <FilterBar active={active} setActive={setActive} counts={counts} />
      <ProjectsGrid projects={filtered} />
      <CtaBannerP />
      <FooterP />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsApp />);