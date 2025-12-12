import React from "react";
import Navbar from "./nav";
import Home from "./home";
import About from "./about";
import Skills from "./skill";
import Projects from "./project";
import Contact from "./contactme";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
