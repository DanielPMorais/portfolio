import React, { useState } from 'react';
import styles from './About.module.css';
import { Container } from '../../components/layout/Container/Container';
import myCVPtBr from '../../assets/files/DanielMorais_CV_pt-br.pdf';
import myCVEn from '../../assets/files/DanielMorais_CV_en.pdf';
import { Modal } from '../../components/common/Modal/Modal';
import { useT } from '../../i18n';
import { useLanguage } from '../../hooks/useLanguage';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useT();
  const { language } = useLanguage();
  const highlight = (text, keywords) => {
    if (!keywords || keywords.length === 0) return text;
    const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b(${keywords.map(escape).join('|')})\\b`, 'g');
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      parts.push(<strong key={`${match.index}-${match[0]}`}>{match[0]}</strong>);
      lastIndex = pattern.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts;
  };

  return (
    <>
      <section id="about-me" className={styles.aboutSection}>
        <Container>
          <div className={styles.aboutContainer}>
            {/* Coluna da Imagem */}
            <div className={styles.imageContainer}>
              <div className={styles.aboutImage}>
                <img src="/profile.jpeg" alt="Foto de Daniel Morais" />
              </div>
            </div>

            {/* Coluna do Conteúdo */}
            <div className={styles.aboutContent}>
              <h2>{t.about.title}</h2>

              {/* --- Texto Único --- */}
              <p>{highlight(t.about.body, t.about.keywords)}</p>

              {/* Botões */}
              <div className={styles.buttonContainer}>
                <a
                  href={language === 'pt' ? myCVPtBr : myCVEn}
                  download={
                    language === 'pt' ? 'DanielMorais_CV_pt-br.pdf' : 'DanielMorais_CV_en.pdf'
                  }
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  {t.about.downloadCv}
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  {t.about.contact}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
