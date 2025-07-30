import React, { useState } from 'react';
import styles from '../styles/Work.module.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import images
import fabric1 from '../assets/gallery21.jpg';
import fabric2 from '../assets/gallery22.jpg';
import book1 from '../assets/gallery7.jpg';
import book2 from '../assets/gallery8.jpg';
import book3 from '../assets/gallery9.jpg';
import book4 from '../assets/gallery10.jpg';
import book5 from '../assets/gallery11.jpg';
import book6 from '../assets/gallery12.jpg';
import book7 from '../assets/gallery13.jpg';
import book8 from '../assets/gallery14.jpg';
import book9 from '../assets/gallery15.jpg';
import book10 from '../assets/gallery16.jpg';

const EnterprisesPage = () => {
  const enterpriseImages = [
    fabric1, fabric2,
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.workContainer}>
      <h1 className={styles.mainTitle}>🏢 Ripra Enterprises Showcase</h1>

      <div className={styles.galleryGrid}>
        {enterpriseImages.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image} 
              alt={`Enterprise Work ${index + 1}`} 
              className={styles.galleryImage}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>View</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={enterpriseImages[currentIndex]}
          nextSrc={enterpriseImages[(currentIndex + 1) % enterpriseImages.length]}
          prevSrc={enterpriseImages[(currentIndex + enterpriseImages.length - 1) % enterpriseImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + enterpriseImages.length - 1) % enterpriseImages.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % enterpriseImages.length)
          }
        />
      )}
    </div>
  );
};

export default EnterprisesPage;
