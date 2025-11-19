import React, { useState } from 'react';
import Button from './common/Button';
import Dropdown from './common/Dropdown';
import './sections/Hero.css';

/**
 * Hero Component
 * Main hero section with title, subtitle, and search functionality
 * Matches Figma design specifications
 */
const Hero = () => {
    const [productType, setProductType] = useState('');
    const [size, setSize] = useState('');
    const [keyword, setKeyword] = useState('');

    const productTypeOptions = [
        { label: 'All Products', value: 'all' },
        { label: 'ICF Blocks', value: 'icf' },
        { label: 'Panels', value: 'panels' },
        { label: 'Accessories', value: 'accessories' }
    ];

    const sizeOptions = [
        { label: 'All Sizes', value: 'all' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search:', { productType, size, keyword });
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
                <Button variant="primary" size="medium">
                    Construction methods
                </Button>
                <Button variant="primary" size="medium">
                    ICF method
                </Button>
            </div>

            {/* Search Section */}
            <div className="search-container">
                <form className="search-form" onSubmit={handleSearch}>
                    <div className="search-field">
                        {/* Product Type Dropdown */}
                        <div className="form-field type-field">
                            <div className="field-label">Product Type</div>
                            <Dropdown
                                options={productTypeOptions}
                                value={productType}
                                onChange={setProductType}
                                placeholder="All Products"
                            />
                        </div>

                        {/* Sizes Dropdown */}
                        <div className="form-field location-field">
                            <div className="field-label">Sizes</div>
                            <Dropdown
                                options={sizeOptions}
                                value={size}
                                onChange={setSize}
                                placeholder="Size"
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                }
                            />
                        </div>

                        {/* Keyword Input */}
                        <div className="form-field keyword-field">
                            <div className="field-label">Keyword</div>
                            <div className="keyword-input-wrapper">
                                <svg className="keyword-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12C8.20914 12 10 10.2091 10 8C10 5.79086 8.20914 4 6 4C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 14L10 10" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input
                                    type="text"
                                    className="keyword-input"
                                    placeholder="Search Keyword"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            className="search-submit-button"
                            icon={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 19L14.65 14.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;
