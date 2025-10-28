import React, { useState } from 'react';
import styles from './Header.module.css';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Container } from '../Container/Container';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.navbar} ${isMobileMenuOpen ? styles.isNavOpen : ''}`}>
      <Container className={styles.navContainer}>
        <button
          className={styles.hamburgerButton}
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <CgClose /> : <HiMenu />}
        </button>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#soft-skills">Soft-skills</a>
            </li>
            <li>
              <a href="#hard-skills">Hard-skills</a>
            </li>
            <li>
              <a href="#about-me">Sobre mim</a>
            </li>
          </ul>
        </nav>

        <div className={styles.themeToggle}>
          <button aria-label="Mudar tema">(Toggle)</button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li>
              <a href="/" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMobileMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#soft-skills" onClick={toggleMobileMenu}>
                Soft-skills
              </a>
            </li>
            <li>
              <a href="#hard-skills" onClick={toggleMobileMenu}>
                Hard-skills
              </a>
            </li>
            <li>
              <a href="#about-me" onClick={toggleMobileMenu}>
                Sobre mim
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
