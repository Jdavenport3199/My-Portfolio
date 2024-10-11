"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import TransitionLink from "../components/TransitionLink";
import Background from "../components/Background";

interface Props {}

const Work: React.FC<Props> = ({}) => {
  const worksDiv = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: "Furniture Store",
      description: "Browse and shop high-end modern furniture.",
      image: "/designs/furniture-mockup.png",
      link: "/projects/furniture",
      tag1: "UI / UX",
      tag2: "Figma",
      tag3: "Project",
      openInNewTab: false,
    },
    {
      name: "Smart Home",
      description:
        "All-in-one application to control your home’s smart devices.",
      image: "/designs/smarthome-mockup.png",
      link: "/projects/smartHome",
      tag1: "UI / UX",
      tag2: "Figma",
      tag3: "Project",
      openInNewTab: false,
    },
    {
      name: "IMDb",
      description:
        "The world's most popular source for movie, TV and celebrity content.",
      image: "/designs/imdb-mockup.png",
      link: "/projects/imdb",
      tag1: "UI / UX",
      tag2: "Figma",
      tag3: "Project",
      openInNewTab: false,
    },
    {
      name: "iSync",
      description:
        "Add songs from YouTube directly to your Apple Music Library.",
      image: "/projects/isync.png",
      link: "https://i-sync.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Global Enterprises",
      description: "A dynamic and responsive mock company dashboard.",
      image: "/projects/ge.png",
      link: "https://dashboard-six-snowy.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Teenage Engineering™",
      description:
        "High quality electronic products for people who love sound and music.",
      image: "/projects/te.png",
      link: "https://teenage-engineering.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Digital Portfolio",
      description:
        "A showcase of meticulously crafted 3D art and digital designs.",
      image: "/projects/studio.png",
      link: "https://www.christiandavenport.studio/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Stack",
      description: "Showcase and visualize your tech stacks.",
      image: "/projects/stack.png",
      link: "https://stack-three-psi.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Cinema Collection",
      description:
        "Discover new and unique films based on your favorite movie genres.",
      image: "/projects/cinema.png",
      link: "https://cinema-collection.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "OCULAR VIBRATIONS™",
      description:
        "A modern age digital design studio, your gateway to the digital renaissance.",
      image: "/projects/ocular.png",
      link: "https://www.ocularvibrations.com/",
      tag1: "UI / UX",
      tag2: "Figma",
      tag3: "Project",
      openInNewTab: true,
    },
  ];

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const content = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (inViewContentHolder) {
      const tl = gsap.timeline();
      tl.to(worksDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
      tl.to(content.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    }
  }, [inViewContentHolder]);

  const panel = useRef(null);
  const [panelValue, setPanelValue] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    if (panelValue) {
      gsap.to(panel.current, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(panel.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(panel.current, { visibility: "hidden" });
          return undefined;
        },
      });
    }
  }, [panelValue]);

  const handlePanelValue = () => {
    setPanelValue((prev: any) => !prev);
  };

  return (
    <main>
      <div className="panel-holder" ref={panel}>
        <div className="panel">
          <TransitionLink
            href={"/"}
            label={"Works"}
            setPanelValue={setPanelValue}
          />
          {/* <TransitionLink
            href={"/articles"}
            label={"Articles"}
            setPanelValue={setPanelValue}
          /> */}
          <TransitionLink
            href={"/about"}
            label={"About"}
            setPanelValue={setPanelValue}
          />
          <Link
            href="https://www.linkedin.com/in/justindavenport99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            Contact
          </Link>
        </div>
      </div>

      <nav>
        <span
          className="toggle-switch"
          onClick={() => {
            handlePanelValue(), setIsRotated(!isRotated);
          }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isRotated ? "rotate(45deg)" : "",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
              fill="var(--toggle)"
            />
          </svg>
        </span>
      </nav>

      <Background />
      <div ref={contentHolder}>
        <div
          className="container-holder"
          style={{
            minHeight: "100vh",
            opacity: "0",
            paddingBlock: "4rem",
          }}
          ref={worksDiv}
        >
          <div className="project-holder">
            {projects.map((project, index) => (
              <Link
                ref={(el) => (content.current[index] = el!)}
                key={index}
                className="project"
                href={project.link}
                target={project.openInNewTab ? "_blank" : "_self"}
                rel={project.openInNewTab ? "noopener noreferrer" : undefined}
                aria-label={project.name}
                style={{
                  opacity: 0,
                  lineHeight: "0",
                  padding: "0rem",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div className="overlay"></div>
                <div className="project-title">
                  <h2 style={{ color: "white" }}>{project.name}</h2>
                  <span style={{ color: "var(--text-color-project)" }}>
                    {project.description}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      marginTop: "0.8rem",
                    }}
                  >
                    <p className="detail">{project.tag1}</p>
                    <p className="detail">{project.tag2}</p>
                    <p className="detail">{project.tag3}</p>
                  </div>
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
    </main>
  );
};

export default Work;
