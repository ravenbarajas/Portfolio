import { useState } from "react";
import { ExternalLink } from "./icons/ExternalLink";

type CategoryState = {
  [key: string]: boolean;
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryStates, setCategoryStates] = useState<CategoryState>({
    All: false,
    "AI/ML": false,
    Dashboards: false,
    "Web Apps": false
  });

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
      description: "Suggests recipes based on user preferences and ingredients.",
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
      description: "A travel planning app that helps users find and book trips.",
      details:
        "Offers personalized travel recommendations and booking options based on user preferences.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: "http://travelease.free.nf/",
      category: "Web Apps",
    },
    {
      id: 5,
      title: "SnapMart",
      description: "An e-commerce platform for buying and selling products.",
      details:
        "Features a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["React.js", "Express.js", "MySQL"],
      link: "http://snapmart.free.nf/",
      category: "Web Apps",
    },
    {
      id: 6,
      title: "Centscible",
      description: "Budgeting app for tracking expenses and setting budgets.",
      details:
        "Provides tools for tracking expenses, setting budgets, and analyzing spending habits.",
      technologies: ["React.js", "Django", "SQLite"],
      link: "http://centscible.free.nf/",
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
    {
      id: 9,
      title: "ShipDirect",
      description: "Track shipments in real time with up-to-date delivery status.",
      details: "Provides real-time tracking of shipments, ensuring timely updates on delivery status.",
      technologies: ["React.js", "Node.js"],
      link: "http://shipdirect.free.nf/shipments/tracking",
      category: "Dashboards",
    },
    {
      id: 10,
      title: "Fleetly",
      description: "Manage vehicle inventory and maintenance.",
      details: "Centralizes vehicle management, including inventory tracking and maintenance scheduling.",
      technologies: ["React.js", "Express.js"],
      link: "http://fleetly.free.nf/vehicles/inventory",
      category: "Dashboards",
    },
    {
      id: 11,
      title: "WarehouseIQ",
      description: "Optimizes warehouse operations and stock tracking.",
      details: "Enhances warehouse management through effective stock tracking and storage optimization.",
      technologies: ["React.js", "Django"],
      link: "http://warehouseiq.free.nf/warehouse",
      category: "Dashboards",
    },
    {
      id: 12,
      title: "PurchaseFlow",
      description: "Streamline order processing and monitor fulfillment progress.",
      details: "Facilitates efficient order management and tracking of fulfillment processes.",
      technologies: ["React.js", "Flask"],
      link: "http://purchaseflow.free.nf/orders/management",
      category: "Dashboards",
    },
    {
      id: 13,
      title: "SupplierBase",
      description: "Monitors supplier performance and compliance.",
      details: "Tracks supplier metrics and compliance to enhance supplier management.",
      technologies: ["React.js", "Laravel"],
      link: "http://supplierbase.free.nf/suppliers/performance",
      category: "Dashboards",
    },
    {
      id: 14,
      title: "ClientSync",
      description: "Accesses customer profiles and engagement metrics.",
      details: "Provides insights into customer interactions and engagement for better relationship management.",
      technologies: ["React.js", "Node.js"],
      link: "http://clientsync.free.nf/customers/summary",
      category: "Dashboards",
    },
  ];

  // Get all projects for the selected category
  const allCategoryProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Determine if we should show all projects or just the first 4
  const filteredProjects = categoryStates[selectedCategory] 
    ? allCategoryProjects 
    : allCategoryProjects.slice(0, 4);

  // Check if the category has more than 4 projects (2 rows)
  const showMoreButtonVisible = allCategoryProjects.length > 4;

  // Function to toggle show all state for a category
  const toggleShowAll = (category: string) => {
    setCategoryStates(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

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

        {showMoreButtonVisible && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {!categoryStates[selectedCategory] ? (
              <button 
                onClick={() => toggleShowAll(selectedCategory)} 
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
                onClick={() => toggleShowAll(selectedCategory)} 
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
