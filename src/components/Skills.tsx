import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";

// Import AI/ML skill logos - Dark Mode
import chromaLogo from "../assets/skill-dark-logo/chroma-logo.png";
import databricksLogo from "../assets/skill-dark-logo/databricks-logo.png";
import haystackLogo from "../assets/skill-dark-logo/haystack-logo.png";
import kerasLogo from "../assets/skill-dark-logo/keras-logo.png";
import langchainLogo from "../assets/skill-dark-logo/langchain-logo.png";
import huggingfaceLogo from "../assets/skill-dark-logo/huggingface-logo.png";
import mlflowLogo from "../assets/skill-dark-logo/mlflow-logo.png";
import openaiLogo from "../assets/skill-dark-logo/openai-logo.png";
import opencvLogo from "../assets/skill-dark-logo/opencv-logo.png";
import pytorchLogo from "../assets/skill-dark-logo/pytorch-logo.png";
import scikitlearnLogo from "../assets/skill-dark-logo/scikitlearn-logo.png";
import spacyLogo from "../assets/skill-dark-logo/spacy-logo.png";

// Import AI/ML skill logos - Light Mode
import lightchromaLogo from "../assets/skill-light-logo/chroma-logo.png";
import lightdatabricksLogo from "../assets/skill-light-logo/databricks-logo.png";
import lighthaystackLogo from "../assets/skill-light-logo/haystack-logo.png";
import lightkerasLogo from "../assets/skill-light-logo/keras-logo.png";
import lightlangchainLogo from "../assets/skill-light-logo/langchain-logo.png";
import lighthuggingfaceLogo from "../assets/skill-light-logo/huggingface-logo.png";
import lightmlflowLogo from "../assets/skill-light-logo/mlflow-logo.png";
import lightopenaiLogo from "../assets/skill-light-logo/openai-logo.png";
import lightopencvLogo from "../assets/skill-light-logo/opencv-logo.png";
import lightpytorchLogo from "../assets/skill-light-logo/pytorch-logo.png";
import lightscikitlearnLogo from "../assets/skill-light-logo/scikitlearn-logo.png";
import lightspacyLogo from "../assets/skill-light-logo/spacy-logo.png";

// Import Data Analytics & Visualization skill logos - Dark Mode
import matplotlibLogo from "../assets/skill-dark-logo/matplotlib-logo.png";
import numpyLogo from "../assets/skill-dark-logo/numpy-logo.png";
import pandasLogo from "../assets/skill-dark-logo/pandas-logo.png";
import plotlyLogo from "../assets/skill-dark-logo/plotly-logo.png";
import pythonLogo from "../assets/skill-dark-logo/python-logo.png";
import scipyLogo from "../assets/skill-dark-logo/scipy-logo.png";
import seabornLogo from "../assets/skill-dark-logo/seaborn-logo.png";
import sqlLogo from "../assets/skill-dark-logo/sql-logo.png";

// Import Data Analytics & Visualization skill logos - Light Mode
import lightmatplotlibLogo from "../assets/skill-light-logo/matplotlib-logo.png";
import lightnumpyLogo from "../assets/skill-light-logo/numpy-logo.png";
import lightpandasLogo from "../assets/skill-light-logo/pandas-logo.png";
import lightplotlyLogo from "../assets/skill-light-logo/plotly-logo.png";
import lightpythonLogo from "../assets/skill-light-logo/python-logo.png";
import lightscipyLogo from "../assets/skill-light-logo/scipy-logo.png";
import lightseabornLogo from "../assets/skill-light-logo/seaborn-logo.png";
import lightsqlLogo from "../assets/skill-light-logo/sql-logo.png";

// Import Frontend skill logos - Dark Mode
import htmlLogo from "../assets/skill-dark-logo/html-logo.png";
import cssLogo from "../assets/skill-dark-logo/css-logo.png";
import javascriptLogo from "../assets/skill-dark-logo/javascript-logo.png";
import typescriptLogo from "../assets/skill-dark-logo/typescript-logo.png";
import reactjsLogo from "../assets/skill-dark-logo/react-logo.png";
import tailwindLogo from "../assets/skill-dark-logo/tailwind-logo.png";
import viteLogo from "../assets/skill-dark-logo/vite-logo.png";

// Import Frontend skill logos - Light Mode
import lighthtmlLogo from "../assets/skill-light-logo/html-logo.png";
import lightcssLogo from "../assets/skill-light-logo/css-logo.png";
import lightjavascriptLogo from "../assets/skill-light-logo/javascript-logo.png";
import lighttypescriptLogo from "../assets/skill-light-logo/typescript-logo.png";
import lightreactjsLogo from "../assets/skill-light-logo/react-logo.png";
import lighttailwindLogo from "../assets/skill-light-logo/tailwind-logo.png";
import lightviteLogo from "../assets/skill-light-logo/vite-logo.png";

// Import Backend, API & Databases skill logos - Dark Mode
import flaskLogo from "../assets/skill-dark-logo/flask-logo.png";
import fastapiLogo from "../assets/skill-dark-logo/fastapi-logo.png";
import laravelLogo from "../assets/skill-dark-logo/laravel-logo.png";
import phpLogo from "../assets/skill-dark-logo/php-logo.png";
import nodejsLogo from "../assets/skill-dark-logo/nodejs-logo.png";
import expressjsLogo from "../assets/skill-dark-logo/express-logo.png";
import restfulapiLogo from "../assets/skill-dark-logo/restful-logo.png";
import mysqlLogo from "../assets/skill-dark-logo/mysql-logo.png";
import postgresqlLogo from "../assets/skill-dark-logo/postgresql-logo.png";
import mongodbLogo from "../assets/skill-dark-logo/mongodb-logo.png";
import sqliteLogo from "../assets/skill-dark-logo/sqlite-logo.png";

// Import Backend, API & Databases skill logos - Light Mode
import lightflaskLogo from "../assets/skill-light-logo/flask-logo.png";
import lightfastapiLogo from "../assets/skill-light-logo/fastapi-logo.png";
import lightlaravelLogo from "../assets/skill-light-logo/laravel-logo.png";
import lightphpLogo from "../assets/skill-light-logo/php-logo.png";
import lightnodejsLogo from "../assets/skill-light-logo/nodejs-logo.png";
import lightexpressjsLogo from "../assets/skill-light-logo/express-logo.png";
import lightrestfulapiLogo from "../assets/skill-light-logo/restful-logo.png";
import lightmysqlLogo from "../assets/skill-light-logo/mysql-logo.png";
import lightpostgresqlLogo from "../assets/skill-light-logo/postgresql-logo.png";
import lightmongodbLogo from "../assets/skill-light-logo/mongodb-logo.png";
import lightsqliteLogo from "../assets/skill-light-logo/sqlite-logo.png";

// Import DevOps, Cloud, Testing & Integrations skill logos - Dark Mode
import gitLogo from "../assets/skill-dark-logo/git-logo.png";
import dockerLogo from "../assets/skill-dark-logo/docker-logo.png";
import kubernetesLogo from "../assets/skill-dark-logo/kubernetes-logo.png";
import stripeLogo from "../assets/skill-dark-logo/stripe-logo.png";
import paypalLogo from "../assets/skill-dark-logo/paypal-logo.png";
import firebaseLogo from "../assets/skill-dark-logo/firebase-logo.png";
import awsLogo from "../assets/skill-dark-logo/aws-logo.png";
import postmanLogo from "../assets/skill-dark-logo/postman-logo.png";
import pytestLogo from "../assets/skill-dark-logo/pytest-logo.png";
import vercelLogo from "../assets/skill-dark-logo/vercel-logo.png";
import railwayLogo from "../assets/skill-dark-logo/railway-logo.png";
import netlifyLogo from "../assets/skill-dark-logo/netlify-logo.png";

// Import DevOps, Cloud, Testing & Integrations skill logos - Light Mode
import lightgitLogo from "../assets/skill-light-logo/git-logo.png";
import lightdockerLogo from "../assets/skill-light-logo/docker-logo.png";
import lightkubernetesLogo from "../assets/skill-light-logo/kubernetes-logo.png";
import lightstripeLogo from "../assets/skill-light-logo/stripe-logo.png";
import lightpaypalLogo from "../assets/skill-light-logo/paypal-logo.png";
import lightfirebaseLogo from "../assets/skill-light-logo/firebase-logo.png";
import lightawsLogo from "../assets/skill-light-logo/aws-logo.png";
import lightpostmanLogo from "../assets/skill-light-logo/postman-logo.png";
import lightpytestLogo from "../assets/skill-light-logo/pytest-logo.png";
import lightvercelLogo from "../assets/skill-light-logo/vercel-logo.png";
import lightrailwayLogo from "../assets/skill-light-logo/railway-logo.png";
import lightnetlifyLogo from "../assets/skill-light-logo/netlify-logo.png";

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };

    // Initial check
    checkTheme();

    // Observe changes to the body's class list
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
            <h1>Skills & Technologies</h1>
          <div className="section-line"></div>
        </div>

        <div className="skills-section">
          {/* AI/ML Section */}
          <div className="skills-description-header">
            <h3>AI & Machine Learning</h3>
          </div>
          <div className="skills-description">
            <p>Proficient in AI/ML, I leverage diverse techniques and frameworks to build, train, and deploy intelligent systems effectively.</p>
          </div>
          <Marquee className="skills-marquee" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? chromaLogo : lightchromaLogo} alt="Chroma Logo" />
            <img src={isDarkMode ? databricksLogo : lightdatabricksLogo} alt="Databricks Logo" />
            <img src={isDarkMode ? haystackLogo : lighthaystackLogo} alt="Haystack Logo" />   
            <img src={isDarkMode ? kerasLogo : lightkerasLogo} alt="Keras Logo" />
            <img src={isDarkMode ? langchainLogo : lightlangchainLogo} alt="Langchain Logo" />
            <img src={isDarkMode ? huggingfaceLogo : lighthuggingfaceLogo} alt="Hugging Face Logo" />
          </Marquee>
          <Marquee className="skills-marquee" direction="right" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? mlflowLogo : lightmlflowLogo} alt="MLflow Logo" />
            <img src={isDarkMode ? openaiLogo : lightopenaiLogo} alt="OpenAI Logo" />
            <img src={isDarkMode ? opencvLogo : lightopencvLogo} alt="OpenCV Logo" />
            <img src={isDarkMode ? pytorchLogo : lightpytorchLogo} alt="PyTorch Logo" />
            <img src={isDarkMode ? scikitlearnLogo : lightscikitlearnLogo} alt="Scikit-learn Logo" />
            <img src={isDarkMode ? spacyLogo : lightspacyLogo} alt="spaCy Logo" />
          </Marquee>
        </div>

        <div className="skills-section">
          {/* Data Analytics & Visualization Section */}
          <div className="skills-description-header">
            <h3>Data Analytics & Visualization</h3>
          </div>
          <div className="skills-description">
            <p>Skilled in transforming complex data into actionable insights through robust analysis and compelling visualizations, driving informed decision-making.</p>
          </div>
          <Marquee className="skills-marquee" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? matplotlibLogo : lightmatplotlibLogo} alt="Matplotlib Logo" />
            <img src={isDarkMode ? numpyLogo : lightnumpyLogo} alt="NumPy Logo" />
            <img src={isDarkMode ? pandasLogo : lightpandasLogo} alt="Pandas Logo" />
            <img src={isDarkMode ? plotlyLogo : lightplotlyLogo} alt="Plotly Logo" />
            <img src={isDarkMode ? pythonLogo : lightpythonLogo} alt="Python Logo" />
            <img src={isDarkMode ? scipyLogo : lightscipyLogo} alt="SciPy Logo" />
            <img src={isDarkMode ? seabornLogo : lightseabornLogo} alt="Seaborn Logo" />
            <img src={isDarkMode ? sqlLogo : lightsqlLogo} alt="SQL Logo" />
          </Marquee>
        </div>

        {/* Software Development Section */}
        <div className="skills-section">
          <div className="skills-description-header">
            <h3>Software Development</h3>
          </div>
          <div className="skills-description">
            <p>Experienced in developing robust and scalable applications across diverse domains, from dynamic frontend interfaces to powerful backend systems and seamless cloud deployments.</p>
          </div>

          {/* Frontend Marquee */}
          <Marquee className="skills-marquee" speed={25} direction="right" gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? htmlLogo : lighthtmlLogo} alt="HTML Logo" />
            <img src={isDarkMode ? cssLogo : lightcssLogo} alt="CSS Logo" />
            <img src={isDarkMode ? javascriptLogo : lightjavascriptLogo} alt="JavaScript Logo" />
            <img src={isDarkMode ? typescriptLogo : lighttypescriptLogo} alt="TypeScript Logo" />
            <img src={isDarkMode ? reactjsLogo : lightreactjsLogo} alt="ReactJS Logo" />
            <img src={isDarkMode ? tailwindLogo : lighttailwindLogo} alt="Tailwind CSS Logo" />
            <img src={isDarkMode ? viteLogo : lightviteLogo} alt="Vite Logo" />
          </Marquee>

          {/* Backend, API & Databases Marquee */}
          <Marquee className="skills-marquee" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? flaskLogo : lightflaskLogo} alt="Flask Logo" />
            <img src={isDarkMode ? fastapiLogo : lightfastapiLogo} alt="FastAPI Logo" />
            <img src={isDarkMode ? laravelLogo : lightlaravelLogo} alt="Laravel Logo" />
            <img src={isDarkMode ? phpLogo : lightphpLogo} alt="PHP Logo" />
            <img src={isDarkMode ? nodejsLogo : lightnodejsLogo} alt="Node.js Logo" />
            <img src={isDarkMode ? expressjsLogo : lightexpressjsLogo} alt="Express.js Logo" />
            <img src={isDarkMode ? restfulapiLogo : lightrestfulapiLogo} alt="RESTful API Logo" />
            <img src={isDarkMode ? mysqlLogo : lightmysqlLogo} alt="MySQL Logo" />
            <img src={isDarkMode ? postgresqlLogo : lightpostgresqlLogo} alt="PostgreSQL Logo" />
            <img src={isDarkMode ? mongodbLogo : lightmongodbLogo} alt="MongoDB Logo" />
            <img src={isDarkMode ? sqliteLogo : lightsqliteLogo} alt="SQLite Logo" />
          </Marquee>

          {/* DevOps, Cloud, Testing & Integrations Marquee */}
          <Marquee className="skills-marquee" speed={25} direction="right" gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`} autoFill={true}>
            <img src={isDarkMode ? gitLogo : lightgitLogo} alt="Git Logo" />
            <img src={isDarkMode ? dockerLogo : lightdockerLogo} alt="Docker Logo" />
            <img src={isDarkMode ? kubernetesLogo : lightkubernetesLogo} alt="Kubernetes Logo" />
            <img src={isDarkMode ? stripeLogo : lightstripeLogo} alt="Stripe Logo" />
            <img src={isDarkMode ? paypalLogo : lightpaypalLogo} alt="PayPal Logo" />
            <img src={isDarkMode ? firebaseLogo : lightfirebaseLogo} alt="Firebase Logo" />
            <img src={isDarkMode ? awsLogo : lightawsLogo} alt="AWS Logo" />
            <img src={isDarkMode ? postmanLogo : lightpostmanLogo} alt="Postman Logo" />
            <img src={isDarkMode ? pytestLogo : lightpytestLogo} alt="Pytest Logo" />
            <img src={isDarkMode ? vercelLogo : lightvercelLogo} alt="Vercel Logo" />
            <img src={isDarkMode ? railwayLogo : lightrailwayLogo} alt="Railway Logo" />
            <img src={isDarkMode ? netlifyLogo : lightnetlifyLogo} alt="Netlify Logo" />
          </Marquee>
        </div>

      </div>
    </section>
  )
}

export default Skills

