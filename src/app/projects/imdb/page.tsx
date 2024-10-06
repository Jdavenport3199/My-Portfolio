"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import TransitionLink from "../../components/TransitionLink";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const introDiv = useRef<HTMLDivElement>(null);
  const overviewDiv = useRef<HTMLDivElement>(null);
  const processDiv = useRef<HTMLDivElement>(null);
  const prototypeDiv = useRef<HTMLDivElement>(null);
  const reflectionDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState("Intro");

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [contentHolder2, inViewContentHolder2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [contentHolder3, inViewContentHolder3] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [contentHolder4, inViewContentHolder4] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [contentHolder5, inViewContentHolder5] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewContentHolder) {
      setActiveSection("Intro");
      const tl = gsap.timeline();
      tl.to(home.current, {
        opacity: 1,
        duration: 0.75,
        y: "0%",
        ease: "power2.inOut",
      });
      tl.to(image.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder2) {
      setActiveSection("Overview");
      const tl = gsap.timeline();
      tl.to(overviewDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
      tl.to(image2.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder3) {
      setActiveSection("Process");
      const tl = gsap.timeline();
      tl.to(processDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder4) {
      setActiveSection("Prototype");
      const tl = gsap.timeline();
      tl.to(prototypeDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
      tl.to(image3.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder5) {
      setActiveSection("Reflection");
      const tl = gsap.timeline();
      tl.to(reflectionDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
  }, [
    inViewContentHolder,
    inViewContentHolder2,
    inViewContentHolder3,
    inViewContentHolder4,
    inViewContentHolder5,
  ]);

  const [theme, setTheme] = useState({
    color: "dark",
    borderRadius: "0rem",
    grid: "none",
  });

  const toggleColor = () => {
    setTheme((prevTheme) => {
      const newTheme = {
        ...prevTheme,
        color: prevTheme.color === "dark" ? "light" : "dark",
      };
      document.documentElement.setAttribute("data-theme", newTheme.color);
      return newTheme;
    });
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

  return (
    <main ref={introDiv}>
      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <TransitionLink
            href={"/"}
            label={"Works"}
            setPanelValue={setPanelValue}
          />
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

      <div className="nav-slider">
        <button
          aria-label="Intro"
          onClick={() => scrollTo(introDiv)}
          style={{
            color:
              activeSection === "Intro"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Intro" ? "1" : "",
            fontSize:
              activeSection === "Intro" ? "clamp(24px, 4vw, 1.5vw)" : "",
          }}
        >
          Intro.
        </button>
        <button
          aria-label="Overview"
          onClick={() => scrollTo(overviewDiv)}
          style={{
            color:
              activeSection === "Overview"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Overview" ? "1" : "",
            fontSize:
              activeSection === "Overview" ? "clamp(24px, 4vw, 1.5vw)" : "",
          }}
        >
          Overview.
        </button>
        {/* <button
          aria-label="Process"
          onClick={() => scrollTo(processDiv)}
          style={{
            color:
              activeSection === "Process"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Process" ? "1" : "",
            fontSize:
              activeSection === "Process" ? "clamp(24px, 4vw, 1.5vw)" : "",
          }}
        >
          Process
        </button> */}
        <button
          aria-label="Prototype"
          onClick={() => scrollTo(prototypeDiv)}
          style={{
            color:
              activeSection === "Prototype"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Prototype" ? "1" : "",
            fontSize:
              activeSection === "Prototype" ? "clamp(24px, 4vw, 1.5vw)" : "",
          }}
        >
          Prototype.
        </button>
        {/* <button
          aria-label="Reflection"
          onClick={() => scrollTo(reflectionDiv)}
          style={{
            color:
              activeSection === "Reflection"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Reflection" ? "1" : "",
            fontSize:
              activeSection === "Reflection" ? "clamp(24px, 4vw, 1.5vw)" : "",
          }}
        >
          Reflection
        </button> */}
      </div>

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
          <h1>IMDb.</h1>
          <div
            style={{
              width: "100%",
              justifyContent: "right",
              display: "flex",
              gap: "0.4rem",
              marginBlock: "0.4rem",
            }}
          >
            <p
              className="detail"
              style={{ color: "var(--toggle)", background: "var(--glass)" }}
            >
              UI / UX
            </p>
            <p
              className="detail"
              style={{ color: "var(--toggle)", background: "var(--glass)" }}
            >
              Figma
            </p>
            <p
              className="detail"
              style={{ color: "var(--toggle)", background: "var(--glass)" }}
            >
              Project
            </p>
          </div>
          <span>
            The world&apos;s most popular source for movie, TV and celebrity
            content.
          </span>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span>View the case study below.&nbsp;</span>
            <span style={{ display: "flex" }}>
              Or visit the project&nbsp;
              <Link
                className="link"
                href="https://dribbble.com/shots/24906297-Smart-Home-App"
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
      </div>

      <div className="container-holder" style={{ marginBottom: "4rem" }}>
        <div style={{ width: "90%" }}>
          <img
            src="/designs/imdb.png"
            ref={image}
            style={{
              opacity: "0",
              gridColumn: "span 4",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div ref={contentHolder2}>
        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "flex-end",
            opacity: "0",
          }}
          ref={overviewDiv}
        >
          <div
            className="container-splash"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "4rem 2rem",
              opacity: "1",
              marginBottom: "4rem",
            }}
          >
            <div style={{ maxWidth: "610px" }}>
              <h2>Overview.</h2>
              <br />
              <span>
                The IMDb redesign focuses on creating an intuitive and visually
                captivating platform for discovering movies, TV shows, and
                celebrity content. The goal was to streamline the user
                experience, making it easier to navigate, search, and interact
                with media information. The modern interface leverages
                glassmorphism to offer a clean, immersive look while ensuring
                content is front and center, enhancing both aesthetics and
                usability.
              </span>
            </div>
            <img
              className="side-img"
              ref={image2}
              src="/designs/imdb-mockup.png"
            />
          </div>
        </div>
      </div>

      {/* <div ref={contentHolder3}>
        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "flex-end",
            opacity: "0",
          }}
          ref={processDiv}
        >
          <div className="container-splash" style={{ opacity: "1" }}>
            <div style={{ maxWidth: "610px" }}>
              <h2>Process.</h2>
              <br />
              <span>
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div ref={contentHolder4}>
        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            minHeight: "85vh",
            justifyContent: "flex-end",
            opacity: "0",
          }}
          ref={prototypeDiv}
        >
          <div className="container-splash" style={{ opacity: "1" }}>
            <h2>Prototype.</h2>
            <br />
            <span>
              The final prototype showcases a sleek, modern interface with
              translucent panels that create a striking contrast against a
              dynamic background, adapting to user preferences or time of day.
              Each media entry is presented in a frosted glass card, ensuring
              visual separation while maintaining a cohesive look. Features such
              as one-tap access, real-time updates, and quick navigation options
              enhance user interactions, seamlessly combining functionality with
              a refined glassmorphism design that prioritizes clarity and
              readability.
            </span>
          </div>
        </div>

        <div className="container-holder" style={{ marginBottom: "4rem" }}>
          <div style={{ width: "90%" }}>
            <img
              ref={image3}
              src="/designs/imdb2.png"
              style={{
                opacity: "0",
                gridColumn: "span 4",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* <div ref={contentHolder5}>
        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "flex-end",
            opacity: "0",
          }}
          ref={reflectionDiv}
        >
          <div className="container-splash" style={{ opacity: "1" }}>
            <div style={{ maxWidth: "610px" }}>
              <h2>Reflection.</h2>
              <br />
              <span>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
