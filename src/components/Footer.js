import React from "react";
import facebookIcon from '../assets/facebook.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Wathsala Indeevari. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61563047348908" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>

        <a href="https://github.com/WathsalaIndeevari" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/wathsala-indeevari-667100317/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

