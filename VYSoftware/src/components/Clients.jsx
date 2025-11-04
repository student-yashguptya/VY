import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const logos = [
  "https://picsum.photos/seed/a/120/60",
  "https://picsum.photos/seed/b/120/60",
  "https://picsum.photos/seed/c/120/60",
  "https://picsum.photos/seed/d/120/60",
  "https://picsum.photos/seed/e/120/60",
  "https://picsum.photos/seed/f/120/60",
];

export default function Clients() {
  return (
    <div className="section alt">
      <div className="container">
        <SectionHeading eyebrow="We work with" title="Leading companies" subtitle="Trusted by growth‑stage startups and enterprises." />
        <div className="logo-row">
          {logos.map((src, i)=>(
            <img key={i} src={src} alt={`Client ${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
