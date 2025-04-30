import { LocationPin } from "./icons/LocationPin"
import profileImage from "../assets/gradpic.png"; // Import the profile image

const Hero = () => {
  return (
      <section className="hero" id="about">
        <div className="container hero-container">
          <div className="hero-image">
            <div className="blob-frame">
              <img src={profileImage} className="imageStyle"/>
            </div>
          </div>
          <div className="hero-content">
            <h1>
              <strong>Raven Barajas</strong>
              <br />
              <span className="title">AI/ML Engineer</span>
            </h1>
            <p className="hero-description">
              I build intelligent and data-driven systems that solve real-world problems. Specializing in generative AI, data analytics,
              and software development.
            </p>
            <div className="location">
              <LocationPin />
              <span>National Capital Region, PH</span>
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
      </section>
  )
}

export default Hero

