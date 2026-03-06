import { FEATURES } from '../util/constants';
import cartImg from '../assets/Cart.png';
import chatImg from '../assets/Chat.png';
import './Features.css';

function FeatureCard({ title, description, icon }) {
  const iconSrc = icon === 'cart' ? cartImg : chatImg;
  const iconAlt = icon === 'cart' ? 'Buy and sell' : 'In-app messages';
  return (
    <article className="feature-card">
      <div className="feature-icon" style={{ '--icon-img': `url(${iconSrc})` }}>
        <img src={iconSrc} alt={iconAlt} className="feature-icon-img feature-icon-img--dark" />
        <span className="feature-icon-img feature-icon-img--light" role="img" aria-label={iconAlt} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="features">
      <div className="features-inner section">
        <h2 className="features-title">UW MARKETPLACE</h2>
        <div className="features-grid">
          {FEATURES.map((item) => (
            <FeatureCard key={item.icon} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
