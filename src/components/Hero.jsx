import { HERO_CLOSING, HERO_STAT } from '../util/constants';
import { Button } from './Button';
import homepageMockup from '../assets/Homepage Mockup.png';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner section">
        <div className="hero-phone">
          <img
            src={homepageMockup}
            alt="UW Marketplace app on phone"
            className="hero-phone-img"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">UW MARKETPLACE</h1>
          <p className="hero-subtitle">
            Buy. Sell. Connect with verified UW students only.
          </p>
          <p className="hero-stat">{HERO_STAT}</p>
          <Button>Join Waitlist</Button>
          <p className="hero-closing">{HERO_CLOSING}</p>
        </div>
      </div>
    </section>
  );
}
