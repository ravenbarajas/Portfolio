import { BrainCircuit } from 'lucide-react';
import { Code } from "./icons/Code"
import { ChartSpline } from 'lucide-react';
import { Web } from "./icons/Web"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="section-subtitle">The tools and technologies I work with</p>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-header">
              <BrainCircuit />
              <h3>AI & Machine Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">LangChain</span>
              <span className="tag">Hugging Face Transformers</span>
              <span className="tag">Open AI</span>
              <span className="tag">MLflow</span>
              <span className="tag">Scikit-learn</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Databricks</span>
              <span className="tag">FAISS</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <ChartSpline  />
              <h3>Data Analytics & Visualization</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">SQL/NOSQL</span>
              <span className="tag">Python</span>
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
              <span className="tag">Plotly</span>
              <span className="tag">Seaborn</span>
              <span className="tag">Matplotlib</span>
              <span className="tag">Tableau</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <Code />
              <h3>Software Development</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">React.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">PHP</span>
              <span className="tag">Flask</span>
              <span className="tag">Laravel</span>
              <span className="tag">FastAPI</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">MySQL</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills

