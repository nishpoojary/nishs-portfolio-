import React from "react";

function Achievements({ theme }) {
  const achievements = [
     {
    icon: "🔐",
    text: "Successfully completed NPTEL Online Certification in 'Foundation of Cryptography, IIIT Bangalore'"
  },
  {
    icon: "🛡️",
    text: "Successfully completed a 30-hour training programme in 'Cybersecurity and Digital Forensics' by TALFOR"
  },
  {
    icon: "🏆",
    text: "Secured Special Category Award in a 32-hour hackathon INNOVATEHACK 2026 at St. Philomena College, Puttur"
  },
  {
    icon: "💻",
    text: "Participated in Internal Smart India Hackathon at St. Philomena College, 2024"
  },
  {
    icon: "🥇",
    text: "Participated in NAIN 2.0 Project Competition at St. Philomena College, 2024"
  },
  {
    icon: "🌐",
    text: "Actively participated in the WordPress Campus Connect Event at St. Philomena College, Puttur"
  }
  ];

  return (
    <section id="achievements" className={`achievements ${theme}`}>
      <h2>Achievements</h2>
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <span className="icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
