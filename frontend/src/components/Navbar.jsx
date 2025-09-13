import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import logo from "../assets/image.png";
import ServicesDropdown from "./ServicesDropdown";
import UpcomingDropdown from "./Upcomingdropdown";
import CareerDropdown from "./CareerDropdown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(null); // "services" | "upcoming" | "career"

  const navRef = useRef(null);

  // Close mega dropdown on scroll
  useEffect(() => {
    function handleScroll() {
      if (isMegaOpen) setIsMegaOpen(null);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMegaOpen]);

  // Close hamburger or mega dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsMegaOpen(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close hamburger when navigating to a section
  const handleNavLinkClick = () => {
    setIsOpen(false);
    setIsMegaOpen(null);
  };

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <img src={logo} alt="VY Logo" className="logo" />

        <button
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation(); // prevent document click
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#leadership" onClick={handleNavLinkClick}>
              Leadership
            </a>
          </li>

          {/* Mega Dropdowns */}
         <li>
  <a
    href="#services"
    className="mega-link"
    onClick={(e) => {
      e.preventDefault();
      setIsMegaOpen(isMegaOpen === "services" ? null : "services");
      setIsOpen(false); // ✅ close hamburger
    }}
  >
    Services
  </a>
</li>
<li>
  <a
    href="#upcoming"
    className="mega-link"
    onClick={(e) => {
      e.preventDefault();
      setIsMegaOpen(isMegaOpen === "upcoming" ? null : "upcoming");
      setIsOpen(false); // ✅ close hamburger
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
      setIsMegaOpen(isMegaOpen === "career" ? null : "career");
      setIsOpen(false); // ✅ close hamburger
    }}
  >
    Career
  </a>
</li>
        </ul>
      </nav>

      {/* Render Mega Dropdowns */}
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
