import React from 'react';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

/**
 * FeaturedProducts Component
 * Displays the "Featured Products" / "Recommended for you" section
 * Shows 6 product cards in a 3x2 grid with a "View All Products" button
 * Matches Figma design specifications
 */
const FeaturedProducts = () => {
  // Sample product data - replace with actual data from API or props
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      title: 'The Nudura ICF Series',
      details: 'Type: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      title: 'Casa Lomas De Machalí Machas',
      details: 'Type: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      title: 'Casa Lomas De Machalí Machas',
      details: 'Beds: 4 Way Flip Size: All Sizes Shape: All Shapes',
      rating: 5,
      reviews: 45
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
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
      {/* Section Header */}
      <div className="featured-products-header">
        <div className="featured-products-label">FEATURED PRODUCTS</div>
        <h2 className="featured-products-title">Recommended for you</h2>
      </div>

      {/* Product Grid - 3 columns, 2 rows */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Products Button */}
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

