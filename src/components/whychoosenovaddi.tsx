"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseNovaddi = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  // const { ref: novImage, inView: novView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const reasonData = [
    {
      id: 1,
      icon: "🛡️",
      title: "Safe & Reliable",
      description:
        "Pharmacist-checked therapy, verified sourcing, tamper-evident packaging",
    },
    {
      id: 2,
      icon: "⏱️",
      title: "On Time, Every Time",
      description: "Same-day or next-day where available; easy auto-refills.",
    },
    {
      id: 3,
      icon: "🧠",
      title: "Smarter Care",
      description:
        "Preventive diagnostics and clear next steps before small issues become big ones.",
    },
    {
      id: 4,
      icon: "🚚",
      title: "Your Health, Your Way",
      description:
        "Home delivery, pick-up, or smart lockers in select locations.",
    },
    {
      id: 5,
      icon: "🔄",
      title: "Complete Loop",
      description:
        "Novaddi delivers; MediVault in the Knoxxi Health app tracks and reminds, so adherence becomes second nature.",
    },
  ];

  return (
    <div
      className=" md:h-[600px] pt-16 bg-white "
      // style={{
      //       background:
      //         "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255)), radial-gradient(97.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
      //       clipPath: "ellipse(90% 85% at 13% 3%)",
      //     }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className=" ml-38 text-md font-bold p-2 px-4 bg-gradient-to-br from-[#41B782] to-teal-950 w-fit rounded-full">
          Why choose Novaddi
        </div>
        <div className="flex flex-col md:flex-row justify-between md:ml-38 mx-10">
          <div className="md:w-[60%] h-[90%] grid md:grid-cols-2 gap-6 mt-10 text-slate-900">
            {reasonData.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.28,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
                className=" h-fit"
              >
                <div className="flex items-center  gap-x-2">
                  <h1 className="text-xl font-bold">{reason.icon}</h1>
                  <h1 className="text-lg font-bold">{reason.title}</h1>
                </div>
                <p className="text-lg">{reason.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-[45%] justify-end items-end flex"
          >
            <Image src="/pills.png" alt="" width={700} height={600} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseNovaddi;
