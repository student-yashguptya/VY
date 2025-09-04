import React from "react";

function ConnectForm() {
  return (
    <form className="connect-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="text" placeholder="Your LinkedIn / Phone (optional)" />
      <textarea placeholder="Tell us how you’d like to connect..." required></textarea>
      <button type="submit">Connect</button>
    </form>
  );
}

export default ConnectForm;
