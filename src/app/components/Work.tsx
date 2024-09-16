"use client";
import Link from "next/link";
import { object_sans } from "../ui/fonts";

interface Props {
  translateX: string;
}

const Work: React.FC<Props> = ({ translateX }) => {
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
            <span style={{ color: "rgb(36, 36, 36, 0.6)", fontWeight: 300 }}>
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
          <Link
            className="project"
            href="https://i-sync.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Devolio"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/isync.png" alt="iSync" />
          </Link>

          <Link
            className="project"
            href="https://dashboard-six-snowy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Global Enterprises"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/ge.png" alt="iSync" />
          </Link>

          <Link
            className="project"
            href="https://teenage-engineering.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/te.png" alt="Teenage Engineering™" />
          </Link>

          <Link
            className="project"
            href="https://www.christiandavenport.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/studio.png" alt="Digital Portfolio" />
          </Link>

          <Link
            className="project"
            href="https://stack-three-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/stack.png" alt="Stack" />
          </Link>

          <Link
            className="project"
            href="https://cinema-collection.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0", padding: "6rem" }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <div className="tag-holder">
              <p className="tag">Project</p>
              <p className="tag">Fullstack</p>
              <p className="tag">UI / UX</p>
              <p className="tag">Next.js</p>
            </div>
            <img className="img" src="/cinema.png" alt="Cinema Collection" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
