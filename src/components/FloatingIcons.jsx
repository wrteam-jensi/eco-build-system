import React from 'react';
import translateIcon from '../assets/images/Translate (1).svg';
import gptIcon from '../assets/images/GPT.svg';
import pageUpIcon from '../assets/images/Page-Up.svg';
import './FloatingIcons.css';

/**
 * Floating Icons Component
 * Right-side floating icons for translate, logo, and scroll to top
 * Matches Figma design specifications
 * Three icons: translate (speech bubble with star/gear), swirl logo, scroll to top arrow
 */
const FloatingIcons = () => {
  // Scroll to top functionality - smooth scroll to page top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-icons">
      {/* Translate Icon - Speech bubble with star and gear */}
      <div  aria-label="Translate">
        <img src={translateIcon} alt="Translate" />
      </div>

      {/* GPT/Logo Icon - Interconnected swirl design */}
      <div  aria-label="Logo">
        <img  src={pageUpIcon} alt="Logo" />
      </div>

      {/* Scroll to Top Icon - Upward arrow */}
      <div 
    
        onClick={scrollToTop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
      >
        <img src={gptIcon} alt="Scroll to top" />
      </div>
    </div>
  );
};

export default FloatingIcons;