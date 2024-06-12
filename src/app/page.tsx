"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Articles from "./components/Articles";
import GridLoader from "react-spinners/GridLoader";
import { switzer } from "./ui/fonts";

export default function Home() {
  //   const div = useRef<HTMLDivElement>(null);

  //   const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "2rem";
          nav.current.style.height = "3rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "2rem";
        nav.current.style.height = "3rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-3.25rem";
        nav.current.style.height = "3rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  const [translateX, setTranslateX] = useState("-50%");
  const handleTranslate = (newTranslateX: any) => {
    setTranslateX(newTranslateX);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    scrollToTop();
  }, [translateX]);

  return (
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <div className="nav" ref={nav}>
        <div className="nav-nav">
          <div className="nav-sub">
            <div className="nav-links">
              <div
                className="nav-slider"
                style={{
                  transform: `translateX(${translateX})`,
                }}
              ></div>
              <button onClick={() => handleTranslate("-50%")} aria-label="Work">
                Work
              </button>
              <button
                onClick={() => handleTranslate("50%")}
                aria-label="Articles"
              >
                Articles
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-holder">
          <GridLoader color="#070707aa" size={10} />
        </div>
      ) : (
        <>
          <div
            className="container-holder"
            style={{
              minHeight: "100vh",
              display: translateX === "-50%" ? "flex" : "none",
            }}
          >
            <div className="text-holder">
              <div className="splash-title-holder">
                <h1 className={`splash-title-right ${switzer.className}`}>
                  WEB DEVELOPER
                </h1>
                <h1 className="divider">
                  <b
                    style={{
                      fontWeight: "200",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    |
                  </b>
                </h1>
                <h1 className={`splash-title-left ${switzer.className}`}>
                  PRODUCT DESIGNER
                </h1>
              </div>
              <p className="splash-p">
                I&apos;m Justin, a Web Developer and Product Designer located in
                Charlotte, NC.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="social-btn-holder">
                  <Link
                    href="mailto:justindavenport.space@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                  >
                    <button className="social-btn" aria-label="Email">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="22"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="white"
                          d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/justindavenport99/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <button className="social-btn" aria-label="LinkedIn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        width="24"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/Jdavenport3199"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <button className="social-btn" aria-label="GitHub">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        width="24"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="white"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://dribbble.com/justindavenport"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble"
                  >
                    <button className="social-btn" aria-label="Dribbble">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        width="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="white"
                          d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://www.behance.net/justindavenportspace"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                  >
                    <button className="social-btn" aria-label="Behance">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        width="24"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="white"
                          d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>

              {/* <svg
                className="pulse"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="24"
                viewBox="0 0 512 512"
              >
                <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
              </svg> */}
            </div>
          </div>

          <Work translateX={translateX} />
          <Articles translateX={translateX} />
          <Footer />
        </>
      )}
    </main>
  );
}
