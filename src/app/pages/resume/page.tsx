import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Home() {
  return (
    <div className="embed-responsive">
      <embed src="\Resume.pdf" type="application/pdf" />
    </div>
  );
}
