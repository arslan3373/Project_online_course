import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Deals.css'; // Import the CSS file for styling

import background from './backGround.png'
const DealsSection = () => {

  return (
    <section className="deals-section">
      <div className="container">
        <div className="text-container">
          <h2>Great <br /> Deals For You</h2>
          <p>The sky was cloudless and of a deep dark blue the spectacle.</p>
          <div className="nav-buttons">
            <button className="nav-button">
              <FiChevronLeft />
            </button>
            <button className="nav-button">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="icon-wrapper">
              <img src={background} alt="Easy Payment" />
            </div>
            <h3>Easy Payment</h3>
            <p>Online, billing invoice & contracts</p>
          </div>
          <div className="card">
            <div className="icon-wrapper">
              <img src={background} alt="Scheduling" />
            </div>
            <h3>Scheduling</h3>
            <p>Easy scheduling & attendance tracking</p>
          </div>
          <div className="card">
            <div className="icon-wrapper">
              <img src={background} alt="Reporting" />
            </div>
            <h3>Reporting</h3>
            <p>Student tracking & good analysis report</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
