import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Card from "./Card.jsx";

const services = [
  { icon:"🧭", title:"Product Strategy", body:"Workshops, roadmaps, user research, and measurable OKRs." },
  { icon:"🎨", title:"UX/UI Design", body:"Design systems, flows, prototypes, and delightful interactions." },
  { icon:"⚙️", title:"Web & Mobile", body:"React, React Native, Node, scalable APIs, and CI/CD." },
  { icon:"🔐", title:"Cloud & DevOps", body:"Infra as code, observability, security hardening, and SRE." },
];

export default function Services() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Services we offer" title="End‑to‑end software delivery" subtitle="From idea to impact — cross‑functional teams ship value fast." />
        <div className="grid cards">
          {services.map((s, i)=>(
            <Card key={i} className="service" as="div">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
              <a className="link" href="#how" onClick={(e)=>e.preventDefault()}>Learn more →</a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
