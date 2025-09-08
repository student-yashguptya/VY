import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import "../Service.css";

function ServicesDropdown({ isOpen, onClose }) {
  const dropdownRef = useRef(null);
  const [visible, setVisible] = useState(isOpen);
  const navigate = useNavigate(); // <-- Initialize navigate

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

  // Close on scroll
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
            <button
              className="explore-btn"
              onClick={() => {
                onClose(); // close dropdown
                navigate("/explore"); // navigate to ExplorePage
              }}
            >
              Explore
            </button>
          </div>

          {/* Middle Section */}
          <div className="mega-links"></div>

          {/* Right Section */}
          <div className="mega-right"></div>
        </div>
      </div>
    </>
  );
}

export default ServicesDropdown;
