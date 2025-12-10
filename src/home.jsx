import React from "react";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <div className="left">
          <p></p>
          <br></br>
          <h1>
            I'm <span>Ahmed Elqassem</span>
          </h1>

          {/* TEXT WITH TYPING ANIMATION */}
          <p className="job">
            <span>Front End</span>
          </p>

          <p>
            I build clean, responsive, and interactive web interfaces using
            HTML, CSS, JavaScript, and React. I turn ideas into beautiful
            digital experiences.
          </p>

          {/* Social Icons */}
          <div className="social">
            <a
              href="https://web.facebook.com/profile.php?id=100061299042647"
              target="_blank"
              aria-label="Ahmed Hesham Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-hesham-b462962a1"
              target="_blank"
              aria-label="Ahmed Hesham LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="ahmedheshamkasem98.git"
              git
              init
              target="_blank"
              aria-label="Ahmed Hesham Github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/medakasem?igsh=MWt3dmRsaWJ1cGpubw=="
              target="_blank"
              aria-label="Ahmed Hesham Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          {/* Buttons */}
          <a href="#hire-me" className="hire-btn">
            <span className="gradient"></span>
            <span className="label">Hire Me</span>
          </a>

          <a href="assets/Ahmed-Hesham-CV.pdf" download className="cv-btn">
            <span className="gradient"></span>
            <span className="label">Download CV</span>
          </a>
        </div>

        {/* Right Side Image */}
        <div className="right">
          <div className="image">
            <img src="assets/ahmed.png" alt="Developer" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
