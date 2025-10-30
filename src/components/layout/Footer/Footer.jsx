import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';

export function Footer() {
  // Pega o ano atual automaticamente
  const currentYear = new Date().getFullYear();
  const { language, setLanguage } = useLanguage();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.leftArea}>
            <span className={styles.leftTop}>© {currentYear} Daniel Morais.</span>
            <span className={styles.leftBottom}>
              {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </span>
          </div>
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
          <a href="#home" className={styles.backToTop}>
            {language === 'pt' ? 'Voltar ao topo' : 'Back to top'}{' '}
            <FaArrowUp className={styles.arrowIcon} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
