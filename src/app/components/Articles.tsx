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
              <p>Tutorial</p>
              <span>Create a Product Landing Page with GSAP in Next.js</span>
            </div>
            <Link
              href="https://medium.com/@justindavenport.space/create-a-product-landing-page-with-gsap-in-next-js-9403e29b89d8"
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
        </div>
      </div>
    </>
  );
};

export default Articles;
