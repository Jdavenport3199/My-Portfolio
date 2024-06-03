"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "2rem";
          nav.current.style.height = "4rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "2rem";
        nav.current.style.height = "4rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-4.25rem";
        nav.current.style.height = "4rem";
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
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Work</Link>
              <Link href={"/articles"}>Articles</Link>
              <Link
                href="mailto:justindavenport.space@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
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
          <h2>Articles</h2>
        </div>
      </div>

      <div className="container-holder" style={{ alignItems: "flex-start" }}>
        <div className="project-holder">
          <div className="project">
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
    </main>
  );
}
