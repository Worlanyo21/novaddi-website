"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type CinematicTextProps = {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  className?: string;
};

export default function AnimationBody({
  text,
  delay = 0,
  animateBy = "words",
  className,
}: CinematicTextProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Split into words or letters
  const parts = animateBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01, // time between animations
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`flex flex-wrap ${className}`}
    >
      {parts.map((part, index) => (
        <motion.span key={index} variants={child} className="inline-block ">
          {part}
          {animateBy === "words" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}
