import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* First Section: Picture */}
      <div className="hero-picture">
        <img src="/images/Ambaya_profile.png" alt="Ganbayar Ganbaatar" />
      </div>

      {/* Second Section: Info */}
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
  );
}

export default HeroSection;