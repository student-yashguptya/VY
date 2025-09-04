import React from "react";

function LeadershipCard({ name, role, phone, email, image }) {
  return (
    <div className="leader-card">
      <img src={image} alt={name} className="leader-img" />
      <h3>{name}</h3>
      <p><strong>{role}</strong></p>
      <p>📞 {phone}</p>
      <p>✉️ {email}</p>
    </div>
  );
}

export default LeadershipCard;
