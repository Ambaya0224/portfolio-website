import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#BBDCE5" }} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Contact</a>
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
                <Link className="nav-link" to="/experience">Experience</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificate">Certifications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">Education</Link>
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
          {/* Main Contact Section */}
      <main className="contact-main">
        <h1>Contact Me</h1>
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </main>


      {/* Footer */}
      <footer className="contact-footer">
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

export default Contact;
