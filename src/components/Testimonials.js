import React, { useState, useEffect, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const itemsPerSlide = 3;

  const testimonials = useMemo(() => ([
    { name: 'Sarah Johnson', role: 'Marketing Manager', company: 'TechCorp', image: 'https://i.pravatar.cc/150?img=1', text: "Within two weeks of updating my resume and LinkedIn, I received 3 interview invitations and landed my dream job!" },
    { name: 'Michael Chen', role: 'Software Engineer', company: 'InnovateTech', image: 'https://i.pravatar.cc/150?img=2', text: "The ATS optimization was incredible. Recruiters started reaching out within days. Worth every penny!" },
    { name: 'Emily Rodriguez', role: 'HR Director', company: 'Global Solutions', image: 'https://i.pravatar.cc/150?img=3', text: "I review hundreds of resumes; theirs stands out every time. My shortlist always includes their clients." },
    { name: 'David Thompson', role: 'Sales Executive', company: 'Enterprise Sales', image: 'https://i.pravatar.cc/150?img=4', text: "The career coaching helped me position my value and negotiate a 40% salary increase." },
    { name: 'Priya Nair', role: 'Product Manager', company: 'NextGen Apps', image: 'https://i.pravatar.cc/150?img=5', text: "They told my story with clarity and impact. I moved from being overlooked to being pursued." },
    { name: 'Liam O’Connor', role: 'Data Analyst', company: 'Insight Labs', image: 'https://i.pravatar.cc/150?img=6', text: "My profile now gets discovered by the right recruiters. Interviews doubled in a month." },
    { name: 'Amelia Wright', role: 'UX Designer', company: 'Studio North', image: 'https://i.pravatar.cc/150?img=7', text: "Clean design, strong narrative, ATS-friendly. The resume opened doors immediately." },
    { name: 'Noah Patel', role: 'Finance Associate', company: 'CapitalOne', image: 'https://i.pravatar.cc/150?img=8', text: "They aligned my achievements with target roles. I advanced to final rounds twice in 3 weeks." },
    { name: 'Sophia Martinez', role: 'Recruiter', company: 'HireWell', image: 'https://i.pravatar.cc/150?img=9', text: "Their clients are consistently polished and on-point. It makes screening effortless." },
    { name: 'James Park', role: 'Cloud Architect', company: 'SkyScale', image: 'https://i.pravatar.cc/150?img=10', text: "The tech keywords and structure were spot-on. I cleared ATS gates for top companies." },
    { name: 'Olivia Kim', role: 'Operations Lead', company: 'MotionWorks', image: 'https://i.pravatar.cc/150?img=11', text: "Fast turnaround and detailed revisions. My resume finally reflects my real impact." },
    { name: 'Ethan Brooks', role: 'Digital Strategist', company: 'BrightWave', image: 'https://i.pravatar.cc/150?img=12', text: "They clarified my brand and sharpened metrics. I now get high-quality leads on LinkedIn." },
    { name: 'Ava Singh', role: 'Business Analyst', company: 'Delta Analytics', image: 'https://i.pravatar.cc/150?img=13', text: "I moved from entry-level applications to mid-level interviews in under a month." },
    { name: 'William Green', role: 'Project Manager', company: 'NorthStar PMO', image: 'https://i.pravatar.cc/150?img=14', text: "Clear, concise, and results-focused. Hiring managers commented on the quality." },
    { name: 'Mia Lopez', role: 'Content Lead', company: 'StoryForge', image: 'https://i.pravatar.cc/150?img=15', text: "They captured my voice and achievements perfectly. I’m proud to share my resume now." },
    { name: 'Benjamin Carter', role: 'QA Engineer', company: 'TestRight', image: 'https://i.pravatar.cc/150?img=16', text: "Interview calls picked up significantly after the rewrite. ATS wins, human-friendly too." },
    { name: 'Harper Davis', role: 'Customer Success', company: 'ClientFirst', image: 'https://i.pravatar.cc/150?img=17', text: "They translated my achievements into measurable outcomes. Offers followed soon after." },
    { name: 'Lucas Nguyen', role: 'DevOps Engineer', company: 'PipelinePro', image: 'https://i.pravatar.cc/150?img=18', text: "The right keywords and structure made a big difference for automated screenings." },
    { name: 'Charlotte King', role: 'PR Specialist', company: 'MediaHouse', image: 'https://i.pravatar.cc/150?img=19', text: "Polished, professional, and persuasive. Exactly what I needed for a career pivot." },
    { name: 'Henry Adams', role: 'Account Executive', company: 'SalesWorks', image: 'https://i.pravatar.cc/150?img=20', text: "From being ignored to getting responses within days. Huge quality upgrade." }
  ]), []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    if (endIndex <= testimonials.length) {
      return testimonials.slice(startIndex, endIndex);
    }
    const firstPart = testimonials.slice(startIndex);
    const remaining = endIndex - testimonials.length;
    return firstPart.concat(testimonials.slice(0, remaining));
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p>Real results from real professionals</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous testimonials">
            <FaChevronLeft />
          </button>

          <div className="testimonials-grid">
            {visible.map((t, index) => (
              <div className="testimonial-card" key={`${t.name}-${index}`}>
                <div className="quote-icon"><FaQuoteLeft /></div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="author-image" />
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role} at {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next testimonials">
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
