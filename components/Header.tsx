import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, CloseIcon } from './Icons.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["about", "github", "experience", "projects", "opensource", "skills", "certifications", "contact"];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { opacity: 0, y: "-100%", transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="text-2xl font-bold cursor-pointer gradient-text"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              Hari Thatikonda
            </motion.div>
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <motion.button
                    onClick={() => scrollToSection(link)}
                    className="capitalize text-slate-300 hover:text-spidey-red transition-colors duration-300 font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {link === 'opensource' ? 'Open Source' : link === 'github' ? 'GitHub' : link}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 z-50 relative">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="capitalize text-3xl text-slate-300 hover:text-spidey-red transition-colors duration-300 font-semibold"
                  >
                    {link === 'opensource' ? 'Open Source' : link === 'github' ? 'GitHub' : link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
