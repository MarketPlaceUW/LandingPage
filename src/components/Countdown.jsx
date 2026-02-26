import './Countdown.css';

export function Countdown() {
  return (
    <section className="countdown">
      <div className="countdown-inner section">
        <h2 className="countdown-title">Countdown</h2>
        <div className="countdown-boxes">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="countdown-box">
              <span className="countdown-placeholder">00</span>
            </div>
          ))}
        </div>
        <p className="countdown-soon">COMING SOON</p>
      </div>
    </section>
  );
}
