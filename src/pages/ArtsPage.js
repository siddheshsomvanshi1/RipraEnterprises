import React, { useState } from 'react';
import styles from '../styles/Work.module.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import only Arts images
import art1 from '../assets/slide1.jpg';
import art2 from '../assets/slide2.jpg';
import art3 from '../assets/slide3.jpg';
import art4 from '../assets/slide4.jpg';
import sketch1 from '../assets/gallery5.jpg';
import sketch2 from '../assets/gallery6.jpg';

const ArtsPage = () => {
  const artImages = [art1, art2, art3, art4, sketch1, sketch2];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.workContainer}>
      <h1 className={styles.mainTitle}>🎨 Ripra Arts Collection</h1>

      <div className={styles.galleryGrid}>
        {artImages.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image} 
              alt={`Art ${index + 1}`} 
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
          mainSrc={artImages[currentIndex]}
          nextSrc={artImages[(currentIndex + 1) % artImages.length]}
          prevSrc={artImages[(currentIndex + artImages.length - 1) % artImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + artImages.length - 1) % artImages.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % artImages.length)
          }
        />
      )}
    </div>
  );
};

export default ArtsPage;
