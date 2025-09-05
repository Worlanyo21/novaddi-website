"use client";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// import { useTheme } from "@/components/ThemeProvider";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //   const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("/");

  console.log(pathname, "pathname");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    // { href: "/partnerships", label: "Knoxxi Health Partnerships" },
    { href: "/careers", label: "Careers" },
    // { href: "/contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href) {
      router.push(href);
      setIsOpen(false);
    }
  };

  console.log(activeSection, "activeSection");

  // useEffect(() => {
  //   const observers: IntersectionObserver[] = [];

  //   navItems.forEach((id) => {
  //     const section = document.getElementById(id.href);
  //     if (!section) return;

  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(id.href);
  //         }
  //       },
  //       {
  //         root: null,
  //         rootMargin: "0px",
  //         threshold: 0.26, // adjust depending on how much should be in view
  //       }
  //     );

  //     observer.observe(section);
  //     observers.push(observer);
  //   });

  //   return () => {
  //     observers.forEach((observer) => observer.disconnect());
  //   };
  // }, []);

  useEffect(() => {
    if (!pathname) return;

    // Match pathname with one of your navItems
    const match = navItems.find((item) => item.href === pathname);
    if (match) {
      setActiveSection(`${match.href}`);
    }
  }, [pathname, navItems]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        pathname === "/" && isScrolled && "bg-black/40 backdrop-blur-3xl",
        pathname === "/" &&
          !isScrolled &&
          "bg-transparent animate-fade-in-down",
        pathname !== "/" && "bg-white/20 border-b w-full backdrop-blur-3xl"
      )}
    >
      <div className="container-custom">
        {/* <div className=" "> */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div
            onClick={() => scrollToSection("#home")}
            className={`flex items-center space-x-2 cursor-pointer group mt-2  ${activeSection === "services" ? " text-slate-950" : ""}`}
          >
            <Image
              src={
                pathname === "/"
                  ? "/Novaddi-White-Logo.svg"
                  : "/Novaddi-Logo-Transparent.svg"
              }
              width={100}
              height={70}
              alt="Image"
              className=""
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(`${item.href}`)}
                className={`hover:text-[#41B782] transition-colors duration-300 font-semibold text-[15px] fon relative group cursor-pointer  
                  ${pathname === `/` ? " text-white " : "text-black "}
                  ${
                    pathname === item.href
                      ? "text-[#41B782] transition-colors duration-300 relative group"
                      : ""
                  }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#41B782] group-hover:w-full transition-all duration-300 ${pathname === item.href ? "w-full " : "hidden"}`}
                ></span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection("/contact")}
              className="relative p-2 pl-4 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950 backdrop-blur-2xl "
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative flex items-center z-10 text-white group-hover:text-black transition-colors duration-400">
                Contact us
                <span className="ml-2 relative w-7 h-7">
                  {/* ArrowUpRight (default) */}
                  <ArrowUpRight
                    className="absolute inset-0 h-6 w-6 p-1 rounded-full bg-white text-slate-900 
                   transition-transform duration-500
                   group-hover:rotate-45 group-hover:opacity-0"
                  />
                  {/* ArrowRight (hover) */}
                  <ArrowRight
                    className="absolute inset-0 h-6 w-6 p-1 rounded-full bg-white text-slate-900 
                   opacity-0 rotate-[-45deg] 
                   transition-transform duration-500
                   group-hover:rotate-0 group-hover:opacity-100 group-hover:bg-gradient-to-br from-[#41B782] to-teal-950 group-hover:text-white"
                  />
                </span>
              </span>
            </button>
          </div>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu
                className={`h-6 w-6 ${pathname === "/" ? "text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-card mt-2 rounded-lg  bg-black overflow-hidden animate-fade-in-up">
            <div className="flex flex-col space-y-2 p-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(`${item.href}`)}
                  className=" text-white hover:bg-teal-950 cursor-pointer transition-colors duration-300 py-2 font-semibold rounded-lg"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  onClick={() => scrollToSection("/contact")}
                  className="relative p-2 pl-4 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950 backdrop-blur-2xl "
                >
                  <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                  <span className="relative flex items-center z-10 text-white group-hover:text-black transition-colors duration-400">
                    Contact us
                    <span className="ml-2 relative w-7 h-7">
                      {/* ArrowUpRight (default) */}
                      <ArrowUpRight
                        className="absolute inset-0 h-6 w-6 p-1 rounded-full bg-white text-slate-900 
                   transition-transform duration-500
                   group-hover:rotate-45 group-hover:opacity-0"
                      />
                      {/* ArrowRight (hover) */}
                      <ArrowRight
                        className="absolute inset-0 h-6 w-6 p-1 rounded-full bg-white text-slate-900 
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
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navigation;
