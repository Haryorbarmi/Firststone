import { Link } from 'react-router-dom';
import { IconArrowUpRight } from './Icons';

export default function CtaBanner() {
  const IMG = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80';
  return (
    <section className="cta-banner" style={{ paddingTop: 0, paddingBottom: 0, backgroundImage: `url(${IMG})` }}>
      <div className="scrim"></div>
      <div className="content reveal">
        <h2 style={{ fontWeight: '500' }}>Explore how FirstStone can bring your next development to life.</h2>
        <Link to="/contact" className="btn white" style={{ backgroundColor: 'rgb(255, 255, 255)', opacity: '0.7' }}>
          Get Started <IconArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
