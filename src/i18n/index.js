import { useLanguage } from '../hooks/useLanguage';

const translations = {
  pt: {
    nav: { home: 'Início', projects: 'Projetos', skills: 'Habilidades', about: 'Sobre mim' },
    hero: {
      title: 'Olá, sou Daniel!',
      body: 'Desenvolvedor Full Stack com experiência em Java, Spring Boot, Python, Angular e React, além de sólidos conhecimentos em TypeScript, Tailwind, PostgreSQL e práticas de CI/CD. Tenho foco em criar aplicações web modernas, escaláveis e orientadas à experiência do usuário, unindo design limpo, código bem estruturado e propósito real nas soluções.',
      ariaVisit: (name) => `Visitar ${name}`,
    },
    projects: { featured: 'Destaques', others: 'Outros projetos' },
    skills: { hard: 'Hard-Skills', soft: 'Soft-Skills' },
    about: {
      title: 'Olá, sou Daniel!',
      body: 'Sou Daniel Patrick de Morais, estudante de Análise e Desenvolvimento de Sistemas no IFSP e desenvolvedor apaixonado por tecnologia e aprendizado contínuo. Minha trajetória começou na área administrativa e de suporte de TI na Ambev, onde aprimorei minha capacidade de resolver problemas, entender processos de negócio e propor soluções práticas. Hoje atuo como desenvolvedor full stack, com foco em Java (Spring Boot) no backend e Angular e React no frontend. Também tenho experiência com Python, PostgreSQL, MongoDB, Tailwind e GitHub Actions, além de interesse por DevOps e IoT. Em 2025, fui premiado em 2º lugar em um hackathon de 50 horas, reforçando minha paixão por criar soluções colaborativas e funcionais. Tenho como valores a proatividade, criatividade e aprendizado constante, unindo técnica, propósito e impacto real em cada projeto.',
      contact: 'Contato',
      downloadCv: 'Baixar CV',
    },
    modal: {
      contactTitle: 'Entre em contato',
      whatsapp: 'WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      closeAria: 'Fechar modal',
    },
    footer: { backToTop: 'Voltar ao topo', rights: 'Todos os direitos reservados.' },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', skills: 'Skills', about: 'About me' },
    hero: {
      title: "Hi, I'm Daniel!",
      body: 'Full Stack developer experienced with Java, Spring Boot, Python, Angular and React, plus strong knowledge of TypeScript, Tailwind, PostgreSQL and CI/CD practices. I focus on building modern, scalable, user‑experience‑driven web apps, combining clean design, well‑structured code and real purpose.',
      ariaVisit: (name) => `Visit ${name}`,
    },
    projects: { featured: 'Featured', others: 'Other projects' },
    skills: { hard: 'Hard Skills', soft: 'Soft Skills' },
    about: {
      title: "Hi, I'm Daniel!",
      body: "I'm Daniel Patrick de Morais, an ADS student at IFSP and a developer passionate about technology and continuous learning. My journey started in admin and IT support at Ambev, where I improved problem‑solving, business understanding and practical solutions. Today I work as a full‑stack developer focused on Java (Spring Boot) on the backend and Angular/React on the frontend. I also have experience with Python, PostgreSQL, MongoDB, Tailwind and GitHub Actions, with interest in DevOps and IoT. In 2025, I achieved 2nd place in a 50‑hour hackathon, reinforcing my passion for collaborative, functional solutions. My values are proactivity, creativity and constant learning — combining technique, purpose and real impact in every project.",
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    modal: {
      contactTitle: 'Get in touch',
      whatsapp: 'WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      closeAria: 'Close modal',
    },
    footer: { backToTop: 'Back to top', rights: 'All rights reserved.' },
  },
};

export function useT() {
  const { language } = useLanguage();
  const dict = translations[language] || translations.pt;
  return { t: dict };
}
