import React from 'react';
import styles from './Container.module.css';

export function Container({ children, className, ...props }) {
  const combinedClassName = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
