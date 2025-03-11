import { ExternalLink } from "./icons/ExternalLink"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NLP Sentiment Analyzer",
      description: "Real-time sentiment analysis for customer feedback",
      details:
        "Built a BERT-based sentiment analysis model that achieved 94% accuracy on customer reviews, deployed as a real-time API.",
      technologies: ["PyTorch", "BERT"],
    },
    {
      id: 2,
      title: "Computer Vision for Healthcare",
      description: "Medical image classification system",
      details:
        "Developed a CNN-based system for detecting abnormalities in X-ray images with 92% sensitivity and 89% specificity.",
      technologies: ["TensorFlow", "CNN"],
    },
    {
      id: 3,
      title: "Recommendation Engine",
      description: "Personalized content recommendation system",
      details:
        "Created a hybrid recommendation system combining collaborative filtering and content-based approaches, increasing user engagement by 27%.",
      technologies: ["Python", "Spark"],
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-details">{project.details}</p>
              <div className="project-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="view-link">
                  <span>View</span>
                  <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

