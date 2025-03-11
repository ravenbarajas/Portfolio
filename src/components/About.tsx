import Card from "./ui/Card"
import "../styles/About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <Card className="about-card">
          <div className="about-text">
            <p>
              I'm an AI & Machine Learning Engineer with 5+ years of experience developing cutting-edge solutions for
              complex problems. My expertise spans across computer vision, natural language processing, and
              reinforcement learning.
            </p>
            <p>
              With a Ph.D. in Computer Science from Stanford University, I combine strong theoretical foundations with
              practical implementation skills. I'm passionate about creating AI systems that are not only powerful but
              also ethical and accessible.
            </p>
            <p>
              When I'm not training models or optimizing algorithms, you can find me contributing to open-source
              projects, mentoring aspiring data scientists, or exploring the latest research in AI.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Research Papers</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About

