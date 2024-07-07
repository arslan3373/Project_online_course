import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DealsSection from './components/Deals';
import Features from './components/Features';
import Courses from './components/Courses';
import './App.css';
import Testimonials from './components/Testimonials';
import GetMoreInfoSection from './components/GetMoreInfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DealsSection/>
      <Features/>
      <Courses/>
      <Testimonials/>
      <GetMoreInfoSection/>
      <Footer/>
  
    </div>
  );
}

export default App;
