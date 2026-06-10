import React from "react";
import { FaGithub } from "react-icons/fa";

// Import images from src/assets
import connectImg from "../assets/art.png";
import youtubeImg from "../assets/agrocare.png";
import FocusFlowimg from "../assets/FocusFlow.png";
const projects = [
  {
    title: "Virtual Art Gallery",
    description:
      "Developed a web-based art gallery system with Artist and User modules. The platform allows artists to upload and manage artworks, while users can view, comment on, and add artworks to their wishlist. ",
    tags: ["Developed a web-based art gallery system with Artist and User modules. The platform allows artists to upload and manage artworks, while users can view, comment on, and add artworks to their wishlist. "],
    image: connectImg,
    github: "https://github.com/nishpoojary/Virtual-art-gallery",
  },
    {
    title: "FocusFlow",
    description:
      "A functional clone of YouTube utilizing the Rapid API to fetch and display video content.",
    tags: ["FocusFlow is a smart productivity hub that helps you organize tasks, manage schedules, and stay on track with reminders and analytics. It brings clarity to your workflow, making it easier to focus and achieve your goals"],
    image: FocusFlowimg,
    github: "https://github.com/nishpoojary/FocusFlow-App",
  },
  {
    title: "AgroCare",
    description:
      "A functional clone of YouTube utilizing the Rapid API to fetch and display video content.",
    tags: ["AgroCare is a two-in-one agriculture platform that performs soil analysis and provides intelligent fertilizer recommendations based on soil and crop data. The application also features an integrated fertilizer marketplace, allowing farmers to directly purchase the recommended products for improved crop productivity"],
    image: youtubeImg,
    github: "https://github.com/nishpoojary/AgroCare",
  },
  // add more projects here...
];

function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="preview-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
