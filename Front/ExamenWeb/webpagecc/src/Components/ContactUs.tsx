import React, { useState } from 'react';
import './styles/ContactUs.css'
const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="footer">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please reach out to us.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>123 Fashion Street, Style City, FC 56789</p>
          <h3>Phone</h3>
          <p>(+57) 318 4128509</p>
          <h3>Email</h3>
          <p>contact@fashionstudio.com</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
