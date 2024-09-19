"use client";
import { useEffect, useRef, useState } from "react";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import { object_sans, switzer } from "./ui/fonts";
import Footer from "./components/Footer";

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
              minHeight: "80vh",
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
          <Footer />
        </>
      )}
    </main>
  );
}
