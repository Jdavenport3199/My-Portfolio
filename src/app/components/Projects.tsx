"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  projects: (
    | {
        name: string;
        title: string;
        description: string;
        image: string;
        link: string;
        openInNewTab: boolean;
      }
    | {
        name: string;
        title: string;
        description: string;
        image: string;
        link: string;
        openInNewTab: boolean;
      }
  )[];
  handleInView: (index: number, isInView: boolean) => void;
}

const Project = ({
  project,
  index,
  handleInView,
}: {
  project: any;
  index: number;
  handleInView: (index: number, isInView: boolean) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.85,
    triggerOnce: false,
  });

  useEffect(() => {
    handleInView(index, inView);
  }, [inView, index, handleInView]);

  return (
    <div key={index} className="project" ref={ref}>
      <Link
        className="project-link"
        href={project.link}
        target={project.openInNewTab ? "_blank" : "_self"}
        rel={project.openInNewTab ? "noopener noreferrer" : undefined}
        aria-label={project.name}
        style={{
          pointerEvents: inView ? "auto" : "none",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {project.name !== "" && (
          <>
            <Image
              className="img"
              src={project.image}
              alt={project.name}
              style={{
                transform: inView ? "translateY(0)" : "translateY(100px)",
                backgroundColor: project.name == "" ? "white" : "",
                width: "100%",
              }}
              width={2000}
              height={1333}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
            />
            <span
              className="project-btn"
              style={{
                transform: inView ? "translateY(0)" : "translateY(100px)",
                opacity: inView ? 1 : 0,
              }}
            >
              <svg
                style={{ transform: "rotate(-45deg)" }}
                height="16"
                width="14.25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#2b80ff"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </span>
          </>
        )}
      </Link>
      <div
        className="description-holder"
        style={{
          visibility: inView ? "visible" : "hidden",
          transform: inView ? "scale(1)" : "scale(0.85)",
          opacity: inView ? 1 : 0,
          backgroundColor: project.name == "" ? "#ffffff00" : "",
          backdropFilter: project.name == "" ? "blur(0px) saturate(100%)" : "",
          WebkitBackdropFilter:
            project.name == "" ? "blur(0px) saturate(100%)" : "",
        }}
      >
        <div className="description">
          <h2>{project.name}</h2>
          <span>{project.title}</span>
          <br />
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ projects, handleInView }: Props) => {
  return (
    <>
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
          handleInView={handleInView}
        />
      ))}
    </>
  );
};

export default Projects;
