import React from "react";

function Contact() {
  return (
    <section id="contact" className="section hidden">
      <h2>Contact</h2>

      <div className="contact-container">
        {/* Contact Intro */}
        <p className="contact-intro">
          🚀 Have a project in mind? Let’s collaborate and create something
          amazing.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <p>📞 Phone: +94 71 365 8316</p>
          <p>📧 Email: indeevaripg@gmail.com</p>

          {/* Social Buttons */}
          <div className="contact-buttons">
            <a
              href="https://www.linkedin.com/in/wathsala-indeevari-667100317/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-btn linkedin">LinkedIn</button>
            </a>
            <a
              href="https://github.com/WathsalaIndeevari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-btn github">GitHub</button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
