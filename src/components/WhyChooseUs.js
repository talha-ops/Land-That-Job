import React from 'react';
import { FaCheckCircle, FaClock, FaUsers, FaShieldAlt, FaStar, FaHandshake } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "ATS-Compliant",
      description: "Our resumes are optimized to pass through applicant tracking systems"
    },
    {
      icon: <FaHandshake />,
      title: "Personalized Approach",
      description: "Every resume is custom-written based on your unique experience and goals"
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description: "Get your professional resume in 3-5 business days"
    },
    {
      icon: <FaUsers />,
      title: "100+ Satisfied Clients",
      description: "Join hundreds of professionals who've landed their dream jobs"
    },
    {
      icon: <FaStar />,
      title: "5-Star Quality",
      description: "Consistently rated excellent by our clients and industry experts"
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Satisfaction Guarantee",
      description: "We're confident you'll love your resume or we'll revise it for free"
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Proven results and exceptional service</p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
