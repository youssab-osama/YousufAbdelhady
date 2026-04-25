import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Hero', href: '#hero' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'CP Stats', href: '#cp' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-surface-bright' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-tighter text-on-surface z-50 relative">
          YA<span className="text-primary animate-pulse">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-[0.1em] uppercase">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-on-surface-variant hover:text-primary transition-colors hover:border-b hover:border-primary pb-1">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative text-on-surface hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 border-b border-surface-bright"
          >
            {links.map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="font-display text-4xl text-on-surface hover:text-primary transition-colors uppercase font-bold"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
