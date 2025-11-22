import React, { useEffect, useRef, useState } from 'react';
import './Certifications.css';
import certification1 from '../assets/images/company1.jpg';
import certification2 from '../assets/images/company2.png';
import certification3 from '../assets/images/company3.jpg';
import certification4 from '../assets/images/company4.jpg';
import certification5 from '../assets/images/company5.jpg';
import { LeftsideIcon } from './Icon';

/**
 * Certifications Component
 * "What We Do?" / "Standard Certification" section
 * Single row with 5 cards and automatic scrolling
 */
const certificationData = [
  {
    title: 'European Organisation For Technical Assessment',
    body:
      'The European Organisation for Technical Assessment (EOTA) is a Europe-wide association of Technical Assessment Bodies for construction products established under the Construction Products Regulation (CPR).',
    image: certification1,
  },
  {
    title: 'ES ICC Evaluation Service',
    body:
      'ICC-ES is a certification body, a subsidiary of the International Code Council (ICC), that provides technical evaluations and product certifications for code compliance.',
    image: certification2,
  },
  {
    title: 'ISO 9001:2015',
    body:
      'The GITI is proud to update its quality management system to ISO 9001:2015 and provide consistent top quality geophysical services to its clients.',
    image: certification3,
  },
  {
    title: 'UK Green Building Council',
    body:
      '"Green" buildings are therefore characterised by a high-quality ecological design and superior resource efficiency in the areas of energy, water and materials. Damaging effects on health and the environment are reduced to a minimum.',
    image: certification4,
  },
  {
    title: 'Council Of ICF Industries',
    body:
      'ICFMA is a North American non-profit trade association for the Insulated Concrete Form industry, founded in 2014.',
    image: certification5,
  },
];

const Certifications = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollDuration = 5000; // 5 seconds
    const pauseDuration = 5000; // 5 seconds
    let lastTime = Date.now();
    let scrollStartTime = Date.now();
    let isCurrentlyScrolling = true;

    const autoScroll = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const currentTime = Date.now();
      const elapsed = currentTime - lastTime;
      lastTime = currentTime;

      // Check if we should switch between scrolling and pausing
      const timeSinceStart = currentTime - scrollStartTime;
      
      if (isCurrentlyScrolling) {
        // We're in scrolling phase
        if (timeSinceStart >= scrollDuration) {
          // Switch to pause phase
          isCurrentlyScrolling = false;
          scrollStartTime = currentTime;
          setIsScrolling(false);
        } else {
          // Continue scrolling
          const maxScroll = container.scrollWidth - container.clientWidth;
          
          if (maxScroll > 0) {
            scrollPosition += scrollSpeed;
            
            // Reset to start when reaching the end
            if (scrollPosition >= maxScroll) {
              scrollPosition = 0;
            }

            container.scrollLeft = scrollPosition;
          }
        }
      } else {
        // We're in pause phase
        if (timeSinceStart >= pauseDuration) {
          // Switch back to scrolling phase
          isCurrentlyScrolling = true;
          scrollStartTime = currentTime;
          setIsScrolling(true);
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <section className="certifications-section">
      {/* Standard Certification Title */}
      <h2 className="certifications-title">Standard Certification</h2>

      {/* Scrollable Container */}
      <div 
        className="certifications-scroll-container"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          // Resume after a short delay on touch devices
          setTimeout(() => setIsPaused(false), 2000);
        }}
      >
        <div className="certifications-main">
          {certificationData.map((item, index) => (
            <div key={index} className="certification-card-wrapper">
              <article className="certification-card">
                {/* Image */}
                <div className="certification-image-container">
                  <img src={item.image} alt={item.title} className="certification-image" />
                </div>

                {/* Content */}
                <div className="certification-content">
                  {/* Title */}
                  <h3 className="certification-heading">{item.title}</h3>

                  {/* Description */}
                  <p className="certification-body">{item.body}</p>

                  {/* Button */}
                  <button className="certification-button">
                    <span style={{textDecoration:'underline', fontWeight:'bold'}}>Learn More</span>
                   <LeftsideIcon className="button-arrow" />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
