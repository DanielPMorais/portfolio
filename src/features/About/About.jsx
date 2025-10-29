import React, { useState } from 'react';
import styles from './About.module.css';
import { Container } from '../../components/layout/Container/Container';
import myCV from '../../assets/files/DanielMorais_CV.pdf';
import { Modal } from '../../components/common/Modal/Modal';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <section id="about-me" className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            {/* Coluna da Imagem */}
            <div className={styles.imageContainer}>
              <div className={styles.aboutImage}>
                <img src="/profile.jpeg" alt="Foto de Daniel Morais" />
              </div>
            </div>

            {/* Coluna do Conteúdo */}
            <div className={styles.aboutContent}>
              <h2>Olá, sou Daniel!</h2>

              {/* --- Texto Único --- */}
              <p>
                Sou um estudante de Análise e Desenvolvimento de Sistemas com 23 anos, apaixonado
                por tecnologia e sempre em busca de novas oportunidades para expandir meus
                conhecimentos.
                <br />
                <br />
                Durante os últimos 3 anos, atuei como Assistente de T.I., onde tive a oportunidade
                de desenvolver minhas habilidades técnicas e aprender a trabalhar de forma eficiente
                em equipe. Minha experiência inclui suporte técnico, manutenção de sistemas e
                implementação de soluções tecnológicas para otimizar processos.
              </p>

              {/* Botões */}
              <div className={styles.buttonContainer}>
                <a
                  href={myCV}
                  download="DanielMorais_CV.pdf"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  Download CV
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Contato
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
