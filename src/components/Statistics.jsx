import { STAT_LEFT, STAT_RIGHT } from '../util/constants';
import './Statistics.css';

export function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-inner section">
        <div className="stat-block stat-block--left">
          <div className="stat-left-grid">
            <div className="stat-left-number">
              <span className="stat-value">{STAT_LEFT.value}</span>
            </div>
            <div className="stat-left-desc">
              <p className="stat-desc">{STAT_LEFT.description}</p>
            </div>
            <div className="stat-left-emphasis">
              <p className="stat-emphasis">{STAT_LEFT.emphasis}</p>
            </div>
          </div>
        </div>
        <div className="stat-divider" aria-hidden />
        <div className="stat-block">
          <span className="stat-value">{STAT_RIGHT.value}</span>
          <p className="stat-desc">{STAT_RIGHT.description}</p>
        </div>
      </div>
    </section>
  );
}
