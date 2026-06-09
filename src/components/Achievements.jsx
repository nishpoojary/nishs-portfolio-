import React from "react";

function Achievements({ theme }) {
  const achievements = [
    { icon: "🏆", text: "Built and deployed a full-stack MERN social media app with authentication and CRUD features." },
    { icon: "🚀", text: "Integrated Stripe payments into a food delivery app for seamless transactions." },
    { icon: "🎬", text: "Developed a YouTube clone using Rapid API to fetch and display video content." },
    { icon: "🎵", text: "Created a music streaming app leveraging Saavn API for a large song library." },
    { icon: "💡", text: "Contributed to open-source projects and improved UI/UX consistency across apps." },
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
