"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
  const homeDiv = useRef<HTMLDivElement>(null);
  const worksDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState("Home");

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewContentHolder) {
      setActiveSection("Home");
      const tl = gsap.timeline();
      tl.to(home.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [inViewContentHolder]);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    try {
      return savedTheme
        ? JSON.parse(savedTheme)
        : {
            color: "dark",
            borderRadius: "0rem",
            grid: "none",
          };
    } catch (error) {
      console.error("Error parsing theme from localStorage", error);
      return {
        color: "dark",
        borderRadius: "0rem",
        grid: "none",
      };
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.color);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleColor = () => {
    setTheme((prevTheme: { color: string }) => {
      const newTheme = {
        ...prevTheme,
        color: prevTheme.color === "dark" ? "light" : "dark",
      };
      document.documentElement.setAttribute("data-theme", newTheme.color);
      return newTheme;
    });
  };

  const toggleBorderRadius = () => {
    setTheme((prevTheme: { borderRadius: string }) => ({
      ...prevTheme,
      borderRadius: prevTheme.borderRadius === "0rem" ? "2rem" : "0rem",
    }));
  };

  const toggleGrid = () => {
    setTheme((prevTheme: { grid: string }) => ({
      ...prevTheme,
      grid: prevTheme.grid === "none" ? "grid" : "none",
    }));
  };

  const panel = useRef(null);
  const [panelValue, setPanelValue] = useState(false);

  useEffect(() => {
    if (panelValue) {
      gsap.to(panel.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(panel.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(panel.current, { visibility: "hidden" });
          return undefined;
        },
      });
    }
  }, [panelValue]);

  const handlePanelValue = () => {
    setPanelValue((prev) => !prev);
  };

  const [isRotated, setIsRotated] = useState(false);

  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "4rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "4rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-9rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <main ref={homeDiv}>
      <div className="grid-container" style={{ display: theme.grid }}>
        <div className="grid-lines">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>

      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <button
            aria-label="Home"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue();
            }}
          >
            Works
          </button>
          {/* <button
            aria-label="Services"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue();
            }}
          >
            Articles
          </button>
          <button
            aria-label="Services"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue();
            }}
          >
            About
          </button>
          <button
            aria-label="CONTACT"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue();
            }}
          >
            Contact
          </button> */}
        </div>
      </div>

      {/* <div className="logo">
        <h3>Justin Davenport</h3>
        <span>Developer &middot; Designer</span>
      </div> */}

      <nav>
        <span
          className="toggle-switch"
          onClick={() => {
            toggleColor();
          }}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="var(--toggle)"
              stroke-width="1.5"
            />
            <path
              d="M12 2V4"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12 20V22"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4 12L2 12"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M22 12L20 12"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19.7778 4.22266L17.5558 6.25424"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4.22217 4.22266L6.44418 6.25424"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6.44434 17.5557L4.22211 19.7779"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19.7778 19.7773L17.5558 17.5551"
              stroke="var(--toggle)"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span
          className="toggle-switch"
          onClick={() => {
            toggleGrid();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            width="18"
            fill="var(--toggle)"
            viewBox="0 0 448 512"
          >
            <path d="M32 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM320 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM416 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM32 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM416 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm192 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
          </svg>
        </span>
        <span
          className="toggle-switch"
          onClick={() => {
            toggleBorderRadius();
          }}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.87737 3H9.9H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H9.9C8.77164 4 7.95545 4.00039 7.31352 4.05284C6.67744 4.10481 6.25662 4.20539 5.91103 4.38148C5.25247 4.71703 4.71703 5.25247 4.38148 5.91103C4.20539 6.25662 4.10481 6.67744 4.05284 7.31352C4.00039 7.95545 4 8.77164 4 9.9V11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5V9.9V9.87737C3 8.77641 3 7.91948 3.05616 7.23209C3.11318 6.53416 3.23058 5.9671 3.49047 5.45704C3.9219 4.61031 4.61031 3.9219 5.45704 3.49047C5.9671 3.23058 6.53416 3.11318 7.23209 3.05616C7.91948 3 8.77641 3 9.87737 3Z"
              fill="var(--toggle)"
            />
          </svg>
        </span>
        <span
          className="toggle-switch"
          onClick={() => {
            handlePanelValue(), setIsRotated(!isRotated);
          }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isRotated ? "rotate(45deg)" : "",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
              fill="var(--toggle)"
            />
          </svg>
        </span>
      </nav>

      <div
        className="container-holder"
        style={{
          flexDirection: "column",
          minHeight: "85vh",
          justifyContent: "flex-end",
        }}
        ref={contentHolder}
      >
        <div className="container-splash" ref={home}>
          <h1>Justin Davenport is a web developer and product designer.</h1>
          <br />
          <br />
          <span>
            He crafts digital experiences with clean code and intuitive design.
          </span>
          <br />
          <span>
            View his work below. Or hire him{" "}
            <Link
              className="link"
              href="https://www.linkedin.com/in/justindavenport99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              here.
            </Link>
          </span>
        </div>
      </div>

      <Work
        worksDiv={worksDiv}
        setActiveSection={setActiveSection}
        theme={theme}
      />

      <div
        className="container-holder"
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <footer>
          <div className="footer">
            <div>
              <h3>Justin Davenport</h3>
              <span>Developer & Designer</span>
            </div>
            <div className="footerLinksHolder">
              <div style={{ height: "fit-content", marginRight: "4rem" }}>
                {/* <p>Let's chat</p> */}
                <Link
                  className="link"
                  href="mailto:justindavenport.space@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  @justindavenport.space
                </Link>
              </div>
              <div className="footerLinks">
                <Link
                  href="https://www.instagram.com/justindavenport.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    width="22"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="var(--toggle)"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://dribbble.com/justindavenport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    width="22"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="var(--toggle)"
                      d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/justindavenport99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="var(--toggle)"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Jdavenport3199"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    width="21"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="var(--toggle)"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
