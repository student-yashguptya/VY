import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { FaUserCircle } from "react-icons/fa";

const items = [
  { name: "Adhiraj Singh",  quote: "The team integrated seamlessly and shipped ahead of schedule." },
  { name: "Minakshi Sharma", quote: "World‑class UX and a pragmatic delivery mindset." },
  { name: "Aanya Gupta",     quote: "Communication, quality, and ownership were outstanding." },
];

export default function Testimonials() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Why customers love us" title="Real results, real reviews" />
        <div className="grid testimonials">
          {items.map((t, i) => (
            <figure className="testimonial" key={i}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <FaUserCircle size={44} style={{ color: "#9aa0b0" }} aria-hidden="true" />
                <div>
                  <strong>{t.name}</strong>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
