import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <p style={{ fontSize: "14px" }}>&copy;2024</p>
      <div className="footer-links">
        <Link
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/justindavenport99/"
        >
          LinkedIn
        </Link>
        <Link
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Jdavenport3199"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}