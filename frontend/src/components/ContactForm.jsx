import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('Message sent!');
      setFormData({ user_name: '', user_email: '', message: '' });
    })
    .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <form onSubmit={sendEmail} style={styles.form}>
      <h2>Contact Us</h2>
      <input type="text" name="user_name" placeholder="Name" value={formData.user_name} onChange={handleChange} required />
      <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  }
};

export default ContactForm;
