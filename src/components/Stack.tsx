"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Stack() {
  const [image1, setImage1] = useState<boolean>(false);
  const [image2, setImage2] = useState<boolean>(false);
  const [image3, setImage3] = useState<boolean>(false);
  const [image1Preview, setImage1Preview] = useState<boolean>(false);
  const [image2Preview, setImage2Preview] = useState<boolean>(false);
  const [image3Preview, setImage3Preview] = useState<boolean>(false);

  const toggleImage1 = () => {
    setImage1(true);
    setImage1Preview(true);
    setImage2(false);
    setImage2Preview(false);
    setImage3(false);
    setImage3Preview(false);

    if (image1 === true) {
      setImage1(false);
      setImage1Preview(false);
    }
  };

  const toggleImage2 = () => {
    setImage1(false);
    setImage1Preview(false);
    setImage2(true);
    setImage2Preview(true);
    setImage3(false);
    setImage3Preview(false);

    if (image2 === true) {
      setImage2(false);
      setImage2Preview(false);
    }
  };

  const toggleImage3 = () => {
    setImage1(false);
    setImage1Preview(false);
    setImage2(false);
    setImage2Preview(false);
    setImage3(true);
    setImage3Preview(true);

    if (image3 === true) {
      setImage3(false);
      setImage3Preview(false);
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
          <span>Stack</span>
          <Link
            href="https://stack-three-psi.vercel.app/"
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
          <p className="keyword">Client</p>
          <p className="keyword">Commission</p>
          <p className="keyword">Responsive</p>
        </div>
        <p className="project-description">
          A platform for modern tech stack visualization, capture visual
          narratives of your app&apos;s core component. Visit the Stack platform
          or view the collection of screenshots below.
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
                src="/assets/stack/home-min.png"
                className="img-preview"
                width={1920}
                height={1080}
                alt={""}
              />
            </button>
            <button onClick={toggleImage2} className="btn-img">
              <div
                className="blur"
                style={{
                  backdropFilter: image2Preview ? "none" : "blur(10px)",
                  border: image2Preview ? "1px solid #2667ff" : "",
                  background: "rgba(255, 255, 255, 0.125)",
                }}
              ></div>
              <Image
                src="/assets/stack/stack-min.png"
                className="img-preview"
                width={1920}
                height={1080}
                alt={""}
              />
            </button>
            <button onClick={toggleImage3} className="btn-img">
              <div
                className="blur"
                style={{
                  backdropFilter: image3Preview ? "none" : "blur(10px)",
                  border: image3Preview ? "1px solid #2667ff" : "",
                  background: "rgba(255, 255, 255, 0.125)",
                }}
              ></div>
              <Image
                src="/assets/stack/profile-min.png"
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
        src="/assets/stack/home-min.png"
        style={{ display: image1 ? "block" : "none" }}
        width={1920}
        height={1080}
        alt={""}
      />
      <Image
        className="large"
        src="/assets/stack/stack-min.png"
        style={{ display: image2 ? "block" : "none" }}
        width={1920}
        height={1080}
        alt={""}
      />
      <Image
        className="large"
        src="/assets/stack/profile-min.png"
        style={{ display: image3 ? "block" : "none" }}
        width={1920}
        height={1080}
        alt={""}
      />
    </div>
  );
}
