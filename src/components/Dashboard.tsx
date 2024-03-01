"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [image1, setImage1] = useState<boolean>(false);
  const [image1Preview, setImage1Preview] = useState<boolean>(false);

  const toggleImage1 = () => {
    setImage1(true);
    setImage1Preview(true);

    if (image1 === true) {
      setImage1(false);
      setImage1Preview(false);
    }
  };

  return (
    <div className="content-holder">
      <div className="content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            gap: "0.2rem",
            flexWrap: "wrap",
          }}
        >
          <span>Dashboard</span>
          <Link
            href="https://dashboard-six-snowy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2667ff" }}
          >
            Visit&nbsp;
            <i className="fa-solid fa-paperclip fa-sm"></i>
          </Link>
        </div>
        <div className="keyword-holder">
          <p className="keyword">Next.js</p>
          <p className="keyword">React</p>
          <p className="keyword">CSS</p>
          <p className="keyword">Project</p>
          <p className="keyword">Responsive</p>
        </div>
        <p className="project-description">
          A fully responsive mock company dashboard. Visit the Dashboard
          application or view the screenshot below.
        </p>
        <div className="img-container">
          <div className="img-content">
            <button onClick={toggleImage1} className="btn-img">
              <div
                className="blur"
                style={{
                  backdropFilter: image1Preview ? "none" : "blur(10px)",
                  border: image1Preview ? "1px solid #2667ff" : "",
                  background: "rgba(255, 255, 255, 0.125)",
                }}
              ></div>
              <Image
                src="/assets/dashboard/dashboard-min.png"
                className="img-preview"
                width={1920}
                height={1080}
                alt={""}
              />
            </button>
          </div>
        </div>
      </div>
      <Image
        className="large"
        src="/assets/dashboard/dashboard-min.png"
        style={{ display: image1 ? "block" : "none" }}
        width={1920}
        height={1080}
        alt={""}
      />
    </div>
  );
}
