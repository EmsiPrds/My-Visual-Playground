import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/logo-plain-black.svg";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div
        className={`relative mx-auto max-w-[1440px] px-8 py-6 mt-4  ${
          darkMode ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex items-center space-x-30">
            {navLinks.slice(0, 3).map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative group font-bakbak font-medium ${
                  darkMode ? "text-secondary" : "text-primary"
                } hover:text-accent transition-colors duration-300`}
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
                darkMode ? "bg-transparent" : "bg-transparent"
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
                className={`relative group font-bakbak font-medium ${
                  darkMode ? "text-secondary" : "text-primary"
                } hover:text-accent transition-colors duration-300`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-primary text-accent"
                  : "bg-secondary text-primary"
              } hover:scale-110 transition-transform duration-300`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4 ml-auto">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-primary text-accent"
                  : "bg-secondary text-primary"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={darkMode ? "text-white" : "text-primary"}
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
            darkMode
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
                  darkMode
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
