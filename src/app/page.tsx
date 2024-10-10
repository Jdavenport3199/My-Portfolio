"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import TransitionLink from "./components/TransitionLink";
import Background from "./components/Background";

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
        duration: 0.75,
        y: "0%",
        ease: "power2.inOut",
      });
    }
  }, [inViewContentHolder]);

  // const [theme, setTheme] = useState({
  //   color: "dark",
  //   borderRadius: "0rem",
  //   grid: "none",
  // });

  // const toggleColor = () => {
  //   setTheme((prevTheme) => {
  //     const newTheme = {
  //       ...prevTheme,
  //       color: prevTheme.color === "dark" ? "light" : "dark",
  //     };
  //     document.documentElement.setAttribute("data-theme", newTheme.color);
  //     return newTheme;
  //   });
  // };

  // const toggleBorderRadius = () => {
  //   setTheme((prevTheme) => ({
  //     ...prevTheme,
  //     borderRadius: prevTheme.borderRadius === "0rem" ? "2rem" : "0rem",
  //   }));
  // };

  // const toggleGrid = () => {
  //   setTheme((prevTheme) => ({
  //     ...prevTheme,
  //     grid: prevTheme.grid === "none" ? "grid" : "none",
  //   }));
  // };

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

  // const [lastScroll, setLastScroll] = useState(0);
  // const nav = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;
  //     const threshold = 50;
  //     if (currentScroll <= threshold && nav.current) {
  //       if (nav.current.style.top !== "0rem") {
  //         nav.current.style.top = "4rem";
  //       }
  //     } else if (currentScroll < lastScroll && nav.current) {
  //       nav.current.style.top = "4rem";
  //     } else if (currentScroll > lastScroll && nav.current) {
  //       nav.current.style.top = "-9rem";
  //     }
  //     setLastScroll(currentScroll);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScroll]);

  return (
    <main ref={homeDiv}>
      {/* <div className="grid-container" style={{ display: theme.grid }}>
        <div className="grid-lines">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div> */}

      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <button
            aria-label="Home"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue(), setIsRotated(!isRotated);
            }}
          >
            Works
          </button>
          <TransitionLink
            href={"/articles"}
            label={"Articles"}
            setPanelValue={setPanelValue}
          />
          <TransitionLink
            href={"/about"}
            label={"About"}
            setPanelValue={setPanelValue}
          />
          <Link
            href="https://www.linkedin.com/in/justindavenport99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            Contact
          </Link>
        </div>
      </div>

      <nav>
        {/* <span
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
        </span> */}
        {/* <span
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
        </span> */}
        {/* <span
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
        </span> */}
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

      <Background />
      <div
        className="container-holder"
        style={{
          flexDirection: "column",
          minHeight: "85vh",
          justifyContent: "flex-end",
        }}
        ref={contentHolder}
      >
        <div
          className="container-splash"
          ref={home}
          style={{ transform: "translateY(10%)" }}
        >
          {/* <div
            onMouseEnter={() => (lottieRef.current as any).play()}
            onMouseLeave={() => (lottieRef.current as any).stop()}
            style={{ width: 300, height: 300 }}
          >
            <Lottie animationData={Test} loop={true} />
          </div> */}
          <h1>Justin Davenport is a web developer and product designer.</h1>
          <br />
          <br />
          <span>
            He crafts digital experiences with clean code and intuitive design.
          </span>
          <br />
          <span style={{ display: "flex" }}>
            View his work below. Or hire him&nbsp;
            <Link
              className="link"
              href="https://www.linkedin.com/in/justindavenport99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ transform: "translateY(0px)" }}
            >
              here.&nbsp;
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="14"
                viewBox="0 0 448 512"
                fill="var(--text-color-light)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </span>
        </div>
      </div>

      <Work worksDiv={worksDiv} setActiveSection={setActiveSection} />
    </main>
  );
}
