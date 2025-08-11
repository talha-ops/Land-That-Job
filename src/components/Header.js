import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Header.css';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const [atTop, setAtTop] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('theme-dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('theme-dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) toggleMenu();
  };

  return (
    <header className={`header ${atTop ? 'at-top' : 'scrolled'}`}>
      <div className="container">
        <div className="header-bar">
          <div className="logo">
            <h2>Land That Job</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('why-choose-us')}>Why Us</button></li>
              <li><button onClick={() => scrollToSection('stats')}>Results</button></li>
              <li><button onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
