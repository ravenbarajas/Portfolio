import "../styles/About.css"
import profileImage from "../assets/gradpic.png"; // Import the profile image
import { useEffect, useState } from "react";

const statsData = [
  { id: 1, number: "15+", label: "Client Projects" },
  { id: 2, number: "3+", label: "Years of Experience" },
  { id: 3, number: "7+", label: "Clients" },
];

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    // Stagger animations for a more polished entrance
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const textTimer = setTimeout(() => {
      setAnimateText(true);
    }, 400);
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(textTimer);
    };
  }, []);
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
            <h1>About Me</h1>
          <div className="section-line"></div>
        </div>
        <div className="about-content-layout">
          <div className={`hero-image ${isLoaded ? 'loaded' : ''}`}>
            <div className="blob-frame">
              <img src={profileImage} className="imageStyle" alt="Raven Barajas" />
            </div>
          <div className="image-backdrop"></div>
          </div>
          <div className="about-section">
            <div className="about-description-header">
              <h3>An AI/ML Engineer with a strong background in Software development </h3> 
            </div>
            <div className="about-description">
              <p>I am passionate about creating impactful, data-driven solutions. My experience includes building applications, working with large datasets, and developing intelligent systems leveraging AI. Known for my problem-solving abilities, attention to detail, and ability to quickly learn new technologies, I excel in collaborative environments and have a proven track record of being a key player on projects. With strong communication and interpersonal skills, I am adept at guiding team members, fostering a positive work culture, and ensuring alignment with project goals to deliver inno vative solutions.</p>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`stat-item ${hoveredStat === stat.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStat(stat.id)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

