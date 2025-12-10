import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <div className="Skill">
      <section id="skills">
        <div className="container">
          <div className="title">
            <h2>
              <i className="fa-solid fa-laptop-code"></i> Skills &amp;
              <span className="text-primary">Abilities</span>
            </h2>
            <hr />
          </div>
          <div className="skills-content">
            <div className="row">
              <div className="item">
                <img src="assets/html.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="item">
                <img src="assets/css-3.png" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="item">
                <img src="assets/javascript.png" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="item">
                <img src="assets/reactjs.png" alt="React Js" />
                <p>React Js</p>
              </div>
              <div className="item">
                <img src="assets/nodejs.png" alt="Node Js" />
                <p>Node Js</p>
              </div>
              <div className="item">
                <img src="assets/python.png" alt="Python" />
                <p>Python</p>
              </div>
              <div className="item">
                <img src="assets/github.png" alt="Github" />
                <p>Github</p>
              </div>
              <div className="item">
                <img src="assets/wordpress.png" alt="Wordpress" />
                <p>Wordpress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
