import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SkillModal.module.css';
import { FaTimes } from 'react-icons/fa';

export function SkillModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}
