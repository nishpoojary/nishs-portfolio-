import React from "react";
import Education from "./Education";  // ✅ only import Education here

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer with a strong foundation in web
        technologies and computer networks. I enjoy building full‑stack
        applications, experimenting with modern UI/UX, and contributing to
        open‑source projects.
      </p>

      {/* Include Education section inside About */}
      <Education />
    </section>
  );
}

export default About;
