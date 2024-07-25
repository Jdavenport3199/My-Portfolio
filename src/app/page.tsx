"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import Link from "next/link";
import { object_sans } from "./ui/fonts";

export default function Home() {
  const [translateX, setTranslateX] = useState("-50%");
  const [lastScroll, setLastScroll] = useState(0);
  const [loading, setLoading] = useState(true);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "2rem";
          nav.current.style.height = "3rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "2rem";
        nav.current.style.height = "3rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-3.25rem";
        nav.current.style.height = "3rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    scrollToTop();
  }, []);

  return (
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <div className="nav" ref={nav}>
        <div className="nav-holder">
          <strong className="logo">{/* Justin Davenport */}</strong>
          <div className="nav-nav">
            <div className="nav-sub">
              <div className="nav-links">
                <div
                  className="nav-slider"
                  style={{
                    transform: `translateX(${translateX})`,
                  }}
                ></div>
                <button onClick={() => setTranslateX("-50%")} aria-label="Work">
                  Work
                </button>
                <button onClick={() => setTranslateX("50%")} aria-label="Blog">
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTING */}

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="#007FFF" size={10} />
        </div>
      ) : (
        <>
          <div
            className="container-holder"
            style={{
              minHeight: "95vh",
              display: translateX === "-50%" ? "flex" : "none",
              alignItems: "flex-end",
            }}
          >
            <div className="container-splash" id="fade">
              <h1 className={object_sans.className}>
                WEB DEVELOPER
                <br />
                <strong
                  style={{
                    fontSize: "clamp(14px, 4vw, 48px)",
                    fontWeight: 300,
                    color: "#007FFF",
                  }}
                >
                  AND
                </strong>{" "}
                PRODUCT DESIGNER
              </h1>
              <h2
                style={{
                  fontSize: "clamp(16px, 4vw, 24px)",
                  marginTop: "0.8rem",
                }}
              >
                Located in Charlotte, available globally.
              </h2>
            </div>
            <div className="footer-holder" id="fade">
              <div className="footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 512 512"
                  id="rotate"
                >
                  <path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z" />
                </svg>
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

          <Work translateX={translateX} />
          <Articles translateX={translateX} />
          {/* <Footer /> */}
        </>
      )}
    </main>
  );
}
