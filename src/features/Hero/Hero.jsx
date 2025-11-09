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
  FaLinux,
  FaAws,
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
import { useT } from '../../i18n';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/danielpmorais' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/danielpmorais' },
];

const techIcons = [
  // Front-End
  { name: 'React', icon: <FaReact size={40} style={{ color: '#00D8FF' }} /> },
  { name: 'Angular', icon: <FaAngular size={42} style={{ color: '#DD0031' }} /> },
  { name: 'TypeScript', icon: <SiTypescript size={38} style={{ color: '#007ACC' }} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript size={40} className={styles.javascriptIcon} /> },
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
  { name: 'Linux', icon: <FaLinux size={40} className={styles.linuxIcon} /> },
  { name: 'GitHub', icon: <FaGithub size={40} className={styles.githubIcon} /> },
  { name: 'AWS', icon: <FaAws size={40} style={{ color: '#FF9900' }} /> },
];

export function Hero() {
  const { t } = useT();
  const highlight = (text, keywords) => {
    if (!keywords || keywords.length === 0) return text;
    const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b(${keywords.map(escape).join('|')})\\b`, 'g');
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      parts.push(<strong key={`${match.index}-${match[0]}`}>{match[0]}</strong>);
      lastIndex = pattern.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts;
  };
  return (
    <section id="home" className={styles.heroBackground}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>{t.hero.title}</h1>
          <p>{highlight(t.hero.body, t.hero.keywords)}</p>

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
                aria-label={t.hero.ariaVisit(link.name)}
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
