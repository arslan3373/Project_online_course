import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Educationpower</div>
      <div className="navbar-toggle" onClick={handleToggle}>
        ☰
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Featured</li>
        <li>How It Works</li>
        <li>Testimonial</li>
        <li>Blog</li>
        <li>Subscribe</li>
        <li><button className="sign-in-btn">Sign In</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
