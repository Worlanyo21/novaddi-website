"use client";
import React from "react";
import Image from "next/image";
import AnimationBody from "./AnimationBody";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: wellness, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: uriscan, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="bg-white ">
      <div className="mx-10 lg:mx-32 py-16 ">
        <div className="text-md p-2 px-4 bg-gradient-to-br from-[#41B782] to-teal-950  font-semibold w-fit rounded-full text-white">
          What we do
        </div>
        <div>
          <div className="flex mt-10 items-center ">
            <h1 className="text-slate-900 text-2xl font-semibold flex items-center gap-x-2">
              <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit">
                1
              </span>
              Digital Pharmacy
            </h1>
            <div className="flex-1 h-[1px] bg-teal-800 mt-4"></div>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col md:flex-row   justify-between gap-x-8"
          >
            <Image
              loading="lazy"
              width={600}
              height={400}
              src="/shopping-cart.jpg"
              alt="Digital Pharmacy"
              className="md:w-[50%] h-[300px] mt-4 object-cover rounded-xl"
            />
            <div className="mt-6 md:w-[50%] text-slate-900 text-lg">
              <AnimationBody
                animateBy="words"
                text="We make getting your medications simple and stress-free. Instead
                of waiting in long pharmacy lines, you can easily upload your
                prescription through our platform. Once submitted, our licensed
                pharmacists carefully review and verify it to ensure everything
                is accurate and safe. After approval, we&apos;ll have your medication
                delivered straight to your doorstep or to a convenient nearby
                pick-up location. For even more peace of mind, you can set up
                automatic refills so your prescriptions are always ready when
                you need them, and you&apos;ll never have to worry about running out
                of an important dose."
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={wellness}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: "easeInOut" }}
          className="mt-20"
        >
          <div className="flex mt-10 items-center ">
            <div className=" flex-1 h-[1px] bg-teal-800 mt-4"></div>
            <h1 className="text-slate-900 text-2xl font-semibold flex items-center gap-x-2 ml-1">
              <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit">
                2
              </span>
              Wellness Packs
            </h1>
          </div>
          <div className="flex flex-col md:flex-row   justify-between gap-x-8">
            <div className="mt-6 md:w-[50%] text-slate-900 text-lg">
              <AnimationBody
                animateBy="words"
                text="We've put together care bundles that make it easier to manage
                your health without the hassle. Each bundle is focused on real
                needs like hypertension, diabetes, women's and men's health,
                seniors, families, and even workplace wellness. Instead of just
                handing you medication, our bundles bring everything together:
                prescriptions, simple diagnostic tests, helpful devices, and
                easy-to-follow coaching. It's a complete package designed to
                help you stay on top of your health with the right treatment,
                the right tools, and guidance you can actually follow every day."
              />
              {/* <p>
                We&apos;ve put together care bundles that make it easier to manage
                your health without the hassle. Each bundle is focused on real
                needs—like hypertension, diabetes, women&apos;s and men&apos;s health,
                seniors, families, and even workplace wellness. Instead of just
                handing you medication, our bundles bring everything together:
                prescriptions, simple diagnostic tests, helpful devices, and
                easy-to-follow coaching. It&apos;s a complete package designed to
                help you stay on top of your health with the right treatment,
                the right tools, and guidance you can actually follow every day.
              </p> */}
            </div>
            <Image
              width={600}
              height={400}
              src="/consultation.jpg"
              alt="Wellness Packs"
              className="md:w-[50%] h-[300px] mt-4 object-cover rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          ref={uriscan}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: "easeInOut" }}
        >
          <div className="flex mt-10 items-center ">
            <h1 className="text-slate-900 text-2xl font-semibold flex items-center gap-x-2 mr-1">
              <span className="p-1 px-2 text-white text-xs bg-teal-800 rounded-full w-fit">
                3
              </span>
              Enterprise Uriscan
            </h1>
            <div className="flex-1 h-[1px] bg-teal-800 mt-4"></div>
          </div>
          <div className="flex flex-col md:flex-row   justify-between gap-x-8">
            <Image
              width={600}
              height={400}
              src="/urinalysis.png"
              alt="Urinalysis Image"
              className="md:w-[50%] h-[350px] mt-4 object-cover rounded-xl"
            />
            <div className="mt-6 md:w-[50%] text-slate-900 text-lg">
              <AnimationBody
                animateBy="words"
                text="We make health monitoring faster, smarter, and more convenient
                with our propprietary AI powered urinalysis. Using validated test strips, you
                can get reliable results in just a few minutes. It can be done right at your local pharmacy, at your
                workplace, in schools, or even in the privacy of your own home.
                This means individuals can easily stay on top of their health
                without disrupting their daily routines. For personal users,
                results are completely private and secure. For organizations
                such as employers, schools, or healthcare providers, we provide
                anonymized insights that help track group health trends without
                ever compromising individual privacy. By combining speed,
                accuracy, and accessibility, we're making routine health checks
                easier for everyone."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
