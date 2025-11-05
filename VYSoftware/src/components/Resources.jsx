// src/components/Resources.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import { resourcesData } from "./resourcesData";
import "./Resources.css";

export default function Resources() {
  const navigate = useNavigate();

  const handleApply = () => {
    window.open("https://forms.gle/Ny25XhtL7MmtZa9z5", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section alt-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Featured"
          title="Resources"
          subtitle="Learn from our guides, tutorials, and case studies"
        />

        <div className="grid resources">
          {resourcesData.map((resource) => (
            <article key={resource.id} className="resource">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/resource/${resource.id}`);
                }}
                className="img-wrap"
              >
                <div className="resource-overlay">
                  <button className="btn btn-primary">Read More</button>
                </div>
                <img src={resource.image} alt={resource.title} loading="lazy" />
              </a>

              <div className="pad">
                <div className="resource-header">
                  <span className="pill">{resource.tag}</span>
                  <div className="resource-category">{resource.category}</div>
                </div>

                <h3 className="line-clamp-2">{resource.title}</h3>
                <p className="muted">{resource.description}</p>

                <div className="resource-footer">
                  <span className="muted small">{resource.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-banner">
          <div>
            <h3>Hire the best developers and designers around!</h3>
            <p className="muted">Join our team and work on cutting‑edge projects</p>
          </div>
          <button className="btn btn-primary" onClick={handleApply}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
