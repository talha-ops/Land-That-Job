import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaFileAlt, FaPhoneAlt, FaSmile } from 'react-icons/fa';
import './Stats.css';

const statsData = [
  { icon: <FaBriefcase />, label: 'Client Projects Completed', value: 240 },
  { icon: <FaFileAlt />, label: 'Resumes Delivered', value: 600 },
  { icon: <FaPhoneAlt />, label: 'Interview Callbacks', value: 180 },
  { icon: <FaSmile />, label: 'Client Satisfaction', value: 98, suffix: '%' },
];

const useCountUp = (endValue, startOnVisible = true, durationMs = 1500) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startOnVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              setValue(Math.floor(eased * endValue));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, startOnVisible, durationMs]);

  return { ref, value };
};

const Stats = () => {
  return (
    <section className="stats bg-lines bg-lines-right" id="stats">
      <div className="container">
        <div className="section-header">
          <h2>Proven Results</h2>
          <p>Numbers that reflect our commitment to your success</p>
        </div>

        <div className="stats-grid">
          {statsData.map((item, idx) => (
            <StatCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, value, suffix = '' }) => {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">
        {current}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default Stats;
