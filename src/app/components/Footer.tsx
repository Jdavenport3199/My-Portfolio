import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/justindavenport99/"
        >
          <i className="fa-brands fa-linkedin-in fa-xl"></i>
        </Link>
        <Link
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Jdavenport3199"
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </Link>
      </div>
    </div>
  );
}
