import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // ✅ Theme state
  const [theme, setTheme] = useState("light-theme");

  // ✅ Toggle function
  const toggleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} />   {/* pass toggle to Navbar */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
