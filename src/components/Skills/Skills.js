import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#BBDCE5" }} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Skills</a>
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
                <Link className="nav-link" to="/experience">Experience</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">Education</Link>
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

      {/* Main Skills Section */}
      <main className="skills-main">
        <h1>SKILLS</h1>
        <div className="skills-list">
            {/*Card-1*/}    
            <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Programming Languages</div>
                <div className="card-body">
                    {/*<h5 className="card-title">Info card title</h5>*/}
                    <p className="card-text">Python, C, C++, C#, PHP, JavaScript, TypeScript.</p>
                </div>
                </div>
            

            {/*Card-2*/}
            <div className="card border-dark mb-3" style={{maxWidth:"18rem" }}>
                <div className="card-header">Web & Mobile Development</div>
                <div className="card-body">
                    {/*<h5 className="card-title">Dark card title</h5>*/}
                    <p className="card-text">HTML, CSS, React.js, Redux, AJAX, Axios, iOS Development, UI Components, Web Applications.</p>
                </div>
            </div> 
            {/*Card-3*/}
            <div className="card border-danger mb-3" style={{maxWidth:"18rem" }}>
                <div className="card-header">Application & Architector</div>
                <div className="card-body text-danger">
                    {/*<h5 className="card-title">Danger card title</h5>*/}
                    <p className="card-text">Feature Engineering, Application Architecture, Performance Tuning, Scalability, Event-Driven Programming.</p>
                </div>
            </div>   
            {/*Card-4*/}
            <div className="card border-secondary mb-3" style={{maxWidth:"18rem" }}>
                <div className="card-header">Cloud Platform & Architector</div>
                <div className="card-body text-secondary">
                    {/*<h5 className="card-title">Secondary card title</h5>*/}
                    <p className="card-text">AWS (S3, DynamoDB), Serverless Computing, Load Balancing, VPN, Containerization, API Gateway, Cloud Security, IT & Solution Architecture.</p>
                </div>
            </div>
            {/*Card-5*/}
            <div className="card border-success mb-3" style={{maxWidth:"18rem" }}>
                <div className="card-header">Data Sciennce & Machine Learning</div>
                <div className="card-body text-success">
                    {/*<h5 className="card-title">Success card title</h5>*/}
                    <p className="card-text">Data Analysis, Data Engineering, Big Data Analytics, Data Processing, Cleansing, EDA, Anomaly Detection, ML, DL, Hypothesis Testing, Statistics.</p>
                </div>
            </div>
            {/*Card-6*/}
            <div className="card border-warning mb-3" style={{maxWidth:"18rem" }}>
                <div className="card-header">Tools & Technology</div>
                <div className="card-body">
                    {/*<h5 className="card-title">Warning card title</h5>*/}
                    <p className="card-text">Git, GitHub, npm, Postman, MongoDB, xUnit, Jenkins, Docker, Kubernetes, CI/CD (Nagios, New Relic, Graphite), VS Code, Google Colab, Jupyter, Spyder, PyCharm, Figma, MS SQL Server, MySQL, Watson Studio, Visual Studio, Replit, Xcode.</p>
                </div>
            </div>
        </div>
        
        
        
        
    </main>

      {/* Footer */}
      <footer className="skills-footer">
        {/* <p>© 2023 Ganbayar Ganbaatar. All rights reserved.</p> */}
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

export default Skills;