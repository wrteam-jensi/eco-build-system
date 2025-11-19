import React, { useState } from 'react';
import ecobuildLogo from '../assets/images/76bbc5a17ca34005bc980c6cd16affcb884a63c7.png';
import nuduraLogo from '../assets/images/f8f42414bf2633c9e0b6eb1cb1c52b543cef90af.png';
import './Header.css';
import { DownChevron } from './Icon';

/**
 * Header Component
 * Matches Figma layout while remaining responsive on smaller devices
 */
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'Products',
      subItems: ['ICF Blocks', 'Panels', 'Accessories'],
    },
    { label: 'Information Center' },
    { label: 'Design Library' },
    { label: 'Gallery' },
    { label: 'Ecobuild Academy' },
    { label: 'Contact Us' },
  ];

  const staticChevronLabels = new Set(['Information Center', 'Design Library', 'Gallery']);

  const navSubmenuId = (label) =>
    `submenu-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="menu-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-panel">
            <img
              src={nuduraLogo}
              alt="Ecobuild logo"
              className="logo-image ecobuild-logo"
              loading="lazy"
            />
            <div className="logo-divider" role="presentation" />
            <img
                           src={ecobuildLogo}

              alt="Nudura logo"
              className="logo-image nudura-logo"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* Navigation Menu */}
        <nav
          id="primary-navigation"
          className={`nav-menu ${isMobileMenuOpen ? 'nav-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const hasSubmenu = Boolean(item.subItems);
            const showChevron = hasSubmenu || staticChevronLabels.has(item.label);
            const isDropdownOpen = activeDropdown === item.label;
            const submenuId = hasSubmenu ? navSubmenuId(item.label) : undefined;

            return (
              <div
                key={item.label}
                className={`menu-item ${hasSubmenu ? 'has-submenu' : ''} ${
                  isDropdownOpen ? 'open' : ''
                }`}
                onMouseEnter={() => hasSubmenu && setActiveDropdown(item.label)}
                onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="menu-trigger"
                  aria-haspopup={hasSubmenu ? 'true' : undefined}
                  aria-expanded={hasSubmenu ? isDropdownOpen : undefined}
                  aria-controls={submenuId}
                  onClick={() => {
                    if (hasSubmenu) {
                      handleDropdownToggle(item.label);
                    } else {
                      closeMobileMenu();
                    }
                  }}
                >
                  <span className="menu-label">{item.label}</span>
                  {showChevron && (
                    <span className="menu-arrow">
                      <DownChevron />
                    </span>
                  )}
                </button>

                {hasSubmenu && (
                  <div
                    id={submenuId}
                    className="products-submenu"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.subItems.map((subItem) => (
                      <div key={subItem} className="submenu-item" role="menuitem">
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <button
            className="professional-portal-btn professional-portal-btn--mobile"
            onClick={closeMobileMenu}
          >
            <svg className="portal-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                fill="white"
              />
              <path
                d="M10 12C5.58172 12 2 13.7909 2 16V20H18V16C18 13.7909 14.4183 12 10 12Z"
                fill="white"
              />
            </svg>
            <span>Professional Portal</span>
          </button>
        </nav>

        {/* Professional Portal Button */}
        <button className="professional-portal-btn professional-portal-btn--desktop">
          <svg className="portal-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
              fill="white"
            />
            <path
              d="M10 12C5.58172 12 2 13.7909 2 16V20H18V16C18 13.7909 14.4183 12 10 12Z"
              fill="white"
            />
          </svg>
          <span>Professional Portal</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

