import React from 'react';
import styles from './Hero.module.css';
import { FaLinkedin, FaGithub, FaJava, FaSass, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { Container } from '../../components/layout/Container/Container';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/danielpmorais' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/danielpmorais' },
];

const techIcons = [
  { name: 'JavaScript', icon: <IoLogoJavascript style={{ color: '#F7DF1E' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
  { name: 'Sass', icon: <FaSass style={{ color: '#CC6699' }} /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
  { name: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} /> },
];

export function Hero() {
  return (
    <section id="about-me" className={styles.heroBackground}>
      <Container id="about-me" className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>Olá, sou Daniel!</h1>
          <p>
            Tenho proficiência em JavaScript, HTML, CSS, Tailwind, Node.js, Angular e Java, além de
            conhecimentos em TypeScript, Git, Express, MySQL e MongoDB. Atuo no desenvolvimento full
            stack com foco em aplicações web modernas e eficientes.
          </p>

          <div className={styles.techStack}>
            {techIcons.map((tech) => (
              <div key={tech.name} className={styles.techIcon} aria-label={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroAside}>
          <div className={styles.heroImage}>
            <img src="/profile.jpeg" alt="Foto de Daniel Morais" />
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${link.name}`}
              >
                {React.cloneElement(link.icon, { className: styles.icon })}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
