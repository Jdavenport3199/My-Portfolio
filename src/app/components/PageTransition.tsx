import { motion } from "framer-motion";

export default function PageTransition({ children }: any) {
  const anim = (variants: any) => {
    return {
      inital: "inital",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const slide = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
    },
    exit: {
      y: "0",
    },
  };

  return (
    <div>
      <motion.div
        transition={{
          duration: 0.65,
          ease: [0.45, 0, 0.55, 1],
        }}
        className="slide"
        {...anim(slide)}
      />
      {children}
    </div>
  );
}
