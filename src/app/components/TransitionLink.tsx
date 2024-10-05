"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../utils/animations";
import { Dispatch, SetStateAction } from "react";

interface Props {
  href: string;
  label: string;
  setPanelValue: Dispatch<SetStateAction<boolean>>;
}

const TransitionLink = ({ href, label, setPanelValue }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      aria-label={label}
      onClick={() => {
        // setPanelValue((prev) => !prev);
        handleClick();
      }}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
