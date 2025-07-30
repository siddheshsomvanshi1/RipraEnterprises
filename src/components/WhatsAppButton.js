import React from 'react';
import styles from '../styles/WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9823050777"
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsAppButton;
