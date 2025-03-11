import { Clock } from "./icons/Clock"
import { Code } from "./icons/Code"
import { Brain } from "./icons/Brain"
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
              <Clock />
              <h3>Machine Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">TensorFlow</span>
              <span className="tag">PyTorch</span>
              <span className="tag">scikit-learn</span>
              <span className="tag">Keras</span>
              <span className="tag">XGBoost</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <Brain />
              <h3>Deep Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Neural Networks</span>
              <span className="tag">CNN</span>
              <span className="tag">RNN</span>
              <span className="tag">Transformers</span>
              <span className="tag">GANs</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <Code />
              <h3>Programming</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Python</span>
              <span className="tag">R</span>
              <span className="tag">SQL</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Julia</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-header">
              <Web />
              <h3>Web Development</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

