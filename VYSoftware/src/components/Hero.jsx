import React from "react";
import Image1 from "../assets/Image1.jpg"; // adjust the path if Hero.jsx is elsewhere

export default function Hero() {
  return (
    <div className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Great product is</p>
          <h1>built by great teams</h1>
          <p className="muted">
            We help startups and enterprises design, build, and scale software with battle‑tested squads.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#services" onClick={(e)=>{e.preventDefault();document.getElementById("services").scrollIntoView({behavior:"smooth"});}}>See services</a>
            <a className="btn btn-ghost" href="#cases" onClick={(e)=>{e.preventDefault();document.getElementById("cases").scrollIntoView({behavior:"smooth"});}}>View work</a>
          </div>
        </div>
        <div className="hero-art">
          <img src={Image1} alt="Team collaborating" width="720" height="520" />
        </div>
      </div>
      <div className="hero-badges container">
        <div className="badge">★ Top Rated</div>
        <div className="badge">↻ Agile Delivery</div>
        <div className="badge">∞ Long‑term Support</div>
      </div>
    </div>
  );
}
