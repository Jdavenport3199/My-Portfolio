"use client";
import Link from "next/link";

interface Props {
  translateX: string;
}

const Work: React.FC<Props> = ({ translateX }) => {
  return (
    <>
      <div
        className="container-holder"
        style={{
          display: translateX === "-50%" ? "flex" : "none",
        }}
      >
        <div className="container-title">
          <h2>Work</h2>
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          display: translateX === "-50%" ? "flex" : "none",
        }}
      >
        <div className="project-holder">
          <div className="project">
            <div className="project-title">
              <span>Teenage Engineering™</span>
              <p style={{ marginTop: "0.4rem" }}>
                Teenage Engineering™ creates high quality, well designed,
                electronic products for all people who love sound and music.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">GSAP</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://teenage-engineering.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Teenage Engineering"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/te-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>3D Artist Portfolio</span>
              <p style={{ marginTop: "0.4rem" }}>
                A 3D artist and digital designer portfolio which showcases a
                diverse array of meticulously crafted 3D art and digital
                designs.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Three.js</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://www.christiandavenport.studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="3D Artist Portfolio"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/cj-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>Stack</span>
              <p style={{ marginTop: "0.4rem" }}>
                Stack is a platform designed to help developers showcase and
                visualize their tech stacks.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://stack-three-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/stack-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>OCULAR VIBRATIONS™</span>
              <p style={{ marginTop: "0.4rem" }}>
                OCULAR VIBRATIONS™ is a digital design studio based in
                Charlotte, NC.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Three.js</p>
                <p className="subject">GSAP</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://ocular-vibrations.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OCULAR VIBRATIONS"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/studio-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>OCULAR VIBRATIONS™</span>
              <p style={{ marginTop: "0.4rem" }}>
                OCULAR VIBRATIONS™ is a digital design studio based in
                Charlotte, NC.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Three.js</p>
                <p className="subject">GSAP</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://www.ocularvibrations.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OCULAR VIBRATIONS"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/ocular-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>Danilo Scarpati</span>
              <p style={{ marginTop: "0.4rem" }}>
                A photograpghy portfolio which showcases a stunning collection
                that captures the beauty and essence of diverse subjects.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">GSAP</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://photography-flax-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Danilo Scarpati"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/photo-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>DiviDome</span>
              <p style={{ marginTop: "0.4rem" }}>
                DiviDome provides comprehensive access to dividend data for all
                publicly traded companies.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://dividome.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DiviDome"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/divids-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <span>Cinema Collection</span>
              <p style={{ marginTop: "0.4rem" }}>
                Cinema Collection allows for discovery of new and unique films
                based on your favorite movie genres.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Website</p>
              </div>
            </div>
            <Link
              href="https://cinema-collection.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cinema Collection"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img"
                src="/cinema-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
