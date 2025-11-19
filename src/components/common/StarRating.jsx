import React from 'react';
import './StarRating.css';

/**
 * Star Rating Component
 * Displays star ratings with count
 */
const StarRating = ({
    rating = 0,
    maxRating = 5,
    reviewCount = null,
    size = 'medium',
    className = ''
}) => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <span
                key={i}
                className={`star ${i <= rating ? 'star-filled' : 'star-empty'}`}
            >
                ★
            </span>
        );
    }

    return (
        <div className={`star-rating star-rating-${size} ${className}`}>
            <div className="stars">
                {stars}
            </div>
            {reviewCount !== null && (
                <span className="review-count">{reviewCount} Reviews</span>
            )}
        </div>
    );
};

export default StarRating;
