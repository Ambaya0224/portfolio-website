import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Projects";
import Certificate from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import "./styles/main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Project />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
