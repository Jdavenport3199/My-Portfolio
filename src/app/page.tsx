"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import AnimatedTextH1 from "./components/AnimatedTextH1";
import AnimatedTextH2 from "./components/AnimatedTextH2";

export default function Home() {
  const homeDiv = useRef<HTMLDivElement>(null);
  const workDiv = useRef<HTMLDivElement>(null);
  const contractDiv = useRef<HTMLDivElement>(null);
  const aboutDiv = useRef<HTMLDivElement>(null);

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
            <button onClick={() => scrollTo(aboutDiv)}>About</button>
            <button onClick={() => scrollTo(contractDiv)}>Contact</button>
          </div>
        </div>

        <div
          className="container-holder"
          style={{ alignItems: "flex-end" }}
          ref={homeDiv}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0rem 4rem",
              }}
            >
              <div>
                <AnimatedTextH1 text="Justin Davenport" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <AnimatedTextH2 text="Designer & Developer" />
                <div style={{ marginTop: "8rem" }}>
                  <h3>Socials</h3>
                  <hr />
                  <br />
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/justindavenport.space/"
                        >
                          Instagram&nbsp;
                          <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/justindavenport99/"
                        >
                          LinkedIn&nbsp;
                          <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/Jdavenport3199"
                        >
                          GitHub&nbsp;
                          <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
              Work
            </motion.h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: "1rem" }}>
                <h3>Client</h3>
                <hr />
                <br />
                <p>OCULAR VIBRATIONS&trade;</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Description</h3>
                <hr />
                <br />
                <p>Digital Design Studio Website</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Website</h3>
                <hr />
                <br />
                <Link
                  href="https://ocular-vibrations.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ocularvibrations.com&nbsp;
                  <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem 0rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Image
                className="image"
                src="/assets/test2.png"
                width={1920}
                height={0}
                alt={""}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-person fa-xs"></i>&nbsp;Client
                </h3>
                <hr />
                <br />
                <p>Christian Davenport</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-circle-info fa-xs"></i>
                  &nbsp;Description
                </h3>
                <hr />
                <br />
                <p>3D Design Portfolio</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-paperclip fa-2xs"></i>&nbsp;Website
                </h3>
                <hr />
                <br />
                <Link
                  href="https://www.christiandavenport.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  christiandavenport.studio&nbsp;
                  <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem 0rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Image
                className="image"
                src="/assets/1.png"
                width={1920}
                height={0}
                alt={""}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-person fa-xs"></i>&nbsp;Client
                </h3>
                <hr />
                <br />
                <p>Stack</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-circle-info fa-xs"></i>
                  &nbsp;Description
                </h3>
                <hr />
                <br />
                <p>Platform for Modern Tech Stack Visualization</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>
                  <i className="fa-solid fa-paperclip fa-2xs"></i>&nbsp;Website
                </h3>
                <hr />
                <br />
                <Link
                  href="https://stack-three-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stack.com&nbsp;
                  <i className="fa-solid fa-arrow-up-right-dots fa-xs"></i>
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem 0rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Image
                className="image"
                src="/assets/stack.png"
                width={1920}
                height={0}
                alt={""}
              />
            </div>
          </div>
        </div>

        <div className="container-holder" ref={aboutDiv}>
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
              About
            </motion.h2>

            <div className="bio-holder1">
              <div style={{ padding: "1rem" }}>
                <h3>Name</h3>
                <hr />
                <br />
                <p>Justin Davenport</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Location</h3>
                <hr />
                <br />
                <p>Charlotte, NC</p>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Biography</h3>
                <hr />
                <br />
                <Link
                  href="https://ocular-vibrations.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I am a Frontend Developer & UI/UX Designer from Charlotte, NC.
                  <br />I am proficient in HTML, CSS, and JavaScript, with my go
                  to framework being Next.js.
                  <br />
                  Additionally, I regularly utilize Figma and the Adobe Suite
                  when working on projects.
                </Link>
              </div>
            </div>

            <div className="bio-holder2">
              <div style={{ padding: "1rem" }}>
                <h3>Frameworks & Languages</h3>
                <hr />
                <br />
                <ul>
                  <li>&middot;&nbsp;Next.js</li>
                  <li>&middot;&nbsp;React</li>
                  <li>&middot;&nbsp;GSAP</li>
                  <li>&middot;&nbsp;Three.js</li>
                  <li>&middot;&nbsp;Framer Motion</li>
                  <li>&middot;&nbsp;HTML5</li>
                  <li>&middot;&nbsp;CSS</li>
                </ul>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Software</h3>
                <hr />
                <br />
                <ul>
                  <li>&middot;&nbsp;Figma</li>
                  <li>&middot;&nbsp;Photoshop</li>
                  <li>&middot;&nbsp;Illustrator</li>
                  <li>&middot;&nbsp;Premiere Pro</li>
                  <li>&middot;&nbsp;Blender</li>
                  <li>&middot;&nbsp;Unreal Engine</li>
                </ul>
              </div>
              <div style={{ padding: "1rem" }}>
                <h3>Specialization</h3>
                <hr />
                <br />
                <ul>
                  <li>&middot;&nbsp;Web Design</li>
                  <li>&middot;&nbsp;Web Development</li>
                  <li>&middot;&nbsp;UI/UX Design</li>
                  <li>&middot;&nbsp;Brand Development</li>
                  <li>&middot;&nbsp;Motion Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-holder">
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
                Contact
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
              <p>Name</p>
              <input
                type="text"
                placeholder="John Doe *"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>Email</p>
              <input
                type="email"
                placeholder="johndoe@email.com *"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>Services</p>
              <input
                type="text"
                placeholder="Web Design, Web Development *"
                required
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
              />
              <hr style={{ marginBottom: "1rem" }} />
              <p>Message</p>
              <textarea
                placeholder="Looking for help building a website. *"
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
      </main>
    </ReactLenis>
  );
}
