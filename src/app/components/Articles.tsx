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
          display: translateX === "50%" ? "flex" : "none",
        }}
      >
        <div className="container-title">
          <h2>Articles</h2>
        </div>
      </div>
      <div
        className="container-holder"
        style={{
          display: translateX === "50%" ? "flex" : "none",
        }}
      >
        <div className="project-holder">
          <div className="project">
            <div className="project-title">
              <span>
                Optimize Custom Fonts for PageSpeed Insights in Next.js
              </span>
              <p style={{ marginTop: "0.4rem" }}>
                This article covers the basics of optimizing custom fonts within
                Next.js to increase the overall performance score across
                Google’s PageSpeed Insights.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">Google Insights</p>
                <p className="subject">Tutorial</p>
              </div>
            </div>
            <Link
              href="https://medium.com/@justindavenport.space/optimize-custom-fonts-for-pagespeed-insights-in-next-js-334fe993b65a"
              target="_blank"
              rel="noopener noreferrer"
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
              <span>Create a Product Landing Page with GSAP in Next.js</span>
              <p style={{ marginTop: "0.4rem" }}>
                This article covers the basics of implementing GSAP’s
                ScrollTrigger in Next.js to create a cutting-edge product
                landing page.
              </p>
              <div className="subject-holder">
                <p className="subject">Next.js</p>
                <p className="subject">React</p>
                <p className="subject">GSAP</p>
                <p className="subject">Tutorial</p>
              </div>
            </div>
            <Link
              href="https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8"
              target="_blank"
              rel="noopener noreferrer"
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
        </div>
      </div>
    </>
  );
};

export default Articles;
