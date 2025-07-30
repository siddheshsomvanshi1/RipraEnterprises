import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
// import slide3 from '../assets/slide3.jpg';

import { motion, AnimatePresence } from 'framer-motion';

import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import ContactPage from './ContactPage';
import MissionVisionPage from './MissionVisionPage'; // ✅ NEW IMPORT

const HomePage = () => {
  const slides = [slide1, slide2];
  const [currentSlide, setCurrentSlide] = useState(0);

  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className={styles.homePage}>
        {/* Hero Slider */}
        <div ref={homeRef} className={styles.heroSlider}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              className={styles.slideImage}
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) {
                  goToNextSlide();
                } else if (info.offset.x > 100) {
                  goToPreviousSlide();
                }
              }}
            />
          </AnimatePresence>

          <div className={styles.sliderButtons}>
            <button onClick={goToPreviousSlide} className={styles.navButton}>‹</button>
            <button onClick={goToNextSlide} className={styles.navButton}>›</button>
          </div>

          <motion.div
            className={styles.underlineBar}
            key={currentSlide}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 8, ease: 'linear' }}
          />

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Work Section */}
        <div ref={workRef}>
          <WorkPage />
        </div>

        {/* About Section */}
        <div ref={aboutRef}>
          <AboutPage />
        </div>

        {/* Testimonials Section */}
        <motion.section
          className={styles.testimonialsSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.sectionHeader}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <div className={styles.titleDecoration} />
          </div>

          <div className={styles.testimonialsGrid}>
            <motion.div
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.testimonialText}>
                "Absolutely breathtaking artwork. It captured the essence of my imagination perfectly."
              </p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>- Ria Mehta</span>
                <span className={styles.clientTitle}>Creative Director, Lumina Studios</span>
              </div>
              <div className={styles.cardAccent} />
            </motion.div>

            <motion.div
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.testimonialText}>
                "Working with Ripra Studio was a dream. Their passion shows in every single stroke."
              </p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>- Karan Shetty</span>
                <span className={styles.clientTitle}>Founder, DesignHub India</span>
              </div>
              <div className={styles.cardAccent} />
            </motion.div>
          </div>
        </motion.section>

        {/* Mission and Vision Section*/}
        <div ref={MissionVisionPage}>
          <MissionVisionPage/>
          </div>



        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
