import React, { useState } from 'react';
import './Dropdown.css';

/**
 * Dropdown Component
 * Reusable dropdown for filters and selections
 */
const Dropdown = ({
    label = 'Select',
    options = [],
    value,
    onChange,
    placeholder = 'Select an option',
    icon = null,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');

    const handleSelect = (option) => {
        setSelectedValue(option.value);
        setIsOpen(false);
        if (onChange) {
            onChange(option.value);
        }
    };

    const selectedOption = options.find(opt => opt.value === selectedValue);

    return (
        <div className={`dropdown ${className}`}>
            <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
                {icon && <span className="dropdown-icon">{icon}</span>}
                <span className="dropdown-label">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg
                    className={`dropdown-arrow ${isOpen ? 'dropdown-arrow-open' : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`dropdown-item ${selectedValue === option.value ? 'dropdown-item-selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
