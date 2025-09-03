import React from 'react';

const CEOCard = ({ name, phone, email, title }) => (
  <div style={styles.card}>
    <h3>{title}</h3>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Email:</strong> {email}</p>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem',
    width: '250px',
  },
};

export default CEOCard;
