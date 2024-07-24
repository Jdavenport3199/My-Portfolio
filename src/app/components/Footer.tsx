"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="container-holder">
        <div className="footer-holder">
          <div className="footer">
            <p>©2024 Justin Davenport</p>
            <div className="social-btn-holder">
              <Link
                href="https://www.linkedin.com/in/justindavenport99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#007FFF" }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Jdavenport3199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#007FFF" }}
              >
                GitHub
              </Link>
              <Link
                href="/pages/resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                style={{ color: "#007FFF" }}
              >
                Resume
              </Link>
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                style={{ color: "#007FFF" }}
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
