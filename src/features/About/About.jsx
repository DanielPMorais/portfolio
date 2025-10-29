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
                Sou <b>Daniel Patrick de Morais</b>, estudante de{' '}
                <b>Análise e Desenvolvimento de Sistemas</b> no IFSP e desenvolvedor apaixonado por
                tecnologia e aprendizado contínuo.
                <br />
                <br />
                Minha trajetória começou na área administrativa e de suporte de TI na <b>Ambev</b>,
                onde aprimorei minha capacidade de resolver problemas, entender processos de negócio
                e propor soluções práticas. Essa vivência despertou em mim o desejo de criar
                ferramentas que otimizassem o trabalho das pessoas — e foi assim que encontrei no
                <b>desenvolvimento de software</b> o meu caminho profissional.
                <br />
                <br />
                Hoje, atuo como <b>desenvolvedor full stack</b>, com foco em{' '}
                <b>Java (Spring Boot)</b> no backend e <b>Angular</b> e <b>React</b> no frontend.
                Também tenho experiência com{' '}
                <b>Python, PostgreSQL, MongoDB, Tailwind e GitHub Actions</b>, além de interesse
                crescente por <b>DevOps e IoT</b>.
                <br />
                <br />
                Em 2025, fui premiado em <b>2º lugar em um hackathon de 50 horas</b>, onde contribuí
                no desenvolvimento de uma aplicação voltada ao turismo local — uma experiência que
                reforçou minha paixão por criar soluções colaborativas e funcionais.
                <br />
                <br />
                Tenho como valores a <b>proatividade, criatividade e aprendizado constante</b>.
                Busco sempre unir técnica, propósito e impacto real em cada projeto que desenvolvo.
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
