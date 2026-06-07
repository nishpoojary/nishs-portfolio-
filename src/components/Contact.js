import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        You can reach me through GitHub, LinkedIn, or Email.
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:yourmail@example.com" className="contact-link">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>
      </div>

      {/* Proper spacing */}
      <br />
    </section>
  );
}

export default Contact;
