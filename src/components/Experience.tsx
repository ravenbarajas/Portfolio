import { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Experience.css';

const Experience = () => {
  // Timeline container ref for timeline line animation
  const timelineRef = useRef<HTMLDivElement>(null);

  // Use custom hook for scroll animations
  useScrollAnimation('.timeline', 'animated');
  useScrollAnimation('.timeline-item', 'animated');

  const experiences = [
    {
      id: 1,
      role: "AI/ML Engineer",
      period: "2024/11 - Present",
      company: "Accenture, Inc.",
      descriptions: [
        "Played a key role in developing advanced AI solutions that leverage data-driven insights and machine learning algorithms to optimize processes and enhance overall performance."
      ],
    },
    {
      id: 2,
      role: "Application Developer",
      period: "2024/02 - 2024/11",
      company: "VIVA Communications, Inc.",
      descriptions: [
        "Designed and implemented robust software applications that streamline operational workflows and enhance user experience through agile methodologies and user-centric design."
      ],
    },
    {
      id: 3,
      role: "Web Development Intern",
      period: "2023/03 - 2023/07",
      company: "LexMeet",
      descriptions: [
        "Contributed to the development of dynamic web applications focused on user engagement, utilizing responsive design principles and best practices in usability to deliver impactful results.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
            <h2>Work Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>{exp.role}</h3>
                  {index === 0 ? (
                    <span className="period-badge">2024/11 - Present</span>
                  ) : (
                    <span className="period">{exp.period}</span>
                  )}
                </div>
                <p className="company">{exp.company}</p>
                <div className="description">
                  {exp.descriptions.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
