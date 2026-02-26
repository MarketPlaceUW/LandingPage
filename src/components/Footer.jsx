import { CONTACT_EMAIL } from '../util/constants';
import { Button } from './Button';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section">
        <div className="footer-cta">
          <h2 className="footer-heading">
            Get the latest on the UW Marketplace release.
          </h2>
          <Button className="cta-button--footer">Join Waitlist</Button>
        </div>
        <div className="footer-contact">
          <h3 className="footer-contact-title">Contact Us</h3>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="footer-email"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="footer-social">
            <span className="footer-social-icon" aria-hidden>
              f
            </span>
            <span className="footer-social-icon" aria-hidden>
              𝕏
            </span>
            <span className="footer-social-icon" aria-hidden>
              in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
