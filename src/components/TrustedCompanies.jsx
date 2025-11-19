import React from 'react';
import './TrustedCompanies.css';

/**
 * TrustedCompanies Component
 * Displays logos row with headline
 */
const companies = ['Real Estate', 'Company', 'Bauhouse Real Estate', 'Accusaf', 'Company', 'Business Name'];

const TrustedCompanies = () => (
  <section className="trusted-section">
    <p className="trusted-caption">Trusted By Over 150+ Major Companies</p>
    <div className="trusted-logos">
      {companies.map((name) => (
        <div key={name} className="trusted-logo">
          {name}
        </div>
      ))}
    </div>
  </section>
);

export default TrustedCompanies;

