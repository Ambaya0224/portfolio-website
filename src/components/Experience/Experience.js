import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#BBDCE5" }} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Experience</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificate">Certifications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <span className="navbar-text">
              <img
                src="/images/Ambaya-Icon-modified.png"
                alt="AmbayaSoft Icon"
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              AmbayaSoft
            </span>
          </div>
        </div>
      </nav>

      {/* Main Experiences Section */}
      <main className="experience-main">
        <h1>EXPERIENCES</h1>
        <div className="accordion" id="experienceAccordion">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Assistant Lecturer (2008 - 2010)
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#experienceAccordion"
            >
              <div className="accordion-body">
                <p>
                  Delivered undergraduate courses in Web Design, Web Programming (C#, PHP), and Introductory Programming (C, C++).
                  Fostering foundational coding skills in application and web development.
                </p>
                <p>
                  <strong>Institution:</strong> Mongolian National University of Education, Mongolia, Ulaanbaatar
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Full-time Lecturer (2011 - 2017)
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#experienceAccordion"
            >
              <div className="accordion-body">
                <p>
                  Led advanced coursework in Principles of Programming, Database Fundamentals, Database Programming, and Systems Analysis & Design.
                  Contributed to curriculum development and mentored students in software engineering principles and project-based learning.
                </p>
                <p>
                  <strong>Institution:</strong> Mongolian National University of Education, Mongolia, Ulaanbaatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="experience-footer">
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

export default Experience;