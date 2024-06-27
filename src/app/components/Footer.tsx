"use client";
import Link from "next/link";
import { switzer } from "../ui/fonts";

export default function Footer() {
  return (
    <>
      <div className="container-holder">
        <div className="footer-holder">
          <div className="footer">
            <div className="social-btn-holder">
              <Link
                href="https://www.linkedin.com/in/justindavenport99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LINKEDIN
              </Link>
              <Link
                href="https://github.com/Jdavenport3199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GITHUB
              </Link>
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                JUSTINDAVENPORT.SPACE@GMAIL.COM
              </Link>
            </div>
            <div>
              <strong
                style={{
                  fontSize: "clamp(10px, 2vw, 12px)",
                  fontWeight: "500",
                  lineHeight: "1.4",
                }}
              >
                ©2024
              </strong>
              {/* <strong
                className={switzer.className}
                style={{
                  fontWeight: "800",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "#007FFF",
                }}
              >
                Justin Davenport
              </strong> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
