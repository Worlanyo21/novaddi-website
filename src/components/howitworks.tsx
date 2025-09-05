"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: upload, inView: uploadView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pharmacist, inView: pharmacistView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: secure, inView: secureView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: delivery, inView: deliveryView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: medivault, inView: medivaultView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ladyPharmacist, inView: ladyPharmacistView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const ctrls = useAnimation();
  const text = "How MediVault works in 5 simple steps";

  // const mediVaultData = [
  //   {
  //     id: 1,
  //     title: "AI in Care",
  //     description:
  //       "Smart alerts and pattern-spotting (e.g., rising weekly blood pressure) that nudge timely action.",
  //   },
  //   {
  //     id: 2,
  //     title: "Enterprise UriScan",
  //     description:
  //       "AI-supported urinalysis with QR validation for strip authenticity/expiry; results in minutes with clear explanations and follow-up guidance when needed.",
  //   },
  //   {
  //     id: 3,
  //     title: "Connected Device Cloud",
  //     description:
  //       "A secure home for readings from blood pressure monitors, glucometers, oximeters, and wearables; share trends with clinicians (with consent).",
  //   },
  // ];

  React.useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  // useEffect(() => {
  //   if (heroRef.current) {
  //     gsap.fromTo(
  //       heroRef.current,
  //       { opacity: 0, scale: 1.1 },
  //       { opacity: 1, scale: 1, duration: 1, delay:2.8, ease: "easeInOut" }
  //     );
  //   }
  // }, []);

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
    <div className="px-10 lg:px-32 py-28 text-white bg-black ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="mt-2 text-center md:w-[100%]">
          <h1 className="text-5xl lg:text-7xl  ">
            {/* The five simple steps to smarter healthcare with MediVault */}
            {text.split(" ").map((word, index) => (
              <motion.span
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.2,
                  staggerChildren: 0.05,
                }}
                className={`inline-block mr-4 mb-2`}
              >
                {word.split("").map((char, i) => (
                  <motion.span
                    aria-hidden="true"
                    key={i}
                    variants={characterAnimation as any}
                    className={`inline-block`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="mt-10 hidden md:block">
          <motion.div
            ref={ladyPharmacist}
            initial={{ opacity: 0, y: 50 }}
            animate={ladyPharmacistView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex border border-teal-800 rounded-tr-4xl rounded-bl-4xl w-[500px]  shadow-md p-2 h-fit  bg-teal-950 "
          >
            <Image
              src="/medivault.png"
              alt=""
              width={600}
              height={600}
              className="oject-cover rounded-tr-3xl rounded-bl-3xl  3xl "
            />
          </motion.div>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <div className="grid grid-cols-1  items-center mt-10 gap-4">
            <motion.div
              ref={upload}
              initial={{ opacity: 0, y: 50 }}
              animate={uploadView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl border border-teal-800 shadow-md h-fit   p-4 md:w-[450px] mx-auto ml-16"
            >
              <h1 className="flex items-center font-bold text-lg text-teal-800  gap-x-2">
                <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit h-fit">
                  1
                </span>
                Upload your prescription
              </h1>
              <p className="text-md text-slate-800 font-bold  ml-8">
                Simply snap a photo or upload your e-prescription, and we’ll
                take care of the rest by confirming the details.
              </p>
            </motion.div>
            <div className=" h-14   border text-gray-700 mx-auto "></div>
            <motion.div
              ref={pharmacist}
              initial={{ opacity: 0, y: 50 }}
              animate={pharmacistView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-md h-fit   p-4 md:w-[450px] mx-auto mr-16"
            >
              <h1 className="flex items-center gap-x-2 font-bold text-xl text-teal-800 ">
                <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit h-fit">
                  2
                </span>
                Pharmacist safety check
              </h1>
              <p className="text-md text-slate-800 font-bold  ml-8">
                A licensed pharmacist checks your medication for correct dosage,
                possible interactions, and any risks.
              </p>
            </motion.div>
            <div className=" h-14   border text-gray-700 mx-auto "></div>
            <motion.div
              ref={secure}
              initial={{ opacity: 0, y: 50 }}
              animate={secureView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-md h-fit   p-4 md:w-[450px] mx-auto ml-16"
            >
              <h1 className="flex items-center  gap-x-2 font-bold text-xl text-teal-800">
                <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit h-fit">
                  3
                </span>
                Secure fulfillment
              </h1>
              <p className="text-md text-slate-800 font-bold  ml-8">
                Your medicines are sourced only from approved partners,
                serialized, and fully traceable..
              </p>
            </motion.div>
            <div className=" h-14   border text-gray-700 mx-auto "></div>
            <motion.div
              ref={delivery}
              initial={{ opacity: 0, y: 50 }}
              animate={deliveryView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-md h-fit   p-4 md:w-[450px] mx-auto mr-16"
            >
              <h1 className="flex  gap-x-2 font-bold text-xl text-teal-800  ">
                <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit h-fit">
                  4
                </span>
                Delivery your way
              </h1>
              <p className="text-md text-slate-800 font-bold  ml-8">
                Choose what works best: home delivery, office drop-off, click &
                collect, or even a smart locker (in select locations).
              </p>
            </motion.div>
            <div className=" h-14   border text-gray-700 mx-auto"></div>
            <motion.div
              ref={medivault}
              initial={{ opacity: 0, y: 50 }}
              animate={medivaultView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-md h-fit   md:w-[450px] mx-auto p-4 ml-16"
            >
              <h1 className="flex  gap-x-2 font-bold text-xl text-teal-800 ">
                <span className="p-1 px-2 mt-1 text-white text-xs bg-teal-800 rounded-full w-fit h-fit">
                  5
                </span>
                Adherence made easy with MediVault
              </h1>
              <p className="text-md text-slate-800 font-bold  ml-8">
                Inside the Knoxxi Health app, MediVault organizes your
                prescriptions, reminds you when to take doses, tracks your
                progress, and can even involve a caregiver if you’d like.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
