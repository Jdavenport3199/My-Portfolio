import Link from "next/link";

export default function Ocular() {
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
          <span>Ocular Vibrations</span>
          <Link
            href="https://ocularvibrations.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2667ff" }}
          >
            Visit&nbsp;
            <i className="fa-solid fa-paperclip fa-sm"></i>
          </Link>
        </div>
        <div className="keyword-holder">
          <p className="keyword">HTML</p>
          <p className="keyword">CSS</p>
          <p className="keyword">JavaScript</p>
          <p className="keyword">APIs</p>
          <p className="keyword">Project</p>
          <p className="keyword">Responsive</p>
        </div>
        <p className="project-description">
          An ecommerce platform, utilizing Stripe API integration. Visit the
          OCULAR VIBRATIONS platform.
        </p>
      </div>
    </div>
  );
}
