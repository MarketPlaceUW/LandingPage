import { FEATURES } from '../util/constants';
import './Features.css';

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        {icon === 'cart' ? <CartIcon /> : <MessageIcon />}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </article>
  );
}

export function Features() {
  return (
    <section id="products" className="features">
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
