import Link from "next/link";

export default function Blackboard() {
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
          <span>Blackboard</span>
          <Link
            href="https://blackboard-nine.vercel.app/"
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
          A single page Next.js to-do list application. Visit and try the
          Blackboard application.
        </p>
      </div>
    </div>
  );
}
