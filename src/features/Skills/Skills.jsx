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
  {
    id: 'h1',
    title: 'Front-End',
    icons: ['react', 'angular', 'typescript', 'html5', 'css3', 'tailwind', 'materialize'],
    description: `
Frameworks e Bibliotecas: React, Angular
UI Libraries: Tailwind CSS, Materialize, Angular Material
Linguagens: TypeScript, JavaScript, HTML5, CSS3
Boas práticas: componentização, responsividade, clean code e versionamento semântico.
    `,
  },
  {
    id: 'h2',
    title: 'Back-End',
    icons: ['java', 'springboot', 'python'],
    description: `
Linguagens: Java, Python
Frameworks: Spring Boot, FastAPI / Flask
Principais práticas: desenvolvimento de APIs RESTful, implementação de regras de negócio e segurança, integração com bancos de dados.
Projetos: Sistema PDV (Spring Boot), automação via WhatsApp (Python).
    `,
  },
  {
    id: 'h3',
    title: 'Banco de Dados',
    icons: ['postgresql', 'mysql', 'mongodb'],
    description: `
SQL: PostgreSQL, MySQL
NoSQL: MongoDB
ORMs: Prisma, JPA/Hibernate
Boas práticas: modelagem relacional, normalização, consultas otimizadas e versionamento de schema.
    `,
  },
  {
    id: 'h4',
    title: 'DevOps & Infraestrutura',
    icons: ['linux', 'github', 'aws', 'ci-cd'],
    description: `
Sistemas Operacionais: Linux (Pop!_OS — terminal, permissões e automações)
CI/CD: GitHub Actions
Versionamento: Git e GitHub (workflow profissional, commits semânticos)
Cloud: Conceitos de AWS
Outros: scripts de automação e deploy automatizado em VPS.
    `,
  },
  {
    id: 'h5',
    title: 'IoT & Automação',
    icons: ['arduino', 'python'],
    description: `
Hardware: Arduino (C/C++)
Protocolos: HTTP, TCP/IP
Projetos: Controle de climatização IoT (IFSP) e automação de envio de mensagens (Python + WhatsApp).
    `,
  },
  {
    id: 'h6',
    title: 'Design & Ferramentas',
    icons: ['illustrator', 'photoshop', 'figma', 'excel'],
    description: `
Design Gráfico: Adobe Illustrator (avançado), Photoshop (intermediário)
UI/UX: Figma (protótipos e layouts responsivos)
Produtividade: Excel avançado (incluindo automações com Python)
Outros: GameMaker (prototipagem de ideias e lógicas de jogos).
    `,
  },
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
        </div>

        {/* === Grid de Skills === */}
        <div className={styles.skillsGrid}>
          {skillsToDisplay.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              icons={skill.icons}
              description={skill.description}
              isHardSkill={activeTab === 'hard'}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
