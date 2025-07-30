import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Work.module.css';

const WorkPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.workContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>
          Explore Our Creative & Business Ventures
        </h1>
        <p className={styles.subtitle}>
          At Ripra, we blend art and enterprise to deliver exceptional creativity and innovative solutions.
        </p>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.bigButton}
          onClick={() => navigate('/artspage')}
        >
          🎨 Ripra Arts
        </button>

        <button
          className={styles.bigButton}
          onClick={() => navigate('/enterprisespage')}
        >
          🏢 Ripra Enterprises
        </button>
      </div>

      <div className={styles.descriptionSection}>
        <h2>Why Choose Ripra?</h2>
        <ul>
          <li>✅ Stunning Visual Arts & Creative Collections</li>
          <li>✅ Professional Enterprise Services & Solutions</li>
          <li>✅ Committed to Quality, Creativity & Growth</li>
        </ul>
      </div>

      <div className={styles.artisticWave}>
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ripraWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f6c644" />
              <stop offset="25%" stopColor="#f4d94d" />
              <stop offset="50%" stopColor="#b1d477" />
              <stop offset="75%" stopColor="#7ec8d7" />
              <stop offset="100%" stopColor="#499cd2" />
            </linearGradient>
          </defs>
          <path d="M0,120 C150,180 300,80 450,120 C600,160 750,40 900,80 C1050,120 1200,60 1200,60 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" opacity="0.15" />
          <path d="M0,150 C80,80 200,170 320,130 C440,90 520,180 640,150 C760,120 880,190 1000,150 C1120,110 1200,170 1200,170 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" opacity="0.3" />
          <path d="M0,160 C40,120 120,190 200,150 C280,110 320,180 400,150 C480,120 560,190 640,160 C720,130 800,180 880,150 C960,120 1040,170 1120,140 C1160,125 1200,165 1200,165 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" />
        </svg>
      </div>
    </div>
  );
};

export default WorkPage;