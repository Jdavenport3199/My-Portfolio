"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import { neue_montreal, pangaia, switzer } from "./ui/fonts";

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
      <div
        className="background"
        style={{ display: translateX === "-100%" ? "flex" : "none" }}
      ></div>
      <div className="overlay"></div>

      <div className="nav" ref={nav}>
        <div className="nav-nav">
          <div className="nav-links">
            <div
              className="nav-slider"
              style={{
                transform: `translateX(${translateX})`,
              }}
            ></div>
            <button onClick={() => setTranslateX("-100%")} aria-label="Work">
              About
            </button>
            <button onClick={() => setTranslateX("0%")} aria-label="Work">
              Work
            </button>
            <button onClick={() => setTranslateX("100%")} aria-label="Blog">
              Blog
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="rgb(36, 36, 36)" size={10} />
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
              <div>
                <img
                  src="/me.png"
                  width={140}
                  height={140}
                  style={{
                    objectFit: "cover",
                    borderRadius: "100rem",
                    padding: "0.4rem",
                    background: "#00000006",
                    marginBottom: "1rem",
                  }}
                />
              </div>
              <h1 className={pangaia.className} style={{ display: "inline" }}>
                Crafting&nbsp;
              </h1>
              <h1
                className={neue_montreal.className}
                style={{
                  display: "inline-block",
                }}
              >
                digital experiences,
              </h1>
              <h1 className={pangaia.className}>
                with clean code and intuitive design.
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.4rem",
                  marginTop: "2.5rem",
                  marginBottom: "4rem",
                }}
              >
                <button
                  className="button"
                  onClick={() => scrollTo(servicesDiv)}
                >
                  View Services
                </button>
                <button className="button" onClick={() => scrollTo(contactDiv)}>
                  Contact Me
                </button>
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
              <h2 className={neue_montreal.className}>
                Let&apos;s collaborate to create impactful results.
              </h2>
              <h3 className={pangaia.className}>
                Reach out to explore how we can work together to achieve
                meaningful and impactful results for your project.
              </h3>
              <br />
              <br />
              <div className="container-services">
                <div className="services">
                  <img
                    src="/icons/ui.png"
                    width={40}
                    height={40}
                    style={{ marginBottom: "0.4rem" }}
                  />
                  <br />
                  <span>UX & UI</span>
                  <p style={{ marginTop: "0.4rem" }}>
                    Designing interfaces that are intuitive, efficient, and
                    enjoyable to use.
                  </p>
                </div>
                <div className="services">
                  <img
                    src="/icons/phone.png"
                    width={40}
                    height={40}
                    style={{ marginBottom: "0.4rem" }}
                  />
                  <br />
                  <span>Web & Mobile App</span>
                  <p style={{ marginTop: "0.4rem" }}>
                    Transforming ideas into exceptional web and mobile app
                    experiences.
                  </p>
                </div>
                <div className="services">
                  <img
                    src="/icons/design.png"
                    width={40}
                    height={40}
                    style={{ marginBottom: "0.4rem" }}
                  />
                  <br />
                  <span>Design & Creative</span>
                  <p style={{ marginTop: "0.4rem" }}>
                    Crafting visually stunning designs that connect with your
                    audience.
                  </p>
                </div>
                <div className="services">
                  <img
                    src="/icons/dev.png"
                    width={40}
                    height={40}
                    style={{ marginBottom: "0.4rem" }}
                  />
                  <br />
                  <span>Development</span>
                  <p style={{ marginTop: "0.4rem" }}>
                    Bringing your vision to life with the latest technology and
                    design trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="background"
            style={{
              transform: "scaleX(-1)",
              marginTop: "0",
              display: translateX === "-100%" ? "flex" : "none",
            }}
          ></div>
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
              <h2 className={neue_montreal.className}>
                Tell me about your next project.
              </h2>
              <h3 className={pangaia.className}>
                Let&apos;s connect to discuss your vision, challenges, and how
                we can collaborate on bringing your next project to life.
              </h3>
              <br />
              <br />
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
