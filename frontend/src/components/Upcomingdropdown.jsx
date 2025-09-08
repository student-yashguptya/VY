import React, { useState, useEffect } from "react";
import "../App.css";
import "../upcoming.css";

import proj1 from "../assets/proj1.png";

const projects = [
  {
    id: 1,
    title: "BookMyRoom App",
    image: proj1,
    features: ["Instant Room Booking", "AI Price Prediction", "Seamless UX"],
    benefits: [
      "Save time finding hotels",
      "Affordable stays",
      "User-friendly design",
    ],
  },
  // {
  //   id: 2,
  //   title: "Smart Health Tracker",
  //   image: proj1,
  //   features: ["AI Health Insights", "Realtime Monitoring", "Emergency Alerts"],
  //   benefits: ["Stay healthy", "Track daily vitals", "Peace of mind"],
  // },
];

function UpcomingDropdown({ isOpen, onClose }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // Autoplay (pause on hover)
  useEffect(() => {
    if (!isOpen || paused) return;
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [isOpen, paused]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop + Dropdown */}
      <div
        className={`mega-dropdown ${isOpen ? "open" : ""}`}
        onClick={onClose} // clicking anywhere closes
      >
        <div className="mega-content">
          {/* LEFT SIDE */}
          <div className="mega-left">
            <h2>🚀 Upcoming Projects</h2>
            <p>
              Here’s a sneak peek at what we’re building next.
              Each project is crafted with{" "}
              <strong>innovation, real-world use cases, and user experience</strong>
              at the core.
            </p>

            <div className="extra-info">
              <h4>🌟 What to Expect</h4>
              <ul>
                <li>Modern, scalable solutions</li>
                <li>AI-powered personalization</li>
                <li>Cross-platform availability</li>
              </ul>

              <h4>🛠 Tech Highlights</h4>
              <ul>
                <li>React + Node.js</li>
                <li>Cloud-native deployment</li>
                <li>Data security & performance</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="mega-right"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {projects.length > 1 && (
              <button className="nav-arrow left" onClick={prev}>
                ‹
              </button>
            )}

            <div className="carousel-content">
              <div className="project-card">
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="project-image"
                />
                <h3>{projects[index].title}</h3>

                <h4 className="features-title">✨ Features</h4>
                <ul>
                  {projects[index].features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h4 className="benefits-title">💡 Benefits</h4>
                <ul>
                  {projects[index].benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {projects.length > 1 && (
              <button className="nav-arrow right" onClick={next}>
                ›
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingDropdown;
