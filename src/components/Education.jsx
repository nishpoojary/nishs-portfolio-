import React, { useEffect } from "react";
import "../App.css"; // go up one folder to src

function Education() {
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // keep visible once shown
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-cards">
        <div className="edu-card">
          <div className="edu-year">2025 - Present</div>
          <div className="edu-content">
            <h3>Masters in Computer Applications (MCA)</h3>
            <p>St. Philomena College, Puttur</p>
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
