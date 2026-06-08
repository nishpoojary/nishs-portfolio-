import React from "react";
import { FaGithub } from "react-icons/fa";

// Import images from src/assets
import connectImg from "../assets/art.png";
import youtubeImg from "../assets/agrocare.png";

const projects = [
  {
    title: "Connect - Social Media",
    description:
      "A full-featured social media platform built with the MERN stack. Includes authentication, authorization, and complete CRUD operations.",
    tags: ["MERN", "AUTH"],
    image: connectImg,
    github: "https://github.com/yourrepo/connect",
  },
  {
    title: "React Youtube Clone",
    description:
      "A functional clone of YouTube utilizing the Rapid API to fetch and display video content.",
    tags: ["REACT", "API"],
    image: youtubeImg,
    github: "https://github.com/yourrepo/youtube-clone",
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
