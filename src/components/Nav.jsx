import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '../hooks/useScrolled';
import { IconArrowUpRight } from './Icons';

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const links = [
    { to: '/about', label: 'About', active: pathname === '/about' },
    { to: { pathname: '/', hash: '#services' }, label: 'Our Expertise' },
    { to: '/projects', label: 'Projects', active: pathname === '/projects' },
    { to: { pathname: '/', hash: '#blogs' }, label: 'Newsroom' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled || !isHome ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <Link to="/" className="brand" aria-label="FirstStone — Home">
          <img
            className="brand-logo"
            src={scrolled || !isHome ? '/assets/firststone-logo.png' : '/assets/firststone-logo-white.png'}
            alt="FirstStone"
          />
        </Link>
        <div className="links">
          {links.map(l => (
            <Link key={l.label} to={l.to} className={l.active ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link className="cta" to="/contact">Get Started</Link>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {links.map(l => (
          <Link key={l.label} to={l.to}>{l.label}</Link>
        ))}
        <Link to="/contact" className="btn white">Get Started <IconArrowUpRight size={14} /></Link>
      </div>
    </>
  );
}
