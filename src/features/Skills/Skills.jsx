import React, { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { Container } from '../../components/layout/Container/Container';
import { SkillCard } from './components/SkillCard';
import { useT } from '../../i18n';
import { useLanguage } from '../../hooks/useLanguage';

const softSkillsData = [
  {
    id: 's1',
    title: 'Proatividade',
    titleEn: 'Proactivity',
    description: `
Aprendo novas tecnologias de forma autodidata, como Python, React e CI/CD. 
Identifico problemas e crio soluções próprias, como automações e ferramentas internas. 
Gosto de tomar iniciativa e manter constância nos meus projetos, sem depender de instruções externas.
    `,
    descriptionEn: `
I learn new technologies self-taught, such as Python, React, and CI/CD. 
I identify problems and create my own solutions, such as automations and internal tools. 
I like to take initiative and maintain consistency in my projects, without depending on external instructions.
    `,
  },
  {
    id: 's2',
    title: 'Criatividade',
    titleEn: 'Creativity',
    description: `
Gosto de desenvolver ideias originais e funcionais, como o FitTrack e o sistema de climatização IoT. 
Tenho facilidade em criar interfaces e soluções com foco na experiência do usuário e no impacto prático. 
Busco sempre novas formas de resolver problemas de maneira eficiente e elegante.
    `,
    descriptionEn: `
I enjoy developing original and functional ideas, such as FitTrack and the IoT climate control system. 
I have ease creating interfaces and solutions focused on user experience and practical impact. 
I always seek new ways to solve problems efficiently and elegantly.
    `,
  },
  {
    id: 's3',
    title: 'Resolução de Problemas',
    titleEn: 'Problem Solving',
    description: `
Tenho facilidade em identificar falhas e propor soluções rápidas e eficazes. 
Aplico raciocínio lógico e pensamento analítico em diferentes contextos, desde TI até desenvolvimento full-stack. 
Aprendo com os erros e uso feedbacks para aprimorar constantemente meu trabalho.
    `,
    descriptionEn: `
I have ease identifying failures and proposing quick and effective solutions. 
I apply logical reasoning and analytical thinking in different contexts, from IT to full-stack development. 
I learn from mistakes and use feedback to constantly improve my work.
    `,
  },
  {
    id: 's4',
    title: 'Trabalho em Equipe',
    titleEn: 'Teamwork',
    description: `
Gosto de colaborar em times ágeis e hackathons, mantendo uma comunicação clara e respeitosa. 
Valorizo o compartilhamento de conhecimento e acredito que boas ideias surgem quando pessoas pensam juntas. 
Sei ouvir, contribuir e me adaptar às necessidades do grupo.
    `,
    descriptionEn: `
I enjoy collaborating in agile teams and hackathons, maintaining clear and respectful communication. 
I value knowledge sharing and believe that good ideas arise when people think together. 
I know how to listen, contribute, and adapt to the group's needs.
    `,
  },
  {
    id: 's5',
    title: 'Organização',
    titleEn: 'Organization',
    description: `
Sou uma pessoa estruturada e gosto de manter meus projetos bem organizados e documentados. 
Costumo planejar tarefas, prazos e prioridades antes de começar a execução. 
Prezo pela consistência do código, clareza nos commits e entregas com qualidade.
    `,
    descriptionEn: `
I am a structured person and like to keep my projects well organized and documented. 
I usually plan tasks, deadlines, and priorities before starting execution. 
I value code consistency, commit clarity, and quality deliveries.
    `,
  },
  {
    id: 's6',
    title: 'Aprendizado Contínuo',
    titleEn: 'Continuous Learning',
    description: `
Estou sempre estudando novas tecnologias e ferramentas para melhorar meus resultados. 
Evoluí de suporte técnico para desenvolvimento full-stack com base em curiosidade, disciplina e prática. 
Tenho o hábito de transformar o que aprendo em projetos reais e aplicáveis.
    `,
    descriptionEn: `
I am always studying new technologies and tools to improve my results. 
I evolved from technical support to full-stack development based on curiosity, discipline, and practice. 
I have the habit of transforming what I learn into real and applicable projects.
    `,
  },
];

const hardSkillsData = [
  {
    id: 'h1',
    title: 'Front-End',
    titleEn: 'Front-End',
    icons: ['react', 'angular', 'typescript', 'html5', 'css3', 'tailwind', 'materialize'],
    description: `
Frameworks e Bibliotecas: React, Angular
UI Libraries: Tailwind CSS, Materialize, Angular Material
Linguagens: TypeScript, JavaScript, HTML5, CSS3
Boas práticas: componentização, responsividade, clean code e versionamento semântico.
    `,
    descriptionEn: `
Frameworks and Libraries: React, Angular
UI Libraries: Tailwind CSS, Materialize, Angular Material
Languages: TypeScript, JavaScript, HTML5, CSS3
Best practices: componentization, responsiveness, clean code, and semantic versioning.
    `,
  },
  {
    id: 'h2',
    title: 'Back-End',
    titleEn: 'Back-End',
    icons: ['java', 'springboot', 'python'],
    description: `
Linguagens: Java, Python
Frameworks: Spring Boot, FastAPI / Flask
Principais práticas: desenvolvimento de APIs RESTful, implementação de regras de negócio e segurança, integração com bancos de dados.
Projetos: Sistema PDV (Spring Boot), automação via WhatsApp (Python).
    `,
    descriptionEn: `
Languages: Java, Python
Frameworks: Spring Boot, FastAPI / Flask
Main practices: RESTful API development, business rules and security implementation, database integration.
Projects: POS System (Spring Boot), WhatsApp automation (Python).
    `,
  },
  {
    id: 'h3',
    title: 'Banco de Dados',
    titleEn: 'Database',
    icons: ['postgresql', 'mysql', 'mongodb'],
    description: `
SQL: PostgreSQL, MySQL
NoSQL: MongoDB
ORMs: Prisma, JPA/Hibernate
Boas práticas: modelagem relacional, normalização, consultas otimizadas e versionamento de schema.
    `,
    descriptionEn: `
SQL: PostgreSQL, MySQL
NoSQL: MongoDB
ORMs: Prisma, JPA/Hibernate
Best practices: relational modeling, normalization, optimized queries, and schema versioning.
    `,
  },
  {
    id: 'h4',
    title: 'DevOps & Infraestrutura',
    titleEn: 'DevOps & Infrastructure',
    icons: ['linux', 'github', 'aws', 'ci-cd'],
    description: `
Sistemas Operacionais: Linux (Pop!_OS — terminal, permissões e automações)
CI/CD: GitHub Actions
Versionamento: Git e GitHub (workflow profissional, commits semânticos)
Cloud: Conceitos de AWS
Outros: scripts de automação e deploy automatizado em VPS.
    `,
    descriptionEn: `
Operating Systems: Linux (Pop!_OS — terminal, permissions, and automations)
CI/CD: GitHub Actions
Versioning: Git and GitHub (professional workflow, semantic commits)
Cloud: AWS concepts
Others: automation scripts and automated deployment on VPS.
    `,
  },
  {
    id: 'h5',
    title: 'IoT & Automação',
    titleEn: 'IoT & Automation',
    icons: ['arduino', 'python'],
    description: `
Hardware: Arduino (C/C++)
Protocolos: HTTP, TCP/IP
Projetos: Controle de climatização IoT (IFSP) e automação de envio de mensagens (Python + WhatsApp).
    `,
    descriptionEn: `
Hardware: Arduino (C/C++)
Protocols: HTTP, TCP/IP
Projects: IoT climate control (IFSP) and message sending automation (Python + WhatsApp).
    `,
  },
  {
    id: 'h6',
    title: 'Design & Ferramentas',
    titleEn: 'Design & Tools',
    icons: ['illustrator', 'photoshop', 'figma', 'excel'],
    description: `
Design Gráfico: Adobe Illustrator (avançado), Photoshop (intermediário)
UI/UX: Figma (protótipos e layouts responsivos)
Produtividade: Excel avançado (incluindo automações com Python)
Outros: GameMaker (prototipagem de ideias e lógicas de jogos).
    `,
    descriptionEn: `
Graphic Design: Adobe Illustrator (advanced), Photoshop (intermediate)
UI/UX: Figma (prototypes and responsive layouts)
Productivity: Advanced Excel (including Python automations)
Others: GameMaker (prototyping ideas and game logic).
    `,
  },
];

export function Skills() {
  const { t } = useT();
  const { language } = useLanguage();
  // O estado 'soft' ou 'hard'
  const [activeTab, setActiveTab] = useState('hard');
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
    <section id="skills" className={styles.skillsSection}>
      <Container>
        {/* === Botões de Tab === */}
        <div className={styles.tabsContainer} ref={tabsContainerRef}>
          <button
            className={`${styles.tabButton} ${activeTab === 'hard' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('hard')}
          >
            {t.skills.hard}
          </button>

          <button
            // Aplica a classe .activeTab dinamicamente
            className={`${styles.tabButton} ${activeTab === 'soft' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            {t.skills.soft}
          </button>
        </div>

        {/* === Grid de Skills === */}
        <div className={styles.skillsGrid}>
          {skillsToDisplay.map((skill) => (
            <SkillCard
              key={skill.id}
              title={language === 'en' && skill.titleEn ? skill.titleEn : skill.title}
              icons={skill.icons}
              description={
                language === 'en' && skill.descriptionEn ? skill.descriptionEn : skill.description
              }
              isHardSkill={activeTab === 'hard'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
