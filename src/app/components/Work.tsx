"use client";
import Link from "next/link";
import { pangaia, neue_montreal } from "../ui/fonts";

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
          <h2 className={neue_montreal.className}>Explore my recent work.</h2>
          <h3 className={pangaia.className}>
            Discover the latest projects and designs I've been working on.
          </h3>
          <br />
          <br />
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          display: translateX === "0%" ? "flex" : "none",
          minHeight: "150vh",
          alignItems: "flex-start",
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
            style={{ opacity: 1, lineHeight: "0", paddingBottom: "0" }}
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
            <span>iSync</span>
            <p style={{ marginTop: "0.4rem" }}>
              iSync is a platform for adding songs, playlists, and mixes from
              YouTube directly to your Apple Music Library.
            </p>
            <div className="img-holder">
              <img className="img" src="/isync.webp" alt="iSync" />
            </div>
          </Link>

          <Link
            className="project"
            href="https://dashboard-six-snowy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Global Enterprises"
            style={{ opacity: 1, lineHeight: "0", paddingBottom: "0" }}
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
            <span>Global Enterprises</span>
            <p style={{ marginTop: "0.4rem" }}>
              A dynamic and responsive mock company dashboard.
            </p>
            <div className="img-holder">
              <img
                className="img"
                src="/dashboard.webp"
                alt="Global Enterprises"
              />
            </div>
          </Link>

          <Link
            className="project"
            href="https://teenage-engineering.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0", paddingBottom: "0" }}
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
            <span>Teenage Engineering™</span>
            <p style={{ marginTop: "0.4rem" }}>
              Teenage Engineering™ creates high quality electronic products for
              people who love sound and music.
            </p>
            <div className="img-holder">
              <img className="img" src="/te.webp" alt="Teenage Engineering™" />
            </div>
          </Link>

          <Link
            className="project"
            href="https://www.christiandavenport.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0" }}
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
            <span>Digital Portfolio</span>
            <p style={{ marginTop: "0.4rem" }}>
              A digital portfolio showcasing a diverse array of meticulously
              crafted 3d art and digital designs.
            </p>
            <div className="img-holder">
              <img className="img" src="/cj.webp" alt="Digital Portfolio" />
            </div>
          </Link>

          <Link
            className="project"
            href="https://stack-three-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0" }}
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
            <span>Stack</span>
            <p style={{ marginTop: "0.4rem" }}>
              Stack is a platform designed to help developers showcase and
              visualize their tech stacks.
            </p>
            <div className="img-holder">
              <img className="img" src="/stack.webp" alt="Stack" />
            </div>
          </Link>

          <Link
            className="project"
            href="https://cinema-collection.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teenage Engineering"
            style={{ opacity: 1, lineHeight: "0" }}
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
            <span>Cinema Collection</span>
            <p style={{ marginTop: "0.4rem" }}>
              Cinema Collection allows for discovery of new and unique films
              based on your favorite movie genres.
            </p>
            <div className="img-holder">
              <img className="img" src="/cinema.webp" alt="Cinema Collection" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
