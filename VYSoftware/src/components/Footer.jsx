import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a
            className="brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="brand-badge">VY</span> Software
          </a>
          <p className="muted">Building reliable software with small, senior teams.</p>
        </div>

        <nav>
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#cases"
                onClick={(e) => { e.preventDefault(); document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#resources"
                onClick={(e) => { e.preventDefault(); document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Resources
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <h4>Company</h4>
          <ul>
            <li>
              <a
                href="#process"
                onClick={(e) => { e.preventDefault(); document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#stack"
                onClick={(e) => { e.preventDefault(); document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#how"
                onClick={(e) => { e.preventDefault(); document.getElementById("how")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                How it works
              </a>
            </li>
          </ul>
        </nav>

        <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
          <h4>Stay in the loop</h4>
          <div className="input-row">
            <input required type="email" placeholder="your@email.com" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <small className="muted">No spam. Unsubscribe anytime.</small>
        </form>
      </div>

      <div className="container legal">
        <small>© {new Date().getFullYear()} VY Studio. All rights reserved.</small>
        <div className="socials">
          <a
            href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (opens in a new tab)"
            className="social-link"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
