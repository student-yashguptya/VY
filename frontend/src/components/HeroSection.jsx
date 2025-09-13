// HeroSection.jsx
import React from "react";
import "../pages/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="hero-video">
        <source src="your-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay content */}
      {/* <div className="hero-overlay">
        <h1>Welcome to VY Software</h1>
        <p>Building innovative solutions for your business</p>
        <button className="btn">Get Started</button>
      </div> */}
    </div>
  );
};

export default HeroSection;
