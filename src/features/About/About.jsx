import React, { useState } from 'react';
import styles from './About.module.css';
import { Container } from '../../components/layout/Container/Container';
import myCV from '../../assets/files/DanielMorais_CV.pdf';
import { Modal } from '../../components/common/Modal/Modal';
import { useT } from '../../i18n';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useT();

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
              <p>{t.about.body}</p>

              {/* Botões */}
              <div className={styles.buttonContainer}>
                <a
                  href={myCV}
                  download="DanielMorais_CV.pdf"
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
