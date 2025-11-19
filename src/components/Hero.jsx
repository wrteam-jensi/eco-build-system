import React, { useState } from 'react';
import './sections/Hero.css';

/**
 * Hero Component
 * Main hero section with title, subtitle, and search functionality
 * Matches Figma design specifications
 * Text is white over background image, not in white boxes
 */
const Hero = () => {
  const [productType, setProductType] = useState('All Products');
  const [sizes, setSizes] = useState('Size');
  const [keyword, setKeyword] = useState('Search Keyword');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search:', { productType, sizes, keyword });
  };

  return (
    <section className="hero">
      {/* Background Image Overlay */}
      <div className="hero-background"></div>
      
      {/* Text Section - White text over background */}
      <div className="hero-text">
        <div className="hero-subtitle">
          Nudura Insulated Concrete Forms And Panels
        </div>
        <h1 className="hero-title">
          Nudura Israel<br />
          Advanced Ecological Building Systems
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="hero-buttons">
        <button className="construction-methods-btn">
          Construction methods.
        </button>
        <button className="icf-method-btn">
          ICF method.
        </button>
      </div>

      {/* Search Section */}
      <div className="search-container">
        {/* Search Form */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-field">
            {/* Product Type Dropdown */}
            <div className="form-field type-field">
              <div className="field-label">Product Type</div>
              <div className="dropdown-container">
                <select 
                  className="dropdown"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option value="All Products">All Products</option>
                  <option value="ICF Blocks">ICF Blocks</option>
                  <option value="Panels">Panels</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            {/* Sizes Dropdown */}
            <div className="form-field location-field">
              <div className="field-label">Sizes</div>
              <div className="dropdown-container">
                <select 
                  className="dropdown"
                  value={sizes}
                  onChange={(e) => setSizes(e.target.value)}
                >
                  <option value="Size">Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>

            {/* Keyword Input */}
            <div className="form-field keyword-field">
              <div className="field-label">Keyword</div>
              <div className="keyword-input-wrapper">
                <svg className="keyword-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12C8.20914 12 10 10.2091 10 8C10 5.79086 8.20914 4 6 4C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 14L10 10" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  className="keyword-input"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onFocus={(e) => e.target.value === 'Search Keyword' && setKeyword('')}
                  onBlur={(e) => !e.target.value && setKeyword('Search Keyword')}
                />
              </div>
            </div>

            {/* Search Button */}
            <button type="submit" className="search-button">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;

