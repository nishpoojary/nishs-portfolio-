import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";
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
  const [theme, setTheme] = useState("dark-theme");
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // splash duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={theme}>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Navbar toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
