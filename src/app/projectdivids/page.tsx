import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DiviDome",
};

export default function Divids() {
  return (
    <main>
      <Nav />

      <div
        className="container-holder-colored"
        style={{ paddingTop: "6rem", minHeight: 0 }}
      >
        <div className="container">
          <div className="project-holder">
            <div
              className="project"
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <span className="project-title">DiviDome</span>
              <Link
                className="project-link"
                href="https://dividome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
            <div className="project" style={{ paddingTop: 0 }}>
              <p>
                Brand Design & Implementation&ensp;<b>&middot;</b>&ensp;2024
              </p>
            </div>
            <div
              className="project"
              style={{ paddingBottom: 0, paddingTop: 0 }}
            >
              <p>
                A platform for users to explore publicly traded stock dividends.
                Visit the live site or view the screenshot below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-holder">
        <Image
          className="image"
          src="/assets/dividome/dividome.png"
          width={1920}
          height={1080}
          alt={""}
        />
      </div>
    </main>
  );
}