import React from 'react';

export default function LeadershipCard({ members }) {
  return (
    <section className="card leadership-card" aria-labelledby="leadership-title" tabIndex={-1}>
      <h3 id="leadership-title" className="section-heading">CEO & Co-founder</h3>
      <div className="members">
        {members.map(({ name, phone, email }, i) => (
          <div key={i}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
