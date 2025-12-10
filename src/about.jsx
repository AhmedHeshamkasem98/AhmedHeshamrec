import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <section className="hero2" id="hire-me">
        <div className="right">
          <h1>Hire Me</h1>
          <p>
            "I’m a passionate Front-End Developer with a keen eye for detail and
            a love for crafting beautiful, responsive, and user-friendly web
            applications. I specialize in turning complex ideas into intuitive
            interfaces using modern technologies like HTML, CSS, JavaScript, and
            React. My goal is to create digital experiences that not only look
            great but also feel seamless and engaging for users."
          </p>
        </div>
        <div className="lift">
          <div className="image">
            <img src="assets/ahmed.png" alt="Developer" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
