import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image.jpg"; 
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="VY Logo" />
            <span className="company-name">VY</span>
          </div>
          <p className="tagline">Shaping the Future with Innovation</p>
          <p className="disclaimer">
            VY is a service and product-based software company specializing
            in management websites, ERP systems, and booking platforms. Each
            project is designed with innovation, efficiency, and long-term
            impact.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <nav className="footer-links">
            <Link to="/contact">Connect with us</Link>
            {/* <a href="#locations">Our locations</a>
            <a href="#services">Services</a>
            <a href="#legal">Legal & Privacy</a> */}
          </nav>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 VY. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
