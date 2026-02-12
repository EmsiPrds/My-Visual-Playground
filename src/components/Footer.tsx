import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

import LogoBlack from "@/assets/logo-plain-black.svg";
import LogoWhite from "@/assets/logo-plain-white.svg";

interface FooterProps {
  darkMode: boolean;
}

type Theme = "light" | "dark" | "yellow";

// Helper function to get current theme from DOM
const getCurrentTheme = (): Theme => {
  const root = document.documentElement;
  if (root.classList.contains("yellow")) return "yellow";
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Footer({ darkMode: _propDarkMode }: FooterProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getCurrentTheme());
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const isDark = currentTheme === "dark";
  const isYellow = currentTheme === "yellow";
  const logo = isDark ? LogoWhite : LogoBlack;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/EmsiPrds",
      name: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/mc-vincent-paredes-4203122b7/",
      name: "LinkedIn",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/MCart0121",
      name: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/mcprds/",
      name: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      className={`relative overflow-hidden pt-24 pb-12 transition-colors duration-500 ${
        isDark
          ? "bg-primary text-secondary"
          : isYellow
            ? "bg-yellow-100 text-yellow-900"
            : "bg-white text-primary"
      }`}
    >
      {/* Background Large Text Decor */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none overflow-hidden ${isYellow ? "opacity-[0.05]" : ""}`}
      >
        <h2 className="text-[25vw] font-fugaz text-center whitespace-nowrap uppercase leading-none tracking-tighter">
          MVP VISUALS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center space-x-3 mb-8 group cursor-pointer">
              <div className="w-16 h-16 bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={logo}
                  alt="MVP Visuals Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-fugaz text-2xl tracking-tighter uppercase">
                MVP Visuals
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed mb-8 font-poppins font-light ${isDark ? "text-gray-400" : isYellow ? "text-yellow-800/80" : "text-gray-500"}`}
            >
              Where Design, Art, and Technology Connect. We build digital
              products that leave a lasting impression.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 text-gray-400 hover:bg-accent hover:text-primary"
                      : isYellow
                        ? "bg-yellow-200/50 text-yellow-800 hover:bg-yellow-400 hover:text-primary"
                        : "bg-gray-100 text-gray-600 hover:bg-accent hover:text-primary"
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bakbak text-xl mb-10 relative inline-block uppercase">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`group flex items-center text-sm font-medium transition-all duration-300 ${
                      isDark
                        ? "text-gray-400 hover:text-accent"
                        : isYellow
                          ? "text-yellow-800 hover:text-yellow-600"
                          : "text-gray-600 hover:text-accent"
                    }`}
                  >
                    <span className="mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <ArrowUpRight size={16} className="text-accent" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bakbak text-xl mb-10 relative inline-block uppercase">
              Our Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm font-poppins font-medium">
              {[
                "Modern UI/UX Design",
                "Modern Web Experiences",
                "Brand Identity Design",
                "Full-stack Development",
                "Creative Technology",
              ].map((service) => (
                <li
                  key={service}
                  className={`flex items-center space-x-2 ${isDark ? "text-gray-400" : isYellow ? "text-yellow-800/80" : "text-gray-600"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${isYellow ? "bg-yellow-400" : "bg-accent/40"}`}
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bakbak text-xl mb-10 relative inline-block uppercase">
              Let's Connect
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <p
              className={`text-sm mb-8 font-poppins ${isDark ? "text-gray-400" : isYellow ? "text-yellow-800/80" : "text-gray-600"}`}
            >
              Got a project? Drop us a line and let's create something
              extraordinary together.
            </p>
            <motion.a
              href="mailto:contact@mvpvisuals.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center p-4 rounded-2xl border-2 transition-all duration-300 group ${
                isDark
                  ? "border-white/10 bg-white/5 hover:border-accent/50"
                  : isYellow
                    ? "border-yellow-200 bg-yellow-50/50 hover:border-yellow-400/50"
                    : "border-gray-100 bg-gray-50 hover:border-accent/50 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="bg-accent p-3 rounded-xl text-primary mr-5 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <p
                  className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-0.5 ${isYellow ? "text-yellow-600" : "text-accent"}`}
                >
                  Contact Us
                </p>
                <p className="text-sm font-bold font-poppins truncate">
                  mcvincentparedes@gmail.com
                </p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${
            isDark
              ? "border-white/10"
              : isYellow
                ? "border-yellow-200"
                : "border-gray-100"
          }`}
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <p
              className={`text-xs font-poppins tracking-wider ${isDark ? "text-gray-500" : isYellow ? "text-yellow-700" : "text-gray-400"}`}
            >
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-accent font-bold">MVP VISUALS</span>.
              Designed with &hearts; by me.
            </p>
          </div>

          <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Blobs for depth */}
      <div
        className={`absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10 animate-pulse ${isYellow ? "bg-yellow-400/20" : ""}`}
      />
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -z-10 ${isYellow ? "bg-yellow-500/10" : ""}`}
      />
    </footer>
  );
}
