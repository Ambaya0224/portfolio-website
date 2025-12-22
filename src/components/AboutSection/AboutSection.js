import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-text">
        I'm a Software Engineer and Data Scientist passionate about building scalable, data-driven solutions.
        Currently pursuing a Master of IT (Advanced) at Torrens University Australia.
        Skilled in C, C++, C#, Python, JavaScript, React.js, Docker, Jenkins, and SQL.
        Certified by IBM in Git & GitHub and BigData Analysis, collecting knowledge of ML and DL EDA for Machine Learning, and by Meta in React and Advanced React.
        Experienced in teaching programming and systems design.
        I enjoy turning complex data into meaningful insights and impactful applications.
      </div>
      <div className="about-buttons">
        <button className="about-button">
          <img src="/images/resume-Icon.png" alt="Resume Icon" className="button-icon" />
          Resume
        </button>
        <button className="about-button">
          <img src="/images/Portfolio-Icon.png" alt="Portfolio Icon" className="button-icon" />
          Portfolio
        </button>
      </div>
    </div>
  );
}

export default AboutSection;