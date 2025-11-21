import React from 'react';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';
import product6 from '../assets/images/product6.png';
/**
 * FeaturedProducts Component
 * Displays the "Featured Products" / "Recommended for you" section
 * Shows 6 product cards in a 3x2 grid with a "View All Products" button
 * Matches Figma design specifications exactly
 */
const FeaturedProducts = () => {
  // Sample product data - replace with actual data from API or props
  const products = [
    {
      id: 1,
      image: product1,
      title: 'The Nudura ICF Series',
      details: 'Type: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 2,
      image: product2,
      title: 'Casa Lomas De Machalí Machas',
      details: 'Type: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 3,
      image: product3,
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 4,
      image: product4,
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 5,
      image: product5,
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 6,
      image: product6,
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    }
  ];

  const handleViewAll = () => {
    // Handle "View All Products" button click
    console.log('View All Products clicked');
  };

  return (
    <section className="featured-products">
      {/* Heading Section */}
      <div className="featured-products-header">
        {/* Title Container */}
        <div className="featured-products-title-container">
          {/* Featured Products Label */}
          <div className="featured-products-label">FEATURED PRODUCTS</div>
          {/* Recommended for you Title */}
          <h2 className="featured-products-title">Recommended for you</h2>
        </div>
      </div>

      {/* List - Product Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Button - View All Products */}
      <div className="view-all-container">
        <button className="view-all-button" onClick={handleViewAll}>
          <span>View All Products</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 5L17.5 10L12.5 15"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
