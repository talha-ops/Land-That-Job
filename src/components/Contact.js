import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('https://formsubmit.co/ajax/talhafiaz782@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Land That Job — New Contact Form Message',
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent! We\'ll get back to you within 24 hours.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Sorry, the message could not be sent. Please try again from http://localhost:3000 and ensure your email is verified with FormSubmit.' });
    } finally {
      setIsSending(false);
    }
  };

  const sendEmail = () => {
    const subject = "Resume Writing Services Inquiry";
    const body = "Hi, I'm interested in learning more about your resume writing services.";
    const mailtoUrl = `mailto:talhafiaz782@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact bg-lines bg-lines-right" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to transform your career? Let's talk!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon"><FiPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FiMail /></div>
              <div>
                <h4>Email</h4>
                <p>talhafiaz782@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FiMapPin /></div>
              <div>
                <h4>Location</h4>
                <p>Passau, Germany</p>
              </div>
            </div>
            
            <div className="contact-actions">
              <button className="email-btn" onClick={sendEmail}>
                <FiMail />
                Send Email
              </button>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                <span>{status.message}</span>
                <button type="button" className="status-close" onClick={() => setStatus({ type: '', message: '' })}>×</button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your career goals and how we can help..."
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
