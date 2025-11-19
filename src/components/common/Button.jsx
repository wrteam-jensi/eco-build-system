import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * Supports multiple variants: primary, secondary, icon
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = null,
  iconPosition = 'right',
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;
  
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
      {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </button>
  );
};

export default Button;
