import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: '// HOME', href: '#home' },
  { label: '// EXPERTISE', href: '#stack' },
  { label: '// EXPERIENCE', href: '#experience' },
  { label: '// PROJECTS', href: '#projects' },
  { label: '// CP_VAULT', href: '#cp' },
  { label: '// INITIATE', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Lock body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-mono ${isScrolled || isOpen ? 'bg-background/90 backdrop-blur-lg border-b border-surface-bright py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        <a href="#home" className="group flex items-center gap-2 text-on-surface font-bold text-xl uppercase tracking-widest">
          <Terminal size={24} className="text-secondary group-hover:text-primary transition-colors" />
          <span className="group-hover:text-glow transition-all">YA.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm text-on-surface-variant hover:text-secondary uppercase tracking-widest transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface p-2 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 shadow-2xl z-40 overflow-y-auto"
            onClick={() => setIsOpen(false)} // Clicking outside closes the menu
          >
            {navItems.map((item, i) => (
              <motion.a 
                key={item.href} 
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xl text-on-surface font-bold uppercase tracking-widest hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
