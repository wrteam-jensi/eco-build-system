import React from 'react';
import { Accusaf, Bluehouse, RealAssest, Secondcompany } from './Icon';
import './TrustedCompanies.css';

/**
 * TrustedCompanies Component
 * Renders headline and responsive brand wall that mirrors provided measurements.
 */
const logoBlocks = [
  { id: 'real-estate', label: 'Real Estate', Icon: RealAssest },
  { id: 'company-v', label: 'Company V', Icon: Secondcompany },
  { id: 'bauhouse', label: 'Bauhouse Real Estate', Icon: Bluehouse },
  { id: 'accusaf', label: 'Accusaf', Icon: Accusaf },
  { id: 'company-alt', label: 'Company Alt', Icon: Secondcompany },
  { id: 'business-name', label: 'Business Name', Icon: RealAssest },
];

const TrustedCompanies = () => (
  <section className="trusted-section">
    {/* Wrapper keeps content centered within 1110px spec */}
    <div className="trusted-wrapper">
      <p className="trusted-caption">Trusted By Over 150+ Major Companies</p>

      {/* Grid stays flexible and stacks on narrow screens */}
      <div className="trusted-grid" role="list">
        {logoBlocks.map(({ id, label, Icon }) => (
          <article key={id} className="trusted-card" role="listitem" aria-label={label}>
            <div className="trusted-logo">
              <Icon />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
  
export default TrustedCompanies;

