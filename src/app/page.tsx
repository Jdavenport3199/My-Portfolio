"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import { object_sans, switzer } from "./ui/fonts";
import Link from "next/link";

export default function Home() {
  const [translateX, setTranslateX] = useState("-100%");
  const [lastScroll, setLastScroll] = useState(0);
  const [loading, setLoading] = useState(true);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "2rem";
          nav.current.style.height = "3rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "2rem";
        nav.current.style.height = "3rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-3.25rem";
        nav.current.style.height = "3rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    scrollToTop();
  }, [translateX]);

  const servicesDiv = useRef<HTMLDivElement>(null);
  const contactDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
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

  return (
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <nav ref={nav}>
        <div className="nav">
          <div className="nav-nav">
            <div className="nav-links">
              <div
                className="nav-slider"
                style={{
                  transform: `translateX(${translateX})`,
                }}
              ></div>
              <button
                style={{ color: translateX === "-100%" ? "white" : "" }}
                onClick={() => setTranslateX("-100%")}
                aria-label="Work"
              >
                About
              </button>
              <button
                style={{ color: translateX === "0%" ? "white" : "" }}
                onClick={() => setTranslateX("0%")}
                aria-label="Work"
              >
                Work
              </button>
              <button
                style={{ color: translateX === "100%" ? "white" : "" }}
                onClick={() => setTranslateX("100%")}
                aria-label="Blog"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="rgb(36, 36, 36, 0.6)" size={10} />
        </div>
      ) : (
        <>
          <div
            className="container-holder"
            style={{
              flexDirection: "column",
              minHeight: "100vh",
              display: translateX === "-100%" ? "flex" : "none",
            }}
          >
            <div className="container-splash" id="fade">
              <h1
                className={object_sans.className}
                style={{
                  background:
                    "linear-gradient(to right, rgb(36, 36, 36), rgb(184, 184, 184))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Crafting digital experiences
                <br />
                with clean code and intuitive design.
              </h1>
              <div style={{ marginTop: "0.8rem" }}>
                <span
                  style={{
                    color: "rgb(36, 36, 36, 0.6)",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: 1.4,
                  }}
                >
                  I&apos;m Justin, a digital designer specializing in web
                  development and product design.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "4rem",
                  marginTop: "4rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                  }}
                >
                  <button
                    className="button"
                    onClick={() => scrollTo(servicesDiv)}
                  >
                    View Services
                  </button>
                  <button
                    className="button"
                    onClick={() => scrollTo(contactDiv)}
                  >
                    Contact Me
                  </button>
                </div>
                <div className="social-btn-holder">
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
                        fill="white"
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
                        fill="white"
                        d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.behance.net/justindavenportspace"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="28"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="white"
                        d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
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
                      height="28"
                      width="24"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="white"
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
                      width="24"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="white"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-holder"
            style={{
              display: translateX === "-100%" ? "flex" : "none",
              minHeight: "100vh",
              alignItems: "center",
              flexDirection: "column",
            }}
            ref={servicesDiv}
          >
            <div
              className="container-splash"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", marginBottom: "4rem" }}>
                <h2
                  className={object_sans.className}
                  style={{
                    background:
                      "linear-gradient(to right, rgb(36, 36, 36), rgb(184, 184, 184))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Let&apos;s collaborate to create impactful results.
                </h2>
                <span
                  style={{
                    color: "rgb(36, 36, 36, 0.6)",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: 1.4,
                  }}
                >
                  Reach out to explore how we can work together to achieve
                  meaningful and impactful results for your project.
                </span>
              </div>
              <div className="container-services">
                <div className="services">
                  <span>
                    <sup
                      style={{
                        color: "rgb(36, 36, 36, 0.6)",
                        fontSize: "14px",
                      }}
                    >
                      01&ensp;
                    </sup>
                    UX / UI Design
                  </span>
                  <p style={{ marginTop: "0.4rem" }}>
                    I design user-friendly interfaces that enhance usability and
                    deliver a seamless, enjoyable experience, focusing on
                    intuitive design and user needs.
                  </p>
                </div>
                <div className="services">
                  <span>
                    <sup
                      style={{
                        color: "rgb(36, 36, 36, 0.6)",
                        fontSize: "14px",
                      }}
                    >
                      02&ensp;
                    </sup>
                    Project Conception
                  </span>
                  <p style={{ marginTop: "0.4rem" }}>
                    I turn ideas into dynamic web and mobile app experiences,
                    focusing on responsive design and functionality that engage
                    users and elevate your brand.
                  </p>
                </div>
                <div className="services">
                  <span>
                    <sup
                      style={{
                        color: "rgb(36, 36, 36, 0.6)",
                        fontSize: "14px",
                      }}
                    >
                      03&ensp;
                    </sup>
                    Creative Design & Visual Branding
                  </span>
                  <p style={{ marginTop: "0.4rem" }}>
                    I craft visually compelling designs that resonate with your
                    audience, blending creativity and strategy to strengthen
                    your brand’s visual identity.
                  </p>
                </div>
                <div className="services">
                  <span>
                    <sup
                      style={{
                        color: "rgb(36, 36, 36, 0.6)",
                        fontSize: "14px",
                      }}
                    >
                      04&ensp;
                    </sup>
                    Web & App Development
                  </span>
                  <p style={{ marginTop: "0.4rem" }}>
                    I bring your vision to life using the latest technology and
                    design trends, ensuring scalable, responsive, and
                    high-performing digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-holder"
            style={{
              display: translateX === "-100%" ? "flex" : "none",
              minHeight: "100vh",
              alignItems: "center",
              flexDirection: "column",
            }}
            ref={contactDiv}
          >
            <div
              className="container-splash"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", marginBottom: "4rem" }}>
                <h2
                  className={object_sans.className}
                  style={{
                    background:
                      "linear-gradient(to right, rgb(36, 36, 36), rgb(184, 184, 184))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Tell me about your next project.
                </h2>
                <span
                  style={{
                    color: "rgb(36, 36, 36, 0.6)",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: 1.4,
                  }}
                >
                  Let&apos;s connect to discuss your vision and how we can
                  collaborate on bringing your next project to life.
                </span>
              </div>
              <div
                style={{
                  display: emailForm ? "none" : "block",
                  textAlign: "center",
                }}
              >
                <p>
                  Your message has been received.
                  <br />A response will follow shortly.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: emailForm ? "flex" : "none",
                }}
              >
                <input
                  className={switzer.className}
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  className={switzer.className}
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className={switzer.className}
                  type="text"
                  placeholder="Subject"
                  required
                  onChange={(e) => setTopic(e.target.value)}
                  value={topic}
                />
                <textarea
                  className={switzer.className}
                  placeholder="Message"
                  required
                  style={{ height: "14rem", resize: "none" }}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <button
                  type="submit"
                  className="button"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <Work translateX={translateX} />
          <Articles translateX={translateX} />
        </>
      )}
    </main>
  );
}
