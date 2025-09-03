import React from 'react';

const CEOCard = ({ name, phone, email, title }) => (
  <div style={styles.card} role="region" aria-label={`${title} Contact Card`} tabIndex={0}>
    <h3 style={styles.title}>{title}</h3>
    <p style={styles.text}><strong>Name:</strong> {name}</p>
    <p style={styles.text}><strong>Phone:</strong> {phone}</p>
    <p style={styles.text}>
      <strong>Email:</strong>{' '}
      <a href={`mailto:${email}`} style={styles.link}>{email}</a>
    </p>
  </div>
);

const styles = {
  card: {
    background: 'rgba(255, 255, 255, 0.85)', // glass effect
    backdropFilter: 'blur(7px)',
    borderRadius: '14px',
    padding: '1.5rem',
    margin: '1rem',
    width: '260px',
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.07)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    userSelect: 'none',
  },
  title: {
    color: '#0077cc',
    marginBottom: '1rem',
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '0.6rem',
    color: '#1a273b',
  },
  link: {
    color: '#16c2d5',
    textDecoration: 'none',
  },
};

export default CEOCard;
