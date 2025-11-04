import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import Card from "./Card.jsx";
import "./CaseStudies.css";

const cases = [
  {
    id: "placement-hub",
    tag: "Web Platform",
    title: "Placement Hub ERP",
    copy: "Streamlined placement process for 500+ students connecting with 50+ companies, reducing placement cycle time by 60%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=420&fit=crop",
    metrics: { students: "500+", companies: "50+", efficiency: "60%" }
  },
  {
    id: "event-management",
    tag: "Event Tech",
    title: "CompTech Event System",
    copy: "End-to-end event management handling 200+ registrations, automated payments, live judging, and real-time winner declaration.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=420&fit=crop",
    metrics: { participants: "200+", events: "15+", automation: "90%" }
  },
  {
    id: "smart-classroom",
    tag: "EdTech",
    title: "Smart Classroom Manager",
    copy: "Automated timetable generation and classroom allocation for 1000+ students across 50+ rooms, eliminating scheduling conflicts.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&h=420&fit=crop",
    metrics: { students: "1000+", rooms: "50+", conflicts: "0%" }
  },
];

export default function CaseStudies() {
  const navigate = useNavigate();

  const handleReadMore = (caseId) => {
    navigate(`/case-study/${caseId}`);
  };

  return (
    <div className="section alt-soft">
      <div className="container">
        <SectionHeading eyebrow="Our recent" title="Case studies" />
        <div className="grid cases">
          {cases.map((c, i) => (
            <Card key={i} className="case">
              <div className="media">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className="pill">{c.tag}</span>
              </div>
              <div className="pad">
                <h3>{c.title}</h3>
                <p className="muted">{c.copy}</p>
                <div className="case-metrics">
                  {Object.entries(c.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric-item">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="link read-more-btn" 
                  onClick={() => handleReadMore(c.id)}
                >
                  Read story →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
