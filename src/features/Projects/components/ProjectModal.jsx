import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ProjectModal.module.css';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { ImageCarousel } from './ImageCarousel';
import { useT } from '../../../i18n';

export function ProjectModal({ isOpen, onClose, title, images, description, url }) {
  const { t } = useT();
  if (!isOpen) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label={t.modal.closeAria}>
          <FaTimes />
        </button>

        <h3>{title}</h3>

        {images && images.length > 0 && (
          <div className={styles.carouselContainer}>
            <ImageCarousel images={images} />
          </div>
        )}

        {description && (
          <div className={styles.description}>
            {description.split('\n').map((line, index) => {
              const trimmedLine = line.trim();
              if (!trimmedLine) return null;
              return <p key={index}>{trimmedLine}</p>;
            })}
          </div>
        )}

        {url && (
          <div className={styles.linkContainer}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <span>{t.projectModal.visitSite}</span>
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}
