"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import { switzer } from "./ui/fonts";
import ReactLenis from "lenis/react";

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
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.75;

      if (test.current as any) {
        (test.current as any).style.transform = `translateY(${
          scrolled * parallaxSpeed
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    // <ReactLenis root>
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <div className="nav" ref={nav}>
        <div className="nav-holder">
          <span
            className={`divider ${switzer.className}`}
            style={{ fontWeight: "800", fontSize: "clamp(24px, 2vw, 28px)" }}
          >
            justin<strong style={{ color: "#007FFF" }}>.</strong>
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
                </button>{" "}
                {/* <button
                    onClick={() => handleTranslate("100%")}
                    aria-label="Blog"
                  >
                    ABOUT
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          alignItems: "center",
          position: "absolute",
        }}
        ref={test}
      >
        <div className="test"></div>
      </div> */}

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="#007FFF" size={10} />
        </div>
      ) : (
        <>
          {/* <div
            className="container-holder"
            style={{
              minHeight: "100vh",
              display: translateX === "-50%" ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <div className="text-holder" id="fade">
              <div className="splash-title-holder">
                <h1 className={`splash-title-right ${switzer.className}`}>
                  web developer<strong style={{ color: "#007FFF" }}>.</strong>
                </h1>
                <h1 className="divider">
                    <b
                      style={{
                        fontWeight: "200",
                        fontFamily: "Inter, sans-serif",
                        color: "#007FFF",
                      }}
                    >
                      |
                    </b>
                  </h1>
                <h1 className={`splash-title-left ${switzer.className}`}>
                  product designer
                  <strong style={{ color: "#007FFF" }}>.</strong>
                </h1>
              </div>
            </div>
          </div> */}

          <Work translateX={translateX} />
          <Articles translateX={translateX} />
          <Footer />
        </>
      )}
    </main>
    /* </ReactLenis> */
  );
}
