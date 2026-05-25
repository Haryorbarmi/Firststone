/* FirstStone — Home page sections (hero, about, projects, etc.)
   Nav, CtaBanner, Footer and shared hooks live in shared.jsx. */

const { useState, useEffect, useRef } = React;
const { useScrolled, useReveal, useCountUp, Nav, CtaBanner, Footer, pageLink } = window;

/* -------------------------------------------------------------
   HERO — full-viewport, video bg, right-aligned text
   ------------------------------------------------------------- */
function Hero() {
  const VIDEO = "assets/hero-bg.mp4";
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.volume = 0;
    v.defaultMuted = true;
    const enforceMute = () => {v.muted = true;v.volume = 0;};
    v.addEventListener("volumechange", enforceMute);
    v.addEventListener("play", enforceMute);
    return () => {
      v.removeEventListener("volumechange", enforceMute);
      v.removeEventListener("play", enforceMute);
    };
  }, []);
  return (
    <section className="hero" id="top">
      <div className="bg-fallback"></div>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="auto"
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 400ms ease-out' }}>
        
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="container">
        <div className="inner reveal" style={{ textAlign: "left" }}>
          <h1 style={{ textAlign: "left", fontWeight: "500", fontSize: "66px" }}>Building Excellence<br />Since Day One</h1>
          <p className="sub" style={{ fontSize: "18px" }}>Premium construction services for residential and commercial projects across Nigeria. From foundation to finish, we deliver on time, on budget, and beyond expectations.</p>
          <div className="ctas" style={{ alignItems: "center", textAlign: "left", justifyContent: "flex-start" }}>
            <a href="#contact" className="btn brand" style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(19, 19, 19)", opacity: "0.7" }}>Start Your Project <IconArrowUpRight size={14} /></a>
            <a href="#projects" className="btn outline">View Our Work</a>
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   ABOUT statement (scroll-linked word reveal)
   ------------------------------------------------------------- */
function About() {
  const text = "We're a specialist main contractor delivering residential, commercial, and hospitality projects built on trust and precision. With a commitment to honest work and dependable execution, we create spaces that stand strong, serve their purpose, and endure for years to come.";
  const words = text.split(" ");
  const wrapRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // start when top of element is at 80% of viewport; finish when bottom at 35%
      const start = vh * 0.85;
      const end = vh * 0.20;
      const total = start - end;
      const p = Math.min(1, Math.max(0, (start - rect.top) / total));
      // Apply staggered reveal: each word has its own [0..1] slice
      const N = wordRefs.current.length;
      // Tighter window so the reveal feels active mid-scroll
      const spread = 0.55; // how much of total progress each word occupies
      for (let i = 0; i < N; i++) {
        const w = wordRefs.current[i];
        if (!w) continue;
        const s = i / (N - 1) * (1 - spread);
        const e = s + spread;
        let wp = (p - s) / (e - s);
        wp = Math.min(1, Math.max(0, wp));
        // ease-out cubic
        const eased = 1 - Math.pow(1 - wp, 3);
        w.style.setProperty("--p", eased.toFixed(3));
      }
    };
    const onScroll = () => {if (!raf) raf = requestAnimationFrame(update);};
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <p className="big-statement scroll-reveal-text" ref={wrapRef}>
          {words.map((w, i) =>
          <React.Fragment key={i}>
              <span
              className="sr-word"
              ref={(el) => wordRefs.current[i] = el}>
              {w}</span>
              {i < words.length - 1 ? " " : ""}
            </React.Fragment>
          )}
        </p>
        <div className="actions reveal">
          <a href="#process" className="btn ghost">Learn Our Story <IconArrowUpRight size={12} /></a>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   PROJECTS — featured grid
   ------------------------------------------------------------- */
function Projects() {
  const projects = [
  {
    tag: "Hospitality",
    title: "Lakeside Resort & Spa",
    loc: "Victoria Island, Lagos",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Commercial / Tech",
    title: "Vertex Tech Park",
    loc: "Lekki, Lagos",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Student Housing",
    title: "Urban Nest Student Living",
    loc: "Ibadan, Oyo",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Residential",
    title: "Grand Horizon Hotel & Suites",
    loc: "Abuja",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Mixed-Use",
    title: "Harbour Point Towers",
    loc: "Port Harcourt, Rivers",
    img: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=900&q=80"
  },
  {
    tag: "Healthcare",
    title: "Northbridge Medical Centre",
    loc: "Kano",
    img: "https://images.unsplash.com/photo-1587351177554-d736139d9d2e?auto=format&fit=crop&w=900&q=80"
  }];

  // Duplicate the list so the marquee can loop seamlessly
  const loop = [...projects, ...projects];

  return (
    <section className="alt" id="projects">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="pill" style={{ marginBottom: 20 }}>Projects</div>
            <h2 style={{ fontWeight: "500" }}>Our Featured Projects</h2>
          </div>
          <p className="sub">Explore projects where thoughtful design meets reliable execution — each one tailored to meet real-world demands.</p>
        </div>
      </div>
      <div className="projects-marquee reveal" style={{ "--count": projects.length }}>
        <div className="marquee-track">
          {loop.map((p, i) =>
          <div className="proj-card" key={i}>
              <div className="img" style={{ backgroundImage: `url(${p.img})` }}></div>
              <div className="scrim"></div>
              <div className="tag">{p.tag}</div>
              <div className="meta">
                <h3 style={{ fontWeight: "400" }}>{p.title}</h3>
                <div className="loc">{p.loc}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   PARTNERS — logo grid
   ------------------------------------------------------------- */
function Partners() {
  const logos = [
  { kind: "circle", label: "Logoipsum" },
  { kind: "wave", label: "Logoipsum" },
  { kind: "gear", label: "Logoipsum" },
  { kind: "lines", label: "Logoipsum" },
  { kind: "dot", label: "oslo." },
  { kind: "tri", label: "Senra" },
  { kind: "m", label: "Verano" },
  { kind: "globe", label: "Mindara" },
  { kind: "knot", label: "IPSUM" },
  { kind: "bars", label: "Logoipsum" }];

  return (
    <section className="alt">
      <div className="container">
        <div className="partners-head reveal">
          <div className="pill" style={{ display: "inline-flex" }}>Our Partners</div>
          <h2 style={{ marginTop: 24, fontWeight: "500" }}>Building lasting relationships<br />with every project</h2>
        </div>
        <div className="partners-grid reveal">
          {logos.map((l, i) =>
          <div className="partner-card" key={i}><PartnerLogo kind={l.kind} label={l.label} /></div>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   BIG TESTIMONIAL — image card with quote overlay
   ------------------------------------------------------------- */
function BigTestimonial() {
  const IMG = "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000&q=80";
  return (
    <section className="alt" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="big-test reveal" style={{ backgroundImage: `url(${IMG})` }}>
          <div className="scrim"></div>
          <div className="content">
            <div className="avatars">
              <div className="av" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80)" }}></div>
              <div className="av brand"><BrandMark size={22} color="#FFFFFF" /></div>
            </div>
            <div className="quote">
              Our project was completed ahead of schedule without compromising on quality. It's rare to find a team this reliable in construction.
            </div>
            <div className="author">
              <span className="name">Priya Verma</span>
              <span className="role">Real Estate Developer</span>
            </div>
          </div>
          <div className="bottom-actions">
            <a className="watch" href="#"><span className="play"><IconPlay size={12} /></span> Watch video</a>
            <a className="btn white" href="#contact" style={{ backgroundColor: "rgba(255, 250, 249, 0.85)" }}>Get Started <IconArrowUpRight size={12} /></a>
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   SERVICES — left intro, right rows
   ------------------------------------------------------------- */
function Services() {
  const items = [
  {
    title: "Property Development",
    desc: "End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.",
    tags: ["Land Acquisition", "Feasibility Studies", "Masterplanning", "Residential Builds"],
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Design & Planning",
    desc: "Collaborative design and planning services that balance creativity, compliance, and buildability at scale.",
    tags: ["Architectural Design", "Technical Drawings", "Design Coordination", "Compliance"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Construction Management",
    desc: "Full oversight of construction phases to ensure projects are delivered on time, on budget, and to the highest standards.",
    tags: ["Site Management", "Programme Control", "Quality Assurance", "Cost Control"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Infrastructure & Logistics",
    desc: "Delivery of essential infrastructure and logistics planning to support large residential and urban developments.",
    tags: ["Roads & Utilities", "Site Logistics", "Phasing Strategy", "Access Planning", "Utilities Coordination"],
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
  }];

  return (
    <section className="alt" id="services">
      <div className="container">
        <div className="services-grid">
          <div className="intro reveal">
            <div className="pill">Services We Provide</div>
            <h2 style={{ fontWeight: "500" }}>Deep expertise across the sectors that matter</h2>
            <p>From concept to completion — we bring together the disciplines that turn ambitious briefs into finished, lasting places.</p>
          </div>
          <div className="svc-list">
            {items.map((it, i) =>
            <div className="svc-row reveal" key={i}>
                <div className="pic" style={{ backgroundImage: `url(${it.img})` }}></div>
                <div className="body">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <div className="tags">
                    {it.tags.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   PROCESS — Dark, tabs
   ------------------------------------------------------------- */
function Process() {
  const [active, setActive] = useState(0);
  const steps = [
  {
    label: "Step 1",
    icon: IconBinoculars,
    phase: "Phase 01",
    title: "Discovery & Brief",
    body: "We begin every project with a thorough discovery session — understanding your goals, budget envelope, site constraints, and timeline. This phase defines the entire project foundation and prevents costly changes down the line.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Step 2",
    icon: IconPencilRuler,
    phase: "Phase 02",
    title: "Planning & Design",
    body: "Our architects and engineers translate the brief into detailed drawings, materials specifications, and a realistic programme. We align design ambition with buildability before a single stone is laid.",
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Step 3",
    icon: IconBuilding2,
    phase: "Phase 03",
    title: "Construction & Delivery",
    body: "Site teams take over with rigorous programme control, daily quality checks, and transparent weekly reporting. You always know what's happening on site — and what's coming next.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Step 4",
    icon: IconHandshake,
    phase: "Phase 04",
    title: "Handover & Follow-up",
    body: "We hand over with a complete snag list resolved, full documentation, and a 12-month aftercare commitment. Our relationship doesn't end at completion — it matures into long-term partnership.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
  }];

  const cur = steps[active];
  return (
    <section className="dark" id="process">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="pill" style={{ marginBottom: 20 }}>Our Process</div>
            <h2 style={{ color: "var(--fs-white)", fontWeight: "500" }}>How we deliver<br />every project</h2>
          </div>
          <p className="sub">A proven four-phase methodology built for complex builds — from first brief to final handover, nothing is left to chance.</p>
        </div>

        <div className="process-wrap reveal">
          <div className="process-tabs">
            {steps.map((s, i) => {
              const I = s.icon;
              return (
                <button key={i} className={`proc-tab ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
                  <I size={20} />{s.label}
                </button>);

            })}
          </div>
          <div className="process-content">
            <div className="left">
              <div className="phase">{cur.phase}</div>
              <div className="phase-divider"></div>
              <h3 style={{ fontWeight: "300" }}>{cur.title}</h3>
              <p>{cur.body}</p>
            </div>
            <div className="right" style={{ backgroundImage: `url(${cur.img})` }}></div>
          </div>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   STATS — Dark, 2x2 grid
   ------------------------------------------------------------- */
function StatCard({ n, suffix = "", label, body }) {
  const [ref, val] = useCountUp(n, 1400);
  return (
    <div className="stat-card reveal" ref={ref}>
      <div className="n">{val}{suffix}</div>
      <div>
        <div className="label">{label}</div>
        <p>{body}</p>
      </div>
    </div>);

}
function Stats() {
  return (
    <section className="dark" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stats-head reveal">
          <h2 style={{ fontWeight: "500" }}>Building with experience<br />you can measure</h2>
        </div>
        <div className="stats-grid">
          <StatCard n={20} suffix="+" label="Years of experience" body="Delivering residential, commercial, and hospitality projects with trust, precision, and dependable execution since day one." />
          <StatCard n={500} suffix="+" label="Projects completed" body="Homes, student living spaces, and mixed-use developments built to last — on time, on budget, and beyond expectations." />
          <StatCard n={98} suffix="%" label="Client satisfaction" body="Measured across post-handover surveys. We track every project, learn from every brief, and improve every quarter." />
          <StatCard n={37} suffix="K+" label="Square metres delivered" body="Sq. ft. handed-over across residential and commercial projects where families live, businesses thrive, and communities grow." />
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   TESTIMONIALS — quote cards
   ------------------------------------------------------------- */
function Testimonials() {
  const items = [
  {
    quote: "In an industry where delays are common, they delivered ahead of schedule without compromising on quality. That reliability is rare.",
    name: "Aisha Verma", role: "Real Estate Developer",
    av: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "What stood out was their honesty and commitment. They treated our home like their own and paid attention to every detail.",
    name: "Sunil Kapoor", role: "Residential Client",
    av: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "We had a clear vision, but they made it even better. The entire process was smooth, transparent, and stress-free from start to finish.",
    name: "Rajesh Mehta", role: "Homeowner",
    av: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their team handled a complex commercial project with complete professionalism. Timelines were met and the quality exceeded expectations.",
    name: "Ankit Sharma", role: "Director, Sharma Enterprises",
    av: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }];

  const loop = [...items, ...items];
  return (
    <section className="alt">
      <div className="container">
        <div className="tests-head reveal" style={{ marginBottom: 48 }}>
          <div className="pill" style={{ marginBottom: 20 }}>Testimonials</div>
          <h2 style={{ fontWeight: "500" }}>What Our Clients Say<br />About Working With Us</h2>
        </div>
      </div>
      <div className="tests-marquee reveal">
        <div className="tests-track">
          {loop.map((t, i) =>
          <div className="test-card" key={i}>
              <div className="mark" style={{ color: "rgb(31, 138, 91)" }}>"</div>
              <p className="quote">{t.quote}</p>
              <div className="who">
                <div className="av" style={{ backgroundImage: `url(${t.av})` }}></div>
                <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   BLOGS — Insights & industry updates
   ------------------------------------------------------------- */
function Blogs() {
  const items = [
  {
    cat: "Site Safety",
    title: <>Top 10 Construction Site Safety Practices<br/>Every Worker Must Know</>,
    excerpt: "Construction sites are high-risk environments — but most accidents are preventable. Here are the essential safety practices every team should follow to stay protected.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    cat: "Building Materials",
    title: "Concrete vs. Steel vs. Timber: Choosing the Right Building Material",
    excerpt: "Choosing the right structural material is one of the most consequential decisions in any construction project. Each material — concrete, steel, and timber — comes with distinct strengths.",
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80"
  }];

  return (
    <section className="alt" id="blogs">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="pill" style={{ marginBottom: 20 }}>Blogs</div>
            <h2 style={{ fontWeight: "500" }}>Insights & Industry Updates</h2>
          </div>
          <p className="sub">Stay informed with the latest trends, project insights, and practical knowledge shaping modern construction.</p>
        </div>
        <div className="blogs-grid reveal">
          {items.map((b, i) =>
          <article className="blog-card" key={i}>
              <div className="pic">
                <div className="inner-img" style={{ backgroundImage: `url(${b.img})` }}></div>
                <div className="cat-tag">{b.cat}</div>
              </div>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   CONTACT
   ------------------------------------------------------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="alt">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="pill" style={{ marginBottom: 24 }}>Get in Touch</div>
            <h2 style={{ fontWeight: "500" }}>Ready to build<br />something<br />that lasts?</h2>
            <p>Whether it's a residential project, commercial space, or renovation — we're here to bring your vision to life with quality, clarity, and on-time delivery.</p>
            <div className="contact-info-row">
              <div className="row">
                <div className="ic"><IconMail size={18} /></div>
                <div><div className="label">Email</div><div className="val">hello@firststone.ng</div></div>
              </div>
              <div className="row">
                <div className="ic"><IconPhone size={18} /></div>
                <div><div className="label">Phone</div><div className="val">+234 (0) 803 555 0118</div></div>
              </div>
              <div className="row">
                <div className="ic"><IconPin size={18} /></div>
                <div><div className="label">Office</div><div className="val">12 Aldgate Square,<br />Ibadan, Oyo State</div></div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
            <h3>Let's talk about your goals</h3>
            <p className="sub">Fill out the form below and our nearest regional office will get back to you within 24 hours.</p>
            {sent ?
            <div className="cf-success" style={{ marginTop: 32 }}>✓ Thanks — we'll be in touch within 24 hours.</div> :

            <div className="cf-fields">
                <div className="cf-row">
                  <div className="cf-field">
                    <label>Name</label>
                    <input type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className="cf-field">
                    <label>Email</label>
                    <input type="email" placeholder="jane@firststone.ng" required />
                  </div>
                </div>
                <div className="cf-field">
                  <label>Address</label>
                  <input type="text" placeholder="Project location" />
                </div>
                <div className="cf-field">
                  <label>You are interested in</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option>Residential Construction</option>
                    <option>Commercial Projects</option>
                    <option>Renovations & Remodeling</option>
                    <option>Project Management</option>
                    <option>Consultation & Planning</option>
                    <option>Sustainable Building</option>
                  </select>
                </div>
                <div className="cf-field">
                  <label>Message</label>
                  <textarea placeholder="Write your message…"></textarea>
                </div>
                <label className="cf-check">
                  <input type="checkbox" />
                  Yes, I'd like to receive product updates and insights from FirstStone. Unsubscribe anytime.
                </label>
                <div className="cf-submit">
                  <button className="btn dark" type="submit">Send Enquiry <IconArrowRight size={14} /></button>
                </div>
              </div>
            }
          </form>
        </div>
      </div>
    </section>);

}

/* -------------------------------------------------------------
   APP
   ------------------------------------------------------------- */
function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Partners />
      <BigTestimonial />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Blogs />
      <Contact />
      <CtaBanner />
      <Footer />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);