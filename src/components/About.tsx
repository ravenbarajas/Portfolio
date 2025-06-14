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
            <h2>About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-description">
          <p>
            I am an AI/ML Engineer passionate about creating impactful, data-driven solutions, specializing in generative AI, data analytics, and software development. My expertise lies in building intelligent systems, working with large datasets, and developing robust applications.
          </p>
          <p>
            Known for my problem-solving abilities, attention to detail, and quick learning, I thrive in collaborative environments. I have a proven track record of leading teams and fostering a positive work culture.
          </p>
          <p>
            My professional experience includes significant contributions to Generative AI applications and maintaining robust CI/CD pipelines. I also played a key role in developing internal software tools that improved operational efficiency for over a thousand users.
          </p>
        </div>
        <div className={`hero-actions-container ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-meta">
            <div className="hero-badge">
              <span>Available for new projects</span>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

