import React from "react";
import project1Icon from '../assets/Project1.jpeg';
import project2Icon from '../assets/project2.png';
import project3Icon from '../assets/project3.jpeg';

function Projects() {
  return (
    <section id="projects" className="section hidden">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={project1Icon} alt="Portfolio Website" />
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio showcasing my skills, projects, and contact
            information. Built with React and CSS for smooth transitions and
            animations.
          </p>
        </div>
        <div className="project-card">
          <img src={project2Icon} alt="Bookstore Website" />
          <h3>Bookstore Website</h3>
          <p>
            A fully responsive bookstore website developed using HTML, 
            CSS, and JavaScript, with support for both dark and light modes. 
            The site includes interactive book listings, category filtering, 
            and a clean UI design that adapts to all devices for an enhanced user experience.
          </p>
        </div>
        <div className="project-card">
          <img src={project3Icon} alt="Desktop App" />
          <h3>Desktop App</h3>
          <p>
            A C# desktop application built in Visual Studio with SQL Server Management Studio (SSMS) 
            as the backend database. The application supports CRUD 
            (Create, Read, Update, Delete) operations, user-friendly forms, 
            and efficient data management, 
            demonstrating practical desktop software development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
