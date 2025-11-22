import React, { useState } from 'react';
import './Hero.css';
import { CrosshairIcon } from './Icon';

/**
 * Hero Component
 * Mirrors Figma layout: eyebrow text, bold heading, tab buttons, rounded search module
 * Fully responsive with local hero image background
 */
const Hero = () => {
  const [productType, setProductType] = useState('All Products');
  const [sizes, setSizes] = useState('Size');
  const [keyword, setKeyword] = useState('');
  const [activeTab, setActiveTab] = useState('construction');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', { productType, sizes, keyword, activeTab });
  };

  return (
    <section className="hero" aria-label="Nudura hero section">
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__text-block">
          <p className="hero__eyebrow">Nudura Insulated Concrete Forms And Panels</p>
          <h1 className="hero__title">
            Nudura Israel
            <br />
            Advanced Ecological Building Systems
          </h1>
        </div>

        <div className="hero__tabs" role="tablist" aria-label="Construction method">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'construction'}
            className={`hero__tab ${activeTab === 'construction' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('construction')}
          >
            Construction methods
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'icf'}
            className={`hero__tab hero__tab--ghost ${activeTab === 'icf' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('icf')}
          >
            ICF method
          </button>
        </div>

        <div className="hero__search-card">
          <form className="hero__search-form" onSubmit={handleSearch}>
            <div className="hero__fields">
              <div className="hero-field hero-field--type">
                <span className="hero-field__label">Product Type</span>
                <div className="hero-select__wrapper">
                  <select
                    className="hero-select"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    aria-label="Select product type"
                  >
                    <option value="All Products">All Products</option>
                    <option value="ICF Blocks">ICF Blocks</option>
                    <option value="Panels">Panels</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <span className="hero-select__chevron" aria-hidden="true">▾</span>
                </div>
              </div>

              <div className="hero-field hero-field--sizes">
                <span className="hero-field__label">Sizes</span>
                <div className="hero-select__wrapper">
                  <select
                    className="hero-select"
                    value={sizes}
                    onChange={(e) => setSizes(e.target.value)}
                    aria-label="Select size"
                  >
                    <option value="Size">Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  <span className="hero-select__chevron" aria-hidden="true"><CrosshairIcon /></span>
                </div>
              </div>

              <div className="hero-field hero-field--keyword">
                <span className="hero-field__label">Keyword</span>
                <div className="hero-keyword">
                 
                  <input
                    type="text"
                    className="hero-keyword__input"
                    placeholder="Search Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="hero-submit">
                <span>Search</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

