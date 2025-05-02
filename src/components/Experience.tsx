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
        "Developed AI applications with PyTorch and Hugging Face, ensuring ~98% uptime through optimized model serving",
        "Enhanced deployment cycles by 25% through Git-based version control and workflow automation",
        "Implemented MLflow for tracking and model versioning, streamlining ML development with cross-functional teams",
      ],
    },
    {
      id: 2,
      role: "Application Developer",
      period: "2024/02 - 2024/11",
      company: "VIVA Communications, Inc.",
      descriptions: [
        "Led the development of internal software tools for 1,000+ users, improving operational efficiency by 20%",
        "Reduced bug incidents by 30% and accelerated deployment speed by 15% through CI/CD and rigorous testing",
        "Increased user adoption by 15% via comprehensive documentation and training sessions",
      ],
    },
    {
      id: 3,
      role: "Web Development Intern",
      period: "2023/03 - 2023/07",
      company: "LexMeet",
      descriptions: [
        "Developed a dashboard module that increased customer engagement by 25% through real-time business insights",
        "Delivered projects 15% faster with 100% on-time completion by optimizing development workflows",
        "Enhanced operational efficiency by 20% by implementing data-driven features for better decision-making",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>

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
