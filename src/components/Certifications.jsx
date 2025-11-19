import React from 'react';
import './Certifications.css';

/**
 * Certifications Component
 * Displays standard certification cards with learn more buttons.
 */
const certificationData = [
  {
    title: 'European Organisation For Technical Assessment',
    body:
      'The European Organisation for Technical Assessment (EOTA) is a Europe-wide association of technical assessment bodies for construction products established under the Construction Products Regulation (CPR).',
    logoText: 'EOTA',
  },
  {
    title: 'ES ICC Evaluation Service',
    body:
      'ICC-ES is a certification body, a subsidiary of the International Code Council (ICC), that provides technical evaluations and product certifications for code compliance.',
    logoText: 'ES',
  },
  {
    title: 'ISO 9001:2015',
    body:
      'The GITI is proud to update its quality management system to ISO 9001:2015 and provide consistent top quality geophysical services to its clients.',
    logoText: 'ISO',
  },
  {
    title: 'UK Green Building Council',
    body:
      '“Green” buildings are therefore characterised by a high-quality ecological design and superior resource efficiency in the areas of energy, water and materials. Damaging effects on health and the environment are reduced to a minimum.',
    logoText: 'UK GBC',
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Standard Certification</h2>
      <div className="certifications-grid">
        {certificationData.map((item) => (
          <article key={item.title} className="certification-card">
            <div className="certification-logo">{item.logoText}</div>
            <h3 className="certification-heading">{item.title}</h3>
            <p className="certification-body">{item.body}</p>
            <button className="certification-button">
              Learn More
              <span className="button-arrow">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

