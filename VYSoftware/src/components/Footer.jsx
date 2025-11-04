import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#home" onClick={(e)=>{e.preventDefault();document.getElementById("home").scrollIntoView({behavior:"smooth"});}}>
            <span className="brand-badge">VY</span> Studio
          </a>
          <p className="muted">Building reliable software with small, senior teams.</p>
        </div>
        <nav>
          <h4>Links</h4>
          <ul>
            <li><a href="#services" onClick={(e)=>{e.preventDefault();document.getElementById("services").scrollIntoView({behavior:"smooth"});}}>Services</a></li>
            <li><a href="#cases" onClick={(e)=>{e.preventDefault();document.getElementById("cases").scrollIntoView({behavior:"smooth"});}}>Work</a></li>
            <li><a href="#resources" onClick={(e)=>{e.preventDefault();document.getElementById("resources").scrollIntoView({behavior:"smooth"});}}>Resources</a></li>
          </ul>
        </nav>
        <nav>
          <h4>Company</h4>
          <ul>
            <li><a href="#process" onClick={(e)=>{e.preventDefault();document.getElementById("process").scrollIntoView({behavior:"smooth"});}}>Process</a></li>
            <li><a href="#stack" onClick={(e)=>{e.preventDefault();document.getElementById("stack").scrollIntoView({behavior:"smooth"});}}>Tech</a></li>
            <li><a href="#how" onClick={(e)=>{e.preventDefault();document.getElementById("how").scrollIntoView({behavior:"smooth"});}}>How it works</a></li>
          </ul>
        </nav>
        <form className="newsletter" onSubmit={(e)=>e.preventDefault()}>
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
          <a href="#" onClick={(e)=>e.preventDefault()} aria-label="Twitter">𝕏</a>
          <a href="#" onClick={(e)=>e.preventDefault()} aria-label="LinkedIn">in</a>
          <a href="#" onClick={(e)=>e.preventDefault()} aria-label="GitHub">GH</a>
        </div>
      </div>
    </footer>
  );
}
