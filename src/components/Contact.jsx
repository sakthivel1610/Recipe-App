import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p className="contact-description">
          If you have any questions or feedback, feel free to reach out to us. We're here to help!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <p>If you prefer to reach us directly, you can contact us via the following channels:</p>
          <p>Email: <a href="mailto:sakthivel1610200@gmail.com">sakthivel1610200@gmail.com</a></p>
          <p>Phone: +91 8220390721</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
