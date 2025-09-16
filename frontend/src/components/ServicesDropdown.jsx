import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Service.css";

function ServicesDropdown({ isOpen, onClose, containerRef }) {
  const dropdownRef = useRef(null);
  const [visible, setVisible] = useState(isOpen);
  const navigate = useNavigate();

  // Mount/unmount animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Outside OR inside click handler
  useEffect(() => {
    function handleClickAnywhere(e) {
      const insideNavbar =
        containerRef?.current && containerRef.current.contains(e.target);

      // ✅ Always close if clicked anywhere except navbar
      if (!insideNavbar) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickAnywhere);
    }
    return () => document.removeEventListener("mousedown", handleClickAnywhere);
  }, [isOpen, onClose, containerRef]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`mega-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>

      <div
        ref={dropdownRef}
        className={`mega-dropdown ${isOpen ? "open" : ""}`}
        // ❌ no stopPropagation → any click inside will close
      >
        <div className="mega-content">
          <div className="mega-left">
            <h2>Our Services</h2>
            <p>
              Discover our wide range of solutions designed to help your business grow.
            </p>
            <button
              className="explore-btn"
              onClick={() => {
                onClose();
                navigate("/explore");
              }}
            >
              Explore
            </button>
          </div>

          <div className="mega-links">{/* add links here */}</div>
          <div className="mega-right">{/* add content here */}</div>
        </div>
      </div>
    </>
  );
}

export default ServicesDropdown;
