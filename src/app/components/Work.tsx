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
              <p>Website</p>
              <span>Christian Davenport</span>
            </div>
            <Link
              href="https://www.christiandavenport.studio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/cj-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>Teenage Engineering™</span>
            </div>
            <Link
              href="https://teenage-engineering.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/te-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>Stack</span>
            </div>
            <Link
              href="https://stack-three-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/stack-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>OCULAR VIBRATIONS™</span>
            </div>
            <Link
              href="https://ocular-vibrations.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/studio-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>OCULAR VIBRATIONS™</span>
            </div>
            <Link
              href="https://www.ocularvibrations.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/ocular-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>Danilo Scarpati</span>
            </div>
            <Link
              href="https://photography-flax-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/photo-new.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>DiviDome</span>
            </div>
            <Link
              href="https://dividome.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/divids-new.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
          </div>

          <div className="project">
            <div className="project-title">
              <p>Website</p>
              <span>Cinema Collection</span>
            </div>
            <Link
              href="https://cinema-collection.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
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
