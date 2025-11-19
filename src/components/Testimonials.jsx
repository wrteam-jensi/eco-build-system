import React from 'react';
import './Testimonials.css';

/**
 * Testimonials Component
 * Renders testimonial cards similar to slider design.
 */
const testimonials = [
  {
    quote:
      'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    author: 'Courtney Henry',
    role: 'CEO Themesflat',
  },
  {
    quote:
      'The team efficiently manages properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    author: 'Esther Howard',
    role: 'CEO Themesflat',
  },
  {
    quote:
      'Our property management experience has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation.',
    author: 'Annette Black',
    role: 'CEO Themesflat',
  },
  {
    quote:
      'They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    author: 'Bessie Cooper',
    role: 'CEO Themesflat',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-label">Our Testimonials</span>
        <h2 className="testimonials-title">What Do The Customers Write About Us?</h2>
        <p className="testimonials-subtitle">
          We don&apos;t just build buildings, we research and develop new products every day to improve and
          advance the construction industry in Israel.
        </p>
      </div>

      <div className="testimonials-cards">
        {testimonials.map((item) => (
          <article key={item.author} className="testimonial-card">
            <div className="testimonial-quote">“</div>
            <p className="testimonial-text">{item.quote}</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar" aria-hidden="true"></div>
              <div className="testimonial-meta">
                <span className="testimonial-author">{item.author}</span>
                <span className="testimonial-role">{item.role}</span>
                <div className="testimonial-stars" aria-label="5 star rating">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="star-symbol">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonials-dots" role="presentation">
        {[0, 1, 2, 3].map((index) => (
          <span key={index} className={`dot ${index === 1 ? 'active' : ''}`}></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

