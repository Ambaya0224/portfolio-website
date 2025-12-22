import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Certificates.css";


function Certificate() {
  return (
    <div className="certificates-container">
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#BBDCE5" }} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Certifications</a>
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
                <Link className="nav-link" to="/skills">Skill</Link>
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
      {/* Main Certificate Section */}
      <main className="certificates-main">
        <h1>Certificates</h1>
        <div className="certificates-list">
          {/* Card-1 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/Advanced-React-certificate.png" className="img-fluid rounded-start" alt="Advanced React Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Advanced React Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>IBM</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate demonstrates advanced knowledge of React, including hooks, context, and performance optimization.
                  </p>
                  
                  <a href="/pdfs/Advanced React.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-2 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/AWS-Solution-Architecture-Certificate.png" className="img-fluid rounded-start" alt="AWS Solution Architecture Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">AWS Solution Architecture Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>AWS</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate validates expertise in designing and deploying scalable systems on AWS.
                  </p>
                  <a href="/pdfs/Architecting Solutions on AWS.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-3 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/Git-GitHub-certificate.png" className="img-fluid rounded-start" alt="Git & GitHub Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Git & GitHub Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>IBM</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate showcases proficiency in version control using Git and GitHub for collaborative development.
                  </p>
                  <a href="/pdfs/Git&GitHub.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-4 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/React-Basic-certificate.png" className="img-fluid rounded-start" alt="React Basic Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">React Basic Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>META</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate demonstrates foundational knowledge of React, including components, props, and state management.
                  </p>
                  <a href="/pdfs/React-Basic.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-5 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/AWS-Technical-Essentials-certificate.png" className="img-fluid rounded-start" alt="AWS Technical Essentials Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">AWS Technical Essentials Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>AWS</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate validates foundational knowledge of AWS services and solutions.
                  </p>
                  <a href="/pdfs/AWS-Technical-Essentials-certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-6 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/EDA-ML-certificate.png" className="img-fluid rounded-start" alt="EDA & ML Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">EDA & ML Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>IBM</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate demonstrates expertise in exploratory data analysis and machine learning techniques.
                  </p>
                  <a href="/pdfs/Exploratory Data Analysis for Machine Learning.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary"style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card-7 */}
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/Software-Engineer-Simulation-certificate.png" className="img-fluid rounded-start" alt="Software Engineer Simulation Certificate" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer Simulation Certificate</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold", color: "#8D77AB" }}>FORGE</span> | 13.07.2025 | MNI7WKI6NDR8
                  </p>
                  <p className="card-text">
                    This certificate validates hands-on experience in a simulated software engineering environment.
                  </p>
                  <a href="/pdfs/Software Engineering Job Simulation_certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary"style={{ backgroundColor: "#8D77AB", borderColor: "#8D77AB" }}>
                    View Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="certificates-footer">
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

export default Certificate;