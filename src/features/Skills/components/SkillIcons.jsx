import React from 'react';
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaDatabase,
  FaLinux,
  FaGithub,
  FaAws,
  FaCogs,
  FaMicrochip,
  FaPaintBrush,
  FaFileExcel,
  FaFigma,
  FaImage,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';

const iconMap = {
  react: FaReact,
  angular: FaAngular,
  typescript: SiTypescript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  materialize: FaCogs, // Usando ícone genérico para Materialize
  java: FaJava,
  springboot: SiSpringboot,
  python: FaPython,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  linux: FaLinux,
  github: FaGithub,
  aws: FaAws,
  'ci-cd': FaCogs, // Usando ícone genérico para CI/CD
  arduino: FaMicrochip,
  illustrator: FaPaintBrush,
  photoshop: FaImage,
  figma: FaFigma,
  excel: FaFileExcel,
};

export function SkillIcons({ icons }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {icons.map((iconName, index) => {
        const IconComponent = iconMap[iconName];
        if (!IconComponent) {
          console.warn(`Ícone não encontrado: ${iconName}`);
          return null;
        }
        return <IconComponent key={index} size={20} />;
      })}
    </div>
  );
}
