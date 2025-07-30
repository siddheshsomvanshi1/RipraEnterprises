import React from 'react';
import styles from '../styles/MissionVision.module.css';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import { GiSparkles, GiPuzzle, GiLightBulb, GiAchievement, GiTeamIdea, GiProgression } from 'react-icons/gi';

const MissionVisionPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}><FaBullseye /></div>
            <h3 className={styles.title}>Mission</h3>
            <p className={styles.text}>
              To empower creativity through innovative design solutions that speak to the soul and elevate every story to visual excellence.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}><FaEye /></div>
            <h3 className={styles.title}>Vision</h3>
            <p className={styles.text}>
              To be the world’s most trusted creative studio, where imagination meets technology to shape unforgettable digital experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.coreValues}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subTitle}>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}><GiSparkles /><span>Creativity</span></div>
            <div className={styles.valueCard}><GiPuzzle /><span>Integrity</span></div>
            <div className={styles.valueCard}><GiLightBulb /><span>Innovation</span></div>
            <div className={styles.valueCard}><GiAchievement /><span>Excellence</span></div>
            <div className={styles.valueCard}><GiTeamIdea /><span>Collaboration</span></div>
            <div className={styles.valueCard}><GiProgression /><span>Growth</span></div>
            <div className={styles.valueCard}><FaStar /><span>Quality</span></div>
            {/* <div className={styles.valueCard}><FaBullseye /><span>Focus</span></div> */}
          </div>
        </motion.div>

        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaStar className={styles.ctaIcon} />
          <h4>Join Us on Our Creative Journey</h4>
          <p>Let’s shape your vision into a digital masterpiece. Let’s collaborate today!</p>
          {/* <button className={styles.ctaButton}>Get in Touch</button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionPage;
