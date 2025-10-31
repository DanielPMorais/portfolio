import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Container } from '../Container/Container';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';
import { useT } from '../../../i18n';

export function Header({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navListRef = useRef(null);
  const indicatorRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { t } = useT();
  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#about-me', label: t.nav.about },
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
  }, [activeSection, language]);

  // Recalcula posição quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (!navListRef.current || !indicatorRef.current || !activeSection) return;

      const activeLink = navListRef.current.querySelector(`.${styles.activeLink}`);

      if (activeLink) {
        const navListRect = navListRef.current.getBoundingClientRect();
        const activeLinkRect = activeLink.getBoundingClientRect();

        const left = activeLinkRect.left - navListRect.left;
        const width = activeLinkRect.width;

        indicatorRef.current.style.left = `${left}px`;
        indicatorRef.current.style.width = `${width}px`;
      }
    };

    // Adiciona listener para resize
    window.addEventListener('resize', handleResize);

    // Recalcula após o primeiro render
    const timer = setTimeout(handleResize, 100);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeSection, language]);

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
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <CgClose /> : <HiMenu />}
        </button>

        {/* Desktop: Logo à esquerda */}
        <div className={styles.logo}>
          <a href="#home">Daniel</a>
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
            <div
              className={styles.langSwitcher}
              role="group"
              aria-label={language === 'pt' ? 'Selecionar idioma' : 'Select language'}
            >
              <button
                type="button"
                className={`${styles.flagButton} ${language === 'pt' ? styles.flagActive : ''}`}
                onClick={() => setLanguage('pt')}
                aria-pressed={language === 'pt'}
                title="Português (Brasil)"
              >
                <span className={styles.flagEmoji} aria-hidden="true">
                  🇧🇷
                </span>
                <span className="sr-only">Português</span>
              </button>
              <button
                type="button"
                className={`${styles.flagButton} ${language === 'en' ? styles.flagActive : ''}`}
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                title="English (US)"
              >
                <span className={styles.flagEmoji} aria-hidden="true">
                  🇺🇸
                </span>
                <span className="sr-only">English</span>
              </button>
            </div>
          </ul>
        </nav>

        {/* Theme toggle à direita (mobile e desktop) */}
        <div className={styles.themeToggle}>
          <button
            className={styles.toggleSwitch}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
          >
            <div
              className={`${styles.toggleTrack} ${theme === 'dark' ? styles.toggleTrackActive : ''}`}
            >
              <div
                className={`${styles.toggleThumb} ${theme === 'dark' ? styles.toggleThumbActive : ''}`}
              >
                {theme === 'dark' ? (
                  <FaSun className={styles.toggleIcon} />
                ) : (
                  <FaMoon className={styles.toggleIcon} />
                )}
              </div>
            </div>
          </button>
        </div>
      </Container>

      <nav id="mobile-navigation" className={styles.mobileNav} aria-hidden={!isMobileMenuOpen}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleMobileMenu}>
                {link.label}
              </a>
            </li>
          ))}

          <div
            className={styles.langSwitcher}
            role="group"
            aria-label={language === 'pt' ? 'Selecionar idioma' : 'Select language'}
          >
            <button
              type="button"
              className={`${styles.flagButton} ${language === 'pt' ? styles.flagActive : ''}`}
              onClick={() => {
                toggleMobileMenu();
                setLanguage('pt');
              }}
              aria-pressed={language === 'pt'}
              title="Português (Brasil)"
            >
              <span className={styles.flagEmoji} aria-hidden="true">
                🇧🇷
              </span>
              <span className="sr-only">Português</span>
            </button>
            <button
              type="button"
              className={`${styles.flagButton} ${language === 'en' ? styles.flagActive : ''}`}
              onClick={() => {
                toggleMobileMenu();
                setLanguage('en');
              }}
              aria-pressed={language === 'en'}
              title="English (US)"
            >
              <span className={styles.flagEmoji} aria-hidden="true">
                🇺🇸
              </span>
              <span className="sr-only">English</span>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}
