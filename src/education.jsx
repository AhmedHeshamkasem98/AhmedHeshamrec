import React from "react";
import "./education.css";

function Education() {
  return (
    <div className="Education">
      <section id="education">
        <div className="container">
          <div className="title">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i> My
              <span className="text-primary">Education</span>
            </h2>
            <hr></hr>
            <br></br>
            <p>
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </p>
          </div>
          <div className="card">
            <img
              src="assets/0e7bdc41386f3ab8051d88e49e6c2d47 - Copy.jpg"
              alt="Misr University"
            />
            <div className="card-content">
              <h3>Bachelor of Cyber security System</h3>
              <p>Arap open University</p>
              <p className="status">2021 - 2028</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
