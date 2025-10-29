import React, { useState } from 'react';
import styles from './SkillCard.module.css';
import { SkillIcons } from './SkillIcons';
import { SkillModal } from './SkillModal';
import { FaTimes } from 'react-icons/fa';

export function SkillCard({ title, icons, description, isHardSkill = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (isHardSkill && description) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.skillCard} ${isHardSkill ? styles.hardSkillCard : ''}`}
        onClick={handleCardClick}
        style={{ cursor: isHardSkill && description ? 'pointer' : 'default' }}
      >
        <h3>{title}</h3>
        {icons && <SkillIcons icons={icons} />}
      </div>

      {isHardSkill && description && (
        <SkillModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className={styles.skillModalContent}>
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              aria-label="Fechar modal"
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
