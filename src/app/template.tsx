"use client";
import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div className="panel-holder" id="transition"></div>
      {children}
    </>
  );
}
