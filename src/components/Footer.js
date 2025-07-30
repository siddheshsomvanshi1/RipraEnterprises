import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import animations from '../utils/animations'; // Import the animations utility

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.footerContent}
        variants={animations.staggerContainer} // Uses staggerContainer from utils
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.footerSection} variants={animations.fadeUp}> {/* Uses fadeInUp from utils */}
          <h3 className={styles.footerHeading}>About Us</h3>
          <p className={styles.footerText}>
            Ripra is an artistic studio where ideas meet creativity. We design powerful visuals through murals,
            branding, packaging, and digital artwork that inspire and connect.
          </p>
        </motion.div>

        <motion.div className={styles.footerSection} variants={animations.fadeUp}> {/* Uses fadeInUp from utils */}
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/" className={styles.footerLink}>Home</a></li>
            <li><a href="/about" className={styles.footerLink}>About</a></li>
            <li><a href="/work" className={styles.footerLink}>Our Work</a></li>
            <li><a href="/contact" className={styles.footerLink}>Contact</a></li>
          </ul>
        </motion.div>

        <motion.div className={styles.footerSection} variants={animations.fadeUp}> {/* Uses fadeInUp from utils */}
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <p className={styles.footerText}>
            Flat No 401,Maitri Park CHS.<br />
            S.No. 8/2+3 plot no 16,17, Vivekanand Society,Taljai Pathar,Dhankawadi Pune 43<br />
            Phone: +91 9767893623<br />
            Email: hello@riprastudio.com
          </p>
        </motion.div>

        <motion.div className={styles.footerSection} variants={animations.fadeUp}> {/* Uses fadeInUp from utils */}
          <h3 className={styles.footerHeading}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/ripra369?utm_source=qr&igsh=bXRieHR1MnFrYWFp" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><FaFacebook /></a>
            <a href="https://youtube.com/@ripra369?si=35GOWOqe8s74-NYX" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube"><FaYoutube /></a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.footerBottom}
        variants={animations.fadeUp} // Uses fadeInUp from utils
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} Ripra Studio. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;