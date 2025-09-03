import React from 'react';

const LeadershipCard = ({ members }) => (
  <div className="card leadership-card" role="region" aria-label="Leadership Team">
    <h3>CEO & Co-founder</h3>
    {members.map(({ name, phone, email }, idx) => (
      <div key={idx} style={{ marginBottom: '1rem' }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>
    ))}
  </div>
);

export default LeadershipCard;
