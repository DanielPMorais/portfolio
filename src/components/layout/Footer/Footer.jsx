import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';

export const FlagBrazil = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}>
    <path
      fill="#009B3A"
      d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
    ></path>
    <path fill="#FEDF01" d="M32.728 18L18 29.124L3.272 18L18 6.875z"></path>
    <circle cx="17.976" cy="17.924" r="6.458" fill="#002776"></circle>
    <path
      fill="#CBE9D4"
      d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"
    ></path>
    <path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></path>
    <path
      fill="#55ACEE"
      d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
    ></path>
    <path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path>
  </svg>
);

const usaRed = '#B22234';
const usaWhite = '#FFFFFF';
const usaBlue = '#3C3B6E';

export const FlagUsa = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <path fill={usaBlue} d="M3 7h14v10H3z" />

    <path
      fill={usaWhite}
      d="M5 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zM7 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zM5 14a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
    />

    <path fill={usaRed} d="M17 7h12v2H17z m0 4h12v2H17z m0 4h12v2H17z M3 19h26v2H3z m0 4h26v2H3z" />

    <path
      fill={usaWhite}
      d="M17 9h12v2H17z m0 4h12v2H17z M3 17h26v2H3z m0 4h26v2H3z m0 4h26v2H3z"
    />
  </svg>
);

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
                <FlagBrazil />
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
                <FlagUsa />
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
