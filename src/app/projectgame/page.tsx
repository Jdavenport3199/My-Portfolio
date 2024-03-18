"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Game() {
  return (
    <main>
      <Nav />

      <div
        className="container-holder-colored"
        style={{ paddingTop: "6rem", minHeight: 0 }}
      >
        <div className="container">
          <div className="project-holder">
            <div
              className="project"
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <span className="project-title">Game Informer</span>
              <Link
                className="project-link"
                href="https://game-informer-ebon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>

            <div className="project" style={{ paddingTop: 0 }}>
              <p>
                Design & Development&ensp;<b>&middot;</b>&ensp;2024
              </p>
            </div>
            <hr />
            <div className="project" style={{ paddingBottom: 0 }}>
              <p>
                A platform for keeping up to date on new, trending, and upcoming
                games, utilizing the RAWG API. Visit the live site or view the
                screenshot below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-holder">
        <Image
          className="image"
          src="/assets/game/game.png"
          width={1920}
          height={1080}
          alt={""}
        />
      </div>
    </main>
  );
}
