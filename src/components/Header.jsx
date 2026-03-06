import { useState } from 'react';
import { useTheme } from '../services/ThemeContext';
import { NAV_LINKS, SECTION_IDS } from '../util/constants';
import { Button } from './Button';
import './Header.css';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleThemeToggle() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="header">
      <div className="header-inner section">
        <a href={`#${SECTION_IDS.HERO}`} className="header-logo-wrap" aria-label="Go to top">
          <div className="header-logo" />
          <span className="header-logo-text">Logo</span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="header-link"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-right">
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Button showArrow>Join Waitlist</Button>
          </div>
          <button
            type="button"
            className="header-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="header-burger-bar" />
            <span className="header-burger-bar" />
            <span className="header-burger-bar" />
          </button>
        </div>
      </div>
      <div
        className={`header-menu ${menuOpen ? 'header-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="header-menu-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="header-menu-link"
            >
              {label}
            </a>
          ))}
          <div className="header-menu-theme">
            <button
              type="button"
              className="theme-toggle header-menu-theme-btn"
              onClick={handleThemeToggle}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="header-menu-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}
    </header>
  );
}
