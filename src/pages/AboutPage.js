import React from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';

const AboutPage = () => {
  const services = [
    { icon: "🎨", text: "Custom Artwork & Illustration" },
    { icon: "🖌️", text: "Branding & Visual Identity" },
    { icon: "📦", text: "Packaging & Product Design" },
    { icon: "🖼️", text: "Wall Murals & Installations" },
    { icon: "💻", text: "Digital & Print Media Design" }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.aboutSection}>
        {/* Intro Section */}
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.imageContainer}>
            <img 
              src={aboutImg} 
              alt="Ripra Studio" 
              className={styles.image}
              loading="lazy"
            />
          </div>

          <div className={styles.textContainer}>
            <h2>About Ripra Studio</h2>
            <p>
              Ripra Studio is where imagination meets innovation. We are an artistic hub transforming ideas into powerful, emotional, and creative visual stories. Our work reflects passion, originality, and connection with our audience.
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className={styles.services}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Our Services</h3>
          <p>
            At Ripra, we specialize in crafting unique visual experiences. Whether you're looking for identity, murals, or digital magic, we deliver art with purpose and emotion.
          </p>

          <ul className={styles.serviceList}>
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.serviceItem}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
                <span>{service.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

     {/* Bottom Wave Design with Gradient Colors */}
<div className={styles.designElement}>
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
    <defs>
      <linearGradient id="ripraBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f6c644" />
        <stop offset="25%" stopColor="#f4d94d" />
        <stop offset="50%" stopColor="#b1d477" />
        <stop offset="75%" stopColor="#7ec8d7" />
        <stop offset="100%" stopColor="#499cd2" />
      </linearGradient>
    </defs>

    <path 
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
      opacity=".25" 
      fill="url(#ripraBottomGradient)"
    />

    <path 
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
      opacity=".5" 
      fill="url(#ripraBottomGradient)"
    />

    <path 
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
      fill="url(#ripraBottomGradient)"
    />
  </svg>
</div>

    </div>
  );
};

export default AboutPage;