import React from 'react';
import './FloatingIcons.css';

/**
 * Floating Icons Component
 * Right-side floating icons for translate, logo, and scroll to top
 * Matches Figma design specifications
 * Three icons: translate (speech bubble with star/gear), swirl logo, scroll to top arrow
 */
const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-icons">
      {/* Translate Icon - Speech bubble with star and gear */}
      <div className="floating-icon translate-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="#345766" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8V16" stroke="#345766" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="1" fill="#345766"/>
        </svg>
      </div>

      {/* Swirl/Logo Icon - Interconnected swirl design */}
      <div className="floating-icon swirl-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C15.31 2 18 4.69 18 8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8C6 4.69 8.69 2 12 2Z" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10C15.31 10 18 12.69 18 16C18 19.31 15.31 22 12 22C8.69 22 6 19.31 6 16C6 12.69 8.69 10 12 10Z" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12C2 8.69 4.69 6 8 6C11.31 6 14 8.69 14 12C14 15.31 11.31 18 8 18C4.69 18 2 15.31 2 12Z" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12C22 8.69 19.31 6 16 6C12.69 6 10 8.69 10 12C10 15.31 12.69 18 16 18C19.31 18 22 15.31 22 12Z" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Scroll to Top Icon - Upward arrow */}
      <div className="floating-icon scroll-top-icon" onClick={scrollToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12L12 5L19 12" stroke="#345766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default FloatingIcons;

