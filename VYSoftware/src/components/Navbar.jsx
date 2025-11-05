import React, { useEffect, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import { useNavigate, useLocation } from "react-router-dom";
import companyLogo from "../assets/company logo.png";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "cases", label: "Case Studies" },
  { id: "process", label: "Process" },
  { id: "how", label: "How it works" },
  { id: "resources", label: "Resources" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const activeId = useScrollSpy(links.map((l) => l.id), 120);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCareerClick = () => {
    setOpen(false);
    navigate("/career");
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setOpen(false);
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`nav ${elevated ? "elevated" : ""}`}>
      <div className="container nav-inner">
        <a
          className="brand"
          href="/"
          onClick={handleHomeClick}
        >
          <img
            className="brand-logo"
            src={companyLogo}
            alt="VY Software"
            width="120"
            height="32"
          />
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                className={activeId === l.id ? "active" : ""}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.id);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="cta-li">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleCareerClick}
            >
              Career
            </button>
          </li>
          <li className="cta-li">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleContactClick}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
