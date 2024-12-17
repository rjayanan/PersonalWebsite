import React from 'react';
import '../styles/Sections.css';

const projects = [
  { name: "Scalable Designs of CNN on 2D Systolic Array with Pruning and Compression", desc: "Hardware Acceleration", link: "#" },
  { name: "NN Hardware on FPGA", desc: "Hardware Acceleration", link: "#" },
  { name: "Car Accident Analysis", desc: "Data Analysis and Inference", link: "#" },
  { name: "E-Commerce Churn", desc: "Data Analysis and Inference for Business Insights", link: "#" },
  { name: "RISC Microprocessor", desc: "Hardware Engineering", link: "#" },
  { name: "Merger Acquisition Prediction", desc: "Finance and ML", link: "#" },

 


];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} className="btn">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
