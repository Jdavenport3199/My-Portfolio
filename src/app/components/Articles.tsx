"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

interface Props {
  articlesDiv: RefObject<HTMLDivElement>;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Articles: React.FC<Props> = ({ articlesDiv, setActiveSection }) => {
  const articles = [
    {
      name: "Optimize Fonts for PageSpeed Insights",
      date: "June 16, 2024",
      description:
        "Learn how to optimize fonts in Next.js for faster load times.",
      image: "/og/dashboard-six-snowy.vercel.app_.png",
      link: "https://medium.com/@justindavenport.space/optimize-custom-fonts-for-pagespeed-insights-in-next-js-334fe993b65a",
      tag1: "Next.js",
      tag2: "Fonts",
      tag3: "Optimization",
    },
    {
      name: "Create a Product Landing Page with GSAP",
      date: "May 25, 2024",
      description:
        "Discover how to build an engaging product landing page using GSAP animations in Next.js.",
      image: "/og/teenage-engineering.vercel.app_.png",
      link: "https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8",
      tag1: "Next.js",
      tag2: "GSAP",
      tag3: "Product Design",
    },
  ];

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const content = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (inViewContentHolder) {
      setActiveSection("Articles");
      const tl = gsap.timeline();
      tl.to(articlesDiv.current, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      });
      tl.to(content.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    }
  }, [inViewContentHolder]);

  return (
    <div ref={contentHolder}>
      <div
        className="container-holder"
        style={{
          opacity: "0",
          paddingBottom: "12rem",
        }}
        ref={articlesDiv}
      >
        <div className="project-holder" ref={contentHolder}>
          {articles.map((articles, index) => (
            <Link
              ref={(el) => (content.current[index] = el!)}
              key={index}
              className="project"
              href={articles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={articles.name}
              style={{
                opacity: 0,
                lineHeight: "0",
                padding: "0rem",
                width: "100%",
                position: "relative",
              }}
            >
              <div className="overlay"></div>
              <div className="project-title">
                <h2 style={{ color: "white" }}>{articles.name}</h2>
                <span style={{ color: "var(--text-color-project)" }}>
                  {articles.description}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    marginTop: "0.8rem",
                  }}
                >
                  <p className="detail">{articles.tag1}</p>
                  <p className="detail">{articles.tag2}</p>
                  <p className="detail" style={{ width: "7.5rem" }}>
                    {articles.tag3}
                  </p>
                </div>
              </div>
              <div className="project-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="12"
                  viewBox="0 0 448 512"
                  fill="white"
                  style={{
                    transform: "rotate(-45deg)",
                  }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
              <img className="img" src={articles.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
