import { useState } from "react";
import { ExternalLink } from "./icons/ExternalLink";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "AI/ML", "Dashboards", "Web Apps"];

  const projects = [
    {
      id: 1,
      title: "Customer Sentiment Analyzer",
      description: "Real-time sentiment analysis for customer feedback",
      details:
        "Analyzes customer feedback using NLP techniques, sentiment scoring models, and interactive dashboards.",
      technologies: ["Python", "LangChain", "Scikit-learn"],
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Recipe Recommender System",
      description: "Suggests recipes based on user preferences and available ingredients.",
      details:
        "Utilizes machine learning algorithms to recommend recipes tailored to user tastes and dietary restrictions.",
      technologies: ["Python", "Flask", "TensorFlow"],
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Logistics Operations Dashboard",
      description: "Centralized dashboard for Logistics and fleet management",
      details:
        "Monitors fleet performance, optimizes delivery routes, and provides cost analysis with interactive dashboards.",
      technologies: ["React.js", "Flask", "PostgreSQL"],
      link: "http://logidash.free.nf/",
      category: "Dashboards",
    },
    {
      id: 4,
      title: "TravelEase",
      description: "A travel planning application that helps users find and book trips.",
      details:
        "Offers personalized travel recommendations and booking options based on user preferences.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "Web Apps",
    },
    {
      id: 5,
      title: "SnapMart",
      description: "An e-commerce platform for buying and selling products.",
      details:
        "Features a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["React.js", "Express.js", "MySQL"],
      category: "Web Apps",
    },
    {
      id: 6,
      title: "Centscible",
      description: "A budgeting app that helps users manage their finances effectively.",
      details:
        "Provides tools for tracking expenses, setting budgets, and analyzing spending habits.",
      technologies: ["React.js", "Django", "SQLite"],
      category: "Web Apps",
    },
    {
      id: 7,
      title: "Procurement Management System",
      description: "Management system with real-time analytics",
      details:
        "Tracks procurement processes, vendor contracts, and financial insights with real-time analytics and reporting tools.",
      technologies: ["React.js", "Laravel", "MySQL"],
      link: "http://procurex.free.nf/",
      category: "Dashboards",
    },
    {
      id: 8,
      title: "Enterprice HRMS",
      description: "Comprehensive workforce management platform",
      details:
        "Manages employee profiles, attendance tracking, payroll, and HR analytics with an intuitive UI and role-based access control.",
      technologies: ["React.js", "Laravel", "PostgreSQL"],
      link: "http://enterprise-hrms.free.nf/",
      category: "Web Apps",
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? (showAll ? projects : projects.slice(0, 4))
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="category-toggle" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '20px',
          gap: '10px',
          width: 'fit-content',
          margin: '0 auto 20px'
        }}>
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }} 
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              style={{
                padding: 'var(--space-1) var(--space-3)',
                minWidth: '150px',
                border: 'none',
                borderRadius: '9999px',
                backgroundColor: selectedCategory === category ? 'var(--color-primary)' : 'var(--color-tag-bg)',
                color: selectedCategory === category ? '#fff' : 'var(--color-tag-text)',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                lineHeight: '1.6',
                transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = selectedCategory === category ? 'var(--color-primary)' : 'var(--color-tag-bg)';
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              className="project-card"
              style={{ textDecoration: "none", color: "inherit", marginBottom: '20px' }}
            >
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
                <span className="view-link">
                  <span>View</span>
                  <ExternalLink />
                </span>
              </div>
            </a>
          ))}
        </div>

        {selectedCategory === "All" && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {!showAll ? (
              <button 
                onClick={() => setShowAll(true)} 
                style={{ 
                  padding: '10px 20px', 
                  border: 'none', 
                  borderRadius: '5px', 
                  backgroundColor: 'var(--color-primary)', 
                  color: '#fff', 
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.6',
                  transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See More
              </button>
            ) : (
              <button 
                onClick={() => setShowAll(false)} 
                style={{ 
                  padding: '10px 20px', 
                  border: 'none', 
                  borderRadius: '5px', 
                  backgroundColor: 'var(--color-primary)', 
                  color: '#fff', 
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.6',
                  transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
