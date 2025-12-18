import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                <a href="#about" className="text-white">About</a> | 
                <a href="#projects" className="text-white">Projects</a> | 
                <a href="#contact" className="text-white">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;