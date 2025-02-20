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
