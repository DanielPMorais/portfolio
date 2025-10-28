import React from 'react';
import styles from './ProjectCard.module.css'; // Vamos criar este arquivo
import { FaJs, FaJava, FaSass } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const iconMap = {
  js: <FaJs color="#F7DF1E" />,
  java: <FaJava color="#E76F00" />,
  sass: <FaSass color="#CC6699" />,
  tailwind: <SiTailwindcss color="#06B6D4" />,
};

export function ProjectCard({ title, techs }) {
  return (
    <div className={styles.projectCard}>
      <h4>{title}</h4>
      <div className={styles.cardTechs}>
        {techs.map((techName) => (
          <span key={techName} className={styles.techIcon}>
            {iconMap[techName] || techName}
          </span>
        ))}
      </div>
    </div>
  );
}
