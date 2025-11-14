import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LogoBlack from "../assets/logo-plain-black.svg";
import LogoWhite from "../assets/logo-plain-white.svg";
import SmoothLink from "./SmoothLink";

type Theme = "light" | "dark" | "yellow";

// Helper function to get current theme from DOM
const getCurrentTheme = (): Theme => {
  const root = document.documentElement;
  if (root.classList.contains("yellow")) return "yellow";
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  // Logo color based on top notch color:
  // Light theme: top notch is dark (bg-primary) → use white logo
  // Dark theme: top notch is light (bg-secondary/white) → use black logo
  // Yellow theme: top notch is light (bg-yellow-50) → use black logo
  const logo = currentTheme === "light" ? LogoWhite : LogoBlack;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg shadow-lg bg-trasparent" : "bg-transparent"
      }`}
    >
      {/* Navbar container */}
      <div className={`relative mx-auto max-w-[1440px] px-8 py-6 mt-4 `}>
        <div className="flex items-center text-xl justify-between">
          {/* Left Links */}
          <div className="hidden md:flex items-center space-x-30">
            {navLinks.slice(0, 3).map((link) => (
              <SmoothLink
                key={link.name}
                to={link.href}
                className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </SmoothLink>
            ))}
          </div>

          {/* Center Logo (overlapping the hero notch) */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-transparent">
            <div className="w-30 h-30 flex items-center justify-center bg-transparent">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-13 transition-opacity duration-300" 
              />
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center space-x-30">
            {navLinks.slice(3).map((link) => (
              <SmoothLink
                key={link.name}
                to={link.href}
                className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </SmoothLink>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4 ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isDark ? "text-white" : "text-primary"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className={`md:hidden rounded-b-2xl border-t ${
            isDark
              ? "bg-primary border-primary"
              : "bg-secondary border-secondary"
          }`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <SmoothLink
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  isDark
                    ? "text-secondary hover:bg-primary"
                    : "text-primary hover:bg-secondary"
                } hover:text-accent transition-colors duration-300`}
              >
                {link.name}
              </SmoothLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
