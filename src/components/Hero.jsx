import React from "react";
import profilePic from "../assets/NISH.jpeg";
import cvFile from "../assets/CV_OF_NISHMITHA_N.pdf"; // import the PDF

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Left side text */}
      <div className="hero-left">
        <h2>HEY THERE, I'M </h2>
          <h1><b>Nishmitha N</b></h1>
        <h2>Full Stack Developer</h2>
        <p>
          Crafting robust and scalable web applications.  
          Currently pursuing Software Engineering & Computer Networks.
        </p>

        <div className="hero-buttons">
          {/* CV download button */}
          <a
            href={cvFile}          // use the imported file
            className="btn-download"
            download="Nishmitha_CV.pdf"
          >
            DOWNLOAD CV
          </a>

          {/* Contact button */}
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
