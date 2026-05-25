import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconLinkedIn, IconInstagram, IconFacebook, IconYouTube } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="brand-col">
            <Link to="/" className="brand" aria-label="FirstStone — Home">
              <img className="brand-logo" src="/assets/firststone-logo-white.png" alt="FirstStone" />
            </Link>
            <p>Partner with us to turn strategic ambition into measurable outcomes — built to last.</p>
            <Link to="/contact" className="btn white">Get Started <IconArrowUpRight size={12} /></Link>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to={{ pathname: '/', hash: '#blogs' }}>Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link to={{ pathname: '/', hash: '#services' }}>Property Development</Link></li>
              <li><Link to={{ pathname: '/', hash: '#services' }}>Design & Planning</Link></li>
              <li><Link to={{ pathname: '/', hash: '#services' }}>Construction</Link></li>
              <li><Link to={{ pathname: '/', hash: '#services' }}>Renovations</Link></li>
              <li><Link to={{ pathname: '/', hash: '#services' }}>Sustainable Building</Link></li>
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
    </footer>
  );
}
