import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="card" role="article" aria-label={`Project: ${project}`}>
    <p>{project}</p>
  </div>
);

export default ProjectCard;
