"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function IMDb() {
  const [image, setImage] = useState<boolean>(false);

  const showImage = () => {
    setImage(true);

    if (image === true) {
      setImage(false);
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
          <span>IMDb</span>
          <Link
            href="https://www.figma.com/proto/fvEPHkapwuwyS7f6EdocPP/IMDB?type=design&node-id=19-1375&t=WtQrpK7P8tvHMsf0-8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A2610&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2667ff" }}
          >
            Visit&nbsp;
            <i className="fa-solid fa-paperclip fa-sm"></i>
          </Link>
        </div>
        <div className="keyword-holder">
          <p className="keyword">Figma</p>
          <p className="keyword">Prototype</p>
          <p className="keyword">Mobile</p>
          <p className="keyword">Redesign</p>
          <p className="keyword">Project</p>
        </div>
        <p className="project-description">
          A modern redesign of the Internet Movie Database mobile application,
          presented through a fully functional Figma prototype. Visit the IMDb
          Figma prototype or view the collection of screenshots below.
        </p>
        <div className="img-container">
          <div className="img-content">
            <button onClick={showImage} className="btn-img">
              <div
                className="blur"
                style={{
                  backdropFilter: image ? "none" : "blur(10px)",
                  WebkitBackdropFilter: image ? "none" : "blur(10px)",
                  border: image ? "1px solid #2667ff" : "",
                  background: "rgba(255, 255, 255, 0.125)",
                }}
              ></div>
              <Image
                src="/assets/imdb/cover-min.png"
                className="img-preview"
                width={1920}
                height={1080}
                alt={""}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: image ? "flex" : "none",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <div className="img-holder">
          <Image
            src="/assets/imdb/HomeMockup-min.png"
            alt={""}
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="img-holder">
          <Image
            src="/assets/imdb/WatchMockup-min.png"
            alt={""}
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="img-holder">
          <Image
            src="/assets/imdb/SearchMockup-min.png"
            alt={""}
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="img-holder">
          <Image
            src="/assets/imdb/ProfileMockup-min.png"
            alt={""}
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}
