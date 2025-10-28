import React from 'react';
import styles from './Container.module.css';

export function Container({ children, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}
