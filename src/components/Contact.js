import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact({ theme }) {
  return (
    <section id="contact" className={`contact ${theme}`}>
      <h2>Contact Me</h2>
      <p className="contact-text">
        Let’s connect! You can reach me through any of these platforms.
      </p>

      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="mailto:yourmail@example.com" className="email">
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
