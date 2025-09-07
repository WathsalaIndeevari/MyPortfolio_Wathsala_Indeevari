import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Wathsala Indeevari. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61563047348908" target="_blank" rel="noopener noreferrer">
          <img src="..images/facebook.png" alt="Facebook" />
        </a>

        <a href="https://github.com/WathsalaIndeevari" target="_blank" rel="noopener noreferrer">
          <img src="..images/github.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/wathsala-indeevari-667100317/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="..images/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

