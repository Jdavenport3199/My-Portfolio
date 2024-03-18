import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack",
};

export default function Stack() {
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
              <span className="project-title">Stack</span>
              <Link
                className="project-link"
                href="https://stack-three-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
            <div className="project" style={{ paddingTop: 0 }}>
              <p>
                Brand Design & Implementation&ensp;<b>&middot;</b>&ensp;2024
              </p>
            </div>
            <div
              className="project"
              style={{ paddingBottom: 0, paddingTop: 0 }}
            >
              <p>
                A platform for modern tech stack visualization, capture visual
                narratives of your app&apos;s core component. Visit the live
                site or view the screenshots below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-holder" style={{ marginTop: "6rem" }}>
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
          preload="auto"
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
      <div style={{ padding: "3rem" }}>&nbsp;</div>

      <div className="image-holder-wide">
        <Image
          className="image-wide"
          src="/assets/stack/stack.png"
          width={1920}
          height={1080}
          alt={""}
        />
      </div>
    </main>
  );
}
