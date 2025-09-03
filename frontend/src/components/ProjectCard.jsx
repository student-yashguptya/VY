import React from 'react';

const ProjectCard = ({ project }) => (
  <div style={styles.card}>
    <p>{project}</p>
  </div>
);

const styles = {
  card: {
    border: '1px solid #aaa',
    borderRadius: '6px',
    margin: '0.5rem 0',
    padding: '0.75rem',
    backgroundColor: '#f7f7f7',
  },
};

export default ProjectCard;
