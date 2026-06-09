import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Tech Stack</h2>
      <div className="skills-panels">

        {/* Frontend & Mobile */}
        <div className="skill-panel">
          <h3>Frontend & Mobile</h3>
          <div className="skill-tags">
            <span>React Native</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Tailwind</span>
            <span>Sass</span>
            <span>Redux</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-panel">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>Python</span>
            <span>Flask</span>
            <span>Socket.io</span>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="skill-panel">
          <h3>Database & Tools</h3>
          <div className="skill-tags">
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>SQLite</span>
            <span>Firebase</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
