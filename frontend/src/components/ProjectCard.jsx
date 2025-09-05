import React from "react";

function ProjectCard({ title, description, icon }) {
  return (
    <div className="project-card">
      {icon && <div className="project-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
