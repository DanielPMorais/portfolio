import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { FaTimes, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useT } from '../../../i18n';

export function Modal({ isOpen, onClose, children }) {
  const { t } = useT();
  // Se o modal não estiver aberto, não renderize nada
  if (!isOpen) return null;

  // O conteúdo do Modal
  const modalContent = (
    // O Fundo (Overlay) que fecha ao clicar
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={children ? styles.modalContainer : styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar - apenas para modal de contato */}
        {!children && (
          <button className={styles.closeButton} onClick={onClose} aria-label={t.modal.closeAria}>
            <FaTimes />
          </button>
        )}

        {children || (
          <>
            <h3>{t.modal.contactTitle}</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="https://wa.me/12981241765" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> {t.modal.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href="mailto:daniel.patrickmorais@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope /> {t.modal.email}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/danielpmorais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> {t.modal.linkedin}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/danielpmorais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> {t.modal.github}
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}
