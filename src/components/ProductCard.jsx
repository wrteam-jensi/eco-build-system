import React from 'react';
import './ProductCard.css';

/**
 * ProductCard Component
 * Displays a single product card with image, title, details, rating, and reviews
 * Matches Figma design specifications
 */
const ProductCard = ({ product }) => {
  const { image, title, details, rating = 5, reviews = 45 } = product;

  return (
    <div className="product-card">
      {/* Product Image Section - White background */}
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

      {/* Product Details Section - Light blue background */}
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <div className="product-info">{details}</div>
        
        {/* Rating and Reviews */}
        <div className="product-rating-section">
          <div className="product-rating">
            {/* 5 Star Rating - All filled yellow/gold */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="star-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 0L10.1631 5.52786L16 6.11146L11.8541 9.94428L13.0557 16L8 12.5279L2.94427 16L4.1459 9.94428L0 6.11146L5.83686 5.52786L8 0Z"
                  fill="#FFD700"
                />
              </svg>
            ))}
          </div>
          <span className="product-reviews">{reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


