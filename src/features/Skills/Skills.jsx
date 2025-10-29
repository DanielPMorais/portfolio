import React, { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { Container } from '../../components/layout/Container/Container';
import { SkillCard } from './components/SkillCard';

const softSkillsData = [
  { id: 's1', title: 'Comunicação' },
  { id: 's2', title: 'Trabalho em Equipe' },
  { id: 's3', title: 'Proatividade' },
  { id: 's4', title: 'Gestão de Tempo' },
  { id: 's5', title: 'Criatividade' },
  { id: 's6', title: 'Liderança' },
];

const hardSkillsData = [
  { id: 'h1', title: 'React' },
  { id: 'h2', title: 'JavaScript (ES6+)' },
  { id: 'h3', title: 'Pop!_OS' },
  { id: 'h4', title: 'HTML5' },
  { id: 'h5', title: 'CSS3 / Sass' },
  { id: 'h6', title: 'Git & GitHub' },
  { id: 'h7', title: 'PostgreSQL' },
  { id: 'h8', title: 'GameMaker' },
];

export function Skills() {
  // O estado 'soft' ou 'hard'
  const [activeTab, setActiveTab] = useState('soft');
  const tabsContainerRef = useRef(null);
  const indicatorRef = useRef(null);

  // Determina qual array de dados usar com base no estado
  const skillsToDisplay = activeTab === 'soft' ? softSkillsData : hardSkillsData;

  // Função para mover o indicador
  useEffect(() => {
    if (!tabsContainerRef.current || !indicatorRef.current) return;

    const activeButton = tabsContainerRef.current.querySelector(`.${styles.activeTab}`);

    if (activeButton) {
      const containerRect = tabsContainerRef.current.getBoundingClientRect();
      const activeButtonRect = activeButton.getBoundingClientRect();

      const left = activeButtonRect.left - containerRect.left;
      const width = activeButtonRect.width;

      indicatorRef.current.style.left = `${left}px`;
      indicatorRef.current.style.width = `${width}px`;
      indicatorRef.current.style.opacity = '1';
    } else {
      indicatorRef.current.style.opacity = '0';
    }
  }, [activeTab]);

  // Recalcula posição quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (!tabsContainerRef.current || !indicatorRef.current) return;

      const activeButton = tabsContainerRef.current.querySelector(`.${styles.activeTab}`);

      if (activeButton) {
        const containerRect = tabsContainerRef.current.getBoundingClientRect();
        const activeButtonRect = activeButton.getBoundingClientRect();

        const left = activeButtonRect.left - containerRect.left;
        const width = activeButtonRect.width;

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
  }, [activeTab]);

  return (
    <Container>
      <section id="skills" className={styles.skillsSection}>
        {/* === Botões de Tab === */}
        <div className={styles.tabsContainer} ref={tabsContainerRef}>
          <button
            // Aplica a classe .activeTab dinamicamente
            className={`${styles.tabButton} ${activeTab === 'soft' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft-Skills
          </button>

          <button
            className={`${styles.tabButton} ${activeTab === 'hard' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('hard')}
          >
            Hard-Skills
          </button>

          {/* Indicador deslizante */}
          <div ref={indicatorRef} className={styles.tabSlideIndicator} style={{ opacity: 0 }} />
        </div>

        {/* === Grid de Skills === */}
        <div className={styles.skillsGrid}>
          {skillsToDisplay.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} />
          ))}
        </div>
      </section>
    </Container>
  );
}
