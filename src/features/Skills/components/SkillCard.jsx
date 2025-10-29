import React from 'react';
import styles from './SkillCard.module.css';

export function SkillCard({ title }) {
  return (
    <div className={styles.skillCard}>
      <p>{title}</p>
    </div>
  );
}
