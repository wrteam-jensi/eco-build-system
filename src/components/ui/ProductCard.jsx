import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import StarRating from '../common/StarRating';
import './ProductCard.css';

/**
 * ProductCard Component
 * Displays product information with image, title, badges, and rating
 */
const ProductCard = ({
    image,
    title,
    type,
    size,
    shape,
    rating = 4,
    reviewCount = 45,
    className = ''
}) => {
    return (
        <Card className={`product-card ${className}`} hoverable>
            <div className="product-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-card-content">
                <h3 className="product-card-title">{title}</h3>
                <div className="product-card-badges">
                    {type && <Badge variant="primary">Type: <strong>{type}</strong></Badge>}
                    {size && <Badge variant="primary">Size: <strong>{size}</strong></Badge>}
                    {shape && <Badge variant="primary">Shape: <strong>{shape}</strong></Badge>}
                </div>
                <div className="product-card-footer">
                    <StarRating rating={rating} reviewCount={reviewCount} size="small" />
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;
