import React from 'react';
import styles from './Hero.module.css';
import {
  FaLinkedin,
  FaGithub,
  FaJava,
  FaAngular,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaLinux,
  FaAws,
  FaCogs,
  FaMicrochip,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';
import { Container } from '../../components/layout/Container/Container';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/danielpmorais' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/danielpmorais' },
];

const techIcons = [
  // Front-End
  { name: 'React', icon: <FaReact size={40} style={{ color: '#00D8FF' }} /> },
  { name: 'Angular', icon: <FaAngular size={42} style={{ color: '#DD0031' }} /> },
  { name: 'TypeScript', icon: <SiTypescript size={38} style={{ color: '#007ACC' }} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript size={40} style={{ color: '#F0DB4F' }} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} style={{ color: '#E34F26' }} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} style={{ color: '#1572B6' }} /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} style={{ color: '#38BDF8' }} /> },

  // Back-End
  { name: 'Java', icon: <FaJava size={40} style={{ color: '#007396' }} /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={40} style={{ color: '#6DB33F' }} /> },
  { name: 'Python', icon: <FaPython size={40} style={{ color: '#3776AB' }} /> },

  // Banco de Dados
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} style={{ color: '#336791' }} /> },
  { name: 'MySQL', icon: <SiMysql size={40} style={{ color: '#4479A1' }} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} style={{ color: '#47A248' }} /> },

  // DevOps & Infraestrutura
  { name: 'Linux', icon: <FaLinux size={40} style={{ color: '#FCC624' }} /> },
  { name: 'GitHub', icon: <FaGithub size={40} style={{ color: '#181717' }} /> },
  { name: 'AWS', icon: <FaAws size={40} style={{ color: '#FF9900' }} /> },
  { name: 'CI/CD', icon: <FaCogs size={40} style={{ color: '#FF6B6B' }} /> },

  // IoT & Automação
  { name: 'Arduino', icon: <FaMicrochip size={40} style={{ color: '#00979D' }} /> },
];

export function Hero() {
  return (
    <section id="home" className={styles.heroBackground}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>Olá, sou Daniel!</h1>
          <p>
            Desenvolvedor Full Stack com experiência em{' '}
            <b>Java, Spring Boot, Python, Angular e React</b>, além de sólidos conhecimentos em{' '}
            <b>TypeScript, Tailwind, PostgreSQL e práticas de CI/CD</b>. Tenho foco em criar{' '}
            <b>aplicações web modernas, escaláveis e orientadas à experiência do usuário</b>, unindo
            design limpo, código bem estruturado e propósito real nas soluções.
          </p>

          <div className={styles.techStack}>
            <div className={styles.scrollerTrack}>
              <ul className={styles.scrollerList}>
                {techIcons.map((tech) => (
                  <li key={tech.name} className={styles.techIcon}>
                    {tech.icon}
                  </li>
                ))}
              </ul>

              <ul className={styles.scrollerList} aria-hidden="true">
                {techIcons.map((tech) => (
                  <li key={`${tech.name}-duplicate`} className={styles.techIcon}>
                    {tech.icon}
                  </li>
                ))}
              </ul>
            </div>
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
