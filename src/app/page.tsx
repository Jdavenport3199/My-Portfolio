"use client";
import Stack from "../components/Stack";
import Cinema from "../components/Cinema";
import Blackboard from "../components/Blackboard";
import Ocular from "../components/Ocular";
import Divids from "../components/Divids";
import IMDb from "../components/IMDb";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const contractDiv = useRef<HTMLDivElement>(null);
  const workDiv = useRef<HTMLDivElement>(null);
  const connectDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Test

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [emailForm, setEmailForm] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        topic: topic,
        message: message,
      }),
    });
    setEmailForm(false);
    // const json = await res.json();
    // console.log(json);
  };

  return (
    <main>
      <div className="nav">
        <button
          style={{ fontWeight: "400" }}
          onClick={() => scrollTo(contractDiv)}
        >
          Contract
        </button>
        <button style={{ fontWeight: "400" }} onClick={() => scrollTo(workDiv)}>
          My Work
        </button>
        <button
          style={{ fontWeight: "400" }}
          onClick={() => scrollTo(connectDiv)}
        >
          Connect
        </button>
      </div>

      <div className="container-holder">
        <div className="container" style={{ paddingTop: 0 }}>
          <div className="title">
            <h1 id="fade1">I&apos;m Justin.</h1>
            <h2 id="fade2">A Frontend Developer & UI/UX Designer.</h2>
          </div>
          <div>
            <h3 id="fade3">
              Start scrolling to explore a curated selection of projects and
              client commissions.&nbsp;
              <i
                className="fa-solid fa-arrow-trend-down"
                id="fade3"
                style={{ color: "#2667ff" }}
              ></i>
            </h3>
          </div>
        </div>
      </div>

      <div
        ref={contractDiv}
        className="container-holder"
        style={{
          background: "#f5f5f580",
          height: "100vh",
          marginTop: "4rem",
        }}
      >
        <div
          className="container"
          style={{ padding: "0", margin: "0", minHeight: "auto" }}
        >
          <h2 style={{ color: "#2667ff" }}>
            <i className="fa-solid fa-pencil fa-xs"></i>&nbsp;Contract.&nbsp;
          </h2>
          <p style={{ fontSize: "18px" }}>Available for commissions.</p>
          <div
            className="content-holder"
            style={{
              margin: "0",
              textAlign: "right",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "2rem",
            }}
          >
            <div
              style={{
                display: emailForm ? "none" : "block",
                textAlign: "center",
              }}
            >
              <p>
                <i
                  className="fa-regular fa-circle-check fa-xl"
                  style={{ color: "#2667ff" }}
                ></i>
                <br />
                Your message has been received.
                <br />A response will follow shortly.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{
                flexDirection: "column",
                gap: "0.4rem",
                alignContent: "baseline",
                display: emailForm ? "flex" : "none",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                placeholder="Topic"
                required
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
              />
              <textarea
                placeholder="Message"
                required
                style={{ height: "10rem", resize: "none" }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <button
                type="submit"
                style={{ marginTop: "0.6rem", color: "#2667ff" }}
              >
                Submit&nbsp;<i className="fa-regular fa-circle-check"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div ref={workDiv} className="container-holder">
        <div className="container" style={{ marginTop: "4rem" }}>
          <h2 style={{ color: "#2667ff" }}>
            <i className="fa-solid fa-code fa-xs"></i>&nbsp;My Work.&nbsp;
          </h2>
          <p style={{ fontSize: "18px" }}>
            A curated selection of projects and client commissions.
          </p>
          <Stack />
          <Cinema />
          <Blackboard />
          <Divids />
          <IMDb />
          <Ocular />
        </div>
      </div>

      <div
        ref={connectDiv}
        className="container-holder"
        style={{
          background: "#f5f5f580",
          height: "100vh",
          marginTop: "2rem",
        }}
      >
        <div
          className="container"
          style={{ padding: "0", margin: "0", minHeight: "auto" }}
        >
          <h2 style={{ color: "#2667ff" }}>
            <i className="fa-solid fa-paperclip fa-xs"></i>&nbsp;Connect.&nbsp;
          </h2>
          <p style={{ fontSize: "18px" }}>Follow me on social media.</p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4rem",
            marginTop: "2rem",
          }}
        >
          <Link
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/justindavenport99/"
            style={{ color: "#2667ff" }}
          >
            <i className="fa-brands fa-linkedin-in fa-2xl"></i>
          </Link>
          <Link
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Jdavenport3199"
            style={{ color: "#2667ff" }}
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </Link>
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          This material is protected by copyright law, prohibiting unauthorized
          reproduction, distribution, or usage without the explicit permission
          of the copyright owner.
          <br />
          &copy;All Rights Reserved. 2024.
        </p>
      </div>
    </main>
  );
}
