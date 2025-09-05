"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";

const Career = () => {
  const router = useRouter();
  // const { ref: career, inView: careerView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: text, inView: textView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: image, inView: imageView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50 w-full pb-20">
      <div className="container-custom mt-16">
        <div className="text-center mb-16 pt-16">
          {/* <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-black">
            Build Your{" "}
            <span className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              Career
            </span>{" "}
            with Novaddi
          </h2>
          <p className="text-lg text-slate-900/90 max-w-3xl mx-auto">
            Join a team of passionate innovators and help shape the future of
            healthcare. We&apos;re always looking for passionate and talented
            individuals who share our vision of making healthcare accessible to
            all.
          </p>
        </div>
        <div className="container-custom flex flex-col md:flex-row rounded-2xl bg-gray-100 p-10 gap-y-6 items-center justify-between w-full  pb-16 gap-x-10 ">
          <motion.div
            ref={text}
            initial={{ opacity: 0, y: 50 }}
            animate={textView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-gray-100  rounded-2xl md:px-10 text-black md:w-[50%] md:h-[450px]"
          >
            <p className="mt-4 text-xl md:text-3xl">
              We’re hiring across{" "}
              <span className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent font-bold">
                pharmacy operations, AI/data science, engineering, design,
                partnerships, and growth
              </span>
              . <br /><br />
              Expect meaningful work, growth opportunities, flexible setups,
              wellness perks and the chance to build health systems people truly
              love to use.
            </p>
          </motion.div>

          <motion.div
            ref={image}
            initial={{ opacity: 0, y: 50 }}
            animate={imageView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="md:w-[50%] pr-10"
          >
            <Image
              src="/corporate5.jpg"
              alt="group1"
              width={1000}
              height={800}
              priority
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        <div className=" mt-12 rounded-xl bg-gradient-to-br from-[#41B782] to-teal-900 w-full h-[400px] flex flex-col items-center justify-center text-center text-white">
          <HeartPulse className="bg-white rounded-full p-2 text-slate-900 w-10 h-10 my-1" />
          <p className="font-bold text-3xl">Ready to join our team? </p>
          <p className="text-xl w-[60%] mt-2">
            Interested in partnering with us, joining our care team, or learning
            more about how Novaddi is transforming health? We’d love to hear
            from you!
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="relative p-3 mt-4 px-4 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950 backdrop-blur-2xl "
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
    </div>
  );
};

export default Career;
