"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import TransitionLink from "../../components/TransitionLink";
import Background from "../../components/Background";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const introDiv = useRef<HTMLDivElement>(null);
  const overviewDiv = useRef<HTMLDivElement>(null);
  const prototypeDiv = useRef<HTMLDivElement>(null);

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
  }, [inViewContentHolder, inViewContentHolder2, inViewContentHolder3]);

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
            label={"Home."}
            setPanelValue={setPanelValue}
          />
          <TransitionLink
            href={"/works"}
            label={"Works."}
            setPanelValue={setPanelValue}
          />
          <TransitionLink
            href={"/about"}
            label={"About."}
            setPanelValue={setPanelValue}
          />
          <Link
            href="https://www.linkedin.com/in/justindavenport99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            Contact.
          </Link>
        </div>
      </div>

      <nav>
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
            fontSize: activeSection === "Intro" ? "22.65px" : "",
          }}
        >
          Intro
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
            fontSize: activeSection === "Overview" ? "22.65px" : "",
          }}
        >
          Overview
        </button>
        <button
          aria-label="Prototype"
          onClick={() => scrollTo(prototypeDiv)}
          style={{
            color:
              activeSection === "Prototype"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Prototype" ? "1" : "",
            fontSize: activeSection === "Prototype" ? "22.65px" : "",
          }}
        >
          Prototype
        </button>
      </div>

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
          <h1>IMDb.</h1>
          <div className="topics">
            <div>
              <p>Purpose</p>
              <h2>UI / UX</h2>
            </div>
            <div>
              <p>Tools</p>
              <h2>Figma</h2>
            </div>
            <div>
              <p>Type</p>
              <h2>Project</h2>
            </div>
          </div>
          <p>
            The world&apos;s most popular source for movie, TV and celebrity
            content.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p>View the case study below.&nbsp;</p>
            <p style={{ display: "flex" }}>
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
            </p>
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
              <p>
                The IMDb redesign focuses on creating an intuitive and visually
                captivating platform for discovering movies, TV shows, and
                celebrity content. The goal was to streamline the user
                experience, making it easier to navigate, search, and interact
                with media information. The modern interface leverages
                glassmorphism to offer a clean, immersive look while ensuring
                content is front and center, enhancing both aesthetics and
                usability.
              </p>
            </div>
            <img
              className="side-img"
              ref={image2}
              src="/designs/imdb-mockup.png"
            />
          </div>
        </div>
      </div>

      <div ref={contentHolder3}>
        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            minHeight: "40vh",
            justifyContent: "flex-end",
            opacity: "0",
          }}
          ref={prototypeDiv}
        >
          <div className="container-splash" style={{ opacity: "1" }}>
            <h2>Prototype.</h2>
            <br />
            <p>
              The final prototype showcases a sleek, modern interface with
              translucent panels that create a striking contrast against a
              dynamic background, adapting to user preferences or time of day.
              Each media entry is presented in a frosted glass card, ensuring
              visual separation while maintaining a cohesive look. Features such
              as one-tap access, real-time updates, and quick navigation options
              enhance user interactions, seamlessly combining functionality with
              a refined glassmorphism design that prioritizes clarity and
              readability.
            </p>
          </div>
        </div>

        <div className="container-holder" style={{ marginBottom: "4rem" }}>
          <div style={{ width: "90%" }}>
            <img
              ref={image3}
              src="/designs/imdb2.png"
              style={{
                opacity: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
