import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/image.jpg";
import ServicesDropdown from "./ServicesDropdown";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  // Close dropdown on scroll
  useEffect(() => {
    function handleScroll() {
      if (isMegaOpen) setIsMegaOpen(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMegaOpen]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="VY Logo" className="logo" />

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#leadership" onClick={() => setIsOpen(false)}>Leadership</a></li>

          {/* Services Mega Dropdown */}
          <li>
            <a
              href="#services"
              className="mega-link"
              onClick={(e) => {
                e.preventDefault();
                setIsMegaOpen(!isMegaOpen);
              }}
            >
              Services
            </a>
          </li>

         <li><a href="#upcoming" onClick={() => setIsOpen(false)}>Upcoming</a></li>
          <li><a href="#career" onClick={() => setIsOpen(false)}>Career</a></li>
          <li><a href="#support" onClick={() => setIsOpen(false)}>Support</a></li>
        </ul>
      </nav>

      {/* Render ServicesDropdown */}
      {isMegaOpen && (
        <ServicesDropdown isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
