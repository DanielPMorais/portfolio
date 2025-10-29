import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { FaArrowUp } from 'react-icons/fa';

export function Footer() {
  // Pega o ano atual automaticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <p>© {currentYear} Daniel Morais. Todos os direitos reservados.</p>
          <a href="#home" className={styles.backToTop}>
            Voltar ao topo <FaArrowUp className={styles.arrowIcon} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
