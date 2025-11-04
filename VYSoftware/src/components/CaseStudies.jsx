import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Card from "./Card.jsx";

const cases = [
  { tag:"Mobile App", title:"Finance app redesign", copy:"Increased retention by 24% with a new onboarding and insights hub.", image:"https://picsum.photos/seed/case1/640/420" },
  { tag:"Web Platform", title:"Creator analytics", copy:"Scaled to 1M MAU with real‑time dashboards and exports.", image:"https://picsum.photos/seed/case2/640/420" },
  { tag:"HealthTech", title:"Care delivery portal", copy:"Reduced triage time by 35% via streamlined workflows.", image:"https://picsum.photos/seed/case3/640/420" },
];

export default function CaseStudies() {
  return (
    <div className="section alt-soft">
      <div className="container">
        <SectionHeading eyebrow="Our recent" title="Case studies" />
        <div className="grid cases">
          {cases.map((c,i)=>(
            <Card key={i} className="case">
              <div className="media">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className="pill">{c.tag}</span>
              </div>
              <div className="pad">
                <h3>{c.title}</h3>
                <p className="muted">{c.copy}</p>
                <button className="link">Read story →</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
