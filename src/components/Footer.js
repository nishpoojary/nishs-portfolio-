import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nish. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:yourmail@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
