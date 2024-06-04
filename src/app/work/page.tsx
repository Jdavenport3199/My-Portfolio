"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "1rem";
          nav.current.style.height = "3rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "1rem";
        nav.current.style.height = "3rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-3.25rem";
        nav.current.style.height = "3rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <main>
      <div className="nav" ref={nav}>
        <div className="nav-nav">
          <div className="nav-sub">
            <div className="nav-links">
              <Link
                href={"/"}
                style={{ background: pathname === "/" ? "auto" : "none" }}
              >
                Home
              </Link>
              <Link
                href={"/work"}
                style={{ background: pathname === "/work" ? "auto" : "none" }}
              >
                Work
              </Link>
              <Link
                href={"/articles"}
                style={{
                  background: pathname === "/articles" ? "auto" : "none",
                }}
              >
                Articles
              </Link>
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "none" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="background"></div>
      <div className="overlay"></div>

      <div className="container-holder">
        <div className="container-title">
          <h2>Work</h2>
        </div>
      </div>

      <div className="container-holder">
        <div className="project-holder">
          <div className="project">
            <div className="project-title">
              <span>Christian Davenport</span>
              <p>3D Portfolio</p>
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
              <span>Teenage Engineering™</span>
              <p>Electronics Company</p>
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
              <span>Stack</span>
              <p>Social Media Platform</p>
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
              <span>OCULAR VIBRATIONS™</span>
              <p>Design Studio</p>
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
              <span>OCULAR VIBRATIONS™</span>
              <p>Design Studio</p>
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
              <span>Danilo Scarpati</span>
              <p>Art Gallery</p>
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
              <span>DiviDome</span>
              <p>Stock Dividends Platform</p>
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
              <span>Cinema Collection</span>
              <p>Movie Platform</p>
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

          {/* <div className="project">
            <Link
              href="https://www.figma.com/proto/fvEPHkapwuwyS7f6EdocPP/IMDB?type=design&node-id=19-1375&t=WtQrpK7P8tvHMsf0-8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A2610&hide-ui=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-sm"
                src="/imdb.png"
                width={1215}
                height={2160}
                alt={""}
                style={{
                  objectFit: "contain",
                  border: "2px solid transparent",
                }}
              />
            </Link>
            <span>IMDb</span>
            <p>Figma Prototype</p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
