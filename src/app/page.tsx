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

  const [navPanel, setNavPanel] = useState(false);

  const downloadResume = () => {
    window.open("/Justin Davenport — Resume.pdf", "_blank");
  };

  const [contentHolder1, inViewContentHolder1] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const hr1 = useRef<HTMLHRElement>(null);
  const [contentHolder2, inViewContentHolder2] = useInView({
    triggerOnce: true,
    threshold: 0.4,
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

  return (
    <main>
      <div className="grid-container" ref={homeDiv}>
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
      </div>

      <nav onClick={() => setNavPanel(!navPanel)}>
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
              border: "0",
              borderTop: "2px solid var(--text-color)",
              margin: "0",
            }}
          />
          <hr
            style={{
              width: "100%",
              border: "0",
              borderTop: "2px solid var(--text-color)",
              margin: "0",
            }}
          />
          <hr
            style={{
              width: "100%",
              border: "0",
              borderTop: "2px solid var(--text-color)",
              margin: "0",
            }}
          />
        </div>
      </nav>

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          flexDirection: "column",
          top: "0rem",
          right: "0rem",
          zIndex: "5",
          background: "#ffffff40",
          padding: navPanel ? "2rem" : "0",
          backdropFilter: "blur(20px) saturate(200%)",
          WebkitBackdropFilter: "blur(20px) saturate(200%)",
          height: navPanel ? "100%" : "0",
          width: navPanel ? "100%" : "0",
          overflow: "hidden",
          transition: "500ms ease-out",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <button
            style={{
              visibility: navPanel ? "visible" : "hidden",
              opacity: navPanel ? "" : "0",
              transition: "opacity 250ms ease-out, visibility 0ms linear 250ms",
            }}
            aria-label="Home"
            onClick={() => {
              scrollTo(homeDiv), setNavPanel(!navPanel);
            }}
          >
            Home
          </button>
          <button
            style={{
              visibility: navPanel ? "visible" : "hidden",
              opacity: navPanel ? "" : "0",
              transition: "opacity 250ms ease-out, visibility 0ms linear 250ms",
            }}
            aria-label="Works"
            onClick={() => {
              scrollTo(worksDiv), setNavPanel(!navPanel);
            }}
          >
            Works
          </button>
          <button
            style={{
              visibility: navPanel ? "visible" : "hidden",
              opacity: navPanel ? "" : "0",
              transition: "opacity 250ms ease-out, visibility 0ms linear 250ms",
            }}
            aria-label="Services"
            onClick={() => {
              scrollTo(servicesDiv), setNavPanel(!navPanel);
            }}
          >
            Services
          </button>
          <button
            style={{
              visibility: navPanel ? "visible" : "hidden",
              opacity: navPanel ? "" : "0",
              transition: "opacity 250ms ease-out, visibility 0ms linear 250ms",
            }}
            aria-label="Articles"
            onClick={() => {
              scrollTo(articlesDiv), setNavPanel(!navPanel);
            }}
          >
            Articles
          </button>
          <button
            style={{
              visibility: navPanel ? "visible" : "hidden",
              opacity: navPanel ? "" : "0",
              transition: "opacity 250ms ease-out, visibility 0ms linear 250ms",
            }}
            aria-label="Contact"
            onClick={() => {
              scrollTo(contactDiv), setNavPanel(!navPanel);
            }}
          >
            Contact
          </button>
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
          style={{ opacity: "0", marginBottom: "8rem" }}
          ref={home}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h1 className={inter_tight.className}>Justin Davenport.</h1>
            <h2>DEVELOPER & DESIGNER</h2>
            <hr ref={hr3} style={{ width: "0%" }} />
            <p
              style={{
                maxWidth: "295px",
                textAlign: "justify",
                marginBottom: "4rem",
              }}
            >
              Crafting digital experiences with clean code and intuitive design.
            </p>
          </div>
          <div className="footerLinks">
            <p
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: "0.2em",
              }}
            >
              SOCIALS
            </p>
            <Link
              href="https://www.instagram.com/justindavenport.space/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://dribbble.com/justindavenport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              Dribbble
            </Link>
            <Link
              href="https://www.linkedin.com/in/justindavenport99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Jdavenport3199"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            <button onClick={downloadResume} aria-label="Resume">
              Resume
            </button>
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
          }}
          ref={servicesDiv}
        >
          <div
            style={{
              width: "100%",
              paddingBlock: "4rem",
            }}
          >
            <h1 className={inter_tight.className}>Services.</h1>
            <h2>MY EXPERTISE</h2>
            <hr ref={hr1} style={{ width: "0%" }} />
            <p style={{ maxWidth: "295px", textAlign: "justify" }}>
              Reach out to explore how we can work together to achieve
              meaningful and impactful results for your project.
            </p>
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
              <span>UI/UX Design.</span>
              <p
                style={{
                  maxWidth: "610px",
                  textAlign: "justify",
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
              <span>Development.</span>
              <p
                style={{
                  maxWidth: "610px",
                  textAlign: "justify",
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
              <span>Branding.</span>
              <p
                style={{
                  maxWidth: "610px",
                  textAlign: "justify",
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
              <span>Graphic Design.</span>
              <p
                style={{
                  maxWidth: "610px",
                  textAlign: "justify",
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
              <span>Motion Design.</span>
              <p
                style={{
                  maxWidth: "610px",
                  textAlign: "justify",
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
          minHeight: "100vh",
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
            <h1 className={inter_tight.className}>Contact.</h1>
            <h2>REACH OUT</h2>
            <hr ref={hr2} style={{ width: "0%" }} />
            <p style={{ maxWidth: "295px", textAlign: "justify" }}>
              Let&apos;s connect to discuss your vision and how we can
              collaborate on bringing your next project to life.
            </p>
          </div>
          <div
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
            <button type="submit" className="button">
              Submit
            </button>
          </form>
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
                <span
                  style={{
                    fontSize: "clamp(24px, 4vw, 28px)",
                    lineHeight: "1.4",
                    fontWeight: 500,
                  }}
                >
                  Justin Davenport.
                </span>
                <span>Developer. Designer.</span>
              </div>
              <br />
              <p
                style={{
                  maxWidth: "295px",
                  textAlign: "justify",
                  marginTop: "0.4rem",
                }}
              >
                Crafting digital experiences with clean code and intuitive
                design.
              </p>
            </div>
            <div className="footerLinksHolder">
              <div className="footerLinks">
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
              </div>
              <div className="footerLinks">
                <p
                  style={{
                    fontSize: "clamp(10px, 2vw, 12px)",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    letterSpacing: "0.2em",
                  }}
                >
                  SOCIALS
                </p>
                <Link
                  href="https://www.instagram.com/justindavenport.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </Link>
                <Link
                  href="https://dribbble.com/justindavenport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                >
                  Dribbble
                </Link>
                <Link
                  href="https://www.linkedin.com/in/justindavenport99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Jdavenport3199"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </Link>
                <button onClick={downloadResume} aria-label="Resume">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
