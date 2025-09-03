import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const sendEmail = e => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch(() => setStatusMessage('Failed to send message, please try again later.'));
  };

  return (
    <form onSubmit={sendEmail} aria-label="Contact form">
      <h2>Contact Us</h2>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        value={formData.user_name}
        onChange={handleChange}
        aria-required="true"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        value={formData.user_email}
        onChange={handleChange}
        aria-required="true"
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        aria-required="true"
        required
      />
      <button type="submit">Send</button>
      {statusMessage && <p role="alert">{statusMessage}</p>}
    </form>
  );
};

export default ContactForm;
