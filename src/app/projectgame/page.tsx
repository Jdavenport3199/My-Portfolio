"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { Metadata } from "next";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

// export const metadata: Metadata = {
//   title: "Game Informer",
// };

export default function Game() {
  return (
    <ReactLenis root>
      <PageTransition>
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
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.6, 0.4, 1],
                    }}
                  >
                    <Link
                      className="project-link"
                      href="https://game-informer-ebon.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </Link>
                  </motion.div>
                </div>
                <div
                  className="project"
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                >
                  <p>
                    A platform for keeping up to date on new, trending, and
                    upcoming games, utilizing the RAWG API. Visit the live site
                    or view the screenshot below.
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
      </PageTransition>
    </ReactLenis>
  );
}
