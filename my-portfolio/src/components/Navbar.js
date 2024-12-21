import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="logo">Rishigesh Jayananth</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume.pdf" download="Rishigesh_Jayananth_Resume.pdf">Resume</a></li>
        <li>
          {/* Toggle Switch */}
          <label className="dark-mode-switch">
            <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
