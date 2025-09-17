import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ExplorePage.css";

import projectsData from "../Data/projectsData";

function ExplorePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="explore-wrapper">
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  // Pick the style class
  const imgClass =
    project.heroImgType === "portrait" ? "card-hero-img-portrait" : "card-hero-img";

  return (
    <div className="project-card" data-aos="fade-up">
      <div className="card-hero">
        <img
          src={project.heroImg}
          alt={`${project.title} Banner`}
          className={imgClass}
        />
        <h2 className="card-title">{project.title}</h2>
        <p className="card-subtitle">{project.heroSubtitle}</p>
        <div className="card-actions">
          <button className="exp-btn" onClick={() => alert("🚧 Service will be available soon!")}>
            Get a Demo
          </button>
          <button className="exp-btn secondary" onClick={onOpen}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}



function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" data-aos="zoom-in">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        {/* About */}
        <section className="exp-about">
          <h3 className="exp-about-title">🎉 Our Journey</h3>
          {project.about.map((para, idx) => (
            <p key={idx} className="exp-about-text">
              {para}
            </p>
          ))}
        </section>

        {/* Features */}
        <section className="exp-features">
          <h3 className="exp-features-title">🚀 What We’ve Built</h3>
          <div className="exp-features-grid">
            {project.features.map((feature, idx) => (
              <div key={idx} className="exp-feature-card">
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
<section className="exp-gallery">
  <h3 className="exp-gallery-title">📸 Sneak Peek</h3>
  <div className="exp-gallery-scroll">
    {project.gallery.map((imgObj, idx) => (
      <img
        key={idx}
        src={typeof imgObj === "string" ? imgObj : imgObj.img}
        alt={`Screenshot ${idx + 1}`}
        className={
          (typeof imgObj === "string" ? "exp-gallery-img" :
            imgObj.type === "portrait" ? "exp-gallery-img-portrait" : "exp-gallery-img")
        }
      />
    ))}
  </div>
</section>

        {/* Contact */}
        <section className="exp-contact">
          <h3 className="exp-contact-title">🤝 Let’s Connect</h3>
          <p className="exp-contact-text">
            We’re looking for early adopters! If you’re part of a team or know
            someone who could benefit, let’s talk.
          </p>
          <div className="exp-contact-info">
            {project.contact.emails.map((email, idx) => (
              <p key={idx}>
                📧 <a href={`mailto:${email}`}>{email}</a>
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExplorePage;
