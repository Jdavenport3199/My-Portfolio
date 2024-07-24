"use client";
import Link from "next/link";
import { object_sans } from "../ui/fonts";

interface Props {
  translateX: string;
}

const Articles: React.FC<Props> = ({ translateX }) => {
  return (
    <>
      <div
        className="container-holder"
        style={{
          display: translateX === "50%" ? "flex" : "none",
        }}
        id="fade"
      >
        <div className="container-title">
          <h2 className={object_sans.className}>BLOG</h2>
        </div>
      </div>
      <div
        className="container-holder"
        style={{
          display: translateX === "50%" ? "flex" : "none",
          minHeight: "65vh",
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
            style={{ opacity: 1, lineHeight: "0", height: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 448 512"
              fill="#007FFF"
              style={{
                transform: "rotate(-45deg)",
                position: "absolute",
                right: "2rem",
                top: "2rem",
              }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            <span className="project-name">Next.js Fonts</span>
            <p style={{ marginTop: "0.4rem" }}>
              Optimize custom fonts for PageSpeed Insights in Next.js.
            </p>
          </Link>

          <Link
            className="project"
            href="https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 1, lineHeight: "0", height: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 448 512"
              fill="#007FFF"
              style={{
                transform: "rotate(-45deg)",
                position: "absolute",
                right: "2rem",
                top: "2rem",
              }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            <span className="project-name">GSAP Introduction</span>
            <p style={{ marginTop: "0.4rem" }}>
              Create a product landing page with GSAP in Next.js.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Articles;
