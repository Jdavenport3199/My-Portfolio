"use client";
import Link from "next/link";

interface Props {
  translateX: string;
}

const Articles: React.FC<Props> = ({ translateX }) => {
  return (
    <>
      <div
        className="container-holder"
        style={{
          display: translateX === "100%" ? "flex" : "none",
        }}
        id="fade"
      >
        <div className="container-title">
          <div style={{ width: "100%", marginBottom: "4rem" }}>
            <h2
              style={{
                background:
                  "linear-gradient(to right, rgb(36, 36, 36), rgb(184, 184, 184))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Explore my recent blog posts.
            </h2>
            <span
              style={{
                color: "rgb(36, 36, 36, 0.6)",
                fontWeight: 300,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.4,
              }}
            >
              Read through my latest blog posts to stay updated on my thoughts,
              insights, and industry trends.
            </span>
          </div>
        </div>
      </div>
      <div
        className="container-holder"
        style={{
          display: translateX === "100%" ? "flex" : "none",
          minHeight: "55vh",
          alignItems: "flex-start",
        }}
        id="fade"
      >
        <div className="project-holder">
          <Link
            className="project"
            href="https://medium.com/@justindavenport.space/optimize-custom-fonts-for-pagespeed-insights-in-next-js-334fe993b65a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              opacity: 1,
              lineHeight: "0",
              height: "auto",
            }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <span>
              <sup
                style={{
                  color: "rgb(36, 36, 36, 0.6)",
                  fontSize: "12px",
                }}
              >
                001&ensp;
              </sup>
              Next.js Fonts
            </span>
            <p style={{ marginTop: "0.4rem" }}>
              Learn how to optimize custom fonts in Next.js for faster load
              times and better PageSpeed Insights scores. This post covers
              techniques for reducing font size and efficient loading without
              compromising design.
            </p>
          </Link>

          <Link
            className="project"
            href="https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              opacity: 1,
              lineHeight: "0",
              height: "auto",
            }}
          >
            <div className="project-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 448 512"
                fill="rgb(36, 36, 36)"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <span>
              <sup
                style={{
                  color: "rgb(36, 36, 36, 0.6)",
                  fontSize: "12px",
                }}
              >
                002&ensp;
              </sup>
              GSAP Introduction
            </span>
            <p style={{ marginTop: "0.4rem" }}>
              Discover how to build an engaging product landing page using GSAP
              animations in Next.js. This tutorial walks you through setting up
              GSAP and adding smooth, high-performance animations to enhance
              user experience.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Articles;
