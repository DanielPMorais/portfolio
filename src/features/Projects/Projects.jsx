import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './components/ProjectCard';
import { Container } from '../../components/layout/Container/Container';
import conecturCover from '../../assets/images/conectur/ct-cover.webp';
import conectur1 from '../../assets/images/conectur/ct-welcome.webp';
import conectur2 from '../../assets/images/conectur/ct-home.webp';
import conectur3 from '../../assets/images/conectur/ct-event.webp';
import conectur4 from '../../assets/images/conectur/ct-gamification.webp';
import conectur5 from '../../assets/images/conectur/ct-profile.webp';
import limasPachecoCover from '../../assets/images/limaspacheco/lp-cover.webp';
import limasPacheco1 from '../../assets/images/limaspacheco/lp-home.webp';
import limasPacheco2 from '../../assets/images/limaspacheco/lp-port.webp';
import limasPacheco3 from '../../assets/images/limaspacheco/lp-port-modal.webp';
import limasPacheco4 from '../../assets/images/limaspacheco/lp-CTA.webp';
import limasPacheco5 from '../../assets/images/limaspacheco/lp-contact.webp';
import fitTrackCover from '../../assets/images/fittrack/ft-cover.webp';
import fitTrack1 from '../../assets/images/fittrack/ft-home.webp';
import fitTrack2 from '../../assets/images/fittrack/ft-workouts.webp';
import fitTrack3 from '../../assets/images/fittrack/ft-workouts-2.webp';
import fitTrack4 from '../../assets/images/fittrack/ft-workout.webp';
import portfolioCover from '../../assets/images/portfolio/pf-cover.webp';
import portfolio1 from '../../assets/images/portfolio/pf-projects.webp';
import portfolio2 from '../../assets/images/portfolio/pf-skills.webp';
import portfolio3 from '../../assets/images/portfolio/pf-about.webp';

const featuredProjectsData = [
  {
    id: 1,
    title: 'Conectur',
    techs: ['react-native', 'figma', 'node', 'express', 'mysql', 'prisma', 'zod', 'aws'],
    cover: conecturCover,
    images: [conecturCover, conectur1, conectur2, conectur3, conectur4, conectur5],
    description: `
O Conectur é um aplicativo mobile que conquistou o 2º lugar em um hackathon com 10 equipes. 
O projeto foi criado para resolver a falta de centralização na divulgação de eventos e pontos turísticos de Caraguatatuba, cidade cuja economia depende fortemente do turismo.

A plataforma funciona como uma agenda de eventos e rede social, incentivando o engajamento por meio de um sistema de gamificação. 
Usuários acumulam moedas virtuais ao participar e divulgar eventos, podendo trocá-las por recompensas, como cupons e brindes.

Atuação: fui responsável pelo desenvolvimento do backend e pela documentação técnica. 
No backend, construí a base do sistema com Node.js e Express, implementei o ORM Prisma para o MySQL e desenvolvi a lógica de negócio e segurança, incluindo a criptografia de senhas com bcrypt. 
Na documentação, organizei a arquitetura do sistema, produzi diagramas (Casos de Uso, Classes) e redigi o guia de instalação e execução.
    `,
    url: 'https://www.figma.com/proto/lBgRCEdsznovSE0M4tVgIO/conectur?node-id=10-1122&t=oEWMGwkIRRCeO06d-1',
  },
  {
    id: 2,
    title: 'Limas & Pacheco',
    techs: ['vite', 'typescript', 'react', 'tailwind'],
    cover: limasPachecoCover,
    images: [limasPacheco1, limasPacheco2, limasPacheco3, limasPacheco4, limasPacheco5],
    description: `
O Limas Pacheco é um website institucional moderno e responsivo desenvolvido para uma empresa especializada em eventos e celebrações. 
O projeto foi construído com tecnologias web atuais, oferecendo uma navegação fluida e visual profissional.

Atuação: fui responsável por todo o desenvolvimento do site, desde a configuração do ambiente com Vite e TypeScript até a criação da interface com React e Tailwind CSS. 
Implementei componentes reutilizáveis com shadcn/ui, garantindo responsividade, acessibilidade e otimização do desempenho.
    `,
    url: 'https://limaspacheco.vercel.app/',
  },
  {
    id: 3,
    title: 'FitTrack',
    techs: ['javascript', 'react', 'vite', 'css', 'eslint', 'prettier', 'php', 'api-rest'],
    cover: fitTrackCover,
    images: [fitTrack1, fitTrack2, fitTrack3, fitTrack4],
    description: `
O FitTrack é uma aplicação web desenvolvida para substituir as fichas de treino físicas por um sistema digital de acompanhamento. 
O projeto permite visualizar treinos, acompanhar séries e cargas, iniciar o modo de treino com cronômetro e registrar o progresso do usuário.

Atuação: desenvolvi toda a aplicação frontend, estruturando o projeto com React e Vite e aplicando boas práticas de componentização, organização de pastas e responsividade. 
Implementei o roteamento com react-router-dom, criei componentes reutilizáveis e utilizei CSS Modules com variáveis globais. 
Enquanto a API RESTful em PHP é finalizada, o sistema consome dados fictícios (mock data) para simular o funcionamento real.
    `,
  },
];

// TODO: Adicionar os projetos artesaos, landing cardapio, quickorder, portfolio, contador de dias, games, aula gamemaker, arduino; aqui
const otherProjectsData = [
  {
    id: 4,
    title: 'Portfólio Pessoal',
    techs: ['figma', 'react', 'vite', 'javascript', 'tailwind', 'css', 'eslint', 'prettier'],
    images: [portfolioCover, portfolio1, portfolio2, portfolio3],
    description: `
Este projeto é o desenvolvimento do meu portfólio pessoal, criado para apresentar minha trajetória, habilidades e principais projetos de forma profissional e interativa.

O site foi construído com React e Vite, priorizando desempenho, organização e boas práticas de desenvolvimento. A estilização foi feita com Tailwind CSS, utilizando design responsivo e animações suaves para melhorar a experiência do usuário.

Implementei componentes reutilizáveis, um sistema de modais dinâmicas e seções modulares para facilitar futuras atualizações. Além disso, adotei um fluxo de commits semânticos com Husky e Commitlint, integração de CI/CD automática com a Vercel e estrutura de código otimizada para manutenção e escalabilidade.

Atualmente, o portfólio inclui seções de apresentação, habilidades (soft e hard), projetos, contato e download de currículo, refletindo meu crescimento como desenvolvedor full stack.
    `,
    url: 'https://danielpmorais.vercel.app/',
  },
  //   {
  //     id: 5,
  //     title: 'Portfólio Pessoal',
  //     techs: ['figma', 'react', 'vite', 'javascript', 'tailwind', 'css', 'eslint', 'prettier'],
  //     images: [portfolioCover, portfolio1, portfolio2],
  //     description: `
  // Este projeto é o desenvolvimento do meu portfólio pessoal, criado para apresentar minha trajetória, habilidades e principais projetos de forma profissional e interativa.

  // O site foi construído com React e Vite, priorizando desempenho, organização e boas práticas de desenvolvimento. A estilização foi feita com Tailwind CSS, utilizando design responsivo e animações suaves para melhorar a experiência do usuário.

  // Implementei componentes reutilizáveis, um sistema de modais dinâmicas e seções modulares para facilitar futuras atualizações. Além disso, adotei um fluxo de commits semânticos com Husky e Commitlint, integração de CI/CD automática com a Vercel e estrutura de código otimizada para manutenção e escalabilidade.

  // Atualmente, o portfólio inclui seções de apresentação, habilidades (soft e hard), projetos, contato e download de currículo, refletindo meu crescimento como desenvolvedor full stack.
  //     `,
  //     url: 'https://danielpmorais.vercel.app/',
  //   },
  //   {
  //     id: 6,
  //     title: 'Portfólio Pessoal',
  //     techs: ['figma', 'react', 'vite', 'javascript', 'tailwind', 'css', 'eslint', 'prettier'],
  //     images: [portfolioCover, portfolio1, portfolio2],
  //     description: `
  // Este projeto é o desenvolvimento do meu portfólio pessoal, criado para apresentar minha trajetória, habilidades e principais projetos de forma profissional e interativa.

  // O site foi construído com React e Vite, priorizando desempenho, organização e boas práticas de desenvolvimento. A estilização foi feita com Tailwind CSS, utilizando design responsivo e animações suaves para melhorar a experiência do usuário.

  // Implementei componentes reutilizáveis, um sistema de modais dinâmicas e seções modulares para facilitar futuras atualizações. Além disso, adotei um fluxo de commits semânticos com Husky e Commitlint, integração de CI/CD automática com a Vercel e estrutura de código otimizada para manutenção e escalabilidade.

  // Atualmente, o portfólio inclui seções de apresentação, habilidades (soft e hard), projetos, contato e download de currículo, refletindo meu crescimento como desenvolvedor full stack.
  //     `,
  //     url: 'https://danielpmorais.vercel.app/',
  //   },
  //   {
  //     id: 7,
  //     title: 'Portfólio Pessoal',
  //     techs: ['figma', 'react', 'vite', 'javascript', 'tailwind', 'css', 'eslint', 'prettier'],
  //     images: [portfolioCover, portfolio1, portfolio2],
  //     description: `
  // Este projeto é o desenvolvimento do meu portfólio pessoal, criado para apresentar minha trajetória, habilidades e principais projetos de forma profissional e interativa.

  // O site foi construído com React e Vite, priorizando desempenho, organização e boas práticas de desenvolvimento. A estilização foi feita com Tailwind CSS, utilizando design responsivo e animações suaves para melhorar a experiência do usuário.

  // Implementei componentes reutilizáveis, um sistema de modais dinâmicas e seções modulares para facilitar futuras atualizações. Além disso, adotei um fluxo de commits semânticos com Husky e Commitlint, integração de CI/CD automática com a Vercel e estrutura de código otimizada para manutenção e escalabilidade.

  // Atualmente, o portfólio inclui seções de apresentação, habilidades (soft e hard), projetos, contato e download de currículo, refletindo meu crescimento como desenvolvedor full stack.
  //     `,
  //     url: 'https://danielpmorais.vercel.app/',
  //   },
];

export function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        {/* Subseção Destaques */}
        <h3 className={styles.sectionSubtitle}>Destaques</h3>
        <div className={`${styles.projectGrid} ${styles.featuredGrid}`}>
          {featuredProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              techs={project.techs}
              cover={project.cover}
              images={project.images}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>

        {/* Subseção Todos os Projetos */}
        {/* TODO: Adicionar filtro para tipos de projetos */}
        <h3 className={styles.sectionSubtitle}>Outros projetos</h3>
        <div className={`${styles.projectGrid} ${styles.allGrid}`}>
          {otherProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              techs={project.techs}
              cover={project.cover || (project.images && project.images[0])}
              images={project.images}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
