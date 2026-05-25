/* FirstStone — Contact page (form + FAQ for SEO/GEO).
   Nav, CtaBanner, Footer, hooks come from shared.jsx. */

const { useState: useStateC } = React;
const { useReveal: useRevealC, Nav: NavC, CtaBanner: CtaBannerC, Footer: FooterC } = window;

/* -------- FAQ data — also rendered as JSON-LD in the head. -------- */
const FAQ = [
{
  q: "What types of projects do you handle?",
  a: "We work on residential, commercial, hospitality, mixed-use, and renovation projects — ranging from custom homes and apartment blocks to large-scale developments, hotels, offices, schools, and healthcare facilities across Nigeria."
},
{
  q: "How is the project cost estimated?",
  a: "We provide a detailed, line-item estimate after our discovery call and a site visit. Costs are based on scope, materials, finishes, site conditions, and programme. You receive a transparent breakdown with no hidden charges, and we keep you updated as decisions are made."
},
{
  q: "How long does a typical project take?",
  a: "Timeline depends on scope. A residential renovation typically takes 8–16 weeks; a custom home, 6–12 months; a commercial or mixed-use development, 12–24 months. We commit to a programme in writing before construction starts and report against it weekly."
},
{
  q: "How do you ensure quality during construction?",
  a: "Quality is built in, not inspected in. We use a multi-stage QA process: daily site checks, weekly photographic reports, certified material sign-off, third-party structural inspections, and a closing snag list resolved before handover. Every project also comes with our 12-month aftercare commitment."
},
{
  q: "Do you handle permits, approvals, and compliance?",
  a: "Yes. We manage the full statutory pathway — design submissions, planning permits, environmental clearances, building approvals, and post-completion certifications — across local and state authorities. We coordinate with engineers, surveyors, and regulators so you don't have to."
},
{
  q: "Can you work with my existing architect or designer?",
  a: "Absolutely. We collaborate with external architects, interior designers, and consultants. We can also bring you our in-house design team if you'd prefer a single point of accountability from concept to completion."
},
{
  q: "What regions do you serve?",
  a: "Our headquarters is in Ibadan, Oyo State, and we deliver projects across Lagos, Abuja, Port Harcourt, Kano, Enugu, and the broader South-West, South-East, and FCT regions. For sites outside these, get in touch and we'll let you know if we can support."
},
{
  q: "How do I get started with my project?",
  a: "Fill out the form on this page or send us an email at hello@firststone.ng. Our team responds within 24 hours to schedule a discovery call. From there, we'll arrange a site visit, scope out the brief, and prepare a proposal within 2–3 weeks."
}];


/* -------- HEADER + FORM -------- */
function ContactHero() {
  const [sent, setSent] = useStateC(false);
  return (
    <section className="cp-hero" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="pill" style={{ marginBottom: 24 }}>Get in Touch</div>
            <h1 className="cp-title">Ready to build something?</h1>
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
            <h3 style={{ fontWeight: "600" }}>Let's talk about your goals</h3>
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

/* -------- FAQ -------- */
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`cp-faq-item ${open ? "is-open" : ""}`}>
      <button className="cp-faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="cp-faq-icon" aria-hidden="true">
          <span className="bar h"></span>
          <span className="bar v"></span>
        </span>
      </button>
      <div className="cp-faq-a-wrap">
        <div className="cp-faq-a">{a}</div>
      </div>
    </div>);

}

function FaqSection() {
  const [open, setOpen] = useStateC(0); // first item open by default
  return (
    <section className="cp-faq-section">
      <div className="container">
        <div className="cp-faq-head reveal">
          <div className="pill" style={{ marginBottom: 24 }}>FAQ</div>
          <h2 className="cp-faq-title">You have questions.<br />We have answers.</h2>
        </div>
        <div className="cp-faq-list reveal">
          {FAQ.map((item, i) =>
          <FaqItem
            key={i}
            q={item.q}
            a={item.a}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)} />

          )}
        </div>
        <div className="cp-faq-foot reveal">
          <p>Still have questions?</p>
          <a href="mailto:hello@firststone.ng" className="btn dark">Email our team <IconArrowUpRight size={12} /></a>
        </div>
      </div>
    </section>);

}

/* -------- PAGE -------- */
function ContactApp() {
  useRevealC();
  return (
    <>
      <NavC />
      <ContactHero />
      <FaqSection />
      <CtaBannerC />
      <FooterC />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);