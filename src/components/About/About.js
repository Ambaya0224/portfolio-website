import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./About.css";
import "../HeroSection/HeroSection.css";
import "../AboutSection/AboutSection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  return (
    <div className="about-page">
      <div className="main-content">
        {/* Left Side: Hero Section */}
        <div className="hero-container">
          <div className="hero-picture">
            <img src="/images/Ambaya_profile.png" alt="Ganbayar Ganbaatar" />
          </div>
          <div className="hero-info">
            <h1>Ganbayar Ganbaatar</h1>
            <p>(he/him)</p>
            <h2>Software Engineer and Data Scientist</h2>
            <button
              className="email-button"
              onClick={() => window.location.href = "mailto:your-email@example.com"}
            >
              <img src="/images/email_ID.png" alt="Portfolio Icon" className="button-icon" />
              Email Me
            </button>
          </div>
        </div>

        {/* Right Side: About Section */}
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
            <Link to="/skills" className="about-button">
              <img src="/images/Portfolio-Icon.png" alt="Portfolio Icon" className="button-icon" />
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default About;