import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/image.png";
import ServicesDropdown from "./ServicesDropdown";
import UpcomingDropdown from "./Upcomingdropdown";
import CareerDropdown from "./CareerDropdown"; // import new dropdown

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(null); // "services" | "upcoming" | "career"

  // Close dropdown on scroll
  useEffect(() => {
    function handleScroll() {
      if (isMegaOpen) setIsMegaOpen(null);
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
                setIsMegaOpen(isMegaOpen === "services" ? null : "services");
              }}
            >
              Services
            </a>
          </li>

          {/* Upcoming Mega Dropdown */}
          <li>
            <a
              href="#upcoming"
              className="mega-link"
              onClick={(e) => {
                e.preventDefault();
                setIsMegaOpen(isMegaOpen === "upcoming" ? null : "upcoming");
              }}
            >
              Upcoming
            </a>
          </li>

         <li>
          <a
          href="#career"
    className="mega-link"
    onClick={(e) => {
      e.preventDefault();
      console.log("Career clicked!"); // ✅ debug
      setIsMegaOpen(isMegaOpen === "career" ? null : "career");
    }}
  >
    Career
  </a>
</li>
  </ul>
      </nav>

      {/* Render Dropdowns */}
      {isMegaOpen === "services" && (
        <ServicesDropdown isOpen={true} onClose={() => setIsMegaOpen(null)} />
      )}

      {isMegaOpen === "upcoming" && (
        <UpcomingDropdown isOpen={true} onClose={() => setIsMegaOpen(null)} />
      )}

      {isMegaOpen === "career" && (
        <CareerDropdown isOpen={true} onClose={() => setIsMegaOpen(null)} />
      )}
    </>
  );
}

export default Navbar;
