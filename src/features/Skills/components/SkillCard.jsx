import React, { useState } from 'react';
import styles from './SkillCard.module.css';
import { SkillIcons } from './SkillIcons';
import { SkillModal } from './SkillModal';
import { FaTimes } from 'react-icons/fa';
import { useT } from '../../../i18n';

export function SkillCard({ title, icons, description = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useT();

  const handleCardClick = () => {
    if (description) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.skillCard} ${description ? styles.clickableCard : ''}`}
        onClick={handleCardClick}
        style={{ cursor: description ? 'pointer' : 'default' }}
      >
        <h3>{title}</h3>
        {icons && <SkillIcons icons={icons} />}
      </div>

      {description && (
        <SkillModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className={styles.skillModalContent}>
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              aria-label={t.modal.closeAria}
            >
              <FaTimes />
            </button>
            <h3>{title}</h3>
            <div className={styles.description}>
              {description.split('\n').map((line, index) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return null;

                // Destacar categorias principais (texto antes dos dois pontos)
                const parts = trimmedLine.split(':');
                if (parts.length > 1) {
                  return (
                    <p key={index}>
                      <strong>{parts[0]}:</strong>
                      {parts.slice(1).join(':')}
                    </p>
                  );
                }

                return <p key={index}>{trimmedLine}</p>;
              })}
            </div>
          </div>
        </SkillModal>
      )}
    </>
  );
}
