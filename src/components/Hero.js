import React from 'react';
import { FaFacebookF, FaGoogle, FaAndroid, FaLinkedinIn, FaApple } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              Land That Job with
              <span className="highlight"> Professional, ATS-Optimized Resumes</span>
            </h1>
            <p className="hero-subtitle">
              Stand out in today's competitive job market with ATS-optimized resumes, 
              LinkedIn profiles that get noticed, and career branding that opens doors.
            </p>
            <button className="cta-button" onClick={scrollToContact}>
              Get Your Resume Reviewed
            </button>
          </div>

          <aside className="hero-visual" aria-hidden="true">
            <div className="hero-circle">
              <img
                className="hero-photo"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2069&auto=format&fit=crop"
                alt="Team collaborating"
              />
            </div>

            <div className="brand-icon brand-fb"><FaFacebookF /></div>
            <div className="brand-icon brand-google"><FaGoogle /></div>
            <div className="brand-icon brand-android"><FaAndroid /></div>
            <div className="brand-icon brand-linkedin"><FaLinkedinIn /></div>
            <div className="brand-icon brand-apple"><FaApple /></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
