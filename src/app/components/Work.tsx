"use client";
import Link from "next/link";
import { object_sans } from "../ui/fonts";

interface Props {
  translateX: string;
}

const Work: React.FC<Props> = ({ translateX }) => {
  const projects = [
    {
      name: "OCULAR VIBRATIONS™",
      description:
        "A modern age digital design studio, your gateway to the digital renaissance.",
      image: "/ocular.png",
      link: "https://www.ocularvibrations.com/",
    },
    {
      name: "iSync",
      description:
        "Add songs, playlists, and mixes from YouTube directly to your Apple Music Library.",
      image: "/isync.png",
      link: "https://i-sync.vercel.app/",
    },
    {
      name: "Global Enterprises",
      description: "A dynamic and responsive mock company dashboard.",
      image: "/ge.png",
      link: "https://dashboard-six-snowy.vercel.app/",
    },
    {
      name: "Teenage Engineering™",
      description:
        "Teenage Engineering™ creates high quality electronic products for people who love sound and music.",
      image: "/te.png",
      link: "https://teenage-engineering.vercel.app/",
    },
    {
      name: "Digital Portfolio",
      description:
        "A digital portfolio showcasing a diverse array of meticulously crafted 3D art and digital designs.",
      image: "/studio.png",
      link: "https://www.christiandavenport.studio/",
    },
    {
      name: "Stack",
      description:
        "A platform designed to help developers showcase and visualize their tech stacks.",
      image: "/stack.png",
      link: "https://stack-three-psi.vercel.app/",
    },
    {
      name: "Cinema Collection",
      description:
        "A platform for discovery of new and unique films based on your favorite movie genres.",
      image: "/cinema.png",
      link: "https://cinema-collection.vercel.app/",
    },
  ];

  return (
    <>
      <div
        className="container-holder"
        style={{
          display: translateX === "0%" ? "flex" : "none",
        }}
        id="fade"
      >
        <div className="container-title">
          <div style={{ width: "100%", marginBottom: "4rem" }}>
            <h2
              className={object_sans.className}
              style={{
                background:
                  "linear-gradient(to right, rgb(36, 36, 36), rgb(184, 184, 184))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Explore my recent work.
            </h2>
            <span
              style={{
                color: "rgb(36, 36, 36, 0.6)",
                fontWeight: 300,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.4,
              }}
            >
              Discover the latest projects and designs I&apos;ve been working
              on.
            </span>
          </div>
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          display: translateX === "0%" ? "flex" : "none",
          alignItems: "flex-start",
          marginBottom: "8rem",
        }}
        id="fade"
      >
        <div className="project-holder">
          {projects.map((project, index) => (
            <Link
              key={index}
              className="project"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.name}
              style={{
                opacity: 1,
                lineHeight: "0",
                padding: "0rem",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="project-title">
                <span
                  style={{
                    color: "white",
                    fontWeight: "300",
                    fontSize: "clamp(20px, 2vw, 24px)",
                  }}
                >
                  {project.name}
                </span>
                <p
                  style={{
                    color: "whitesmoke",
                    fontWeight: "300",
                    fontSize: "clamp(14px, 2vw, 16px)",
                  }}
                >
                  {project.description}
                </p>
                <p className="detail">— Explore the live site.</p>
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
              <img className="img" src={project.image} alt={project.name} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
