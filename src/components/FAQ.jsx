import { FAQ_ITEMS } from '../util/constants';
import './FAQ.css';

export function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="faq-inner section">
        <div className="faq-card">
          <h2 className="faq-title">FAQ</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
