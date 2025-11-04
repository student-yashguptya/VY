import React, { useEffect, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import companyLogo from "../assets/company logo.png"; // rename the file

const links = [
  { id:"home", label:"Home" },
  { id:"services", label:"Services" },
  { id:"clients", label:"Clients" },
  { id:"testimonials", label:"Reviews" },
  { id:"cases", label:"Case Studies" },
  { id:"process", label:"Process" },
  { id:"stack", label:"Tech" },
  { id:"how", label:"How it works" },
  { id:"resources", label:"Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const activeId = useScrollSpy(links.map(l=>l.id), 120);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  return (
    <nav className={`nav ${elevated ? "elevated" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={(e)=>{e.preventDefault();handleNav("home");}}>
          <img className="brand-logo" src={companyLogo} alt="VY Software" width="120" height="32" />
        </a>

        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l)=>(
            <li key={l.id}>
              <a
                className={activeId===l.id ? "active" : ""}
                href={`#${l.id}`}
                onClick={(e)=>{e.preventDefault();handleNav(l.id);}}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="cta-li">
            <a className="btn btn-primary" href="#contact" onClick={(e)=>{e.preventDefault();handleNav("resources");}}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
