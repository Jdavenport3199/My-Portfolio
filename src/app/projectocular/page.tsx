"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { Metadata } from "next";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedTextSpan from "../components/AnimatedTextSpan";

// export const metadata: Metadata = {
//   title: "OCULAR",
// };

export default function Ocular() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <main>
        <Nav />

        <div
          className="container-holder-colored"
          style={{ paddingTop: "4rem", minHeight: 0 }}
        >
          <div className="container">
            <div className="project-holder">
              <div
                className="project"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <AnimatedTextSpan text="OCULAR&trade;" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.68, -0.6, 0.32, 1.8],
                  }}
                >
                  <Link
                    className="project-link"
                    href="https://ocular-vibrations.vercel.app/"
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
                  A website for a digital design studio. Visit the live site or
                  view the screenshots below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="image-holder" style={{ marginTop: "6rem" }}>
        <Image
          className="image"
          src="/assets/empty.png"
          width={1920}
          height={1080}
          alt={""}
          style={{ position: "absolute" }}
        />
        <video
          src="/assets/stack/stack.mkv"
          autoPlay
          muted
          loop
          playsInline
          style={{
            aspectRatio: "15.4 / 10",
            width: "1100px",
            maxWidth: "80%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "3rem" }}>&nbsp;</div> */}

        <div className="image-holder">
          <Image
            className="image"
            src="/assets/ocular/ocular.png"
            width={1920}
            height={1080}
            alt={""}
          />
        </div>

        <div className="image-holder-wide">
          <Image
            className="image-wide"
            src="/assets/ocular/ocular1.png"
            width={1920}
            height={1080}
            alt={""}
          />
        </div>
        <div className="image-holder-wide">
          <Image
            className="image-wide"
            src="/assets/ocular/ocular2.png"
            width={1920}
            height={1080}
            alt={""}
          />
        </div>
      </main>
    </ReactLenis>
  );
}
