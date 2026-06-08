import React from "react";
import profilePic from "../assets/NISH.jpeg";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Left side text */}
      <div className="hero-left">
        <h1>HEY THERE, I'M Nish</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Crafting robust and scalable web applications.  
          Currently pursuing Software Engineering & Computer Networks.
        </p>
  <div className="hero-buttons">
  <a href="/cv.pdf" className="btn-download">DOWNLOAD CV</a>
  <a href="#contact" className="btn-outline">LET’S TALK</a>
</div>

      </div>

      {/* Right side image with shadow box */}
      <div className="hero-right">
        <div className="shadow-box"></div>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </section>
  );
}

export default Hero;
