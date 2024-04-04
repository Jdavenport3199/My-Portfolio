import React from "react";
import { motion } from "framer-motion";

const AnimatedTextH1 = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 1.25 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 40,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.h1
          variants={child}
          key={index}
        >
          {word}
          <br />
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextH1;