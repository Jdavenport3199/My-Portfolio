"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="container-holder">
        <div className="footer-holder">
          <div className="footer">
            <p>©2024 All rights reserved.</p>
            <div className="social-btn-holder">
              <Link
                href="https://www.instagram.com/justindavenport.space/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </Link>
              <Link
                href="https://dribbble.com/justindavenport"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                Dribbble
              </Link>
              {/* <Link
                href="https://www.behance.net/justindavenportspace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                Behance
              </Link> */}
              <Link
                href="https://www.linkedin.com/in/justindavenport99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Jdavenport3199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </Link>
              <Link
                href="/pages/resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
