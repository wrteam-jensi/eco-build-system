import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * Base card with customizable styling
 */
const Card = ({
    children,
    variant = 'default',
    hoverable = true,
    className = '',
    onClick,
    ...props
}) => {
    const cardClass = `card card-${variant} ${hoverable ? 'card-hoverable' : ''} ${className}`;

    return (
        <div className={cardClass} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Card;
