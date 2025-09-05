"use client";
// import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BlurText from "./burText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useRouter } from "next/navigation";

// import group3 from "/group3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  // const [particles, setParticles] = useState<any>([]);
  // const [mounted, setMounted] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const ctrls = useAnimation();
  // const text = "More Than a Pharmacy. Where Medicine Meets Intelligence.";

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  // const handleScroll = () => {
  //   const element = document.querySelector("#about");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   const newParticles = [...Array(20)].map(() => ({
  //     left: `${Math.random() * 100}%`,
  //     top: `${Math.random() * 100}%`,
  //     animationDelay: `${Math.random() * 6}s`,
  //     animationDuration: `${4 + Math.random() * 4}s`,
  //   }));
  //   setParticles(newParticles);
  // }, []);

  React.useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1, delay: 2.8, ease: "easeInOut" }
      );
    }
  }, []);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section
      // ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center  overflow-hidden "
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div
        ref={heroRef}
        className="absolute inset-0 will-change-transform will-change-opacity opacity-0 scale-[1.1]"
      >
        <Image
          fill
          src={"/Hero-chemist.jpg"}
          alt="Hero Image"
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover  object-top w-full h-full opacity-62 "
        />
      </div>

      {/* Content */}
      <div className="relative z-10  text-left lg:ml-32 ml-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-[75%]">
            <BlurText
              text={`More Than a Pharmacy. Where Medicine Meets Intelligence.`}
              delay={300}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="mb-3 "
            />
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold w-fit pb-2 ">
             {text.split(" ").map((word, index) => (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.3,
              staggerChildren: 0.09,
            }}
            className={`inline-block mr-4 mb-2`}
          >
            {word.split("").map((char, i) => (
              <motion.span
                aria-hidden="true"
                key={i}
                variants={characterAnimation}
                className={`inline-block`}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
        </h1> */}
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-lg text-foreground/98 mb-6 max-w-3xl  leading-relaxed animate-fadeHero-in-up">
            Upload your prescription, get pharmacist-approved medicines fast,
            and access preventive checks like Enterprise UriScan.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex    items-center animate-fadeHero-in-up">
            <button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center group text-white font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 cursor-pointer w-fit rounded-full p-4 px-6"
            >
              Reach out to us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div> */}

          {/* <button className="relative p-4 px-6 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950">
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
            <span className="relative flex items-center z-10 text-white group-hover:text-black transition-colors duration-400">
              Reach out to us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>

          </button> */}

          <button
            onClick={() => router.push("/contact")}
            className="relative p-4 px-4 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950 backdrop-blur-2xl animate-fadeHero-in-up"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
            <span className="relative flex items-center z-10 text-white group-hover:text-black transition-colors duration-400">
              Reach out to us
              <span className="ml-2 relative w-7 h-7">
                {/* ArrowUpRight (default) */}
                <ArrowUpRight
                  className="absolute inset-0 h-7 w-7 p-1 rounded-full bg-white text-slate-900 
                   transition-transform duration-500
                   group-hover:rotate-45 group-hover:opacity-0"
                />
                {/* ArrowRight (hover) */}
                <ArrowRight
                  className="absolute inset-0 h-7 w-7 p-1 rounded-full bg-white text-slate-900 
                   opacity-0 rotate-[-45deg] 
                   transition-transform duration-500
                   group-hover:rotate-0 group-hover:opacity-100 group-hover:bg-gradient-to-br from-[#41B782] to-teal-950 group-hover:text-white"
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
