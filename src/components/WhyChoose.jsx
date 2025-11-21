import React from 'react';
import benefitIcon from '../assets/images/149007892771b93575a222c349acbbb2b3f620e5.png';
import { BenefitIconExpertise, BenefitIconSolutions, BenefitIconTransparency } from './icons/BenefitIcons';
import './WhyChoose.css';

// Each benefit now references a specific icon component so cards can show unique artwork.
const benefits = [
  {
    title: 'Proven Expertise',
    description:
      'Our seasoned team excels in ICF products with years of successful market navigation, offering informed decisions and optimal results.',
    Icon: BenefitIconExpertise,
  },
  {
    title: 'Customized Solutions',
    description:
      'We pride ourselves on crafting personalised strategies to match your unique goals, ensuring a seamless constructions journey.',
    Icon: BenefitIconSolutions,
  },
  {
    title: 'Transparent Partnerships',
    description:
      'Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.',
    Icon: BenefitIconTransparency,
  },
];

const WhyChoose = () => (
  <section className="why-choose-section" aria-labelledby="why-choose-heading">
    <div className="why-choose-media">
      <img src={benefitIcon} alt="Ecobuild team working on site" loading="lazy" />
    </div>

    <div className="why-choose-content">
      <div className="why-choose-heading" id="why-choose-heading">
        <span className="benefit-label">Your Benefit</span>
        <h2>Why Choose Ecobuild System Ltd.</h2>
        <p>
          Embarked on a global search, visiting 8 countries and reviewing 11 advanced building systems. After extensive
          consultation with architects, contractors, and engineers, we found one solution that stood out: NUDURA ICF,
          examining eleven different construction methods in depth.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map(({ title, description, Icon }) => (
          <article className="benefit-card" key={title}>
            <div className="benefit-card-icon" aria-hidden="true">
              <Icon />
            </div>
            <div className="benefit-card-body">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;