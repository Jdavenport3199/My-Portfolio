"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { Metadata } from "next";
import { ReactLenis } from "@studio-freight/react-lenis";

// export const metadata: Metadata = {
//   title: "OCULAR",
// };

export default function Ocular() {
  return (
    <ReactLenis root>
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
                <span className="project-title">OCULAR</span>
                <Link
                  className="project-link"
                  href="https://ocular-vibrations.vercel.app/"
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
