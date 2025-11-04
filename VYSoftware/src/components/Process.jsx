import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  { title:"Build the right product to scale", points:["Discovery workshops and success metrics","Clickable prototypes validated with users","Delivery plan aligned to milestones"], img:"https://picsum.photos/seed/proc1/640/360" },
  { title:"Build the right team to scale", points:["Cross‑functional pods with clear ownership","Weekly demos, async updates, and SLAs","Automated CI/CD and robust QA"], img:"https://picsum.photos/seed/proc2/640/360" },
  { title:"Build the right systems to scale", points:["Design system tokens and components","Modular architecture and clean APIs","Observability, SLOs, on‑call readiness"], img:"https://picsum.photos/seed/proc3/640/360" },
];

export default function Process() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Way of building" title="Great software" />
        <div className="stacked">
          {steps.map((s,i)=>(
            <div className="process" key={i}>
              <img className="process-img" src={s.img} alt={s.title} />
              <div className="process-copy">
                <h3>{s.title}</h3>
                <ul>
                  {s.points.map((p,idx)=>(<li key={idx}>{p}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
