import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { ProjectModal } from './ProjectModal';
import {
  FaReact,
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaAws,
  FaFigma,
  FaPhp,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiEslint,
  SiPrettier,
  SiZod,
  SiJquery,
  SiJsonwebtokens,
} from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbApi } from 'react-icons/tb';

const iconMap = {
  // Front-End
  react: FaReact,
  angular: FaAngular,
  typescript: SiTypescript,
  javascript: IoLogoJavascript,
  html: FaHtml5,
  vite: SiVite,
  tailwind: SiTailwindcss,
  css: FaCss3Alt,
  jquery: SiJquery,
  bootstrap: BsBootstrap,

  // Back-End & API
  node: FaNode,
  express: SiExpress,
  'api-rest': TbApi,
  php: FaPhp,

  // Banco de Dados
  mysql: SiMysql,
  postgresql: SiPostgresql,
  prisma: SiPrisma,

  // Mobile
  'react-native': SiReact,

  // Ferramentas
  figma: FaFigma,
  eslint: SiEslint,
  prettier: SiPrettier,

  // Cloud & DevOps
  aws: FaAws,

  // Security
  bcrypt: FaShieldAlt,
  cors: FaShieldAlt,
  jwt: SiJsonwebtokens,
  zod: SiZod,
};

const iconTitles = {
  react: 'React',
  angular: 'Angular',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  html: 'HTML5',
  vite: 'Vite',
  tailwind: 'Tailwind CSS',
  css: 'CSS3',
  jquery: 'jQuery',
  bootstrap: 'Bootstrap',
  node: 'Node.js',
  express: 'Express',
  'api-rest': 'REST API',
  php: 'PHP',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  prisma: 'Prisma',
  'react-native': 'React Native',
  figma: 'Figma',
  eslint: 'ESLint',
  prettier: 'Prettier',
  aws: 'AWS',
  bcrypt: 'bcrypt',
  cors: 'CORS',
  jwt: 'JWT',
  zod: 'Zod',
};

export function ProjectCard({ title, techs, cover, images, description, url }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (images && description) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.projectCard} ${cover && description ? styles.clickableCard : ''}`}
        onClick={handleCardClick}
        style={{ cursor: cover && description ? 'pointer' : 'default' }}
      >
        {cover && (
          <div className={styles.coverImage}>
            <img src={cover} alt={`Capa do projeto ${title}`} />
          </div>
        )}
        <h4>{title}</h4>
        <div className={styles.cardTechs}>
          {techs.map((techName) => {
            const IconComponent = iconMap[techName];
            const title = iconTitles[techName] || techName;

            if (!IconComponent) {
              return (
                <span key={techName} className={styles.techBadge} title={title}>
                  {techName}
                </span>
              );
            }

            return (
              <span
                key={techName}
                className={`${styles.techIcon} ${styles[`techIcon-${techName.replace(/-/g, '_')}`]}`}
                title={title}
              >
                <IconComponent size={20} />
              </span>
            );
          })}
        </div>
      </div>

      {images && description && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={title}
          images={images}
          description={description}
          url={url}
        />
      )}
    </>
  );
}
