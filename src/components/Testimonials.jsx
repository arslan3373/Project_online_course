// src/Testimonials.js
import React from 'react';
import './Testimonials.css';
import airbnbLogo from './backGround.png'; // Update the path to your logo
import shopifyLogo from './backgroundImg.png'; // Update the path to your logo
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaAirbnb, FaShopify } from 'react-icons/fa';
const testimonialsData = [
  {
    logo: airbnbLogo,
    text: 'Educationpower is a really great site with really great people and the quality of content is excellent. Some of the best education in the world use this.',
    name: 'Himura Adreas',
    airbnb: <FaAirbnb/>,
    company: 'airbnb',
    position: 'CEO at Manika'
  },
  {
    logo: shopifyLogo,
    text: 'Education has consistently delivered above and beyond my expectations! Brilliant tutor work, incredible response time and a really friendly team.',
    name: 'Angela Karamoy',
    airbnb: <FaShopify/>,
    company: 'shopify',
    position: 'CEO at Eduka'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="heading-with-buttons">
        
        <div className="heading-text">
          <h2>What our student say?</h2>
          <p>Follow this steps below to start use of Project Software.</p>
        </div>
        <div className="testimonials-buttons">
        <div className="nav-buttons">
            <button className="nav-button">
              <FiChevronLeft />
             
           
            </button>
            <button className="nav-button">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className='atrrr'><div className="stars">{'★'.repeat(5)}</div>
            <p className='shopif'>{testimonial.airbnb} {testimonial.company}</p></div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-footer">
              <div className="testimonial-logo">
                <img src={testimonial.logo} alt="logo" />
              </div>
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
