import React from 'react';
import './Badge.css';

/**
 * Badge Component
 * Small labels for tags and categories
 */
const Badge = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const badgeClass = `badge badge-${variant} ${className}`;

    return (
        <span className={badgeClass} {...props}>
            {children}
        </span>
    );
};

export default Badge;
