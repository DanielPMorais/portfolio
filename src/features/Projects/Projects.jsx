import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './components/ProjectCard.jsx';
import { Container } from '../../components/layout/Container/Container.jsx';

const featuredProjectsData = [
  { id: 1, title: 'Projeto 1', techs: ['js', 'java', 'sass', 'tailwind'] },
  { id: 2, title: 'Projeto 2', techs: ['js', 'java', 'sass', 'tailwind'] },
  { id: 3, title: 'Projeto 3', techs: ['js', 'java', 'sass', 'tailwind'] },
];

const allProjectsData = [
  { id: 4, title: 'Projeto 4', techs: ['js', 'java', 'sass', 'tailwind'] },
  { id: 5, title: 'Projeto 5', techs: ['js', 'java', 'sass', 'tailwind'] },
  { id: 6, title: 'Projeto 6', techs: ['js', 'java', 'sass', 'tailwind'] },
  { id: 7, title: 'Projeto 7', techs: ['js', 'java', 'sass', 'tailwind'] },
];

export function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        {/* Subseção Destaques */}
        <h3 className={styles.sectionSubtitle}>Destaques</h3>
        <div className={`${styles.projectGrid} ${styles.featuredGrid}`}>
          {featuredProjectsData.map((project) => (
            <ProjectCard key={project.id} title={project.title} techs={project.techs} />
          ))}
        </div>

        {/* Subseção Todos os Projetos */}
        <h3 className={styles.sectionSubtitle}>Todos os projetos</h3>
        <div className={`${styles.projectGrid} ${styles.allGrid}`}>
          {allProjectsData.map((project) => (
            <ProjectCard key={project.id} title={project.title} techs={project.techs} />
          ))}
        </div>
      </Container>
    </section>
  );
}
