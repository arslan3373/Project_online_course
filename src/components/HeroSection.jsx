import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="orange-box"></div>
      </div>
      <div className="hero-right">
        <h1 className="hero-title">Learn Everyday & Any New Skills Online with Top Instructors.</h1>
        <p className="hero-description">We are proudly to provide you Educationpower quality education on your hand</p>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Insert Title or Keyword" />
          <select className="search-select">
            <option value="categories">Categories</option>
          </select>
          <button className="search-button">Search Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
