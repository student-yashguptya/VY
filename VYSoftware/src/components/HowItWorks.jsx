import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const timeline = [
  { num:"01", title:"Discovery & Proposal", copy:"Scope, timelines, and team setup with clear outcomes." },
  { num:"02", title:"Kickoff & Design", copy:"Design system, flows, and prioritized backlog." },
  { num:"03", title:"Build & Iterate", copy:"Sprints with demos, QA, and stakeholder feedback." },
  { num:"04", title:"Launch & Scale", copy:"Observability, docs, and ongoing improvements." },
];

export default function HowItWorks() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="How engagement" title="through Alkaline works" subtitle="Transparent process from day one." />
        <ol className="timeline">
          {timeline.map((t,i)=>(
            <li key={i}>
              <span className="step">{t.num}</span>
              <div>
                <h4>{t.title}</h4>
                <p className="muted">{t.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
