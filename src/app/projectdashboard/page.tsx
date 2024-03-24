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
//   title: "Global Enterprises",
// };

export default function Dashboard() {
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
                <AnimatedTextSpan text="Global Ent." />
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
                    href="https://dashboard-six-snowy.vercel.app/"
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
                  A fully responsive mock company dashboard. Visit the live site
                  or view the screenshot below.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-holder">
          <Image
            className="image"
            src="/assets/dashboard/dashboard.png"
            width={1920}
            height={1080}
            alt={""}
          />
        </div>
      </main>
    </ReactLenis>
  );
}
