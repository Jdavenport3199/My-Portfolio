"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const workDiv = useRef<HTMLDivElement>(null);
  const blogDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "1rem") {
          nav.current.style.top = "1rem";
          nav.current.style.height = "5rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "1rem";
        nav.current.style.height = "5rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-5.25rem";
        nav.current.style.height = "5rem";
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
            <p style={{ color: "white", fontSize: "clamp(16px, 2vw, 22px)" }}>
              Justin Davenport —{" "}
              <b style={{ color: "white", fontWeight: "600" }}>
                Designer. Developer.
              </b>
            </p>
            <div className="nav-links">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </button>
              <button onClick={() => scrollTo(workDiv)}>Work</button>
              <button onClick={() => scrollTo(blogDiv)}>Blog</button>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  })
                }
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/background.jpg)",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "fixed",
          opacity: "0.1",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "fixed",
        }}
      ></div>

      <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          marginBottom: "0",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap-reverse",
            gap: "2rem",
          }}
        >
          <div className="text-holder">
            <h1>Designer. Developer.</h1>
            <br />
            <p>
              I&apos;m Justin, a Web Developer and Product Designer located in
              Charlotte, NC. My expertise lies in crafting dynamic web
              experiences using HTML, CSS, and JavaScript primarily within
              Next.js. I thrive on enhancing interactivity and creating
              captivating visuals, harnessing frameworks like GSAP and Three.js
              to push the boundaries of user engagement. My workflow seamlessly
              integrates design and development, thanks to my adeptness with
              tools like Figma and the Adobe Suite.
            </p>
            <br />
            <br />
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <div className="social-btn-holder">
                  <Link
                    href="https://www.instagram.com/justindavenport.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="social-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="28"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://dribbble.com/justindavenport"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="social-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="white"
                          d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://www.behance.net/justindavenportspace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="social-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="36"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="white"
                          d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/justindavenport99/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="social-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="28"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/Jdavenport3199"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="social-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="31"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="white"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-profile"
            src="/me.jpg"
            width={1215}
            height={2160}
            alt={""}
            style={{ boxShadow: "0px 8px 10px 2px #00000010" }}
          />
        </div>
      </div>

      <div
        className="container-holder"
        style={{ minHeight: "0", marginBottom: "0" }}
      >
        <div className="container" style={{ paddingTop: "8rem" }} ref={workDiv}>
          <h2>A collection of my recent work.</h2>
        </div>
      </div>

      <div className="container-holder">
        <div
          className="container-holder"
          style={{
            minHeight: "0",
            gap: "2rem 2rem",
            alignItems: "flex-start",
            width: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://teenage-engineering.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-sm"
                src="/te.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
            <br />
            <span>Teenage Engineering™</span>
            <p>Electronics Company</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://stack-three-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/stack1.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
            <br />
            <span>Stack</span>
            <p>Social Media Platform</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://ocular-vibrations.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/studio.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
            <br />
            <span>OCULAR VIBRATIONS™</span>
            <p>Design Studio</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://www.ocularvibrations.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-sm"
                src="/ocular.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
            <br />
            <span>OCULAR VIBRATIONS™</span>
            <p>Design Studio</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://photography-flax-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-sm"
                src="/photo.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
            <br />
            <span>Danilo Scarpati</span>
            <p>Art Gallery</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://dividome.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/divids1.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
            <br />
            <span>DiviDome</span>
            <p>Stock Dividends Platform</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="https://cinema-collection.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/cinema1.png"
                width={1920}
                height={1080}
                alt={""}
              />
            </Link>
            <br />
            <span>Cinema Collection</span>
            <p>Movie Search Platform</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
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
            <br />
            <span>IMDb</span>
            <p>Figma Prototype</p>
          </div>
        </div>
      </div>

      <div
        className="container-holder"
        style={{ minHeight: "0", marginBottom: "0" }}
      >
        <div className="container" style={{ paddingTop: "8rem" }} ref={blogDiv}>
          <h2>Explore my recent articles.</h2>
        </div>
      </div>

      <div
        className="container-holder"
        style={{ minHeight: "0", alignItems: "flex-start" }}
      >
        <div
          className="container-holder"
          style={{
            minHeight: "0",
            gap: "2rem 2rem",
            alignItems: "flex-start",
            width: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <Link
              href="https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 1, lineHeight: "0" }}
            >
              <img
                className="img-lg"
                src="/tutorial.png"
                width={1215}
                height={2160}
                alt={""}
              />
            </Link>
            <br />
            <span>Create a Product Landing Page with GSAP in Next.js</span>
            <p>Tutorial</p>
          </div>
        </div>
      </div>

      <div
        className="container-holder"
        style={{
          minHeight: "100vh",
          marginBottom: "0",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div className="text-holder">
            <h2>Let&apos;s create something together.</h2>
            <br />
            <p>
              Get in touch if you&apos;re seeking services in Branding, UX/UI
              Design, 3D Modeling, App Design, or Web Design. I&apos;m here to
              collaborate and bring your vision to life.
            </p>
          </div>
          <Link
            href="mailto:justindavenport.space@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />{" "}
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
