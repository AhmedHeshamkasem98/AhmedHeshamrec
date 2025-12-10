import React from "react";
// Remove or rename this if not needed
import "./project.css";

function ProjectsSection() {
  return (
    <div className="Project">
      <section id="projects">
        <div className="container">
          <div className="title">
            <h2>
              <i className="fa-solid fa-laptop-code"></i> My
              <span className="text-primary"> Projects</span>
            </h2>
            <hr />
          </div>

          <div className="row">
            {/* Quran Project */}
            <div className="card">
              <img
                src="assets/image copy 2.png"
                alt="Quran Project"
                loading="lazy"
              />
              <div className="card-content">
                <h3>Prayer times </h3>
                <p>
                  Front-End Developer skilled in React.js and API integration,
                  building responsive and dynamic web applications.
                </p>
                <a
                  href="#"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Git
                </a>
              </div>
            </div>

            {/* AH.Store Project */}
            <div className="card">
              <img src="assets/image copy.png" alt="AH.Store" loading="lazy" />
              <div className="card-content">
                <h3>MedaTech </h3>
                <p>
                  Programing Agancy Welcome to MEDA TECH, IT's specialized
                  company in programming and creating all types of websites. We
                  offer comprehensive solutions for website design and
                  development, including commercial websites, blogs, personal
                  websites, corporate websites, and more. Our professional team
                  ensures transforming your vision into a distinctive digital
                  reality
                </p>
                <div className="links">
                  <a
                    href="https://meda-tech.vercel.app/app.html"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Project */}
            <div className="card">
              <img src="assets/image.png" alt="Portfolio" loading="lazy" />
              <div className="card-content">
                <h3>Wady Woodworks </h3>
                <p>
                  landing page Crafting Wood Into Beauty is a business that
                  combines traditional craftsmanship with modern design.
                  Specializing in custom furniture, handcrafted doors, and wood
                  repairs, each piece reflects quality, passion, and meticulous
                  attention to detail
                </p>
                <div className="links">
                  <a
                    href="https://my-reac-app1.vercel.app/"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="new">New projects are coming soon... ❤️</p>
        </div>
      </section>
    </div>
  );
}

export default ProjectsSection;
