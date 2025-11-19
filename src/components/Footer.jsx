import React from 'react';
import './Footer.css';
import ecobuildLogo from '../assets/images/76bbc5a17ca34005bc980c6cd16affcb884a63c7.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={ecobuildLogo} alt="Ecobuild logo" />
          <p>Specialises in providing high-class tours for those in need. Contact Us</p>
          <ul className="contact-list">
            <li>📍 Address: Moshav Tarom</li>
            <li>🕘 Operating hours: 09:00-17:00</li>
            <li>☎️ 02-970-9705</li>
            <li>☎️ 02-533-6134</li>
            <li>✉️ info@ecobuild.co.il</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Most viewed</h4>
          <a href="#">NUDURA adapter for high walls</a>
          <a href="#">Ceiling and floor technology</a>
          <a href="#">Explosion resistance test</a>
          <a href="#">Alignment systems</a>
          <a href="#">Website Accessibility Statement</a>
        </div>
        <div className="footer-column">
          <h4>Links on the site</h4>
          <a href="#">About</a>
          <a href="#">ICF</a>
          <a href="#">NUDURA Combined Series</a>
          <a href="#">RETROFIT Insulation Technology</a>
          <a href="#">Advanced construction methods</a>
        </div>
        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter now and receive hot updates in the construction industry</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email address" />
            <button aria-label="subscribe">➤</button>
          </div>
          <div className="social-icons">
            {['facebook', 'linkedin', 'twitter', 'instagram', 'youtube'].map((name) => (
              <button key={name} aria-label={name}>
                {name[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>©2025 Ecobuild System Ltd. All Rights Reserved.</span>
        <div className="footer-links">
          <a href="#">Terms of use of the website</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

