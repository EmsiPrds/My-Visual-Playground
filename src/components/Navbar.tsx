import { useEffect, useState } from "react";
import LogoBlack from "../assets/logo-plain-black.svg";

type Theme = "light" | "dark" | "yellow";

// Helper function to get current theme from DOM
const getCurrentTheme = (): Theme => {
  const root = document.documentElement;
  if (root.classList.contains("yellow")) return "yellow";
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar visible when mobile menu is open
      if (isOpen) {
        setIsVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Detect active section based on scroll position
      const sections = navLinks.map(link => {
        const element = document.querySelector(link.href);
        return {
          id: link.href.substring(1),
          element,
          top: element ? element.getBoundingClientRect().top + window.scrollY : 0,
        };
      });

      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        
        if (nextSection) {
          return scrollPosition >= section.top && scrollPosition < nextSection.top;
        }
        return scrollPosition >= section.top;
      });

      setActiveSection(currentSection ? `#${currentSection.id}` : navLinks[0].href);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isDark = currentTheme === "dark";
  const logo = LogoBlack;

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {!scrolled ? (
        /* Original Navbar Design - Transparent with logo in center */
        <>
          <div
            className={`relative mx-auto max-w-[1440px] md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-5 py-4 sm:py-6 mt-2 sm:mt-4`}
          >
            <div className="flex items-center text-base sm:text-base md:text-sm lg:text-base justify-between">
              {/* Desktop Left Links */}
              <div className="hidden md:flex items-center space-x-12 lg:space-x-15 xl:space-x-30 flex-1">
                {navLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Mobile spacer for hamburger alignment */}
              <div className="md:hidden w-10"></div>

              {/* Center Logo (overlapping the hero notch) - Always visible */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-transparent">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 flex items-center justify-center bg-transparent">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-7 sm:h-9 md:h-11 lg:h-13 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Desktop Right Links */}
              <div className="hidden md:flex items-center space-x-12 lg:space-x-15 xl:space-x-30 flex-1 justify-end">
                {navLinks.slice(3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative group font-bakbak font-medium text-primary dark:text-secondary hover:text-accent transition-colors duration-300`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Mobile Hamburger Button - Right side on small screens */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${
                    isDark ? "text-white" : "text-primary"
                  }`}
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {/* Animated Hamburger Lines */}
                  <span
                    className={`absolute w-6 h-0.5 transition-all duration-300 ${
                      isDark ? "bg-white" : "bg-primary"
                    } ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 transition-all duration-300 ${
                      isDark ? "bg-white" : "bg-primary"
                    } ${isOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 transition-all duration-300 ${
                      isDark ? "bg-white" : "bg-primary"
                    } ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown with smooth animation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`rounded-b-2xl border-t ${
                isDark
                  ? "bg-primary border-primary"
                  : "bg-secondary border-secondary"
              }`}
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-bakbak font-medium ${
                      isDark
                        ? "text-secondary hover:bg-white/10"
                        : "text-primary hover:bg-primary/10"
                    } hover:text-accent transition-all duration-300 transform hover:translate-x-2`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen
                        ? "slideInLeft 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Glassmorphism Pill Design - When Scrolled */
        <>
          <div
            className={`relative mx-auto max-w-[1440px] md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-5 py-4 sm:py-6 mt-2 sm:mt-4`}
          >
            {/* Rounded pill navbar - Full width */}
            <div
              className={`
                backdrop-blur-lg shadow-2xl rounded-full
                px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20
                py-3 sm:py-4 md:py-4
                transition-all duration-500
                bg-white/20 dark:bg-gray-900/20 border border-white/30
                w-full
              `}
            >
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center justify-between w-full">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`
                        relative font-bakbak font-medium text-sm lg:text-base
                        transition-all duration-300
                        ${isActive ? "dark:text-white text-primary" : "text-accent"}
                        ${!isActive && "hover:text-white/80"}
                      `}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 dark:bg-white bg-primary transition-all duration-300"></span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 text-accent"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {/* Animated Hamburger Lines */}
                  <span
                    className={`absolute w-6 h-0.5 bg-accent transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 bg-accent transition-all duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 bg-accent transition-all duration-300 ${
                      isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown with smooth animation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-4 mt-2 rounded-2xl backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 border border-white/30 shadow-2xl">
              <div className="px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`
                        block w-full text-left px-4 py-3 rounded-lg font-bakbak font-medium
                        transition-all duration-300 transform hover:translate-x-2
                        ${isActive ? "text-white bg-white/10" : "text-accent hover:bg-white/5"}
                      `}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isOpen
                          ? "slideInLeft 0.3s ease-out forwards"
                          : "none",
                      }}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add CSS animation */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
