import React from 'react';
import { FaFileAlt, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaFileAlt />,
      title: "Resume Writing",
      description: "Professional, ATS-optimized resumes tailored to your industry and target role. Includes keyword optimization and modern formatting.",
      price: "From $149"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn Optimization",
      description: "Transform your LinkedIn profile into a powerful networking tool that attracts recruiters and industry leaders.",
      price: "From $99"
    },
    {
      icon: <FaEnvelope />,
      title: "Cover Letter Writing",
      description: "Compelling cover letters that tell your story and connect your experience to the job requirements.",
      price: "From $79"
    },
    {
      icon: <FaGlobe />,
      title: "Personal Website",
      description: "A modern, responsive personal portfolio site to showcase your experience, achievements, and projects with a professional brand.",
      price: "From $299"
    }
  ];

  return (
    <section className="services bg-lines bg-lines-left" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive career solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
