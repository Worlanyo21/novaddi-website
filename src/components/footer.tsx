"use client";
// import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    services: [
      { label: "Digital Prescription Fulfillment", href: "#services" },
      { label: "Wellness Packs", href: "#services" },
      { label: "Enterprise UriScan", href: "#services" },
      { label: "Partner-Pharmacy Network", href: "#services" },
      { label: "Medical Devices & Consumables", href: "#services" },
      { label: "Corporate & Institutional Health", href: "#services" },
      // { label: "Cybersecurity", href: "#services" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#about" },
      // { label: "Knoxxi Health Partnerships", href: "#portfolio" },
      { label: "Careers", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
      // { label: "Blog", href: "#" }
    ],
    support: [
      { label: "LinkedIn: Novaddi", href: "#" },
      //   { label: "Documentation", href: "#" },
      //   { label: "API Reference", href: "#" },
      //   { label: "Status", href: "#" },
      { label: "Twitter/X: @NovaddiHealth", href: "#" },
      { label: "Instagram: @novaddi.health", href: "#" },
    ],
  };

  const socialLinks = [
    // { icon: Github, href: "https://github.com", label: "GitHub" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    // { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "", label: "LinkedIn" },
  ];

  return (
    <footer
      className={
        pathname === "/"
          ? "bg-black border-t border-primary/20 text-white/90"
          : "bg-slate-200 text-black"
      }
    >
      {/* Newsletter Section */}
      {/* <div className="container-custom py-16 border-b border-primary/10">
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with <span className="gradient-text">Meshlabs</span>
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get the latest insights on software development, technology trends, and exclusive 
            updates about our projects directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 glass-card border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button variant="glass" size="lg" className="group">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div
              onClick={() => scrollToSection("#home")}
              className={`flex items-center space-x-2 cursor-pointer group  text-white/90 mb-2`}
            >
              <div className="relative">
                <Image
                  src={
                    pathname === "/"
                      ? "/Novaddi-White-Logo.svg"
                      : "/Novaddi-Logo-Transparent.svg"
                  }
                  width={150}
                  height={150}
                  alt=""
                  className=""
                />
                {/* <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" /> */}
              </div>
              {/* <div className="flex flex-col">
                          <span className="text-xl lg:text-2xl font-bold">
                          Mesh Labs 
                        </span>
                        <span className="font-light uppercase">Technologies</span>
                        </div> */}

              {/* <Image src="/MeshLabsLogo.png" width={40} height={40} alt="Image" className="w-45 h-10"/> */}
            </div>
            <p className=" leading-relaxed mb-6">
              Upload your prescription, get pharmacist-approved medicines fast,
              and access preventive checks like Enterprise UriScan.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 ">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:hello@novaddi.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  hello@novaddi.com
                </a>
              </div>
              <div className="flex items-center gap-3 ">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+233550000000"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +233 55 000 0000
                </a>
              </div>
              <div className="flex items-center gap-3 ">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className=" hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className=" hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Socials</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className=" hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 ">
              <span>© {currentYear} Novaddi.</span> All rights reserved.
              {/* <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>in Ghana</span> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className=" mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-primary/5">
            <a
              href="#"
              className="text-sm  hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm  hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm  hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-sm  hover:text-primary transition-colors duration-300"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
