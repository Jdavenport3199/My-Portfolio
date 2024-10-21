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
  const status = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLImageElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        ease: "power2.inOut",
      });
      tl.to(status.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
      tl.to(info.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
    }
  }, [inViewContentHolder]);

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
      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <button
            aria-label="Home"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue(), setIsRotated(!isRotated);
            }}
          >
            Home.
          </button>
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

      <Background />
      <div
        className="container-holder"
        style={{
          flexDirection: "column",
          minHeight: "100dvh",
          justifyContent: "flex-end",
        }}
        ref={contentHolder}
      >
        <div className="container-splash" ref={home}>
          <h1>
            Justin Davenport is a web developer and&nbsp;product designer.
          </h1>
          <div
            className="topics"
            style={{ marginTop: "40vh", opacity: "0" }}
            ref={status}
          >
            <div>
              <p>Status</p>
              <h2>Available</h2>
            </div>
          </div>
          <div style={{ opacity: "0" }} ref={info}>
            <p style={{ textWrap: "balance" }}>
              He crafts digital experiences with clean code and intuitive
              design.
            </p>
            <p style={{ display: "flex" }}>
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
            </p>
          </div>
        </div>
      </div>

      <Work worksDiv={worksDiv} />
    </main>
  );
}
