import React from "react";
import {
  FaHome,
  FaTools,
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelope,
  FaCog
} from "react-icons/fa";

function Navbar({ toggleTheme }) {
  return (
    <header className="navbar">
      {/* Your name/logo on the left */}
      <div className="navbar-brand">
        <h1>Nishmitha</h1>
      </div>

      {/* Navigation + settings grouped together */}
      <div className="nav-right">
        <ul className="nav-icons">
          <li><a href="#hero" title="Home"><FaHome /></a></li>
          <li><a href="#about" title="About"><FaTools /></a></li>
          <li><a href="#education" title="Education"><FaUserGraduate /></a></li>
          <li><a href="#skills" title="Skills"><FaLaptopCode /></a></li>
           <li><a href="#projects" title="Projects"><FaProjectDiagram /></a></li>
          <li><a href="#contact" title="Contact"><FaEnvelope /></a></li>
        </ul>
        <button className="settings-icon" onClick={toggleTheme}>
          <FaCog />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
