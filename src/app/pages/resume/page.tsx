import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume"
};

export default function Home() {
  return (
    <div className="embed-responsive">
      <embed
        src="\Resume.pdf"
        width="100%"
        height="1080"
        type="application/pdf"
      />
    </div>
  );
}
