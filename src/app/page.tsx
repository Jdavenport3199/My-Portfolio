"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Articles from "./components/Articles";
import { inter, inter_tight } from "./ui/fonts";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [emailForm, setEmailForm] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        topic: topic,
        message: message,
      }),
    });
    setEmailForm(false);
  };

  // const downloadResume = () => {
  //   window.open("/Justin Davenport — Resume.pdf", "_blank");
  // };

  const [contentHolder1, inViewContentHolder1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const hr1 = useRef<HTMLHRElement>(null);
  const [contentHolder2, inViewContentHolder2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const hr2 = useRef<HTMLHRElement>(null);
  const [contentHolder3, inViewContentHolder3] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const hr3 = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (inViewContentHolder1) {
      const tl = gsap.timeline();
      tl.to(servicesDiv.current, {
        opacity: 1,
        duration: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      tl.to(hr1.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder2) {
      const tl = gsap.timeline();
      tl.to(contactDiv.current, {
        opacity: 1,
        duration: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      tl.to(hr2.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    if (inViewContentHolder3) {
      const tl = gsap.timeline();
      tl.to(home.current, {
        opacity: 1,
        duration: 1,
        // y: "0%",
        delay: 1,
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

  const panel = useRef(null);
  const [panelValue, setPanelValue] = useState(false);

  useEffect(() => {
    if (!panelValue) {
      gsap.to(panel.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.set(panel.current, {
        visibility: "visible",
        y: "-100%",
        height: "100vh",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(panel.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [panelValue]);

  const handlePanelValue = () => {
    setPanelValue(!panelValue);
  };

  return (
    <main ref={homeDiv}>
      {/* <div className="grid-container">
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
        </div>
      </div> */}

      <nav onClick={() => handlePanelValue()}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "24px",
            gap: "0.4rem",
          }}
        >
          <hr
            style={{
              width: "100%",
              margin: "0",
            }}
          />
          <hr
            style={{
              width: "100%",
              margin: "0",
            }}
          />
          <hr
            style={{
              width: "100%",
              margin: "0",
            }}
          />
        </div>
      </nav>

      <div
        className="container-holder"
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          bottom: "0",
          background: "var(--glass-overlay)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          alignItems: "center",
          visibility: "hidden",
          zIndex: "5",
        }}
        ref={panel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4rem",
          }}
        >
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
            aria-label="Contact"
            onClick={() => {
              scrollTo(contactDiv), handlePanelValue();
            }}
          >
            Contact
          </button>
        </div>
        <div className="toggle">
          <div
            className="links"
            onClick={() => {
              setToggle(!toggle), toggleTheme();
            }}
          >
            <div
              className="slider"
              style={{
                transform: toggle ? "translateX(25%)" : "translateX(-25%)",
              }}
            ></div>
            <span className="toggle-switch"></span>
            <span className="toggle-switch"></span>
          </div>
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
            marginBottom: "8rem",
            // transform: "translateY(10%)",
          }}
          ref={home}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h1 className={inter_tight.className}>Justin Davenport</h1>
            <h2>DEVELOPER & DESIGNER</h2>
            {/* <hr ref={hr3} style={{ width: "0%" }} />
            <p
              style={{
                maxWidth: "295px",
                marginBottom: "4rem",
              }}
            >
              Crafting digital experiences with clean code and intuitive design.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
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
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <div className="footerLinks" style={{ width: "fit-content" }}>
              <Link
                href="https://www.instagram.com/justindavenport.space/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
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
                  height="24"
                  width="24"
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
                  height="26"
                  width="22"
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
                  height="24"
                  width="23"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="var(--text-color)"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <Work worksDiv={worksDiv} />

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
            transform: "translateY(10%)",
          }}
          ref={servicesDiv}
        >
          <div
            style={{
              width: "100%",
              paddingBlock: "4rem",
            }}
          >
            <h1 className={inter_tight.className}>Services</h1>
            <h2>MY EXPERTISE</h2>
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
                I craft visually compelling designs that resonate with your
                audience, blending creativity and strategy to strengthen your
                brand’s visual identity.
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
                I bring your vision to life using the latest technology and
                design trends, ensuring scalable, responsive, and
                high-performing digital solutions.
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
                I bring your vision to life using the latest technology and
                design trends, ensuring scalable, responsive, and
                high-performing digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Articles articlesDiv={articlesDiv} />

      <div
        className="container-holder"
        style={{
          // minHeight: "100vh",
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
            transform: "translateY(10%)",
          }}
          ref={contactDiv}
        >
          <div
            style={{
              width: "100%",
              paddingBlock: "4rem",
            }}
          >
            <h1 className={inter_tight.className}>Contact</h1>
            <h2>REACH OUT</h2>
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
          {/* <div
            style={{
              display: emailForm ? "none" : "flex",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <p style={{ maxWidth: "295px", textAlign: "justify" }}>
              Your message has been received.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: emailForm ? "flex" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label>NAME</label>
                <input
                  className={inter.className}
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label>EMAIL</label>
                <input
                  className={inter.className}
                  type="email"
                  placeholder="mail@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label>SUBJECT</label>
                <input
                  className={inter.className}
                  type="text"
                  placeholder="Design"
                  required
                  onChange={(e) => setTopic(e.target.value)}
                  value={topic}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label>COMPANY</label>
                <input
                  className={inter.className}
                  type="text"
                  placeholder="Global Enterprises"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </div>
            </div>

            <label>MESSAGE</label>
            <textarea
              className={inter.className}
              placeholder="Hello, ...."
              required
              style={{ height: "8rem", resize: "none" }}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form> */}
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
                fill="var(--background-color)"
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
                <h2>DEVELOPER & DESIGNER</h2>
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
              {/* <div className="footerLinks">
                <p
                  style={{
                    fontSize: "clamp(10px, 2vw, 12px)",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    letterSpacing: "0.2em",
                  }}
                >
                  LINKS
                </p>
                <button aria-label="Home" onClick={() => scrollTo(homeDiv)}>
                  Home
                </button>
                <button aria-label="Works" onClick={() => scrollTo(worksDiv)}>
                  Works
                </button>
                <button
                  aria-label="Services"
                  onClick={() => scrollTo(servicesDiv)}
                >
                  Services
                </button>
                <button
                  aria-label="Articles"
                  onClick={() => scrollTo(articlesDiv)}
                >
                  Articles
                </button>
                <button
                  aria-label="Contact"
                  onClick={() => scrollTo(contactDiv)}
                >
                  Contact
                </button>
              </div> */}
              <div className="footerLinks" style={{ width: "fit-content" }}>
                {/* <p
                style={{
                  fontSize: "clamp(10px, 2vw, 12px)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  letterSpacing: "0.2em",
                }}
              >
                SOCIALS
              </p> */}
                <Link
                  href="https://www.instagram.com/justindavenport.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
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
                    height="24"
                    width="24"
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
                    height="26"
                    width="22"
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
                    height="24"
                    width="23"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="var(--text-color)"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </Link>
                {/* <button onClick={downloadResume} aria-label="Resume">
                Resume
              </button> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
