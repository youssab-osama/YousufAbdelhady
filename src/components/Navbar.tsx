import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-surface-bright' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-tighter text-on-surface">
          YA<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-[0.1em] uppercase">
          <a href="#hero" className="text-on-surface-variant hover:text-primary transition-colors">Hero</a>
          <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors">Tech Stack</a>
          <a href="#projects" className="text-on-surface-variant hover:text-primary transition-colors">Work</a>
          <a href="#cp" className="text-on-surface-variant hover:text-primary transition-colors">CP Stats</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
