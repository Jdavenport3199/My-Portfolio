"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedTextH1 from "./components/AnimatedTextH1";
import AnimatedTextH2 from "./components/AnimatedTextH2";
import Scene from "./components/Scene";
import dynamic from "next/dynamic";

const SceneLoading = dynamic(() => import("./components/Scene"), {
  ssr: true,
});

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

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.99;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.26, 1],
        },
      });
    } else {
      controls.start({
        y: "100%",
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.26, 1],
        },
      });
    }
  }, [isVisible, controls]);

  return (
    <ReactLenis root>
      <main>
        <div className="nav" ref={nav}>
          <div className="nav-sub">
            <motion.button
              onClick={() => scrollTo(homeDiv)}
              whileHover={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => scrollTo(workDiv)}
              whileHover={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Work
            </motion.button>
            <motion.button
              onClick={() => scrollTo(aboutDiv)}
              whileHover={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Tools
            </motion.button>
            <motion.button
              onClick={() => scrollTo(contractDiv)}
              whileHover={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Connect
            </motion.button>
          </div>
        </div>

        <div className="background">
          <Scene />
        </div>

        <div
          className="container-holder-top"
          style={{
            background: "linear-gradient(to bottom, black, #070707)",
          }}
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
              <AnimatedTextH1 text="Justin Davenport" />
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
                paddingTop: "4rem",
                paddingBottom: "2rem",
                justifyContent: "center",
              }}
            >
              <div className="content">
                <h3>Client</h3>
                <hr />
                <p>OCULAR VIBRATIONS&trade;</p>
              </div>
              <div className="content">
                <h3>Description</h3>
                <hr />
                <p>Digital Design Studio</p>
              </div>
              <div className="content">
                <h3>Website</h3>
                <hr />
                <Link
                  href="https://ocular-vibrations.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ocularvibrations.com&nbsp;
                  <motion.button
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "whitesmoke",
                      borderRadius: "100rem",
                      color: "#070707",
                    }}
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <i className="fa-solid fa-location-arrow fa-xs"></i>
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="image-holder" ref={ref1}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  transform: isInView1 ? "none" : "translateY(200px)",
                  opacity: isInView1 ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img
                  className="image-main"
                  src={`/assets/ocular/${
                    ocularImages[ocularIndex % ocularImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/assets/ocular/${
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
                  src={`/assets/ocular/${
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
                transform: isInView1 ? "none" : "translateY(200px)",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handleOcularImages(-1)}
              >
                <i className="fa-solid fa-circle-chevron-left"></i>
              </motion.button>
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handleOcularImages(1)}
              >
                <i className="fa-solid fa-circle-chevron-right"></i>
              </motion.button>
            </div>

            <div className="content-holder">
              <div className="content">
                <h3>Client</h3>
                <hr />
                <p>Christian Davenport</p>
              </div>
              <div className="content">
                <h3>Description</h3>
                <hr />
                <p>3D Design Portfolio</p>
              </div>
              <div className="content">
                <h3>Website</h3>
                <hr />
                <Link
                  href="https://www.christiandavenport.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  christiandavenport.studio&nbsp;
                  <motion.button
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "whitesmoke",
                      borderRadius: "100rem",
                      color: "#070707",
                    }}
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <i className="fa-solid fa-location-arrow fa-xs"></i>
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="image-holder" ref={ref2}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  transform: isInView2 ? "none" : "translateY(200px)",
                  opacity: isInView2 ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img
                  className="image-main"
                  src={`/assets/portfolio/${
                    portfolioImages[portfolioIndex % portfolioImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/assets/portfolio/${
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
                  src={`/assets/portfolio/${
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
                transform: isInView2 ? "none" : "translateY(200px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handlePortfolioImages(-1)}
              >
                <i className="fa-solid fa-circle-chevron-left"></i>
              </motion.button>
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handlePortfolioImages(1)}
              >
                <i className="fa-solid fa-circle-chevron-right"></i>
              </motion.button>
            </div>

            <div className="content-holder">
              <div className="content">
                <h3>Client</h3>
                <hr />
                <p>Stack</p>
              </div>
              <div className="content">
                <h3>Description</h3>
                <hr />
                <p>Platform for Modern Tech Stack Visualization</p>
              </div>
              <div className="content">
                <h3>Website</h3>
                <hr />
                <Link
                  href="https://stack-three-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stack.com&nbsp;
                  <motion.button
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "whitesmoke",
                      borderRadius: "100rem",
                      color: "#070707",
                    }}
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <i className="fa-solid fa-location-arrow fa-xs"></i>
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="image-holder" ref={ref3}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  transform: isInView3 ? "none" : "translateY(200px)",
                  opacity: isInView3 ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img
                  className="image-main"
                  src={`/assets/stack/${
                    stackImages[stackIndex % stackImages.length]
                  }`}
                  width={1920}
                  height={0}
                  alt={""}
                />
                <img
                  className="image-subLeft"
                  src={`/assets/stack/${
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
                  src={`/assets/stack/${
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
                transform: isInView3 ? "none" : "translateY(200px)",
                opacity: isInView3 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handleStackImages(-1)}
              >
                <i className="fa-solid fa-circle-chevron-left"></i>
              </motion.button>
              <motion.button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "whitesmoke",
                  borderRadius: "100rem",
                  color: "#070707",
                }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                onClick={() => handleStackImages(1)}
              >
                <i className="fa-solid fa-circle-chevron-right"></i>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="container-holder" ref={aboutDiv}>
          <div className="container">
            <h2>Tools</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingTop: "4rem",
                paddingBottom: "8rem",
                justifyContent: "center",
              }}
            >
              <div
                className="content"
                style={{
                  gap: "0.4rem",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingBlock: "0rem",
                }}
                ref={ref6}
              >
                <h3>Software</h3>
                <hr />
                <motion.ul
                  style={{
                    scale: isInView6 ? 1 : 0,
                  }}
                  animate={{ scale: isInView6 ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8,
                  }}
                >
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/figma.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/photoshop.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/illustrator.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/premiere.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/blender.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/unreal.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                </motion.ul>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingBottom: "4rem",
              }}
            >
              <div
                className="content"
                style={{
                  gap: "0.4rem",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingBlock: "0rem",
                }}
                ref={ref7}
              >
                <h3>Frameworks & Languages</h3>
                <hr />
                <motion.ul
                  style={{
                    scale: isInView7 ? 1 : 0,
                  }}
                  animate={{ scale: isInView7 ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8,
                  }}
                >
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/next.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/react.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/html.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/css.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/framer.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 0.85 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={"/assets/icons/webgl.svg"}
                      width={0}
                      height={0}
                      alt=""
                    />
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-holder"
          style={{
            background: "linear-gradient(to bottom, #070707, black)",
          }}
        >
          <div className="container" ref={contractDiv}>
            <div
              style={{
                display: emailForm ? "block" : "none",
              }}
            >
              <h2>Connect</h2>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                alignItems: "center",
                flexDirection: "column",
              }}
              ref={ref4}
            >
              <Image
                className="profilepic"
                src="/assets/me.jpg"
                width={175}
                height={175}
                alt={""}
              />
              {/* <div style={{ textAlign: "center", width: "40%" }}>
                <p>
                  I'm a Frontend Developer based in Charlotte, NC, specializing
                  in HTML, CSS, and JavaScript, with a focus on Next.js. I
                  possess proficiency in leveraging frameworks such as GSAP and
                  Three.js to elevate interactivity and craft compelling visual
                  experiences. My project workflow benefits from the regular
                  utilization of Figma and the Adobe Suite for both design and
                  development endeavors.
                </p>
              </div> */}
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2
                  className="email"
                  style={{
                    opacity: isInView4 ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  justindavenport.space@gmail.com
                </h2>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingBottom: "8rem",
                justifyContent: "center",
              }}
            >
              <div
                className="content"
                style={{
                  gap: "0.4rem",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingBlock: "0rem",
                }}
                ref={ref5}
              >
                <h3>Social</h3>
                <hr />
                <motion.div
                  style={{
                    gap: "0.4rem",
                    display: "flex",
                    width: "fit-content",
                    justifyContent: "center",
                    scale: isInView5 ? 1 : 0,
                  }}
                  animate={{ scale: isInView5 ? 1 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8,
                  }}
                >
                  <Link
                    href="https://www.instagram.com/justindavenport.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "whitesmoke",
                        borderRadius: "100rem",
                        color: "#070707",
                      }}
                      whileHover={{ scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <i className="fa-brands fa-instagram fa-xl"></i>
                    </motion.button>
                  </Link>
                  <Link
                    href="https://dribbble.com/justindavenport"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "whitesmoke",
                        borderRadius: "100rem",
                        color: "#070707",
                      }}
                      whileHover={{ scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <i className="fa-brands fa-dribbble fa-xl"></i>
                    </motion.button>
                  </Link>
                  <Link
                    href="https://www.behance.net/justindavenportspace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "whitesmoke",
                        borderRadius: "100rem",
                        color: "#070707",
                      }}
                      whileHover={{ scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <i className="fa-brands fa-behance fa-xl"></i>
                    </motion.button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/justindavenport99/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "whitesmoke",
                        borderRadius: "100rem",
                        color: "#070707",
                      }}
                      whileHover={{ scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    </motion.button>
                  </Link>
                  <Link
                    href="https://github.com/Jdavenport3199"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "whitesmoke",
                        borderRadius: "100rem",
                        color: "#070707",
                      }}
                      whileHover={{ scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <i className="fa-brands fa-github fa-xl"></i>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* <div
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
                <input
                  type="text"
                  placeholder="* Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="* Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="text"
                  placeholder="* Services"
                  required
                  onChange={(e) => setTopic(e.target.value)}
                  value={topic}
                />
                <textarea
                  placeholder="* Message"
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
            </div> */}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
