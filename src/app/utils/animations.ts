import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transition = document.getElementById("transition");
  const tl = gsap.timeline();

  tl.fromTo(
    transition,
    {
      opacity: 1,
      visibility: "visible",
    },
    {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        transition!.style.visibility = "hidden";
      },
    }
  );
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const transition = document.getElementById("transition");
  const tl = gsap.timeline();
  transition!.style.visibility = "visible";

  tl.to(transition, {
    opacity: 1,
    duration: 1,
    background: "var(--background-color)",
    ease: "power2.inOut",
    onComplete: () => {
      router.push(href);
    },
  });
};
