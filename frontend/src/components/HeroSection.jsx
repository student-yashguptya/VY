// HeroSection.jsx
import React from "react";
import "../pages/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>Welcome to VY</h1>
        <p>Shaping the future with innovative solutions and digital excellence</p>
      </div>
    </div>
  );
};

export default HeroSection;
