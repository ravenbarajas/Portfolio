import Card from "./ui/Card"
import { useEffect, useState } from "react";
import "../styles/About.css"

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateText, setAnimateText] = useState(false);

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
        <div className="about-sections">
          <div className="about-description-header">
              <strong>An AI/ML Engineer with a strong background in Software development </strong> 
          </div>
          <div className="about-description">
            I am passionate about creating impactful, data -driven solutions. My experience includes building applications, working with large datasets, and developing intelligent systems leveraging AI. Known for my problem-solving abilities, attention to detail, and ability to quickly learn new technologies, I excel in collaborative environments and have a proven track record of leading teams on projects.With strong communication and interpersonal skills, I am adept at guiding team members, fostering a positive work culture, and ensuring alignment with project goals to deliver inno vative solutions.
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Client Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

