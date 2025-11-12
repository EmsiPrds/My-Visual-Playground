import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/logo-plain-black.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log("theme:", theme);
    setIsDark(theme !== "light");
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg shadow-lg bg-trasparent" : "bg-transparent"
      }`}
    >
      {/* Navbar container */}
      <div className={`relative mx-auto max-w-[1440px] px-8 py-6 mt-4 `}>
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex items-center space-x-30">
            {navLinks.slice(0, 3).map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Center Logo (overlapping the hero notch) */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-transparent">
            <div
              className={`w-30 h-30 flex items-center justify-center ${
                isDark ? "bg-transparent" : "bg-transparent"
              }`}
            >
              <img src={Logo} alt="Logo" className="h-13" />
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center space-x-30">
            {navLinks.slice(3).map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
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
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  isDark
                    ? "text-secondary hover:bg-primary"
                    : "text-primary hover:bg-secondary"
                } hover:text-accent transition-colors duration-300`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
