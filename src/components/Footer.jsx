// Footer.js
import React from 'react';
import './Footer.css';

const sections = [
  {
    title: 'Products',
    links: ['Features', 'Enterprise', 'Security', 'Customer Stories', 'Pricing', 'Demo']
  },
  {
    title: 'Teams',
    links: ['Engineering', 'Financial Services', 'Sales', 'IT', 'Customer Support', 'Human Resources', 'Media']
  },
  {
    title: 'Company',
    links: ['About Us', 'Leadership', 'News', 'Media Kit', 'Career', 'Documentation']
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">Educationpower</h3>
        <p className="footer-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
        </p>
        <div className="footer-social-icons">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-youtube"></i></a>
          <a href="/"><i className="fab fa-github"></i></a>
        </div>
      </div>
      {sections.map((section, index) => (
        <div className="footer-section" key={index}>
          <h3 className="footer-title">{section.title}</h3>
          <ul className="footer-links">
            {section.links.map((link, i) => (
              <li key={i}><a href="/">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer-section">
        <h3 className="footer-title">Subscribe Us</h3>
        <div className="subscribe-container">
          <input type="email" placeholder="Your email here..." className="subscribe-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
