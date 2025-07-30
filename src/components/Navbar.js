import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) closeMobileMenu();
  }, [isMobile, location]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="Company Logo"
            className={styles.logoLeft}
          />
        </Link>
          {/* Removed this redundant <div> as it served no purpose and created an empty flex item */}
          {/* <div className={styles.container}></div> */} 

        <div
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <FaTimes
              className={styles.hamburgerIcon}
              style={{ color: scrolled ? '#fff' : theme === 'light' ? '#000' : '#fff' }}
            />
          ) : (
            <FaBars
              className={styles.hamburgerIcon}
              style={{ color: scrolled ? '#fff' : theme === 'light' ? '#000' : '#fff' }}
            />
          )}
        </div>

        <div
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.show : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          {[
            { path: '/', name: 'Home' },
            { path: '/about', name: 'About us' },
            { path: '/work', name: 'Our Work' },
            { path: '/artspage', name: 'Arts'},
            { path: '/enterprisespage', name: 'Enterprises'},

            // { path: '/portfolio', name: 'Portfolio' },
            { path: '/contact', name: 'Contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''
                } ${scrolled ? styles.navLinkScrolled : theme === 'light' ? styles.navLinkDark : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;