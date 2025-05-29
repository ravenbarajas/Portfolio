import { useState, useEffect } from "react";
import { ExternalLink } from "./icons/ExternalLink";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "AI/ML", "Dashboards", "Web Apps"];

  const projects = [
    {
      id: 1,
      title: "Order Management Dashboard",
      description: "Streamline order processing and monitor fulfillment progress.",
      details: "Incorporating efficient order management and tracking with AI-powered demand forecasting for inventory and logistics.",
      technologies: ["React.js", "Flask"],
      link: "http://purchaseflow.free.nf/orders",
      category: "AI/ML",
      type: "Client",
    },
    {
      id: 2,
      title: "Roofing Company Website",
      description: "Roofing company website with AI customer service chatbot.",
      details: "Integrated an AI chatbot to offer instant customer support and address common inquiries.",
      technologies: ["React.js", "Node.js", "OpenAI API", "LangChain"],
      link: "http://heartland-roofing.free.nf/",
      category: "AI/ML",
      type: "Client",
    },
    {
      id: 3,
      title: "Fitness Subscription Website",
      description: "AI-powered website for personalized workout plans and nutrition advice.",
      details: "Provides a subscription platform for fitness enthusiasts, offering AI-powered personalized workout plans and nutrition advice.",
      technologies: ["React.js", "Node.js", "OpenAI API", "LangChain"],
      link: "http://bayfit-network.free.nf/",
      category: "AI/ML",
      type: "Client",
    },
    {
      id: 4,
      title: "Route Optimization Dashboard",
      description: "Optimizes delivery routes for fleet management.",
      details: "Utilizes AI/ML algorithms to predict optimal delivery routes based on real-time traffic, historical data, and delivery constraints.",
      technologies: ["React.js", "Node.js"],
      link: "http://routelogic.free.nf/",
      category: "AI/ML",
      type: "Client",
    },
    {
      id: 5,
      title: "Logistics Operations Dashboard",
      description: "Centralized dashboard for Logistics and fleet management",
      details:
        "Monitors fleet performance, optimizes delivery routes, and provides cost analysis with interactive dashboards.",
      technologies: ["React.js", "Flask", "PostgreSQL"],
      link: "http://logidash.free.nf/",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 6,
      title: "TravelEase",
      description: "A travel planning app that helps users find and book trips.",
      details:
        "Offers personalized travel recommendations and booking options based on user preferences.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: "http://travelease.free.nf/",
      category: "Web Apps",
      type: "Client",
    },
    {
      id: 7,
      title: "SnapMart",
      description: "An e-commerce platform for buying and selling products.",
      details:
        "Features a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["React.js", "Express.js", "MySQL"],
      link: "http://snapmart.free.nf/",
      category: "Web Apps",
      type: "Client",
    },
    {
      id: 8,
      title: "Centscible",
      description: "Budgeting app for tracking expenses and setting budgets.",
      details:
        "Provides tools for tracking expenses, setting budgets, and analyzing spending habits.",
      technologies: ["React.js", "Django", "SQLite"],
      link: "http://centscible.free.nf/",
      category: "Web Apps",
      type: "Personal",
    },
    {
      id: 9,
      title: "Insights Dashboard",
      description: "Real-time analytics and reporting tools",
      details:
        "Provides real-time analytics and reporting tools for tracking processes, vendor contracts, and financial insights.",
      technologies: ["React.js", "Laravel", "MySQL"],
      link: "http://analytiqx.free.nf/",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 10,
      title: "Procurement Management System",
      description: "Management system with real-time analytics",
      details:
        "Tracks procurement processes, vendor contracts, and financial insights with real-time analytics and reporting tools.",
      technologies: ["React.js", "Laravel", "MySQL"],
      link: "http://procurex.free.nf/",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 11,
      title: "Enterprice HRMS",
      description: "Comprehensive workforce management platform",
      details:
        "Manages employee profiles, attendance tracking, payroll, and HR analytics with an intuitive UI and role-based access control.",
      technologies: ["React.js", "Laravel", "PostgreSQL"],
      link: "http://enterprise-hrms.free.nf/",
      category: "Web Apps",
      type: "Personal",
    },
    {
      id: 12,
      title: "Shipment Tracking Dashboard",
      description: "Track shipments in real time with up-to-date delivery status.",
      details: "Provides real-time tracking of shipments, ensuring timely updates on delivery status.",
      technologies: ["React.js", "Node.js"],
      link: "http://shipdirect.free.nf/shipments",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 13,
      title: "Vehicle Fleet Management Dashboard",
      description: "Manage vehicle inventory and maintenance.",
      details: "Centralizes vehicle management, including inventory tracking and maintenance scheduling.",
      technologies: ["React.js", "Express.js"],
      link: "http://fleetly.free.nf/vehicles",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 14,
      title: "Warehouse Inventory Dashboard",
      description: "Optimizes warehouse operations and stock tracking.",
      details: "Enhances warehouse management through effective stock tracking and storage optimization.",
      technologies: ["React.js", "Django"],
      link: "http://warehouseiq.free.nf/warehouse",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 15,
      title: "Recipe Recommender System",
      description: "Suggests recipes based on user preferences and ingredients.",
      details:
        "Utilizes machine learning algorithms to recommend recipes tailored to user tastes and dietary restrictions.",
      technologies: ["Python", "Flask", "TensorFlow"],
      category: "AI/ML",
      link: "http://recipegram.free.nf/",
      type: "Personal",
    },
    {
      id: 16,
      title: "Supplier Management Dashboard",
      description: "Manage supplier performance and compliance.",
      details: "Tracks supplier metrics such as delivery timeliness, product quality, and cost efficiency.",
      technologies: ["React.js", "Laravel"],
      link: "http://supplierbase.free.nf/suppliers",
      category: "Dashboards",
      type: "Personal",
    },
    {
      id: 17,
      title: "Customer Management Dashboard",
      description: "Accesses customer profiles and engagement metrics.",
      details: "Provides insights into customer interactions and engagement for better relationship management.",
      technologies: ["React.js", "Node.js"],
      link: "http://clientsync.free.nf/",
      category: "Dashboards",
      type: "Client",
    },
    {
      id: 18,
      title: "Data Reporting Platform",
      description: "Manages and generates reports for various departments.",
      details: "Integrates with the company's database to generate reports for various departments.",
      technologies: ["React.js", "Node.js"],
      link: "http://reportgenius.free.nf/",
      category: "Dashboards",
      type: "Client",
    },
    {
      id: 19,
      title: "Customer Relationship Management System",
      description: "Manages customer relationships and interactions.",
      details: "Provides tools for managing customer relationships, including customer profiles, interactions, and support.",
      technologies: ["React.js", "Node.js"],
      link: "http://connectsphere.free.nf/",
      category: "Web Apps",
      type: "Client",
    },
    {
      id: 20,
      title: "Stock Market Sentiment Analyzer",
      description: "Real-time sentiment analysis for stock market",
      details:
        "Analyzes stock market using NLP techniques, sentiment scoring models, and interactive dashboards.",
      technologies: ["Python", "LangChain", "Scikit-learn"],
      category: "AI/ML",
      link: "http://stocksentio.free.nf/",
      type: "Personal",
    },
    {
      id: 21,
      title: "GPT-Powered Legal Case Similarity Finder",
      description: "Finds similar legal cases based on a case description.",
      details: "Utilizes GPT-based embeddings and vector search to help legal professionals find past cases similar to a given legal issue.",
      technologies: ["Python", "OpenAI API", "FAISS", "Streamlit"],
      category: "AI/ML",
      link: "http://casematchai.free.nf/",
      type: "Personal",
    },
    {
      id: 22,
      title: "AI-Powered Commute Assistant",
      description: "Provides step-by-step instructions for urban transportation.",
      details: "Uses AI to suggest optimal public transport routes in Metro Manila, considering jeepneys, buses, trains, and tricycles.",
      technologies: ["Python", "OpenAI GPT-3", "Flask", "Streamlit"],
      category: "AI/ML",
      link: "http://waylo.free.nf/",
      type: "Personal",
    },
    {
      id: 23,
      title: "Task & Notes Organizer",
      description: "Organizes tasks and notes with a user-friendly interface.",
      details: "Provides a user-friendly interface for organizing tasks and notes, including reminders and categorization.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "Web Apps",
      link: "http://stickyboard.free.nf/",
      type: "Personal",
    },
    {
      id: 24,
      title: "Ecommerce Marketplace",
      description: "An online marketplace for buying and selling products.",
      details: "Provides a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "Web Apps",
      link: "http://cartella.free.nf/",
      type: "Personal",
    },
    {
      id: 25,
      title: "Learner Management System",
      description: "System for managing learner profiles and progress.",
      details: "Provides a user-friendly interface for managing learner profiles, attendance, and progress.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "Web Apps",
      link: "http://edutracklms.free.nf/",
      type: "Personal",
    },
    {
      id: 26,
      title: "AI Commute Assistant",
      description: "A system for managing commute routes and traffic conditions.",
      details: "Provides a user-friendly interface for managing commute routes and traffic conditions.",
      technologies: ["Python", "OpenAI API", "Flask", "Streamlit"],
      category: "AI/ML",
      link: "http://commutegpt.free.nf/",
      type: "Personal",
    },
  ];

  const projectsPerPage = 4; // 2x2 grid

  // Get all projects for the selected category
  const allCategoryProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(allCategoryProjects.length / projectsPerPage);

  // Get current projects based on pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allCategoryProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Check if pagination controls should be visible
  const paginationVisible = allCategoryProjects.length > projectsPerPage;

  // Function to go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
          {currentProjects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              className="project-card"
              style={{ textDecoration: "none", color: "inherit", marginBottom: '20px' }}
            >
              <h3>{project.title}</h3>
              {project.type && 
                <span className="project-type-tag" style={{ 
                display: 'inline-block', verticalAlign: 'top', fontSize: '0.8em', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#e0e0e0', color: '#333', marginRight: '10px' }}>
                {project.type}
                </span>}
              <p className="project-description" style={{ display: 'inline-block', marginRight: '10px' }}>{project.description}</p>
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

        {paginationVisible && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
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
                opacity: currentPage === 1 ? 0.5 : 1,
                pointerEvents: currentPage === 1 ? 'none' : 'auto',
              }}
              onMouseEnter={(e) => {
                if (currentPage > 1) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                if (currentPage > 1) e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text)' }}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
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
                opacity: currentPage === totalPages ? 0.5 : 1,
                pointerEvents: currentPage === totalPages ? 'none' : 'auto',
              }}
               onMouseEnter={(e) => {
                if (currentPage < totalPages) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                if (currentPage < totalPages) e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
