"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import TransitionLink from "../components/TransitionLink";
import Background from "../components/Background";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
  const links = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewContentHolder) {
      const tl = gsap.timeline();
      tl.to(home.current, {
        opacity: 1,
        duration: 0.75,
        y: "0%",
        ease: "power2.inOut",
      });
      tl.to(links.current, {
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
  }, [inViewContentHolder]);

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
    <main>
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
          <button
            aria-label="About"
            onClick={() => {
              handlePanelValue();
              setIsRotated(!isRotated);
            }}
          >
            About
          </button>
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

      <Background />
      <div className="about-holder" ref={contentHolder}>
        <div
          className="container-splash"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "4rem 2rem",
            opacity: "1",
          }}
        >
          <div>
            <div
              style={{
                maxWidth: "610px",
                opacity: "0",
                transform: "translateY(10%)",
              }}
              ref={home}
            >
              <h1>Open to exploring new opportunities.</h1>
              <br />
              <span>
                I&apos;m Justin, a Web Developer and Product Designer
                specializing in creating dynamic web experiences with Next.js.
                My passion lies in enhancing interactivity and crafting
                captivating visuals, utilizing frameworks like GSAP and Three.js
                to elevate user engagement. I seamlessly integrate design and
                development in my workflow, leveraging my expertise in Figma and
                the Adobe Creative Suite.
              </span>
            </div>
            <br />
            <br />
            <br />
            <div
              style={{
                maxWidth: "610px",
                opacity: "0",
                transform: "translateY(10%)",
              }}
              ref={links}
            >
              <Link
                className="link"
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                justindavenport.space@gmail.com&nbsp;
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="14"
                  viewBox="0 0 448 512"
                  fill="var(--text-color)"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                className="link"
                href="https://www.linkedin.com/in/justindavenport99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn&nbsp;
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="14"
                  viewBox="0 0 448 512"
                  fill="var(--text-color)"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                className="link"
                href="https://github.com/Jdavenport3199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub&nbsp;
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="14"
                  viewBox="0 0 448 512"
                  fill="var(--text-color)"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                className="link"
                href="https://www.instagram.com/justindavenport.space/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram&nbsp;
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="14"
                  viewBox="0 0 448 512"
                  fill="var(--text-color)"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                className="link"
                href="https://dribbble.com/justindavenport"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                Dribbble&nbsp;
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="14"
                  viewBox="0 0 448 512"
                  fill="var(--text-color)"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <br />
              <span
                style={{
                  width: "100%",
                  justifyContent: "right",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  lineHeight: "1",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 0 512 512"
                  fill="var(--text-color)"
                >
                  <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
                Charlotte, NC
              </span>
            </div>
          </div>
          <img
            src="/me.jpg"
            width={600}
            style={{
              borderRadius: theme.borderRadius,
              objectPosition: "center center",
              objectFit: "cover",
              maxWidth: "600px",
              maxHeight: "600px",
              opacity: "0",
            }}
            ref={image}
          />
        </div>
      </div>
    </main>
  );
}
