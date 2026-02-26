import { useTheme } from '../services/ThemeContext';
import { NAV_LINKS } from '../util/constants';
import { Button } from './Button';
import './Header.css';

function handleNavClick(e) {
  e.preventDefault();
}

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-inner section">
        <div className="header-logo-wrap" aria-hidden>
          <div className="header-logo" />
          <span className="header-logo-text">Logo</span>
        </div>
        <nav className="header-nav">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href="#"
              onClick={handleNavClick}
              className="header-link"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Button showArrow>Join Waitlist</Button>
        </div>
      </div>
    </header>
  );
}
