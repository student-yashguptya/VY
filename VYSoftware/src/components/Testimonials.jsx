import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const items = [
  { name:"Ava Patel", role:"VP Engineering", quote:"The team integrated seamlessly and shipped ahead of schedule.", avatar:"https://picsum.photos/seed/ava/80/80" },
  { name:"Jon Reyes", role:"Product Lead", quote:"World‑class UX and a pragmatic delivery mindset.", avatar:"https://picsum.photos/seed/jon/80/80" },
  { name:"Mina Zhao", role:"CTO", quote:"Communication, quality, and ownership were outstanding.", avatar:"https://picsum.photos/seed/mina/80/80" },
];

export default function Testimonials() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Why customers love us" title="Real results, real reviews" />
        <div className="grid testimonials">
          {items.map((t,i)=>(
            <figure className="testimonial" key={i}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <img src={t.avatar} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span className="muted">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
