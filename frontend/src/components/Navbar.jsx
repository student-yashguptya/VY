import React from "react";
import "../styles.css";
import logo from "../assets/image.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="VY Logo" className="logo" />
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
