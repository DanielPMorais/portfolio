import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './components/ProjectCard';
import { Container } from '../../components/layout/Container/Container';
import { useT } from '../../i18n';
import { useLanguage } from '../../hooks/useLanguage';
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
import cardapioRestauranteCover from '../../assets/images/cardapio-restaurante/cr-cover.webp';
import cardapioRestaurante1 from '../../assets/images/cardapio-restaurante/cr-cardapio.webp';
import cardapioRestaurante2 from '../../assets/images/cardapio-restaurante/cr-step1.webp';
import cardapioRestaurante3 from '../../assets/images/cardapio-restaurante/cr-step2.webp';
import cardapioRestaurante4 from '../../assets/images/cardapio-restaurante/cr-step3.webp';
import cardapioRestaurante5 from '../../assets/images/cardapio-restaurante/cr-whatsapp.webp';
import quickOrderCover from '../../assets/images/quickorder/qo-cover.webp';
import quickOrder1 from '../../assets/images/quickorder/qo-image1.webp';
import quickOrder2 from '../../assets/images/quickorder/qo-image2.webp';
import quickOrder3 from '../../assets/images/quickorder/qo-image3.webp';

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
    descriptionEn: `
Conectur is a mobile application that won 2nd place in a hackathon with 10 teams. 
The project was created to solve the lack of centralization in the dissemination of events and tourist spots in Caraguatatuba, a city whose economy heavily depends on tourism.

The platform works as an events calendar and social network, encouraging engagement through a gamification system. 
Users accumulate virtual coins by participating in and promoting events, which can be exchanged for rewards, such as coupons and gifts.

Role: I was responsible for backend development and technical documentation. 
In the backend, I built the system foundation with Node.js and Express, implemented Prisma ORM for MySQL, and developed business logic and security, including password encryption with bcrypt. 
In the documentation, I organized the system architecture, produced diagrams (Use Cases, Classes) and wrote the installation and execution guide.
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
    descriptionEn: `
Limas Pacheco is a modern and responsive institutional website developed for a company specialized in events and celebrations. 
The project was built with current web technologies, offering fluid navigation and professional visual.

Role: I was responsible for the entire website development, from environment setup with Vite and TypeScript to interface creation with React and Tailwind CSS. 
I implemented reusable components with shadcn/ui, ensuring responsiveness, accessibility, and performance optimization.
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
    descriptionEn: `
FitTrack is a web application developed to replace physical workout sheets with a digital tracking system. 
The project allows users to view workouts, track sets and weights, start workout mode with a timer, and record user progress.

Role: I developed the entire frontend application, structuring the project with React and Vite and applying best practices for componentization, folder organization, and responsiveness. 
I implemented routing with react-router-dom, created reusable components, and used CSS Modules with global variables. 
While the RESTful API in PHP is being finalized, the system consumes mock data to simulate real functionality.
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
    descriptionEn: `
This project is the development of my personal portfolio, created to present my trajectory, skills, and main projects in a professional and interactive way.

The site was built with React and Vite, prioritizing performance, organization, and development best practices. Styling was done with Tailwind CSS, using responsive design and smooth animations to improve user experience.

I implemented reusable components, a dynamic modal system, and modular sections to facilitate future updates. Additionally, I adopted a semantic commit flow with Husky and Commitlint, automatic CI/CD integration with Vercel, and code structure optimized for maintenance and scalability.

Currently, the portfolio includes sections for presentation, skills (soft and hard), projects, contact, and CV download, reflecting my growth as a full-stack developer.
    `,
    url: 'https://danielpmorais.vercel.app/',
  },
  {
    id: 5,
    title: 'Cardápio Restaurante',
    techs: ['javascript', 'html', 'css', 'jquery', 'bootstrap'],
    images: [
      cardapioRestauranteCover,
      cardapioRestaurante1,
      cardapioRestaurante2,
      cardapioRestaurante3,
      cardapioRestaurante4,
      cardapioRestaurante5,
    ],
    description: `
O Cardápio Online é uma aplicação web estática desenvolvida para apresentar menus digitais com categorias organizadas (burgers, churrasco, pizzas, sobremesas, bebidas e steaks). 
O site é responsivo, leve e permite ao usuário realizar pedidos via WhatsApp, com cálculo automático de entrega e coleta de endereço por CEP utilizando a API ViaCEP.

Entre as principais funcionalidades estão:
- Listagem paginada de produtos com botão "Ver mais".
- Carrinho dinâmico com ajuste de quantidades, subtotal e taxa de entrega.
- Busca automática de endereço via CEP.
- Link direto para finalização de pedido no WhatsApp.
- Integração com redes sociais (Instagram, Facebook) e botões de contato rápido.

O projeto foi construído com HTML5, CSS3, JavaScript e jQuery, além de bibliotecas como Bootstrap 4, Font Awesome, Animate.css, WOW.js e Modernizr. 
Por ser um site estático, pode ser hospedado facilmente em plataformas como GitHub Pages, Netlify ou Vercel.

Atuação: desenvolvi toda a estrutura do site, incluindo o layout, a lógica do carrinho e a integração com o WhatsApp e ViaCEP. 
Implementei também as animações, a responsividade e as configurações dinâmicas de redes sociais e entrega.
    `,
    descriptionEn: `
The Online Menu is a static web application developed to display digital menus with organized categories (burgers, barbecue, pizzas, desserts, drinks, and steaks). 
The site is responsive, lightweight, and allows users to place orders via WhatsApp, with automatic delivery calculation and address collection by postal code using the ViaCEP API.

Among the main features are:
- Paginated product listing with "See more" button.
- Dynamic cart with quantity adjustment, subtotal, and delivery fee.
- Automatic address search via postal code.
- Direct link for order completion on WhatsApp.
- Social media integration (Instagram, Facebook) and quick contact buttons.

The project was built with HTML5, CSS3, JavaScript, and jQuery, in addition to libraries like Bootstrap 4, Font Awesome, Animate.css, WOW.js, and Modernizr. 
Being a static site, it can be easily hosted on platforms like GitHub Pages, Netlify, or Vercel.

Role: I developed the entire site structure, including layout, cart logic, and integration with WhatsApp and ViaCEP. 
I also implemented animations, responsiveness, and dynamic social media and delivery configurations.
    `,
    url: 'https://danielpmorais.github.io/cardapio-online/#reservas',
  },
  {
    id: 6,
    title: 'QuickOrder',
    techs: [
      'react',
      'vite',
      'typescript',
      'tailwind',
      'node',
      'express',
      'postgresql',
      'prisma',
      'jwt',
    ],
    cover: quickOrderCover,
    images: [quickOrder1, quickOrder2, quickOrder3],
    description: `
O QuickOrder é uma aplicação web full stack desenvolvida para digitalizar o processo de pedidos em restaurantes e lanchonetes, 
fornecendo um fluxo completo — do cardápio à finalização via WhatsApp ou sistema interno de gestão. 
É uma evolução direta do projeto Cardápio Online, com arquitetura modular, autenticação e integração de banco de dados.

Entre as principais funcionalidades estão:
- Interface administrativa para gerenciar produtos, categorias e pedidos.
- Cardápio dinâmico com imagens, descrições e preços.
- Carrinho interativo com cálculo automático de entrega e total.
- Autenticação com JWT e proteção de rotas.
- Comunicação via API RESTful construída em Node.js e Express.
- Integração com banco de dados PostgreSQL via Prisma ORM.
- Deploy automatizado e contínuo com Vercel.

O frontend foi desenvolvido em React + Vite + TypeScript, utilizando Tailwind CSS para o design e responsividade. 
O backend foi estruturado com Node.js e Express, adotando boas práticas de segurança, validação e modelagem de dados.

Atuação: desenvolvi tanto o frontend quanto o backend do sistema, estruturando a base de dados, 
as rotas e os controladores da API. Também implementei a autenticação JWT, o painel administrativo e as integrações externas.
    `,
    descriptionEn: `
QuickOrder is a full-stack web application developed to digitize the ordering process in restaurants and cafes, 
providing a complete flow — from menu to completion via WhatsApp or internal management system. 
It is a direct evolution of the Online Menu project, with modular architecture, authentication, and database integration.

Among the main features are:
- Administrative interface to manage products, categories, and orders.
- Dynamic menu with images, descriptions, and prices.
- Interactive cart with automatic delivery and total calculation.
- JWT authentication and route protection.
- Communication via RESTful API built with Node.js and Express.
- PostgreSQL database integration via Prisma ORM.
- Automated and continuous deployment with Vercel.

The frontend was developed in React + Vite + TypeScript, using Tailwind CSS for design and responsiveness. 
The backend was structured with Node.js and Express, adopting best practices for security, validation, and data modeling.

Role: I developed both the frontend and backend of the system, structuring the database, 
API routes and controllers. I also implemented JWT authentication, the administrative panel, and external integrations.
    `,
  },
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
  const { t } = useT();
  const { language } = useLanguage();
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        {/* Subseção Destaques */}
        <h3 className={styles.sectionSubtitle}>{t.projects.featured}</h3>
        <div className={`${styles.projectGrid} ${styles.featuredGrid}`}>
          {featuredProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              techs={project.techs}
              cover={project.cover}
              images={project.images}
              description={
                language === 'en' && project.descriptionEn
                  ? project.descriptionEn
                  : project.description
              }
              url={project.url}
            />
          ))}
        </div>

        {/* Subseção Todos os Projetos */}
        {/* TODO: Adicionar filtro para tipos de projetos */}
        <h3 className={styles.sectionSubtitle}>{t.projects.others}</h3>
        <div className={`${styles.projectGrid} ${styles.allGrid}`}>
          {otherProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              techs={project.techs}
              cover={project.cover || (project.images && project.images[0])}
              images={project.images}
              description={
                language === 'en' && project.descriptionEn
                  ? project.descriptionEn
                  : project.description
              }
              url={project.url}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
