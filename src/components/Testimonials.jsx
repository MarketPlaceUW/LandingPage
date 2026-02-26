import { TESTIMONIALS } from '../util/constants';
import './Testimonials.css';

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">User Quotes</h2>
        <div className="testimonials-carousel">
          {TESTIMONIALS.map((item, i) => (
            <div key={i} className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>
              <cite className="testimonial-author">— {item.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
