"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import Link from "next/link";

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

  const test = useRef(null);
  const test2 = useRef(null);
  let ticking = false;

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (test.current) {
            const parallaxSpeed = 0.75;
            (test.current as any).style.transform = `translateY(${
              scrolled * parallaxSpeed
            }px)`;
          }
          if (test2.current) {
            const parallaxSpeed = 0.9;
            (test2.current as any).style.transform = `translateY(${
              scrolled * parallaxSpeed
            }px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [test, test2]);

  return (
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <div className="nav" ref={nav}>
        <div className="nav-holder">
          <strong
            className="logo"
            style={{
              fontSize: "clamp(10px, 2vw, 12px)",
              fontWeight: "500",
              lineHeight: "1.4",
              color: "#007FFF",
            }}
          >
            JUSTIN DAVENPORT
          </strong>
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
                  WORK
                </button>
                <button onClick={() => setTranslateX("50%")} aria-label="Blog">
                  BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          alignItems: "flex-start",
          position: "absolute",
        }}
        ref={test}
      >
        <div className="test"></div>
      </div>

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="#007FFF" size={10} />
        </div>
      ) : (
        <>
          <div
            className="container-holder"
            style={{
              minHeight: "100vh",
              display: translateX === "-50%" ? "flex" : "none",
              alignItems: "flex-end",
            }}
          >
            <div className="container-splash" id="fade">
              <h1>
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
              <br />
              <p>
                Located in Charlotte, available globally.
                <br />
                Feel free to contact me or explore my work below.
              </p>
            </div>
            <div className="footer-holder" id="fade">
              <div className="footer">
                <strong
                  style={{
                    fontSize: "clamp(10px, 2vw, 12px)",
                    fontWeight: "500",
                    lineHeight: "1.4",
                  }}
                >
                  AVAILABLE FOR WORK
                </strong>
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
              </div>
            </div>
          </div>

          <Work translateX={translateX} />
          <Articles translateX={translateX} />
          <Footer />
        </>
      )}
    </main>
  );
}
