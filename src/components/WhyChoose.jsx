import React from 'react';
import './WhyChoose.css';

/**
 * WhyChoose Component
 * Split layout with image + benefits list
 */
const benefits = [
  {
    title: 'Proven Expertise',
    description:
      'Our seasoned team excels in ICF products with years of successful market navigation, offering informed decisions and optimal results.',
  },
  {
    title: 'Customized Solutions',
    description:
      'We pride ourselves on crafting personalised strategies to match your unique goals, ensuring a seamless latest constructions journey.',
  },
  {
    title: 'Transparent Partnerships',
    description:
      'Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.',
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-image"></div>

        <div className="why-choose-content">
          <span className="benefit-label">Your Benefit</span>
          <h2 className="benefit-title">Why Choose Ecobuild System Ltd.</h2>
          <p className="benefit-description">
            Embarked on a global search, visiting 8 countries and reviewing 11 advanced building systems. After
            extensive consultation with architects, contractors, and engineers, we found one solution that stood
            out: NUDURA ICF, examining eleven different construction methods in depth.
          </p>

          <div className="benefits-list">
            {benefits.map((item) => (
              <article key={item.title} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <h3 className="benefit-card-title">{item.title}</h3>
                  <p className="benefit-card-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

