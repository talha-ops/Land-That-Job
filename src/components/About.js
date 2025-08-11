import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about bg-lines bg-lines-right" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Your trusted partner in career success</p>
        </div>
        
        <div className="about-content">
          <div
            className="about-visual"
            style={{
              // Prefer WebP with JPG fallback
              backgroundImage: "url('/assets/about-visual.webp'), url('/assets/about-visual.jpg')",
            }}
          >
            <div className="about-visual-accent" />
          </div>

          <div className="about-right">
            <div className="about-text">
              <p>
                At Land That Job, we understand that your resume is more than just a document – 
                it's your career story, your professional identity, and your ticket to new opportunities. 
                With over 5 years of experience in the competitive job market, we've helped hundreds of 
                professionals land their dream jobs.
              </p>
              <p>
                Our mission is to transform your career prospects through expertly crafted, 
                ATS-friendly resumes that pass through applicant tracking systems while impressing 
                human recruiters. We specialize in LinkedIn profile optimization, career branding, 
                and creating compelling cover letters that make you stand out from the crowd.
              </p>
            </div>

            <div className="expertise-mini">
              <div className="mini-card">
                <h3>ATS-Optimized</h3>
                <p>Resumes that pass through applicant tracking systems</p>
              </div>
              <div className="mini-card">
                <h3>LinkedIn Expert</h3>
                <p>Professional profiles that attract recruiters</p>
              </div>
              <div className="mini-card">
                <h3>Career Branding</h3>
                <p>Consistent professional image across platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
