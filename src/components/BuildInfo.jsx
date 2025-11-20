import React from 'react';
import './BuildInfo.css';

import imgEcology from '../assets/images/0c375863905e1bb1b25750cc52798b844b6eee66.jpg';
import imgConstruction from '../assets/images/9b8b0e7bb9354c3ecb5831282cb6aff721f5e2fe.png';
import imgPlans from '../assets/images/37c4d2e9dec0ba5188f667d64a82de80ab3a8749.png';

const articles = [
  {
    id: 'plans',
    date: 'May 31, 2025',
    title: 'What Is Green Building?',
    excerpt:
      'For many, anything that is considered green is regarded as environmentally friendly, limiting negative effects on the planet while offering people attainable solutions.',
    image: imgPlans,
  },
  {
    id: 'nudura',
    date: 'May 31, 2025',
    title: 'The Benefits Of Green Building Using The NUDURA Method',
    excerpt:
      'A standout advantage of modern construction is the NUDURA method, combining modular insulated concrete forms with rapid installation to maintain thermal performance.',
    image: imgConstruction,
  },
  {
    id: 'ecology',
    date: 'May 31, 2025',
    title: 'Design Libraries Made From Ecological Materials',
    excerpt:
      'ICF libraries prioritize sustainability with faster installation timelines and materials that reduce waste, delivering durable structures without sacrificing aesthetics.',
    image: imgEcology,
  },
];

const BuildInfo = () => (
  <section className="build-info">
    <div className="build-info__inner">
      <div className="build-info__heading">
        <span className="build-info__eyebrow">Latest New</span>
        <h2>Green Building Information</h2>
        <span className="build-info__accent" aria-hidden="true" />
      </div>

      <div className="build-info__grid">
        {articles.map(({ id, date, title, excerpt, image }) => (
          <article key={id} className="build-card">
            <div className="build-card__media">
              <img src={image} alt={title} loading="lazy" />
              <span className="build-card__date">{date}</span>
            </div>

            <div className="build-card__content">
              <h3>{title}</h3>
              <p>
                {excerpt}{' '}
                <a className="build-card__cta" href="#">
                  Read More
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BuildInfo;

