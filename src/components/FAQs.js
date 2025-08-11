import React, { useState, useRef, useEffect } from 'react';
import './FAQs.css';

const faqs = [
  { q: 'What makes an ATS-friendly resume?', a: 'An ATS-friendly resume uses clean formatting, relevant keywords from job descriptions, standard section headers, and avoids tables or text boxes that can break parsing.' },
  { q: 'How long does the resume writing process take?', a: 'Typical turnaround is 3–5 business days for the first draft. Rush options are available upon request.' },
  { q: 'Do you tailor resumes for each role or industry?', a: 'Yes. We align achievements and keywords with your target roles and industry standards to improve both human and ATS results.' },
  { q: 'What information do you need to get started?', a: 'We ask for your current resume (if available), target roles, links to postings, and any major achievements or metrics you want highlighted.' },
  { q: 'Do you optimize LinkedIn profiles as well?', a: 'Absolutely. We update your headline, About, Experience, Skills, and enable recruiter settings so you are discoverable.' },
  { q: 'Can you write customized cover letters?', a: 'Yes. We create a master cover letter template and role-specific versions that speak to the company’s needs.' },
  { q: 'How many revisions are included?', a: 'Two rounds of revisions are included within 14 days of delivery to ensure you are confident with the final document.' },
  { q: 'Do you provide formats compatible with different ATS systems?', a: 'We deliver in PDF and editable DOCX. Layouts are tested with popular ATS parsers to maintain structure and content accuracy.' },
  { q: 'Will you quantify my achievements?', a: 'Yes. We surface metrics such as revenue, savings, growth, or efficiency to demonstrate impact and differentiate your profile.' },
  { q: 'Can you help with career gaps or role changes?', a: 'We craft a compelling narrative, highlight transferable skills, and position your experience to support transitions or gap explanations.' },
  { q: 'Do you offer interview preparation?', a: 'We provide optional mock interviews, behavioral question frameworks (STAR), and salary negotiation guidance.' },
  { q: 'What if I am not satisfied?', a: 'We stand by our work with a satisfaction-first policy and will revise within scope. If expectations misalign, we work with you on next steps.' },
  { q: 'Can you build a personal website/portfolio?', a: 'Yes. We design and build responsive personal sites that showcase your work, integrate analytics, and align with your professional brand.' },
  { q: 'How do I get started?', a: 'Click “Get Your Resume Reviewed” or use the contact form. We’ll reply within 24 hours with next steps and a brief intake questionnaire.' }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(-1); // closed by default
  const [showAll, setShowAll] = useState(false);
  const extraRef = useRef(null);
  const [extraHeight, setExtraHeight] = useState(0);

  const firstCount = 5;
  const head = faqs.slice(0, firstCount);
  const tail = faqs.slice(firstCount);

  useEffect(() => {
    if (extraRef.current) {
      const h = showAll ? extraRef.current.scrollHeight : 0;
      setExtraHeight(h);
    }
  }, [showAll, openIndex]);

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <section className="faqs bg-lines bg-lines-left" id="faqs">
      <div className="container">
        <div className="section-header">
          <h2>FAQs</h2>
          <p>Answers to common questions about our process and services</p>
        </div>

        <div className="faq-list" role="list">
          {head.map((item, idx) => (
            <FaqItem key={idx} idx={idx} item={item} openIndex={openIndex} toggle={toggle} />
          ))}

          {/* Extra FAQs (collapsed by default) */}
          <div className={`faq-extra ${showAll ? 'open' : ''}`} style={{ maxHeight: extraHeight }} ref={extraRef}>
            {tail.map((item, i) => (
              <FaqItem key={`extra-${i}`} idx={firstCount + i} item={item} openIndex={openIndex} toggle={toggle} />
            ))}
          </div>
        </div>

        <div className="faq-actions">
          <button className="faq-showmore" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Show fewer FAQs' : 'Show more FAQs'}
          </button>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ idx, item, openIndex, toggle }) => {
  const isOpen = openIndex === idx;
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} role="listitem">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        onClick={() => toggle(idx)}
      >
        <span>{item.q}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={`faq-panel-${idx}`}
        className="faq-answer"
        role="region"
        aria-hidden={!isOpen}
        style={{ maxHeight: isOpen ? '300px' : '0' }}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
};

export default FAQs;
