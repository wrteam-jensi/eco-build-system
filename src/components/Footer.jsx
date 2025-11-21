import React from 'react';
import './Footer.css';
import { Footerlogo } from './Icon';
const socialPlatforms = [
  { id: 'facebook', label: 'Facebook', text: 'f' },
  { id: 'linkedin', label: 'LinkedIn', text: 'in' },
  { id: 'x', label: 'X (Twitter)', text: 'X' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <Footerlogo />
          </div>

          <div className="footer-social">
            <p className="follow-us-text">Follow Us:</p>
            <div className="social-icons">
              {socialPlatforms.map((platform) => (
                <button key={platform.id} className="social-icon" aria-label={platform.label}>
                  <span style={{color: 'white'}}>{platform.text}</span>
                </button>
              ))}

              {/* Icon-based networks */}
              <button className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.14 4.8 1.7 4.9 4.9.06 1.26.06 1.64.06 4.83s0 3.57-.06 4.83c-.15 3.2-1.7 4.76-4.9 4.9-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-3.2-.14-4.74-1.7-4.9-4.9C2.07 15.57 2 15.19 2 12s.07-3.57.13-4.83c.16-3.2 1.7-4.75 4.9-4.9C8.2 2.21 8.6 2.2 12 2.2zm0 1.8c-3.17 0-3.54.01-4.79.07-2.6.12-3.8 1.35-3.93 3.93-.06 1.25-.08 1.62-.08 4s.02 2.75.08 4c.13 2.58 1.33 3.8 3.93 3.93 1.25.06 1.62.07 4.79.07s3.54-.01 4.79-.07c2.57-.13 3.8-1.35 3.93-3.93.06-1.25.07-1.62.07-4s-.01-2.75-.07-4c-.13-2.58-1.36-3.81-3.93-3.93-1.25-.06-1.62-.07-4.79-.07zm0 3.2A5.8 5.8 0 1 1 6.2 12 5.8 5.8 0 0 1 12 7.2zm0 9.4A3.6 3.6 0 1 0 8.4 13 3.59 3.59 0 0 0 12 16.6zm5.8-10.74a1.34 1.34 0 1 1-1.34 1.34 1.34 1.34 0 0 1 1.34-1.34z" />
                </svg>
              </button>
              <button className="social-icon" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1c-1.8-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="footer-main">
          <div className="footer-info">
            <p className="info-title">
              Specialises in providing high-class tours for those in need. Contact Us
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{color: 'white'}}>Address: Moshav Tarom</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span style={{color: 'white'}}>Operating hours: 09:00-17:00</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span style={{color: 'white'}}>02-970-9705</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
                </svg>
                <span style={{color: 'white'}}>02-533-6134</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
                </svg>
                <span style={{color: 'white'}}>info@ecobuild.co.il</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Most viewed</h4>
            <div className="column-links">
              <a href="#" className="footer-link">NUDURA adapter for high walls</a>
              <a href="#" className="footer-link">Ceiling and floor technology</a>
              <a href="#" className="footer-link">Explosion resistance test</a>
              <a href="#" className="footer-link">Alignment systems</a>
              <a href="#" className="footer-link">Website Accessibility Statement</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Links on the site</h4>
            <div className="column-links">
              <a href="#" className="footer-link">About &gt;</a>
              <a href="#" className="footer-link">ICF</a>
              <a href="#" className="footer-link">NUDURA Combined Series</a>
              <a href="#" className="footer-link">RETROFIT Insulation Technology</a>
              <a href="#" className="footer-link">Advanced construction methods</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="column-title">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to our newsletter now and receive hot updates in the construction industry
            </p>
            <div className="newsletter-input">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-field"
              />
              <button className="newsletter-button" aria-label="Subscribe">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-11 11" />
                  <path d="m22 2-7 20-4-9-9-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-copyright">
          <p className="copyright-text">
            ©2025 <span style={{color: 'white' , textDecoration: 'underline'}}>Ecobuild System Ltd.</span>  All Rights Reserved.
          </p>
          <div className="footer-policy-links">
            <a href="#" className="policy-link">Terms of use of the website</a>
            <span className="policy-separator">|</span>
            <a href="#" className="policy-link">Privacy Policy</a>
            <span className="policy-separator">|</span>
            <a href="#" className="policy-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

