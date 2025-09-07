import React from "react";

function About() {
  return (
    <section id="about" className="section hidden">
      <div className="about-container">
        <div className="about-text">
          <div className="hello-line">
            <h1 className="hello">Hello,</h1>
            <h2 className="name">I'm Wathsala Indeevari</h2>
          </div>
          <h1 className="role">Aspiring Software & Web Developer</h1>
          <p>
            I am a developer passionate about building modern, clean, and
            responsive web applications using React, JavaScript, and other web
            technologies. My goal is to continuously learn and grow while
            creating impactful projects. 
          </p>
          <div className="about-buttons">
            <a href="#projects">
              <button className="galaxy-btn">View Projects</button>
            </a>
            <a href="#contact">
              <button className="galaxy-btn">Hire me</button>
            </a>
          </div>
        </div>
        <div className="about-photo">

          <div className="photo-placeholder"><img src="/images/proPic.jpg" alt="My photo" /></div>
        </div>
      </div>
    </section>
  );
}

export default About;
