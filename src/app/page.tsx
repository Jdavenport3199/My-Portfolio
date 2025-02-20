"use client";
import { useState } from "react";
import { gsap } from "gsap";
import Background from "./components/Background";
import ReactLenis from "lenis/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./components/Projects";
import Link from "next/link";

const projects = [
  {
    name: "iSync",
    title: "Web Application",
    description:
      "iSync is a web application designed to integrate Apple Music and YouTube functionalities, enabling users to sync playlists across both platforms.",
    image: "/thumbnails/isync.jpg",
    link: "https://i-sync.vercel.app/",
    openInNewTab: true,
  },
  {
    name: "Teenage Engineering",
    title: "Website",
    description:
      "A modern and interactive website designed for Teenage Engineering, showcasing their innovative electronic products.",
    image: "/thumbnails/te.webp",
    link: "https://teenage-engineering.vercel.app/",
    openInNewTab: true,
  },
  {
    name: "Furniture Store",
    title: "Figma Prototype",
    description:
      "A sleek and user-friendly furniture store prototype designed in Figma, emphasizing a smooth shopping experience.",
    image: "/thumbnails/furniture.jpg",
    link: "",
    openInNewTab: true,
  },
  {
    name: "Cinema Collection",
    title: "Web Application",
    description:
      "A web-based collection of curated cinema experiences, integrating film discovery and personal recommendations.",
    image: "/thumbnails/cinema.webp",
    link: "https://cinema-collection.vercel.app/",
    openInNewTab: true,
  },
  {
    name: "Chancellor Apartments",
    title: "Website",
    description:
      "A property website for Chancellor Apartments, providing virtual tours and interactive leasing features.",
    image: "/thumbnails/living.jpeg",
    link: "https://storage.googleapis.com/yardi-chancellor-apartments/Yardi/index.html",
    openInNewTab: true,
  },
  // {
  //   name: "IMDb",
  //   title: "Figma Prototype",
  //   description:
  //     "A conceptual redesign of IMDb’s interface, optimizing user experience and accessibility.",
  //   image: "/designs/imdb-mockup.png",
  //   link: "",
  //   openInNewTab: true,
  // },
  // {
  //   name: "Smart Home",
  //   title: "Figma Prototype",
  //   description:
  //     "A futuristic smart home UI prototype designed for seamless home automation control.",
  //   image: "/designs/smarthome-mockup.png",
  //   link: "",
  //   openInNewTab: true,
  // },
  // {
  //   name: "Global Enterprises",
  //   title: "Website",
  //   description:
  //     "A corporate dashboard for Global Enterprises, providing insights and management tools.",
  //   image: "/projects/ge.png",
  //   link: "https://dashboard-six-snowy.vercel.app/",
  //   openInNewTab: true,
  // },
  {
    name: "",
    title: "",
    description: "",
    image: "",
    link: "",
    openInNewTab: true,
  },
];

export default function Home() {
  const [projectsInView, setProjectsInView] = useState<boolean[]>(
    new Array(projects.length).fill(false)
  );

  const handleInView = (index: number, isInView: boolean) => {
    const updatedProjectsInView = [...projectsInView];
    updatedProjectsInView[index] = isInView;
    setProjectsInView(updatedProjectsInView);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = document.querySelector(".project-holder");

    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const windowWidth = window.innerWidth;

    if (windowWidth > 799) {
      gsap.to(container, {
        x: () => -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: "#projects",
          anticipatePin: 0,
        },
      });
    }
  });

  return (
    <ReactLenis root>
      <main>
        {/* <Background /> */}

        <div className="link-holder">
          <Link
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/justindavenport99/"
          >
            LinkedIn
          </Link>
          <Link
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@justindavenport.space"
          >
            Medium
          </Link>
          <Link
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/justindavenport.space/"
          >
            Instagram
          </Link>
          <Link
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:justindavenport.space@gmail.com"
          >
            Email
          </Link>
        </div>

        <div className="container-splash-holder">
          <div className="container-splash">
            <h1>
              Web Developer.
              <br />
              Product Designer.
            </h1>
            <div className="bio">
              <span
                style={{
                  fontSize: "clamp(1rem, 4vw, 1.618rem)",
                  fontWeight: 400,
                  textWrap: "balance",
                }}
              >
                I&apos;m Justin, a Web Developer and Product Designer based in
                Durham, NC.
              </span>
            </div>
          </div>
        </div>

        <div className="container-holder" id="projects">
          <div className="project-holder">
            <Projects projects={projects} handleInView={handleInView} />
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
