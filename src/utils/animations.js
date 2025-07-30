// src/utils/animations.js
// Page Transitions (Keeping your 0.05s duration here as per App.js)
export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.05, ease: "easeOut" }
};

// Scroll Animations - Default durations for faster appearance
export const scrollAnimations = {
  fadeUp: {
    initial: { opacity: 0, y: 30 }, // Slightly more pronounced initial y than default
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" }, // Trigger slightly earlier for smoother feel
    transition: { duration: 0.3 } // Faster duration
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" }, // Trigger slightly earlier
    transition: { duration: 0.3 } // Faster duration
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" }, // Trigger slightly earlier
    transition: { duration: 0.3 } // Faster duration
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" }, // Trigger slightly earlier
    transition: { duration: 0.3 } // Faster duration
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" }, // Trigger slightly earlier
    transition: { duration: 0.3 } // Faster duration
  }
};

// Hover Animations (No changes as per request scope)
export const hoverAnimations = {
  scaleUp: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  rotate: {
    whileHover: { rotate: 5, scale: 1.1 },
    whileTap: { scale: 0.9 }
  },
  bounce: {
    whileHover: { y: -5 },
    whileTap: { y: 0 }
  }
};

// Stagger Children
export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { // Changed from 'animate' to 'whileInView' for scroll-triggered stagger
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Faster stagger
    }
  },
  viewport: { once: true, amount: 0.3 } // Added viewport for scroll triggering
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }, // Changed from 'animate' to 'whileInView'
  transition: { duration: 0.3 } // Faster duration
};

// Export all animations as a single object
const animations = {
  pageTransition,
  ...scrollAnimations,
  ...hoverAnimations,
  staggerContainer,
  staggerItem
};

export default animations;