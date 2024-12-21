import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">Hi, I'm <span>Rishigesh Jayananth</span></h1>
      <p className="hero-tagline">Transforming Data into Insights with Machine Learning with a deep interest in hardware</p>
      <a href="#projects" className="btn">Explore My Work</a>
    </section>
  );
}

export default Home;
