import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setStatusMsg('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch(() => setStatusMsg('Failed to send message. Please try again.'));
  };

  return (
    <form onSubmit={sendEmail} aria-label="Contact form">
      <h2>Contact Us</h2>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
        value={formData.user_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        value={formData.user_email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
      {statusMsg && <p role="alert">{statusMsg}</p>}
    </form>
  );
}
