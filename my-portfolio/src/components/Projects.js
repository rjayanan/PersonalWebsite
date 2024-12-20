import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

const projects = [
  {
    name: "Merger Acquisition Prediction Tool",
    description: "A tool for predicting mergers using machine learning.",
    image: project1,
    link: "https://github.com/yourprofile/merger-prediction"
  },
  {
    name: "Car Accident Analysis",
    description: "Analyzing traffic accidents to study autonomous vehicle impact.",
    image: project2,
    link: "https://github.com/yourprofile/car-accident-analysis"
  },
  {
    name: "E-Commerce Customer Churn",
    description: "Predicting churn to help businesses retain customers.",
    image: project3,
    link: "https://github.com/yourprofile/ecommerce-churn"
  },
  {
    name: "RISC Microprocessor Simulation",
    description: "Design and simulation of a RISC microprocessor.",
    image: project4,
    link: "https://github.com/yourprofile/risc-microprocessor"
  },
  {
    name: "CNN Deployment on Systolic Arrays",
    description: "Efficient deployment of CNNs on systolic arrays.",
    image: project5,
    link: "https://github.com/yourprofile/cnn-systolic"
  },
  {
    name: "Neural Networks on FPGA",
    description: "Implementing neural network architectures on FPGA.",
    image: project6,
    link: "https://github.com/yourprofile/nn-fpga"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              {/* Back Side */}
              <div className="card-back">
                <img src={project.image} alt={project.name} />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
