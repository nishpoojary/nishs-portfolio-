import React from 'react';
import About from "./About";
function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-cards">
        <div className="edu-card">
          <div className="edu-year">2025 - Present</div>
          <div className="edu-content">
            <h3>Masters in Computer Applications (MCA)</h3>
            <p>Nitte University</p>
          </div>
        </div>
        <div className="edu-card">
          <div className="edu-year">2022 - 2025</div>
          <div className="edu-content">
            <h3>Bachelors in Computer Applications (BCA)</h3>
            <p>St. Philomena College, Puttur</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
