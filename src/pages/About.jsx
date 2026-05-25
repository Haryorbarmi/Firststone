import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import '../styles/about.css';

function AboutHero() {
  const HERO_IMG = 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=2400&q=80';
  return (
    <header className="ap-hero">
      <div className="container">
        <div className="ap-hero-card reveal" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="ap-hero-scrim"></div>
          <div className="ap-hero-content">
            <h1 style={{ color: 'rgb(255, 255, 255)' }}>Generations of building,<br />one standard of excellence</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutIntro() {
  return (
    <section className="ap-intro">
      <div className="container">
        <div className="ap-intro-body reveal">
          <p>Our team comprises over 250 talented individuals, some known to senior management for many years and others hired for their additional experience and expertise.</p>
          <p>We value the mix of strengths and insights this approach brings, and we are proud to have built a team with a diversity of perspectives and backgrounds.</p>
          <p>Our active in-house graduate recruitment and training programmes also play a key role in creating an effective and united team while also helping foster the industry's next generation.</p>
          <p>FirstStone has no B-teams, only dedicated individuals who have a vested interest in building our reputation for successful delivery.</p>
        </div>
      </div>
    </section>
  );
}

function StatLine({ n, suffix, label }) {
  const [ref, val] = useCountUp(n, 1200);
  return (
    <div className="ap-stat" ref={ref}>
      <div className="ap-stat-n" style={{ fontWeight: '500' }}>{val}{suffix}</div>
      <div className="ap-stat-label">{label}</div>
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="ap-stats">
      <div className="container">
        <div className="ap-stats-grid reveal">
          <StatLine n={250} suffix="+" label="People on the team" />
          <StatLine n={15} suffix="+" label="Years building" />
          <StatLine n={500} suffix="+" label="Projects delivered" />
          <StatLine n={6} suffix="" label="Regional offices" />
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="ap-mv">
      <div className="container">
        <div className="ap-mv-head reveal">
          <div className="pill" style={{ display: 'inline-flex' }}>Our North Star</div>
          <h2 style={{ fontWeight: '500' }}>Mission &amp; Vision.</h2>
        </div>
        <div className="ap-mv-grid reveal">
          <article className="ap-mv-card">
            <h3>Our Mission</h3>
            <p>To deliver high-quality construction projects with precision, transparency, and reliability — building spaces that stand the test of time.</p>
          </article>
          <article className="ap-mv-card">
            <h3>Our Vision</h3>
            <p>To be a trusted construction partner known for delivering durable, high-quality spaces that shape communities and support growth.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function DirectorNote() {
  const PORTRAIT = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80';
  return (
    <section className="ap-director">
      <div className="container">
        <div className="ap-director-head reveal">
          <div className="pill" style={{ marginBottom: 24 }}>From the Director's Desk</div>
          <h2>A Note from Our Director</h2>
        </div>
        <div className="ap-director-card reveal">
          <div className="ap-director-left">
            <div className="ap-director-mark" aria-hidden="true">
              <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
                <path d="M0 32V18C0 8.06 8.06 0 18 0v6C12.5 6 8 10.5 8 16h10v16H0zm24 0V18C24 8.06 32.06 0 42 0v6c-5.5 0-10 4.5-10 10h10v16H24z" fill="currentColor" />
              </svg>
            </div>
            <p className="ap-director-quote">
              At the heart of everything we build is a simple belief — quality should never be compromised. Over the years, we've had the privilege of working on diverse projects, each one teaching us the importance of precision, trust, and accountability. Construction is more than just structures; it's about creating spaces where people live, work, and grow. That responsibility drives us to maintain the highest standards in every stage of our work. As we continue to grow, our focus remains unchanged — to deliver projects that are built with integrity, completed with care, and designed to stand the test of time.
            </p>
            <div className="ap-director-author">
              <div className="ap-director-name">Adebayo Okonkwo</div>
              <div className="ap-director-role">Founder &amp; Managing Director</div>
            </div>
          </div>
          <div className="ap-director-portrait" style={{ backgroundImage: `url(${PORTRAIT})` }}></div>
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { year: '2024', body: 'Celebrates 15 years of building with a retrospective showcase of our most iconic projects and milestones across Nigeria.' },
  { year: '2022', body: 'Wins a prestigious national design award for an innovative mixed-use development in Lagos.' },
  { year: '2021', body: 'Participates in a national interior design expo, showcasing innovative concepts and gaining industry recognition.' },
  { year: '2019', body: 'Opens a second office in Lagos to meet growing demand and takes on larger projects, including hospitality and retail.' },
  { year: '2016', body: 'Expands into commercial construction, delivering offices and tech parks for blue-chip clients.' },
  { year: '2010', body: 'Founded in Ibadan with a small team and a simple commitment — build with precision, deliver with confidence.' },
];

function Journey() {
  return (
    <section className="ap-journey">
      <div className="container">
        <div className="ap-journey-grid">
          <div className="ap-journey-left reveal">
            <div className="pill" style={{ marginBottom: 24 }}>Our Journey</div>
            <h2>Our values<br />What drives our<br />mission</h2>
          </div>
          <ol className="ap-journey-list reveal">
            {JOURNEY.map(it => (
              <li className="ap-journey-row" key={it.year}>
                <div className="ap-journey-year">{it.year}</div>
                <div className="ap-journey-body">{it.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  { name: 'Adebayo Okonkwo', role: 'Founder & Managing Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Sarah Okonkwo', role: 'Partner, Growth & Strategy', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'James Whitfield', role: 'Partner, Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80' },
  { name: 'Chris Renwick', role: 'Managing Consultant', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ariana Patel', role: 'Senior Consultant, Digital', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80' },
  { name: 'David Liang', role: 'Senior Consultant, Digital', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
];

function Team() {
  return (
    <section className="ap-team">
      <div className="container">
        <div className="ap-team-head reveal">
          <div className="pill" style={{ marginBottom: 24 }}>Our Team</div>
          <h2>The people behind<br />every project</h2>
        </div>
        <div className="ap-team-grid reveal">
          {TEAM.map((m, i) => (
            <article className="ap-team-card" key={i}>
              <div className="ap-team-pic" style={{ backgroundImage: `url(${m.img})` }}></div>
              <div className="ap-team-foot">
                <div>
                  <div className="ap-team-name">{m.name}</div>
                  <div className="ap-team-role">{m.role}</div>
                </div>
                <a className="ap-team-linkedin" href="#" aria-label={`${m.name} on LinkedIn`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.36c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21h-4V9z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useReveal();
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <StatsStrip />
      <MissionVision />
      <DirectorNote />
      <Journey />
      <Team />
    </>
  );
}
