"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { RefObject, useEffect, useRef } from "react";
import { inter_tight } from "../ui/fonts";

interface Props {
  articlesDiv: RefObject<HTMLDivElement>;
}

const Articles: React.FC<Props> = ({ articlesDiv }) => {
  const articles = [
    {
      name: "Optimize Custom Fonts for PageSpeed Insights in Next.js.",
      date: "Jun 16, 2024",
      description:
        "Learn how to optimize custom fonts in Next.js for faster load times and better PageSpeed Insights scores. This post covers techniques for reducing font size and efficient loading without compromising design.",
      image: "/og/dashboard-six-snowy.vercel.app_.png",
      link: "https://medium.com/@justindavenport.space/optimize-custom-fonts-for-pagespeed-insights-in-next-js-334fe993b65a",
    },
    {
      name: "Create a Product Landing Page with GSAP in Next.js.",
      date: "May 25, 2024",
      description:
        "Discover how to build an engaging product landing page using GSAP animations in Next.js. This tutorial walks you through setting up GSAP and adding smooth, high-performance animations to enhance user experience.",
      image: "/og/teenage-engineering.vercel.app_.png",
      link: "https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8",
    },
  ];

  const [contentHolder, inViewContentHolder] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const content = useRef<HTMLDivElement[]>([]);
  const hr = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (inViewContentHolder) {
      const tl = gsap.timeline();
      tl.to(articlesDiv.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(hr.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      content.current.forEach((ref, index) => {
        tl.to(ref, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    }
  }, [inViewContentHolder]);

  return (
    <div ref={contentHolder}>
      <div
        className="container-holder"
        style={{ opacity: "0", paddingBottom: "8rem" }}
        ref={articlesDiv}
      >
        <div className="container-title">
          <div style={{ width: "100%", paddingBottom: "4rem" }}>
            <h1 className={inter_tight.className}>Articles.</h1>
            <h2>LATEST INSIGHTS</h2>
            <hr ref={hr} style={{ width: "0%" }} />
            <p style={{ maxWidth: "295px", textAlign: "justify" }}>
              Read through my latest blog posts to stay updated on my thoughts,
              insights, and industry trends.
            </p>
          </div>
        </div>

        <div className="project-holder" ref={contentHolder}>
          {articles.map((articles, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                opacity: 0,
                transition: "150ms linear",
              }}
              ref={(el) => (content.current[index] = el!)}
              key={index}
            >
              <Link
                className="project"
                href={articles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={articles.name}
                style={{
                  opacity: 1,
                  lineHeight: "0",
                  padding: "0rem",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div className="project-title">
                  <p className="detail">Explore</p>
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
                <div
                  style={{
                    maxHeight: "345px",
                    overflow: "hidden",
                    borderRadius: "2rem",
                  }}
                >
                  <img
                    className="img"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      boxSizing: "border-box",
                    }}
                    src={articles.image}
                  />
                </div>
              </Link>
              <sup
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "0.2em",
                  marginTop: "1.4rem",
                  marginBottom: "0.4rem",
                }}
              >
                {"["}
                {articles.date}
                {"]"}
              </sup>
              <span
                style={{
                  maxWidth: "295px",
                }}
              >
                {articles.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
