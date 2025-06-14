import { LocationPin } from "./icons/LocationPin"
import profileImage from "../assets/gradpic.png"; // Import the profile image
import { useEffect, useState } from "react";
import { Email } from "./icons/Email"
import { Linkedin } from "./icons/Linkedin"
import { Github } from "./icons/Github"

const Hero = () => {
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
    <section className="hero" id="about">
      <div className="container hero-container">
        <div className="hero-main-content">
          <div className={`hero-image ${isLoaded ? 'loaded' : ''}`}>
            <div className="blob-frame">
              <img src={profileImage} className="imageStyle" alt="Raven Barajas" />
            </div>
            <div className="image-backdrop"></div>
          </div>
          
          <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
            <h1>
              <span className={`name ${animateText ? 'animate' : ''}`}>Raven Barajas</span>
              <br />
              <span className={`title ${animateText ? 'animate' : ''}`}>AI/ML Engineer | Software Developer</span>
            </h1>

            <div className="location">
              <LocationPin />
              <span>National Capital Region, PH</span>
              <div className="hero-social-links">
                {/* Add your social media links here */}
                <a href="mailto:ravenbarajas2001@gmail.com" aria-label="Email Link"><Email /></a>
                <a href="https://www.linkedin.com/in/barajasraven/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><Linkedin /></a>
                <a href="https://github.com/ravenbarajas" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><Github /></a>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Get in touch
              </a>
              <a href="#projects" className="button button-outline">
                View projects
              </a>
              <a href="/CV_Barajas_Jan2025 - Copy.pdf" className="button button-outline" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
