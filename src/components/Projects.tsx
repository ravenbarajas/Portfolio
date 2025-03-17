import { ExternalLink } from "./icons/ExternalLink"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Customer Sentiment Analyzer",
      description: "Real-time sentiment analysis for customer feedback",
      details:
        "Analyzes customer feedback using NLP techniques, sentiment scoring models, and interactive dashboards.",
      technologies: ["Python", "LangChain", "Scikit-learn", "FastAPI"],
    },
    {
      id: 2,
      title: "Enterprice HRMS",
      description: "Comprehensive workforce management platforrm",
      details:
        "Manages employee profiles, attendance tracking, payroll, and HR analytics with an intuitive UI and role-based access control.",
      technologies: ["React.js", "Laravel", "PostgreSQL", "Python"],
    },
    {
      id: 3,
      title: "Procurement Management Sytem",
      description: "Management system with real-time analytics",
      details:
        "Tracks procurement processes, vendor contracts, and financial insights with real-time analytics and reporting tools.",
      technologies: ["React.js", "Laravel", "MySQL", "Tableau"],
    },
    {
      id: 4,
      title: "Logistics Operations Dashboard",
      description: "Centralized dashboard for Logistics and fleet management",
      details:
        "Monitors fleet performance, optimizes delivery routes, and provides cost analysis with interactive dashboards.",
      technologies: ["React.js", "Flask", "PostgreSQL", "Pandas"],
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

