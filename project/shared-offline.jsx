/* FirstStone — Shared chrome: hooks, Nav, CtaBanner, Footer.
   Wrapped in an IIFE so nothing leaks to the script-global scope;
   exposed via window for other Babel scripts to consume. */

(() => {
  const { useState, useEffect, useRef } = React;

  /* -------- hooks -------- */
  function useScrolled(threshold = 30) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > threshold);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);
    return scrolled;
  }

  function useReveal() {
    useEffect(() => {
      const els = document.querySelectorAll(".reveal");
      if (!("IntersectionObserver" in window)) {
        els.forEach((e) => e.classList.add("in"));return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {en.target.classList.add("in");io.unobserve(en.target);}
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      els.forEach((e) => io.observe(e));
      return () => io.disconnect();
    }, []);
  }

  function useCountUp(target, duration = 1400) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    useEffect(() => {
      const el = ref.current;if (!el) return;
      let raf,started = false;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !started) {
            started = true;
            const t0 = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * target));
              if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(el);
      return () => {io.disconnect();cancelAnimationFrame(raf);};
    }, [target, duration]);
    return [ref, value];
  }

  /* -------- cross-page link resolver --------
     On Projects.html / Contact.html, anchors must point back to the home file. */
  const HOME_FILE = "FirstStone%20Construction.html";
  const path = window.location.pathname;
  const isProjectsPage = /Projects\.html$/i.test(path);
  const isContactPage = /Contact\.html$/i.test(path);
  const isHomePage = !isProjectsPage && !isContactPage;
  function pageLink(href) {
    if (href.startsWith("#")) return isHomePage ? href : `${HOME_FILE}${href}`;
    return href;
  }
  function homeLink() {return isHomePage ? "#top" : HOME_FILE;}

  /* -------- NAV -------- */
  function Nav() {
    const scrolled = useScrolled(40);
    const [open, setOpen] = useState(false);
    const links = [
    { href: pageLink("#about"), label: "About" },
    { href: pageLink("#services"), label: "Our Expertise" },
    { href: "Projects.html", label: "Projects", active: isProjectsPage },
    { href: pageLink("#blogs"), label: "Newsroom" }];

    return (
      <>
        <nav className={`nav ${scrolled || !isHomePage ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
          <a href={homeLink()} className="brand" aria-label="FirstStone — Home">
            <img
              className="brand-logo"
              src={(scrolled || !isHomePage) ? "assets/firststone-logo.png" : "assets/firststone-logo-white.png"}
              alt="FirstStone"
            />
          </a>
          <div className="links">
            {links.map((l) =>
            <a key={l.label} href={l.href} className={l.active ? "active" : ""}>{l.label}</a>
            )}
          </div>
          <a className="cta" href="Contact.html" style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(3, 3, 3)" }}>Get Started</a>
          <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </nav>
        <div className={`mobile-menu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          <a href="Contact.html" className="btn white">Get Started <IconArrowUpRight size={14} /></a>
        </div>
      </>);

  }

  /* -------- CTA BANNER -------- */
  function CtaBanner() {
    const IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80";
    return (
      <section className="cta-banner" style={{ paddingTop: 0, paddingBottom: 0, backgroundImage: `url(${IMG})` }}>
        <div className="scrim"></div>
        <div className="content reveal">
          <h2>Explore how FirstStone can bring your next development to life.</h2>
          <a href="Contact.html" className="btn white" style={{ backgroundColor: "rgb(255, 255, 255)", opacity: "0.7" }}>Get Started <IconArrowUpRight size={14} /></a>
        </div>
      </section>);

  }

  /* -------- FOOTER -------- */
  function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="grid">
            <div className="brand-col">
              <a href={homeLink()} className="brand" aria-label="FirstStone — Home">
                <img className="brand-logo" src="assets/firststone-logo-white.png" alt="FirstStone" />
              </a>
              <p>Partner with us to turn strategic ambition into measurable outcomes — built to last.</p>
              <a href="Contact.html" className="btn white">Get Started <IconArrowUpRight size={12} /></a>
              <div className="social">
                <a href="#" aria-label="LinkedIn"><IconLinkedIn size={16} /></a>
                <a href="#" aria-label="Instagram"><IconInstagram size={16} /></a>
                <a href="#" aria-label="Facebook"><IconFacebook size={16} /></a>
                <a href="#" aria-label="YouTube"><IconYouTube size={16} /></a>
              </div>
            </div>
            <div>
              <h5>Main Pages</h5>
              <ul>
                <li><a href={homeLink()}>Home</a></li>
                <li><a href={pageLink("#about")}>About Us</a></li>
                <li><a href="Projects.html">Projects</a></li>
                <li><a href={pageLink("#blogs")}>Blogs</a></li>
                <li><a href="Contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><a href={pageLink("#services")}>Property Development</a></li>
                <li><a href={pageLink("#services")}>Design & Planning</a></li>
                <li><a href={pageLink("#services")}>Construction</a></li>
                <li><a href={pageLink("#services")}>Renovations</a></li>
                <li><a href={pageLink("#services")}>Sustainable Building</a></li>
              </ul>
            </div>
            <div className="contact-col">
              <h5>Contact</h5>
              <div className="item"><div className="v">hello@firststone.ng</div></div>
              <div className="item"><div className="v">+234 (0) 803 555 0118</div></div>
              <div className="item"><div className="v">12 Aldgate Square,<br />Ibadan, Oyo State</div></div>
            </div>
          </div>
          <div className="bottom">
            <div>© 2026 FirstStone Construction. All rights reserved.</div>
            <div className="legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>);

  }

  /* expose */
  Object.assign(window, {
    useScrolled, useReveal, useCountUp,
    pageLink, homeLink, isHomePage, HOME_FILE,
    Nav, CtaBanner, Footer
  });
})();