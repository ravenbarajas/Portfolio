import React from 'react';
import Marquee from "react-fast-marquee";

// Import AI/ML skill logos
import chromaLogo from "../assets/chroma-logo.png";
import databricksLogo from "../assets/databricks-logo.png";
import haystackLogo from "../assets/haystack-logo.png";
import kerasLogo from "../assets/keras-logo.png";
import langchainLogo from "../assets/langchain-logo.png";
import mlflowLogo from "../assets/mlflow-logo.png";
import openaiLogo from "../assets/openai-logo.png";
import opencvLogo from "../assets/opencv-logo.png";
import pytorchLogo from "../assets/pytorch-logo.png";
import scikitlearnLogo from "../assets/scikitlearn-logo.png";
import spacyLogo from "../assets/spacy-logo.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
            <h1>Skills & Technologies</h1>
          <div className="section-line"></div>
        </div>
        <Marquee className="skills-marquee" speed={25}>
          <img src={chromaLogo} alt="Chroma Logo" />
          <img src={databricksLogo} alt="Databricks Logo" />
          <img src={haystackLogo} alt="Haystack Logo" />
          <img src={kerasLogo} alt="Keras Logo" />
          <img src={langchainLogo} alt="Langchain Logo" />
        </Marquee>
        <Marquee className="skills-marquee" direction="right" speed={25}>
          <img src={mlflowLogo} alt="MLflow Logo" />
          <img src={openaiLogo} alt="OpenAI Logo" />
          <img src={opencvLogo} alt="OpenCV Logo" />
          <img src={pytorchLogo} alt="PyTorch Logo" />
          <img src={scikitlearnLogo} alt="Scikit-learn Logo" />
          <img src={spacyLogo} alt="spaCy Logo" />
        </Marquee>

      </div>
    </section>
  )
}

export default Skills

