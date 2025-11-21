import React from 'react';
import './ProductCard.css';
import { YellowRating, WhiteRating, GrayRating } from './Icon';

/**
 * ProductCard Component
 * Displays a single product card with image, title, details, rating, and reviews
 * Matches Figma design specifications exactly
 */
const ProductCard = ({ product }) => {
  const { image, title, details, rating = 5, reviews = 45 } = product;

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        {/* Img - Product Image Section */}
        <div className="product-image-container">
        <img 
          src={image} 
          alt={title}
          className="product-image"
          onError={(e) => {
            // Fallback placeholder if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="product-image-placeholder" style={{ display: 'none' }}>
          <span>Product Image</span>
        </div>
      </div>

      {/* Content - Product Details Section */}
      <div className="product-details">
        {/* Main - Title and Description Container */}
        <div className="product-main">
          {/* The Nudura ICF Series - Title */}
          <h3 className="product-title">{title}</h3>
          
          {/* Product Specifications */}
          {details && (
            <p className="product-specifications">{details}</p>
          )}
          
          {/* Description Container */}
          <div className="product-description">
            {/* Line - Divider */}
            <div className="product-divider"></div>
          </div>
        </div>

        {/* rating - Rating and Reviews Section */}
        <div className="product-rating-section">
          <div className="product-rating">
            {/* 4 Gray Stars + 1 White Star (4.5 rating) */}
            {[...Array(4)].map((_, index) => (
              <GrayRating key={index} />
            ))}
            <WhiteRating />
          </div>
          <span className="product-reviews">{reviews} Reviews</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
