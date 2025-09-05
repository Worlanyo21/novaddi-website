"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const DownloadApp = () => {
  const { ref: download, inView: downloadView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className=" bg-gray-100 text-black py-32">
      <motion.div
        ref={download}
        initial={{ opacity: 0, y: 50 }}
        animate={downloadView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center w-full mx-auto "
      >
        <small className="uppercase mb-4 font-semibold mx-auto text-center w-[80%]">
          you confirm every order yourself before we deliver. safe and secure.
        </small>
        <p className="font-semibold text-3xl md:text-5xl w-[70%] text-center">
          Start Using{" "}
          <span className="bg-gradient-to-br from-[#41B782] to-teal-900 bg-clip-text text-transparent">
            MediVault
          </span>{" "}
          in the Knoxxi Health App Today
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.knoxxi.health"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-8 py-4 rounded-xl mt-8 text-lg text-left gap-x-1 cursor-pointer hover:bg-gray-800"
          >
            <Image
              src={"/google-play.png"}
              width={55}
              height={30}
              alt={"google play"}
            />
            <div>
              Get it on <br />
              <span className="font-bold text-2xl">Google Play</span>
            </div>
          </a>
          <a
            href="https://apps.apple.com/gh/app/knoxxi-health/id6738387851"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 cursor-pointer bg-black text-white px-8 py-4 rounded-xl mt-8 text-lg hover:bg-gray-800"
          >
            <Image
              src={"/apple-white.png"}
              width={55}
              height={30}
              alt={"apple store"}
            />
            <div>
              Download on the <br />
              <span className="font-bold text-2xl">App Store</span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadApp;
