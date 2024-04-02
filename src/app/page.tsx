"use client";
import { useEffect, useRef, useState } from "react";
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

  const [ocularIndex, setOcularIndex] = useState(0);
  const ocularImages = ["1.png", "2.png", "3.png", "4.png"];
  const handleOcularImages = (index: any) => {
    const newIndex =
      (ocularIndex + index + ocularImages.length) % ocularImages.length;
    setOcularIndex(newIndex);
    console.log("Clicked");
  };

  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const portfolioImages = ["1.png", "2.png", "3.png", "4.png"];
  const handlePortfolioImages = (index: any) => {
    const newIndex =
      (portfolioIndex + index + portfolioImages.length) %
      portfolioImages.length;
    setPortfolioIndex(newIndex);
    console.log("Clicked");
  };

  const [stackIndex, setStackIndex] = useState(0);
  const stackImages = ["1.png", "2.png", "3.png", "4.png"];
  const handleStackImages = (index: any) => {
    const newIndex =
      (stackIndex + index + stackImages.length) % stackImages.length;
    setStackIndex(newIndex);
    console.log("Clicked");
    console.log(ocularIndex);
  };

  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "0rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-6.25rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <ReactLenis root>
      <main>
        <div className="nav" ref={nav}>
          <div className="nav-sub">
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
              <AnimatedTextH2 text="Designer & Developer" />
            </div>
          </div>
        </div>

        <div ref={workDiv} className="container-holder">
          <div className="container">
            <h2>Work</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                paddingBottom: "1rem",
                justifyContent: "center",
              }}
            >
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-user"></i>&nbsp;Client
                </h3>
                <hr />
                <p>OCULAR VIBRATIONS&trade;</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-info"></i>
                  &nbsp;Description
                </h3>
                <hr />
                <p>Digital Design Studio</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-paperclip"></i>&nbsp;Website
                </h3>
                <hr />
                <Link
                  href="https://ocular-vibrations.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ocularvibrations.com&nbsp;
                  <i className="fa-solid fa-up-right-from-square fa-xs"></i>
                </Link>
              </div>
            </div>

            <div className="image-holder">
              <div style={{ position: "absolute", width: "100%", top: 0 }}>
                <img
                  className="image-main"
                  src={`/ocular/${
                    ocularImages[ocularIndex % ocularImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/ocular/${
                    ocularImages[
                      (ocularIndex - 1 + ocularImages.length) %
                        ocularImages.length
                    ]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handleOcularImages(-1)}
                />
                <img
                  className="image-subRight"
                  src={`/ocular/${
                    ocularImages[(ocularIndex + 1) % ocularImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handleOcularImages(1)}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: ocularIndex === 0 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: ocularIndex === 1 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: ocularIndex === 2 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: ocularIndex === 3 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
            </div>
            <div className="image-btns">
              <button onClick={() => handleOcularImages(-1)}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={() => handleOcularImages(1)}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                paddingBottom: "1rem",
                justifyContent: "center",
              }}
            >
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-user"></i>&nbsp;Client
                </h3>
                <hr />
                <p>Christian Davenport</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-info"></i>
                  &nbsp;Description
                </h3>
                <hr />
                <p>3D Design Portfolio</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-paperclip"></i>&nbsp;Website
                </h3>
                <hr />
                <Link
                  href="https://www.christiandavenport.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  christiandavenport.studio&nbsp;
                  <i className="fa-solid fa-up-right-from-square fa-xs"></i>
                </Link>
              </div>
            </div>
            <div className="image-holder">
              <div style={{ position: "absolute", width: "100%", top: 0 }}>
                <img
                  className="image-main"
                  src={`/portfolio/${
                    portfolioImages[portfolioIndex % portfolioImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/portfolio/${
                    portfolioImages[
                      (portfolioIndex - 1 + portfolioImages.length) %
                        portfolioImages.length
                    ]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handlePortfolioImages(-1)}
                />
                <img
                  className="image-subRight"
                  src={`/portfolio/${
                    portfolioImages[
                      (portfolioIndex + 1) % portfolioImages.length
                    ]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handlePortfolioImages(1)}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: portfolioIndex === 0 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: portfolioIndex === 1 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: portfolioIndex === 2 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: portfolioIndex === 3 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
            </div>
            <div className="image-btns">
              <button onClick={() => handlePortfolioImages(-1)}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={() => handlePortfolioImages(1)}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "3rem",
                paddingBottom: "1rem",
                justifyContent: "center",
              }}
            >
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-user"></i>&nbsp;Client
                </h3>
                <hr />
                <p>Stack</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-info"></i>
                  &nbsp;Description
                </h3>
                <hr />
                <p>Platform for Modern Tech Stack Visualization</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-paperclip"></i>&nbsp;Website
                </h3>
                <hr />
                <Link
                  href="https://stack-three-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stack.com&nbsp;
                  <i className="fa-solid fa-up-right-from-square fa-xs"></i>
                </Link>
              </div>
            </div>
            <div className="image-holder">
              <div style={{ position: "absolute", width: "100%", top: 0 }}>
                <img
                  className="image-main"
                  src={`/stack/${stackImages[stackIndex % stackImages.length]}`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/stack/${
                    stackImages[
                      (stackIndex - 1 + stackImages.length) % stackImages.length
                    ]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handleStackImages(-1)}
                />
                <img
                  className="image-subRight"
                  src={`/stack/${
                    stackImages[(stackIndex + 1) % stackImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                  onClick={() => handleStackImages(1)}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: stackIndex === 0 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: stackIndex === 1 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: stackIndex === 2 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
              <div
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  background: stackIndex === 3 ? "whitesmoke" : "#f5f5f540",
                  borderRadius: "100rem",
                }}
              ></div>
            </div>
            <div className="image-btns">
              <button onClick={() => handleStackImages(-1)}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={() => handleStackImages(1)}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="container-holder" ref={aboutDiv}>
          <div className="container">
            <h2>About</h2>

            <div className="bio-holder1">
              <div className="content">
                <h3>
                  <i className="fa-solid fa-signature"></i>&nbsp;Name
                </h3>
                <hr />
                <p>Justin Davenport</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-location-dot"></i>&nbsp;Location
                </h3>
                <hr />
                <p>Charlotte, NC</p>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-circle-info"></i>
                  &nbsp;Biography
                </h3>
                <hr />
                <p>
                  I am a Frontend Developer & UI/UX Designer from Charlotte, NC.
                  I am proficient in HTML, CSS, and JavaScript, with my go to
                  framework being Next.js. Additionally, I regularly utilize
                  Figma and the Adobe Suite when working on projects.
                </p>
              </div>
            </div>

            <div className="bio-holder2">
              <div className="content">
                <h3>
                  <i className="fa-solid fa-code"></i>&nbsp;Frameworks &
                  Languages
                </h3>
                <hr />
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
              <div className="content">
                <h3>
                  <i className="fa-brands fa-uncharted"></i>&nbsp;Software
                </h3>
                <hr />
                <ul>
                  <li>&middot;&nbsp;Figma</li>
                  <li>&middot;&nbsp;Photoshop</li>
                  <li>&middot;&nbsp;Illustrator</li>
                  <li>&middot;&nbsp;Premiere Pro</li>
                  <li>&middot;&nbsp;Blender</li>
                  <li>&middot;&nbsp;Unreal Engine</li>
                </ul>
              </div>
              <div className="content">
                <h3>
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  &nbsp;Specialization
                </h3>
                <hr />
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
              <h2>Contact</h2>
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
            <div className="formHolder">
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
                {/* <hr style={{ marginBottom: "1rem" }} /> */}
                <p>Email</p>
                <input
                  type="email"
                  placeholder="johndoe@email.com *"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {/* <hr style={{ marginBottom: "1rem" }} /> */}
                <p>Services</p>
                <input
                  type="text"
                  placeholder="Web Design, Web Development *"
                  required
                  onChange={(e) => setTopic(e.target.value)}
                  value={topic}
                />
                {/* <hr style={{ marginBottom: "1rem" }} /> */}
                <p>Message</p>
                <textarea
                  placeholder="Looking for help building a website. *"
                  required
                  style={{ resize: "none", height: "10rem" }}
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
        </div>
      </main>
    </ReactLenis>
  );
}
