import React from 'react';
import './WhyNudura.css';

/**
 * WhyNudura Component
 * Displays the "Why Nudura" gradient card section.
 * All copy + layout taken from the Figma reference.
 */
const WhyNudura = () => {
  return (
    <section className="why-nudura-section">
      <div className="why-nudura-card">
        <h2 className="why-nudura-title">Why Nudura</h2>
        <p className="why-nudura-paragraph">
          Choosing NUDURA Integrated Building Technology Products for your next design project
          is undoubtedly the smart and right choice for today&apos;s complex design challenges.
        </p>
        <p className="why-nudura-paragraph">
          The “EPS” formwork system, for casting Nodora&apos;s unique concrete walls, which
          significantly differentiates them from other concrete formwork products or traditional
          construction methods available on the market today, for a smart, economical, and greenest
          construction method.
        </p>
        <p className="why-nudura-footnote">
          On the other hand, Nodora leads the way and sets new standards, showing planners, engineers
          and contractors a smart, fast, efficient and advanced approach to both planning solutions
          and the construction of residential and commercial buildings.
        </p>
        <p className="why-nudura-footnote">
          NUDURA&apos;s award-winning, energy-efficient technology means a more efficient green
          building approach that outperforms all known construction methods, especially in the
          construction of conventional building envelope walls.
        </p>
      </div>
    </section>
  );
};

export default WhyNudura;

