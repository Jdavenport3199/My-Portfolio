"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import ReactLenis from "lenis/react";
import Link from "next/link";

export default function Home() {
  //   const div = useRef<HTMLDivElement>(null);

  //   const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const [lastScroll, setLastScroll] = useState(0);
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

  const [translateX, setTranslateX] = useState("-50%");
  const handleTranslate = (newTranslateX: any) => {
    setTranslateX(newTranslateX);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    scrollToTop();
  }, [translateX]);

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
  }, []);

  return (
    <ReactLenis root>
      <main>
        <div className="background"></div>
        <div className="overlay"></div>

        <div className="nav" ref={nav}>
          <div className="nav-holder">
            {/* <strong
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: "500",
                lineHeight: "1.4",
                color: "#007FFF",
              }}
            >
              JUSTIN DAVENPORT
            </strong> */}
            <span
              style={{
                color: "#007FFF",
                fontWeight: 400
              }}
            >
              JUSTIN DAVENPORT
            </span>
            <div className="nav-nav">
              <div className="nav-sub">
                <div className="nav-links">
                  <div
                    className="nav-slider"
                    style={{
                      transform: `translateX(${translateX})`,
                    }}
                  ></div>
                  <button
                    onClick={() => handleTranslate("-50%")}
                    aria-label="Work"
                  >
                    WORK
                  </button>
                  <button
                    onClick={() => handleTranslate("50%")}
                    aria-label="Blog"
                  >
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
              <div
                className="container"
                id="fade"
                style={{ marginTop: "20rem" }}
              >
                <h1>
                  WEB DEVELOPER
                  <br />
                  <strong
                    style={{
                      fontSize: "clamp(24px, 8vw, 48px)",
                      fontWeight: 300,
                      color: "#007FFF",
                    }}
                  >
                    AND
                  </strong>{" "}
                  PRODUCT DESIGNER.
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
    </ReactLenis>
  );
}
