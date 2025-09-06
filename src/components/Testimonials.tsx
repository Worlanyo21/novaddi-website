"use client";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ArrowUpRight,
  ArrowRight,
  HeartPulse,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Ama, Accra",
      //   position: "CEO",
      //   company: "TechStart Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      text: "What I love most is the reliability. Refills come on time without me worrying, and MediVault helps me stay on track with my medication every single day. My BP has finally leveled out, and I feel like I’ve got my routine under control.",
      project: "Ama, Accra",
    },
    {
      id: 2,
      name: "HR Director, FMCG",
      //   position: "CTO",
      //   company: "FinanceFlow",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      text: "We were amazed at how smoothly the process went. UriScan helped us screen 300 staff members in just one day. Every single person received their results privately along with clear next steps, which gave our team real peace of mind.",
      project: "Mobile Banking Application",
    },
    // {
    //   id: 3,
    //   name: "Emily Rodriguez",
    //   position: "Founder",
    //   company: "HealthTech Solutions",
    //   avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   rating: 5,
    //   text: "Working with MeshlabsTech was a game-changer for our healthcare platform. Their cloud infrastructure solution scaled perfectly with our growth, and their ongoing support has been exceptional.",
    //   project: "Healthcare Management Platform"
    // },
    // {
    //   id: 4,
    //   name: "David Thompson",
    //   position: "Head of Digital",
    //   company: "RetailMax",
    //   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   rating: 5,
    //   text: "The e-commerce platform MeshlabsTech built for us is incredibly robust and user-friendly. Our online sales have tripled since launch, and the admin dashboard makes management effortless.",
    //   project: "E-commerce Platform"
    // },
    // {
    //   id: 5,
    //   name: "Lisa Wang",
    //   position: "Operations Manager",
    //   company: "LogiCorp",
    //   avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   rating: 5,
    //   text: "MeshlabsTech's custom software solution automated our entire workflow. What used to take hours now takes minutes. Their team understood our needs perfectly and delivered beyond expectations.",
    //   project: "Workflow Automation System"
    // }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      id="testimonials"
      className="section-padding pt-32 pb-10 bg-white text-slate-900"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container-custom"
      >
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-br from-[#41B782] to-teal-900  text-white font-semibold w-fit rounded-full mb-6 gap-2 p-2 px-4">
            <Quote className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real{" "}
            <span className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              stories
            </span>
            . Real{" "}
            <span className="bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              impact
            </span>
            .
          </h2>
          <p className="text-lg text-slate-900/90 max-w-3xl  text-center">
            Discover the power of Novaddi&apos;s innovative healthcare
            management platform through the success stories of our clients.
            Don&apos;t just take our word for it. See for yourself.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="w-full mb-6">
          <div className="border border-teal-800/80 bg-teal-50/10 shadow-lg p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            {/* Background Quote Icon */}
            <Quote className="absolute top-6 left-6 h-16 w-16 text-teal-800/70 -rotate-12" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 text-teal-800 fill-current"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-slate-900/90 leading-relaxed mb-8 italic">
              &quot;{currentTestimonial.text}&quot;
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <div className="font-bold text-lg">
                  {currentTestimonial.name}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-1 w-full">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-teal-800 scale-125"
                  : "bg-teal-800/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className=" mt-12 rounded-xl bg-gradient-to-br from-[#41B782] to-teal-950 w-full h-[400px] flex flex-col items-center justify-center text-center text-white">
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
      </motion.div>
    </div>
  );
};

export default Testimonials;
