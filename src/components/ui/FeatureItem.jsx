import React from 'react';
import './FeatureItem.css';

/**
 * FeatureItem Component
 * Displays a feature with icon, title, and description
 */
const FeatureItem = ({
    icon,
    title,
    description,
    className = ''
}) => {
    return (
        <div className={`feature-item ${className}`}>
            <div className="feature-item-icon">
                {icon}
            </div>
            <div className="feature-item-content">
                <h3 className="feature-item-title">{title}</h3>
                <p className="feature-item-description">{description}</p>
            </div>
        </div>
    );
};

export default FeatureItem;
