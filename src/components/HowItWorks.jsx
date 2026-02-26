import { HOW_IT_WORKS_STEPS } from '../util/constants';
import './HowItWorks.css';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-inner section">
        <h2 className="how-it-works-title">How it works</h2>
        <ol className="how-it-works-list">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <li key={i} className="how-it-works-item">
              <span className="how-it-works-num">{i + 1}.</span>
              <div>
                <h3 className="how-it-works-step-title">{step.title}</h3>
                <p className="how-it-works-step-desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
