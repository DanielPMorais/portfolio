import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Container } from '../Container/Container';

export function Header({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navListRef = useRef(null);
  const indicatorRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Skills' },
    { href: '#about-me', label: 'Sobre mim' },
  ];

  // Capitaliza a primeira letra (ex: 'projetos' -> 'Projetos')
  const currentTitle = activeSection
    ? navLinks.find((link) => link.href === `#${activeSection}`)?.label || ''
    : '';

  // Função para mover o indicador
  useEffect(() => {
    if (!navListRef.current || !indicatorRef.current || !activeSection) return;

    const activeLink = navListRef.current.querySelector(`.${styles.activeLink}`);

    if (activeLink) {
      const navListRect = navListRef.current.getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();

      const left = activeLinkRect.left - navListRect.left;
      const width = activeLinkRect.width;

      indicatorRef.current.style.left = `${left}px`;
      indicatorRef.current.style.width = `${width}px`;
      indicatorRef.current.style.opacity = '1';
    } else {
      indicatorRef.current.style.opacity = '0';
    }
  }, [activeSection]);

  return (
    <header
      className={`${styles.navbar} ${styles.navbarFixed} ${isMobileMenuOpen ? styles.isNavOpen : ''}`}
    >
      <Container className={styles.navContainer}>
        {/* Mobile: Hamburger à esquerda */}
        <button
          className={styles.hamburgerButton}
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <CgClose /> : <HiMenu />}
        </button>

        {/* Desktop: Logo à esquerda */}
        <div className={styles.logo}>
          <a href="#">Daniel</a>
        </div>

        {/* Mobile: Título centralizado */}
        <h2 className={styles.mobileSectionTitle}>{currentTitle}</h2>

        {/* Desktop: Navigation central */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList} ref={navListRef}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? styles.activeLink : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Indicador deslizante */}
            <div ref={indicatorRef} className={styles.slideIndicator} style={{ opacity: 0 }} />
          </ul>
        </nav>

        {/* Theme toggle à direita (mobile e desktop) */}
        <div className={styles.themeToggle}>
          <button aria-label="Mudar tema">(Toggle)</button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={toggleMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
