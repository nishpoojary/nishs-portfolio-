import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark-theme");

const toggleTheme = () => {
  setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
};

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
       <Footer /> 
    </div>
  );
}

export default App;
