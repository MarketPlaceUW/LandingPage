export function Button({ children, className = '', showArrow = false, ...props }) {
  return (
    <button
      type="button"
      className={`cta-button ${className}`.trim()}
      {...props}
    >
      {children}
      {showArrow && (
        <span className="cta-button-arrow" aria-hidden>
          →
        </span>
      )}
    </button>
  );
}
