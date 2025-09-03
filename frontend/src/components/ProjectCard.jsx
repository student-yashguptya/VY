import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="card project-card" aria-label={`Project: ${project}`}>
      <p>{project}</p>
    </div>
  );
}
