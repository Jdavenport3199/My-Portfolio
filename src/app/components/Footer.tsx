"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="container-holder">
        <div className="footer-holder" style={{ width: "95%" }}>
          <div className="footer">
            <div className="social-btn-holder">
              <Link
                href="https://www.linkedin.com/in/justindavenport99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#007FFF" }}
              >
                LINKEDIN
              </Link>
              <Link
                href="https://github.com/Jdavenport3199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#007FFF" }}
              >
                GITHUB
              </Link>
              <Link
                href="/pages/resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                style={{ color: "#007FFF" }}
              >
                RESUME
              </Link>
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                style={{ color: "#007FFF" }}
              >
                EMAIL
              </Link>
            </div>
            <strong
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              ©2024 JUSTIN DAVENPORT
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
