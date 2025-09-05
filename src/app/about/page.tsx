"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight, HeartPulse, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ourVision, inView: ourVisionView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ourInnovation, inView: ourInnovationView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ourGovernance, inView: ourGovernanceView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: about, inView: aboutView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const innovationList = [
    {
      id: 1,
      title: "AI in Care",
      description:
        "Smart alerts that spot trends, like noticing when your blood pressure is creeping up and give you a gentle nudge to act early.",
      image: "/aiCare.jpg",
    },
    {
      id: 2,
      title: "Enterprise UriScan",
      description:
        "Quick AI-powered urinalysis with built-in QR checks to confirm strip authenticity and expiry. Get your results in minutes, explained clearly, with guidance on what to do next if needed.",
      image: "/urinalysis2.webp",
    },
    {
      id: 3,
      title: "Connected Device Cloud",
      description:
        "A secure home for readings from blood pressure monitors, glucometers, oximeters, and wearables; share trends with clinicians (with consent).",
      image: "/cloud.webp",
    },
  ];

  return (
    <div className=" bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8  mt-16">
        <motion.div
          ref={about}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gradient-to-br from-[#41B782] to-teal-900 h-fit w-fit rounded-4xl px-4"
        >
          <h1 className="text-white text-lg font-semibold p-2  flex  items-center">
            About Us
          </h1>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 md:px-16 rounded-4xl mt-6"
        >
          <div className="mt-6 ml-2">
            <h1 className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent text-3xl font-semibold ">
              Our Story
            </h1>

            <p className="text-slate-900 text-lg md:w-[90%]">
              We started Novaddi to remove the stress from everyday healthcare.
              What began as a digital pharmacy is now a connected platform that
              blends prescriptions, preventive diagnostics, and straightforward
              guidance so people can live more and worry less.
            </p>
          </div>

          <div className="my-10 w-full">
            <Image
              src="/doctor2.jpg"
              alt="group1"
              width={900}
              height={400}
              className="w-full  rounded-xl  object-cover  h-[500px] "
            />
          </div>
        </motion.div>

        <motion.div
          ref={ourVision}
          initial={{ opacity: 0, y: 50 }}
          animate={ourVisionView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 md:px-16 rounded-4xl mt-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-8 mt-16 ">
            <div className="flex flex-col justify-between bg-gradient-to-br from-[#41B782] to-teal-800 h-fit w-full rounded-4xl p-7 py-6 ">
              <h1 className="text-black text-md font-semibold md:w-[30%]">
                <span className="text-black  bg-white rounded-full p-2 px-4 w-fit ">
                  Our Mission
                </span>
              </h1>

              <p className="text-white font-semibold text-lg w-[90%] mt-2">
                To put safe medicines, smart diagnostics, and simple care in
                everyone’s hands.
              </p>
            </div>

            <div className="flex flex-col justify-between  bg-gradient-to-br from-[#41B782] to-teal-800 h-fit w-full rounded-4xl p-7 py-6">
              <h1 className="text-black text-md font-semibold md:w-[30%]">
                <span className="text-black  bg-white rounded-full p-2 px-4 w-fit">
                  Our Vision
                </span>
              </h1>

              <p className="text-white font-semibold text-lg w-[90%] mt-2">
                A future where healthcare is proactive, personal, and available
                to anyone, anywhere.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent mb-16">
            <h1 className="text-3xl font-semibold mt-10">Our Values</h1>
            <ol className="list-disc list-inside text-lg font-bold text-black">
              <li>
                Trust First —{" "}
                <span className="font-light text-lg">
                  {" "}
                  Verified medicines, pharmacist oversight, transparent quality.
                </span>
              </li>
              <li>
                Prevention Over Cure —{" "}
                <span className="font-light text-lg">
                  {" "}
                  Act early with easy, practical testing.
                </span>
              </li>
              <li>
                Keep It Simple —{" "}
                <span className="font-light text-lg">
                  {" "}
                  Clear next steps, everyday language, fast results.
                </span>
              </li>
              <li>
                Stronger Together —{" "}
                <span className="font-light text-lg">
                  {" "}
                  Pharmacies, employers, clinicians, and programs aligned around
                  outcomes.
                </span>
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          ref={ourGovernance}
          initial={{ opacity: 0, y: 50 }}
          animate={ourGovernanceView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 md:px-16 rounded-4xl mt-6"
        >
          <div className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent  my-6">
            <h1 className="text-3xl font-semibold">
              Government and Society
            </h1>
            <p className="text-slate-900 text-lg md:w-[90%]">
              Every step is built on trust and care. Our licensed pharmacists
              follow proven clinical standards, while quality checks ensure
              safety. Medicines stay protected with cold-chain monitoring when
              needed, and your data is always secure through consent-first
              practices, advanced encryption, and controlled access
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ourInnovation}
          initial={{ opacity: 0, y: 50 }}
          animate={ourInnovationView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 md:px-16 rounded-4xl mt-6"
        >
          <div className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent my-16">
            <h1 className="text-3xl font-semibold mt-10">
              Innovation at Novaddi
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
              {innovationList.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: index * 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="group glass-card rounded-2xl overflow-hidden hover-scale hover:shadow-elevated transition-all duration-500 shadow-md">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-black">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className=" flex justify-center items-center my-18">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gao-x-4 border bg-gray-50 border-gray-200  glass-card rounded-2xl overflow-hidden hover-scale hover:shadow-elevated transition-all duration-500 shadow-md">
                  <div className="md:w-[60%] relative overflow-hidden">
                    <Image
                      src={"/next.jpg"}
                      alt={"whats next"}
                      width={500}
                      height={400}
                      className=" h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className=" md:w-[70%] pt-4 mx-6">
                    {/* <h3 className="text-xl text-black font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3> */}
                    <p className=" leading-relaxed text-black md:text-lg py-4">
                      The future of healthcare is smarter, more personal, and
                      built around you. With your consent, genomics will unlock
                      insights unique to your DNA. AI-powered imaging across
                      ECGs, ultrasounds, and X-rays will be paired with expert
                      validation, ensuring every result is both fast and
                      reliable. And at the population level, we’re creating
                      systems that can spot early warning signals through
                      secure, de-identified trends—helping entire communities
                      stay healthier, together. It’s a future where care finds
                      problems before they find you.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className=" mt-12 rounded-xl bg-gradient-to-br from-[#41B782] to-teal-900 w-full h-[400px] flex flex-col items-center justify-center text-center text-white">
          <HeartPulse className="bg-white rounded-full p-2 text-slate-900 w-10 h-10 my-1" />
          <p className="font-bold text-3xl">Ready to Transform Your Health? </p>
          <p className="text-xl md:w-[60%] mt-2 px-4">
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

export default AboutUs;
