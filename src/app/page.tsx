"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Articles from "./components/Articles";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const home = useRef<HTMLDivElement>(null);
  const homeDiv = useRef<HTMLDivElement>(null);
  const servicesDiv = useRef<HTMLDivElement>(null);
  const worksDiv = useRef<HTMLDivElement>(null);
  const articlesDiv = useRef<HTMLDivElement>(null);
  const contactDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState("Home");

  const [contentHolder1, inViewContentHolder1] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const hr1 = useRef<HTMLHRElement>(null);
  const [contentHolder2, inViewContentHolder2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const hr2 = useRef<HTMLHRElement>(null);
  const [contentHolder3, inViewContentHolder3] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const hr3 = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (inViewContentHolder1) {
      setActiveSection("Services");
      const tl = gsap.timeline();
      tl.to(servicesDiv.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(hr1.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder2) {
      setActiveSection("Contact");
      const tl = gsap.timeline();
      tl.to(contactDiv.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(hr2.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder3) {
      setActiveSection("Home");
      const tl = gsap.timeline();
      tl.to(home.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(hr3.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [inViewContentHolder1, inViewContentHolder2, inViewContentHolder3]);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const [toggle, setToggle] = useState(false);
  const [gridToggle, setGridToggle] = useState(false);

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

  return (
    <main ref={homeDiv}>
      <div
        className="grid-container"
        style={{ display: gridToggle ? "grid" : "none" }}
      >
        <div className="grid-lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          bottom: "0",
          background: "var(--glass-overlay)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          alignItems: "center",
          visibility: "hidden",
          zIndex: "5",
        }}
        ref={panel}
      >
        <div className="panel">
          <button
            aria-label="Home"
            onClick={() => {
              scrollTo(homeDiv), handlePanelValue();
            }}
          >
            Home
          </button>
          <button
            aria-label="Works"
            onClick={() => {
              scrollTo(worksDiv), handlePanelValue();
            }}
          >
            Works
          </button>
          <button
            aria-label="Services"
            onClick={() => {
              scrollTo(servicesDiv), handlePanelValue();
            }}
          >
            Services
          </button>
          <button
            aria-label="Articles"
            onClick={() => {
              scrollTo(articlesDiv), handlePanelValue();
            }}
          >
            Articles
          </button>
          <button
            aria-label="CONTACT"
            onClick={() => {
              scrollTo(contactDiv), handlePanelValue();
            }}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="nav-slider">
        <button
          aria-label="Home"
          onClick={() => scrollTo(homeDiv)}
          style={{
            color:
              activeSection === "Home"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Home" ? "1" : "",
            fontSize: activeSection === "Home" ? "clamp(24px, 4vw, 1.5vw)" : "",
            fontWeight: activeSection === "Home" ? 400 : "",
          }}
        >
          Home
        </button>
        <button
          aria-label="Works"
          onClick={() => scrollTo(worksDiv)}
          style={{
            color:
              activeSection === "Works"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Works" ? "1" : "",
            fontSize:
              activeSection === "Works" ? "clamp(24px, 4vw, 1.5vw)" : "",
            fontWeight: activeSection === "Works" ? 400 : "",
          }}
        >
          Works
        </button>
        <button
          aria-label="Services"
          onClick={() => scrollTo(servicesDiv)}
          style={{
            color:
              activeSection === "Services"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Services" ? "1" : "",
            fontSize:
              activeSection === "Services" ? "clamp(24px, 4vw, 1.5vw)" : "",
            fontWeight: activeSection === "Services" ? 400 : "",
          }}
        >
          Services
        </button>
        <button
          aria-label="Articles"
          onClick={() => scrollTo(articlesDiv)}
          style={{
            color:
              activeSection === "Articles"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Articles" ? "1" : "",
            fontSize:
              activeSection === "Articles" ? "clamp(24px, 4vw, 1.5vw)" : "",
            fontWeight: activeSection === "Articles" ? 400 : "",
          }}
        >
          Articles
        </button>
        <button
          aria-label="Contact"
          onClick={() => scrollTo(contactDiv)}
          style={{
            color:
              activeSection === "Contact"
                ? "var(--text-color)"
                : "var(--text-color-light)",
            opacity: activeSection === "Contact" ? "1" : "",
            fontSize:
              activeSection === "Contact" ? "clamp(24px, 4vw, 1.5vw)" : "",
            fontWeight: activeSection === "Contact" ? 400 : "",
          }}
        >
          Contact
        </button>
      </div>

      <nav onClick={() => handlePanelValue()}>
        <span className="toggle-switch">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
              fill="var(--toggle)"
            />
          </svg>
        </span>
      </nav>

      <div className="grid-toggle">
        <div
          className="links"
          onClick={() => {
            setGridToggle(!gridToggle);
          }}
        >
          <span className="toggle-switch">
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
        </div>
      </div>

      <div className="toggle">
        <div
          className="links"
          onClick={() => {
            setToggle(!toggle), toggleTheme();
          }}
        >
          <span className="toggle-switch">
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
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "flex-end",
        }}
        ref={contentHolder3}
      >
        <div
          className="container-splash"
          style={{
            opacity: "0",
            marginBottom: "12rem",
          }}
          ref={home}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h1>Justin Davenport</h1>
            <h3>DEVELOPER & DESIGNER</h3>
          </div>
        </div>
      </div>

      <Work worksDiv={worksDiv} setActiveSection={setActiveSection} />

      <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "8rem",
        }}
        ref={contentHolder1}
      >
        <div
          className="container-splash"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: "0",
          }}
          ref={servicesDiv}
        >
          <div
            style={{
              width: "100%",
              paddingBlock: "4rem",
            }}
          >
            <h2>Services</h2>
            <h3>MY EXPERTISE</h3>
            <hr ref={hr1} style={{ width: "0%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <p style={{ maxWidth: "295px" }}>
                Reach out to explore how we can work together to achieve
                meaningful and impactful results for your project.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.4rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <span className="circle"></span>
              </div>
            </div>
          </div>
          <div className="container-services">
            <div className="services" style={{ paddingTop: "0" }}>
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                }}
              >
                {"["}001{"]"}
              </sup>
              <br />
              <span>UI/UX Design</span>
              <p
                style={{
                  maxWidth: "610px",
                }}
              >
                I design user-friendly interfaces that enhance usability and
                deliver a seamless, enjoyable experience, focusing on intuitive
                design and user needs.
              </p>
            </div>
            <div className="services">
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                }}
              >
                {"["}002{"]"}
              </sup>
              <br />
              <span>Development</span>
              <p
                style={{
                  maxWidth: "610px",
                }}
              >
                I turn ideas into dynamic web and mobile app experiences,
                focusing on responsive design and functionality that engage
                users and elevate your brand.
              </p>
            </div>
            <div className="services">
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                }}
              >
                {"["}003{"]"}
              </sup>
              <br />
              <span>Branding</span>
              <p
                style={{
                  maxWidth: "610px",
                }}
              >
                I develop unique brand identities that connect with your target
                audience, utilizing strategic design elements to enhance brand
                recognition and loyalty.
              </p>
            </div>
            <div className="services">
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                }}
              >
                {"["}004{"]"}
              </sup>
              <br />
              <span>Graphic Design</span>
              <p
                style={{
                  maxWidth: "610px",
                }}
              >
                I create visually stunning graphics that effectively communicate
                your message, blending creativity with technical skill to
                produce eye-catching designs.
              </p>
            </div>
            <div className="services">
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                }}
              >
                {"["}005{"]"}
              </sup>
              <br />
              <span>Motion Design</span>
              <p
                style={{
                  maxWidth: "610px",
                }}
              >
                I produce dynamic motion graphics that captivate and engage
                viewers, utilizing animation to tell compelling stories and
                enhance visual communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Articles articlesDiv={articlesDiv} setActiveSection={setActiveSection} />

      <div
        className="container-holder"
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
        ref={contentHolder2}
      >
        <div
          className="container-splash"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: "0",
          }}
          ref={contactDiv}
        >
          <div
            style={{
              width: "100%",
              paddingBlock: "4rem",
            }}
          >
            <h2>Contact</h2>
            <h3>REACH OUT</h3>
            <hr ref={hr2} style={{ width: "0%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <p style={{ maxWidth: "295px" }}>
                Let&apos;s connect to discuss your vision and how we can
                collaborate on bringing your next project to life.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.4rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>
                <span className="circle"></span>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/justindavenport99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="24"
                viewBox="0 0 448 512"
                fill="var(--button)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Justin Davenport</span>
                <h3 style={{ fontSize: "clamp(16px, 4vw, 18px)" }}>
                  DEVELOPER & DESIGNER
                </h3>
              </div>
              <br />
              <p
                style={{
                  maxWidth: "295px",
                  marginTop: "0.4rem",
                }}
              >
                Crafting digital experiences with clean code and intuitive
                design.
              </p>
            </div>
            <div className="footerLinksHolder">
              <div className="footerLinks" style={{ width: "fit-content" }}>
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
                      fill="var(--text-color)"
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
                      fill="var(--text-color)"
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
                      fill="var(--text-color)"
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
                      fill="var(--text-color)"
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
