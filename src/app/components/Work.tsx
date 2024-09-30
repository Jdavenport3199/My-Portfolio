"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { inter_tight } from "../ui/fonts";

interface Props {
  worksDiv: RefObject<HTMLDivElement>;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Work: React.FC<Props> = ({ worksDiv, setActiveSection }) => {
  const projects = [
    {
      name: "OCULAR VIBRATIONS™",
      description:
        "A modern age digital design studio, your gateway to the digital renaissance.",
      image: "/projects/ocular.png",
      link: "https://www.ocularvibrations.com/",
    },
    {
      name: "Smart Home",
      description:
        "An all-in-one application to control your home’s smart devices.",
      image: "/designs/smarthome-mockup.png",
      link: "https://dribbble.com/shots/24906297-Smart-Home-App",
    },
    {
      name: "IMDb",
      description:
        "The world's most popular source for movie, TV and celebrity content.",
      image: "/designs/imdb-mockup.png",
      link: "https://dribbble.com/shots/24913217-IMDb-mobile-app",
    },
    {
      name: "iSync",
      description:
        "Add songs, playlists, and mixes from YouTube directly to your Apple Music Library.",
      image: "/projects/isync.png",
      link: "https://i-sync.vercel.app/",
    },
    {
      name: "Global Enterprises",
      description: "A dynamic and responsive mock company dashboard.",
      image: "/projects/ge.png",
      link: "https://dashboard-six-snowy.vercel.app/",
    },
    {
      name: "Teenage Engineering™",
      description:
        "Teenage Engineering™ creates high quality electronic products for people who love sound and music.",
      image: "/projects/te.png",
      link: "https://teenage-engineering.vercel.app/",
    },
    {
      name: "Digital Portfolio",
      description:
        "A digital portfolio showcasing a diverse array of meticulously crafted 3D art and digital designs.",
      image: "/projects/studio.png",
      link: "https://www.christiandavenport.studio/",
    },
    {
      name: "Stack",
      description:
        "A platform designed to help developers showcase and visualize their tech stacks.",
      image: "/projects/stack.png",
      link: "https://stack-three-psi.vercel.app/",
    },
    {
      name: "Cinema Collection",
      description:
        "A platform for discovery of new and unique films based on your favorite movie genres.",
      image: "/projects/cinema.png",
      link: "https://cinema-collection.vercel.app/",
    },
  ];

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const content = useRef<HTMLAnchorElement[]>([]);
  const hr = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (inViewContentHolder) {
      setActiveSection("Works");
      const tl = gsap.timeline();
      tl.to(worksDiv.current, {
        opacity: 1,
        duration: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      tl.to(hr.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      tl.to(content.current, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.inOut",
        stagger: 0.25,
      });
    }
  }, [inViewContentHolder]);

  return (
    <div ref={contentHolder}>
      <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          opacity: "0",
          paddingBottom: "8rem",
          transform: "translateY(10%)",
        }}
        ref={worksDiv}
      >
        <div className="container-title">
          <div style={{ width: "100%", paddingBottom: "4rem" }}>
            <h1 className={inter_tight.className}>Works</h1>
            <h2>FEATURED PROJECTS</h2>
            <hr ref={hr} style={{ width: "0%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <p style={{ maxWidth: "295px" }}>
                Discover the latest websites and designs I&apos;ve been working
                on.
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
                  <span className="circle"></span>
                </div>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-holder">
          {projects.map((project, index) => (
            <Link
              ref={(el) => (content.current[index] = el!)}
              key={index}
              className="project"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.name}
              style={{
                opacity: 0,
                lineHeight: "0",
                padding: "0rem",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="project-title">
                <p className="detail">Explore</p>
              </div>
              <div className="project-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="12"
                  viewBox="0 0 448 512"
                  fill="white"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
              <img
                className="img"
                src={project.image}
                alt={project.name}
                style={{ objectPosition: "center center" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
