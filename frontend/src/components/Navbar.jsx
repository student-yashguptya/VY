import React, { useState } from "react";
import "../styles.css";
import logo from "../assets/image.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li><a href="#connect" onClick={() => setIsOpen(false)}>Connect Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
