import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--border)] py-[2rem] text-center bg-[var(--bg)]">
      <div className="flex items-center justify-center gap-4 flex-wrap px-4">
        <span className="text-bebas text-[1.2rem] text-[var(--white)]">VARADRAJ VELHAL</span>
        <span className="text-[var(--muted)]">·</span>
        <span className="text-space text-[0.7rem] text-[var(--muted)]">© 2025 — Built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
