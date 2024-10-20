"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import TransitionLink from "./TransitionLink";

interface Props {
  worksDiv: RefObject<HTMLDivElement>;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Work: React.FC<Props> = ({ worksDiv, setActiveSection }) => {
  const projects = [
    {
      name: "Teenage Engineering™",
      description: "Website",
      image: "/projects/te.png",
      link: "https://teenage-engineering.vercel.app/",
      openInNewTab: true,
    },
    {
      name: "Chancellor Apartments",
      description: "Website",
      image: "/projects/yardi.png",
      link: "https://storage.googleapis.com/yardi-chancellor-apartments/Yardi/index.html",
      openInNewTab: true,
    },
    {
      name: "Furniture Store",
      description: "Figma Prototype",
      image: "/designs/furniture-mockup.png",
      link: "/projects/furniture",
      openInNewTab: false,
    },
    {
      name: "Smart Home",
      description: "Figma Prototype",
      image: "/designs/smarthome-mockup.png",
      link: "/projects/smartHome",
      openInNewTab: false,
    },
    {
      name: "IMDb",
      description: "Figma Prototype",
      image: "/designs/imdb-mockup.png",
      link: "/projects/imdb",
      openInNewTab: false,
    },
    {
      name: "iSync",
      description: "Website",
      image: "/projects/isync.png",
      link: "https://i-sync.vercel.app/",
      openInNewTab: true,
    },
    {
      name: "Cinema Collection",
      description: "Website",
      image: "/projects/cinema.png",
      link: "https://cinema-collection.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
      tag3: "Project",
      openInNewTab: true,
    },
    {
      name: "Global Enterprises",
      description: "Website",
      image: "/projects/ge.png",
      link: "https://dashboard-six-snowy.vercel.app/",
      tag1: "Website",
      tag2: "Next.js",
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
      setActiveSection("Works");
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

  return (
    <div ref={contentHolder}>
      <div
        className="container-holder"
        style={{
          minHeight: "100dvh",
          opacity: "0",
          paddingBottom: "12rem",
        }}
        ref={worksDiv}
      >
        <div className="project-holder" style={{ marginBottom: "2rem" }}>
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
                <span style={{ color: "white" }}>{project.name}</span>
                <p style={{ color: "var(--text-color-project)" }}>
                  {project.description}
                </p>
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
        <TransitionLink
          href={"/works"}
          label={"View all Work."}
          setPanelValue={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default Work;
