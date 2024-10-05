"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import TransitionLink from "../../components/TransitionLink";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
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
      <div className="grid-container" style={{ display: theme.grid }}>
        <div className="grid-lines">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>

      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <TransitionLink
            href={"/"}
            label={"Works"}
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
          <div
            style={{
              width: "100%",
              justifyContent: "right",
              display: "flex",
              gap: "0.4rem",
              marginTop: "0.8rem",
            }}
          >
            <p className="detail" style={{ color: "var(--toggle)", background: "var(--glass)"}}>UI / UX</p>
            <p className="detail" style={{ color: "var(--toggle)", background: "var(--glass)"}}>Figma</p>
            <p className="detail" style={{ color: "var(--toggle)", background: "var(--glass)"}}>Project</p>
          </div>
          <h1>Smart Home.</h1>
          <br />
          <span>
            An all-in-one application to control your home’s smart devices.
            <br />
            View the case study below.
          </span>
        </div>
      </div>
      <img src="/designs/smarthome.png" ref={image} style={{opacity: "0"}}/>
      <img src="/designs/smarthome2.png" style={{height: "100vh", width: "75%", position: "absolute", left: 0, objectFit: "cover"}}/>
      <img src="/designs/smarthome-mockup.png" style={{height: "100vh", width: "25%", position: "absolute", right: 0, objectFit: "cover"}}/>
    </main>
  );
}
