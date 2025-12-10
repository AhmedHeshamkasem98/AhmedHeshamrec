import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="Contact">
      <section id="contact">
        <div className="container">
          <div className="title">
            <h2>
              <i className="fa-solid fa-headset"></i> Get In
              <span className="text-primary"> Touch</span>
            </h2>
          </div>

          <div className="row">
            <img src="assets/contact.png" alt="Get In Touch" />

            <form
              action="https://formsubmit.co/meshodevaloper@gmail.com"
              method="POST"
            >
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                required
              />

              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>

              {/* منع الكابتشا */}
              <input type="hidden" name="_captcha" value="false" />

              {/* تحويل لصفحة شكر بعد الإرسال */}
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />

              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
