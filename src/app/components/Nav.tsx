import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="nav">
        {/* <Link href={"/"}>
          <i className="fa-solid fa-circle-nodes fa-lg" id="icon"></i>
        </Link> */}
        <div className="nav-right">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Work</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
      <div className="nav-dropdown">
        <div className="nav-button">
          <i className="fa-solid fa-ellipsis" id="nav-icon"></i>
          <Link href={"/"} className="nav-link">
            Home
          </Link>
          <Link href={"/"} className="nav-link">
            Work
          </Link>
          <Link href={"/"} className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
