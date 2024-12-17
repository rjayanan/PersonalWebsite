import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Rishigesh Jayananth</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a 
  href="/resume.pdf" 
  download="Rishigesh_Jayananth_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Resume
</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
