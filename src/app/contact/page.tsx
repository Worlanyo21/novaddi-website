"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDesk } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import { LuFactory } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { ref: about, inView: aboutView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: text, inView: textView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: form, inView: formView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: details, inView: detailsView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: image, inView: imageView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  //   const { ref: about, inView: aboutView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@novaddi.com",
      link: "mailto:hello@novaddi.com",
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      content: "+233 55 000 0000",
      link: "tel:+233550000000",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 8:00 - 20:00(GMT)",
      link: null,
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Novaddi Health Ltd. Accra, Ghana",
      link: null,
    },
  ];

  const supportInfo = [
    {
      icon: CiDeliveryTruck,
      title: "Orders & delivery",
      content: "support@novaddi.com",
      link: "mailto:support@novaddi.com",
    },
    {
      icon: MdDesk,
      title: "Pharmacist desk:",
      content: "pharmacist@novaddi.com",
      link: "mailto:pharmacist@novaddi.com",
    },
    {
      icon: Phone,
      title: "Urgent issues",
      content: "+233 55 000 0000",
      link: "tel:+233550000000",
    },
  ];

  const partnershipInfo = [
    {
      icon: MdLocalHospital,
      title: "Pharmacies & Clinics",
      content: "partners@novaddi.com",
      link: "mailto:partners@novaddi.com",
    },
    {
      icon: BiSolidInstitution,
      title: "Employers & Institutions:",
      content: "enterprise@novaddi.com",
      link: "mailto:enterprise@novaddi.com",
    },
    {
      icon: LuFactory,
      title: "Manufacturers & Suppliers",
      content: "+233 55 000 0000",
      link: "tel:+233550000000",
    },
  ];

  const socialInfo = [
    {
      icon: IoLogoLinkedin,
      title: "Linkedin",
      content: "Novaddi",
      link: "Novaddi",
    },
    {
      icon: FaXTwitter,
      title: "Twitter",
      content: "@NovaddiHealth",
      link: "@NovaddiHealth",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      content: "@novaddi.health",
      link: "@novaddi.health",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(false);
    console.log(loading);

    // const formData = new FormData(e.currentTarget);
    // const data = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   message: formData.get("message"),
    // };

    // await fetch("/api/send", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // setLoading(false);
    // setSent(true);
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="container-custom mt-16">
        <motion.div
          ref={about}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gradient-to-br from-[#41B782] to-teal-900 h-fit w-fit rounded-4xl px-4"
        >
          <h1 className="text-white text-lg font-semibold p-2  flex  items-center">
            Contact Us
          </h1>
        </motion.div>

        <div className="flex  rounded-xl  w-full     text-slate-900">
          <motion.div
            ref={text}
            initial={{ opacity: 0, y: 50 }}
            animate={textView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-gray-100  rounded-2xl p-10 mt-10"
          >
            <p className="mt-4 text-lg">
              Thank you for visiting{" "}
              <span className="font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                Novaddi
              </span>
              . We value your interest in our services, and we’re here to assist
              you in any way we can. Whether you have a question, need support,
              or want to explore partnership opportunities, please feel free to
              reach out to us. You can use the contact form on our website to
              send us a message directly.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={image}
          initial={{ opacity: 0, y: 50 }}
          animate={imageView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="my-10 w-full"
        >
          <Image
            src="/contact.jpg"
            alt="group1"
            width={1000}
            height={800}
            priority
            className="w-full h-[450px] rounded-xl object-cover object-top "
          />
        </motion.div>

        <div className="">
          <motion.div
            ref={form}
            initial={{ opacity: 0, y: 50 }}
            animate={formView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col md:flex-row mt-10 bg-gray-100 w-full rounded-2xl md:p-14 p-6 gap-x-8"
          >
            <div className="md:w-[50%] text-slate-900">
              <div>
                <h1 className="text-xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                  General Enquiries
                </h1>
                <p className="mt-1 text-md">
                  Please provide your name, email address, and a brief
                  description of your inquiry, and we’ll get back to you
                  promptly.
                </p>
                <div className="grid gap-4 mt-3">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="glass-card px-6 py-4 text-lg rounded-xl border border-slate-200 shadow group hover-scale bg-gray-50 w-full"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                          <info.icon className="h-6 w-6 text-teal-800" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-teal-800  group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-slate-900 hover:text-primary transition-colors duration-300"
                              target={
                                info.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                info.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {info.content}
                            </a>
                          ) : (
                            <span className="text-slate-900">
                              {info.content}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-[50%] mt-10">
              {sent ? (
                <p className="text-green-600 font-semibold">
                  ✅ Thanks for reaching out! We’ll be in touch soon.
                </p>
              ) : (
                <form
                  // ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col flex-1 p-6 rounded-xl border border-gray-200 shadow-lg  "
                >
                  <p className="text-2xl md:text-2xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                    Send Us a Message
                  </p>
                  <label className="mb-1 mt-2 font-semibold text-slate-800/90">
                    Your Name:
                  </label>
                  <input
                    name="name"
                    className="w-full bg-gray-50  rounded-xl h-11 px-4 border border-gray-200  shadow text-slate-900 placeholder:text-gray-500"
                    placeholder="Enter your name"
                    required
                  />
                  <label className="mt-4 font-semibold text-slate-800">
                    Email Address:
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-gray-50 rounded-xl h-11 px-4 border border-gray-200 text-slate-900  shadow mt-1 placeholder:text-gray-500"
                    placeholder="your@example.com"
                    required
                  />
                  {/* <label className="mt-4 font-semibold text-slate-800/90">Title:</label>
                <input
                  name="title"
                  className="w-full bg-transparent rounded-lg h-11 px-2 border-2 border-gray-200 text-slate-900  shadow-lg placeholder:text-gray-500"
                  placeholder="Project enquiry, collaboration..."
                /> */}
                  <label className="mt-4 font-semibold text-slate-800/90">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-50 rounded-xl h-28 p-2 border-2 border-gray-200 text-slate-900  shadow mt-1 placeholder:text-gray-500"
                    placeholder="Tell us briefly about your needs..."
                    required
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-900 rounded-lg h-10 px-6 hover:bg-gray-200/90 shadow-lg mt-4 text-white"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            ref={details}
            initial={{ opacity: 0, y: 50 }}
            animate={detailsView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col md:flex-row justify-between mt-10 gap-8 bg-gray-100 md:p-10 p-8 rounded-2xl w-full"
          >
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                Customer Support
              </h1>
              {/* <div className="flex flex-col gap-y-2 mt-4 bg-gray-100 p-6 rounded-2xl shadow-md"> */}
              <div className="grid gap-4 mt-3">
                {supportInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 text-lg rounded-xl border border-primary/30 shadow group hover-scale bg-gray-50 w-[370px]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                        <info.icon className="h-6 w-6 text-teal-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-teal-800  group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-900 hover:text-primary transition-colors duration-300"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="text-slate-900">{info.content}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                Partnerships
              </h1>
              <div className="grid gap-4 mt-3">
                {partnershipInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 text-lg rounded-xl border border-primary/30 shadow group hover-scale bg-gray-50 w-[370px]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                        <info.icon className="h-6 w-6 text-teal-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-teal-800  group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-900 hover:text-primary transition-colors duration-300"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="text-slate-900">{info.content}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                Social Media
              </h1>
              {/* <div className="flex flex-col gap-y-2 mt-4 bg-gray-100 p-6 rounded-2xl shadow-md"> */}
              <div className="grid gap-4 mt-3">
                {socialInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 text-lg rounded-xl border border-primary/30 shadow group hover-scale bg-gray-50 w-[370px]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                        <info.icon className="h-6 w-6 text-teal-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-teal-800  group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-900 hover:text-primary transition-colors duration-300"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="text-slate-900">{info.content}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
