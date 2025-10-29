import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { FaTimes, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Modal({ isOpen, onClose, children }) {
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
          <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
            <FaTimes />
          </button>
        )}

        {children || (
          <>
            <h3>Entre em contato</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="https://wa.me/12981241765" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:daniel.patrickmorais@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/danielpmorais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/danielpmorais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
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
