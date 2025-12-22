import React from "react";
import "../styles/Footer.css"; // Updated path to the styles folder
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/main.css";

function Footer() {
  return (
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
  );
}

export default Footer;