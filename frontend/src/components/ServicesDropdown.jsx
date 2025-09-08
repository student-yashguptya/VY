import React, { useEffect, useRef, useState } from "react";
import "../Service.css";


function ServicesDropdown({ isOpen, onClose }) {
  const dropdownRef = useRef(null);
  const [visible, setVisible] = useState(isOpen);

  // Handle mount/unmount animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // match CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // ✅ Close on scroll
  useEffect(() => {
    if (!isOpen) return;
    function handleScroll() {
      onClose();
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mega-backdrop ${isOpen ? "open" : "close"}`}
        onClick={onClose}
      ></div>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={`mega-dropdown ${isOpen ? "open" : "close"}`}
      >
        <div className="mega-content">
          {/* Left Section */}
          <div className="mega-left">
            <h2>Our Services</h2>
            <p>
              Discover our wide range of solutions designed to help your
              business grow, transform, and succeed in the digital era.
            </p>
            <button className="explore-btn" onClick={onClose}>
              Explore
            </button>
          </div>

          {/* Middle Section */}
          <div className="mega-links">
            {/* <ul>
              <li>
                <a href="#web" onClick={onClose}>
                  Web Development →
                </a>
              </li>
              <li>
                <a href="#app" onClick={onClose}>
                  App Development →
                </a>
              </li>
              <li>
                <a href="#cloud" onClick={onClose}>
                  Cloud Solutions →
                </a>
              </li>
              <li>
                <a href="#ai" onClick={onClose}>
                  AI & Automation →
                </a>
              </li>
              <li>
                <a href="#consulting" onClick={onClose}>
                  Consulting →
                </a>
              </li>
            </ul> */}
          </div>

          {/* Right Section */}
          <div className="mega-right">
            {/* <h3>Spotlight</h3>
            <ul>
              <li>
                <a href="#enterprise" onClick={onClose}>
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="#startup" onClick={onClose}>
                  Startup Programs
                </a>
              </li>
              <li>
                <a href="#innovation" onClick={onClose}>
                  Innovation Labs
                </a>
              </li>
              <li>
                <a href="#global" onClick={onClose}>
                  Global Delivery Services
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesDropdown;
