import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[rgba(8,8,16,0.92)] backdrop-blur-[20px] border-b border-[var(--border)] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <a href="#home" className="flex items-center">
            <div className="text-bebas text-[var(--cyan)] text-2xl border-2 border-[var(--cyan)] px-2 py-1 leading-none bg-transparent">
              VV
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-space uppercase text-[0.7rem] tracking-[0.2em] text-[var(--white)] nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button 
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-px bg-[var(--cyan)] transition-transform duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`}></span>
            <span className={`w-6 h-px bg-[var(--cyan)] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-px bg-[var(--cyan)] transition-transform duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#080810] z-40 flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className="text-bebas text-6xl text-[var(--white)] hover:text-[var(--cyan)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
