import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";

// Import AI/ML skill logos - Dark Mode
import chromaLogo from "../assets/skill-dark-logo/chroma-logo.png";
import databricksLogo from "../assets/skill-dark-logo/databricks-logo.png";
import haystackLogo from "../assets/skill-dark-logo/haystack-logo.png";
import kerasLogo from "../assets/skill-dark-logo/keras-logo.png";
import langchainLogo from "../assets/skill-dark-logo/langchain-logo.png";
import huggingfaceLogo from "../assets/skill-dark-logo/spacy-logo.png";
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
import lighthuggingfaceLogo from "../assets/skill-light-logo/spacy-logo.png";
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
          <Marquee className="skills-marquee" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`}>
            <img src={isDarkMode ? chromaLogo : lightchromaLogo} alt="Chroma Logo" />
            <img src={isDarkMode ? databricksLogo : lightdatabricksLogo} alt="Databricks Logo" />
            <img src={isDarkMode ? haystackLogo : lighthaystackLogo} alt="Haystack Logo" />
            <img src={isDarkMode ? kerasLogo : lightkerasLogo} alt="Keras Logo" />
            <img src={isDarkMode ? langchainLogo : lightlangchainLogo} alt="Langchain Logo" />
            <img src={isDarkMode ? huggingfaceLogo : lighthuggingfaceLogo} alt="Hugging Face Logo" />
          </Marquee>
          <Marquee className="skills-marquee" direction="right" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`}>
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
          <Marquee className="skills-marquee" speed={25} gradient={true} gradientColor={`rgb(${isDarkMode ? '18, 18, 18' : '245, 245, 245'})`}>
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

      </div>
    </section>
  )
}

export default Skills

