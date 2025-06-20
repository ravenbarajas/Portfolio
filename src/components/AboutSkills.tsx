import React from 'react';
import '../styles/AboutSkills.css';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Chroma", "Databricks", "Haystack", "Keras", "Langchain",
      "Hugging Face", "MLflow", "OpenAI", "OpenCV", "PyTorch",
      "Scikit-learn", "spaCy"
    ],
  },
  {
    title: "Data Analytics & Visualization",
    skills: [
      "Matplotlib", "NumPy", "Pandas", "Plotly", "Python",
      "SciPy", "Seaborn", "SQL"
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS",
      "Tailwind CSS", "Vite"
    ],
  },
  {
    title: "Backend, API & Databases",
    skills: [
      "Flask", "FastAPI", "Laravel", "PHP", "Node.js",
      "Express.js", "RESTful API", "MySQL", "PostgreSQL", "MongoDB",
      "SQLite"
    ],
  },
  {
    title: "DevOps, Cloud, Testing & Integrations",
    skills: [
      "Git", "Docker", "Kubernetes", "Stripe", "PayPal",
      "Firebase", "AWS", "Postman", "Pytest", "Vercel",
      "Railway", "Netlify"
    ],
  },
];

const AboutSkills = () => {
  return (
    <section className="about-skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
          <h1>My Core Competencies</h1>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid-about">
          {skillData.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3>{category.title}</h3>
              <div className="skills-list-about">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag-about">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills; 