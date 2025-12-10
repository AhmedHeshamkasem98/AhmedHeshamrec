import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">
          Ahmed <span>Elqassem</span>
        </h2>

        <p className="footer-desc">Front-End Developer | React | UI Lover</p>

        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/ahmed-hesham-b462962a1"
            target="_blank"
            aria-label="Ahmed Hesham LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Ahmedheshamabdalbakekasem"
            target="_blank"
            aria-label="Ahmed Hesham Github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ahmed_heshamp0p/"
            target="_blank"
            aria-label="Ahmed Hesham Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.facebook.com/ahmed.kasem.79039/">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ahmed Elqassem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
