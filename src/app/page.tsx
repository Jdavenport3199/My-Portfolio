"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import AnimatedTextH1 from "./components/AnimatedTextH1";
import AnimatedTextH2 from "./components/AnimatedTextH2";

export default function Home() {
  const homeDiv = useRef<HTMLDivElement>(null);
  const workDiv = useRef<HTMLDivElement>(null);
  const contractDiv = useRef<HTMLDivElement>(null);

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
    <ReactLenis root>
      <main>
        <div className="nav">
          <div className="nav-right">
            <button onClick={() => scrollTo(homeDiv)}>Home</button>
            <button onClick={() => scrollTo(workDiv)}>Work</button>
            <button onClick={() => scrollTo(contractDiv)}>Contact</button>
          </div>
        </div>
        <div className="nav-dropdown">
          <div className="nav-button">
            <i className="fa-solid fa-ellipsis" id="nav-icon"></i>
            <button onClick={() => scrollTo(homeDiv)} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollTo(workDiv)} className="nav-link">
              Work
            </button>
            <button onClick={() => scrollTo(contractDiv)} className="nav-link">
              Contact
            </button>
          </div>
        </div>

        <div className="container-holder-colored" ref={homeDiv}>
          <div className="container" style={{ paddingTop: 0 }}>
            <div className="title">
              <div style={{ flexDirection: "column", display: "flex" }}>
                <AnimatedTextH1 text="I'm Justin." />
                <AnimatedTextH2 text="Frontend Developer & UI/UX Designer." />
              </div>
              <motion.div
                className="image-holder-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.68, -0.6, 0.32, 1.8],
                }}
              >
                <Image
                  className="image-cover"
                  src="/assets/me.jpg"
                  width={250}
                  height={250}
                  alt=""
                />
                <span className="image-text">👋</span>
              </motion.div>
            </div>
            <div>
              <h3>
                Start scrolling to explore a curated selection of projects and
                client commissions.&nbsp;
                <i
                  className="fa-solid fa-arrow-trend-down"
                  style={{ color: "#2667ff" }}
                ></i>
              </h3>
            </div>
          </div>
        </div>

        <div ref={workDiv} className="container-holder">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.68, -0.6, 0.32, 1.8],
              }}
            >
              <i className="fa-solid fa-code fa-2xs"></i>&nbsp;A collection of
              my recent work.
            </motion.h2>

            <div className="project-holder">
              <Link
                className="project"
                href={"/projectocular"}
                style={{ marginTop: "2rem" }}
              >
                <span className="project-title">OCULAR&trade;</span>
                <p>
                  Design & Development&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
              <hr />
              <Link className="project" href={"/projectdashboard"}>
                <span className="project-title">Global Ent.</span>
                <p>
                  Design & Development&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
              <hr />
              <Link className="project" href={"/projectgame"}>
                <span className="project-title">Game Informer</span>
                <p>
                  Design & Development&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
              <hr />
              <Link className="project" href={"/projectstack"}>
                <span className="project-title">Stack</span>
                <p>
                  Brand Design & Implementation&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
              <hr />
              <Link className="project" href={"/projectcinema"}>
                <span className="project-title">Cinema Collection</span>
                <p>
                  Design & Development&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
              <hr />
              <Link className="project" href={"/projectdivids"}>
                <span className="project-title">DiviDome</span>
                <p>
                  Brand Design & Implementation&ensp;<b>&middot;</b>&ensp;2024
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-holder-colored">
          <div className="container" ref={contractDiv}>
            <div
              style={{
                display: emailForm ? "block" : "none",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.68, -0.6, 0.32, 1.8],
                }}
              >
                <i className="fa-solid fa-pencil fa-2xs"></i>&nbsp;Let&apos;s
                start a project together.
              </motion.h2>
            </div>
            <div
              style={{
                display: emailForm ? "none" : "block",
                textAlign: "center",
              }}
            >
              <p>
                <i
                  className="fa-regular fa-circle-check fa-2xl"
                  style={{ color: "#2667ff" }}
                ></i>
                <br />
                <br />
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
              <p>What&apos;s your name?</p>
              <input
                type="text"
                placeholder="John Doe *"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>What&apos;s your email?</p>
              <input
                type="email"
                placeholder="johndoe@email.com *"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>What services are you looking for?</p>
              <input
                type="text"
                placeholder="Web Design, Web Development *"
                required
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>What&apos;s your message?</p>
              <textarea
                placeholder="Hello Justin, I am looking for help building a website *"
                required
                style={{ resize: "none" }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="form-btn-holder">
                <button type="submit" className="form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </main>
    </ReactLenis>
  );
}
