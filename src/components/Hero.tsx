import { useEffect, useState } from "react";
import MockupImg from "../assets/E-legislative.png";
import FocusedImg from "../assets/focus.png";
import SmileImg from "../assets/smiling.png";
import MockupImg1 from "../assets/WayneWebsite.png";
import StickerPeel from "../components/animation-components/StickerPeel"; // ✅ Import your component
import ScrollingMockup from "./ScrollingMockup";

import CanvaLogo from "../assets/Canva.svg";
import FigmaLogo from "../assets/Figma.svg";
import IllustratorLogo from "../assets/Illustrator.svg";
import PhotoshopLogo from "../assets/Photoshop.svg";
import ReactLogo from "../assets/ReactLogo.svg";
import VsCodeLogo from "../assets/VsCode.svg";
import WordPress from "../assets/WordPress.svg";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-secondary" : "bg-primary"
      }`}
    >
      <div
        className={`relative w-[98vw] max-w-screen h-[97vh] rounded-4xl flex flex-col items-center justify-center overflow-hidden ${
          darkMode ? "bg-primary" : "bg-secondary"
        } shadow-2xl`}
      >
        {/* Top notch */}
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 w-70 h-25 ${
            darkMode ? "bg-secondary" : "bg-primary"
          } clip-notch`}
        />

        {/* Background glow */}
        <div
          className="absolute w-100 h-100 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Hero content */}
        <div className="relative h-[650px] text-center space-y-8 animate-fadeIn z-10">
          <h1
            className={`text-4xl sm:text-4xl lg:text-5xl font-bakbak font-bold leading-tight tracking-wider ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Designing, Building, and
            <span className="bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Connecting the Digital World
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            MVP Visuals crafts modern digital experiences through web design,
            graphic creativity, and intelligent networking.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => scrollToSection("#projects")}
              className="group relative px-8 py-2 bg-yellow-400 text-secondary rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center">
                View Resume
              </span>
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => scrollToSection("#contact")}
              className={`px-8 py-2 rounded-full font-semibold border-2 ${
                darkMode
                  ? "border-secondary text-secondary hover:bg-yellow-400/10"
                  : "border-yellow-500 text-yellow-600 hover:bg-yellow-50"
              } transition-colors duration-300`}
            >
              Let's Connect
            </button>
          </div>

          {/* Character + mockups + sticker logos */}
          <div className="flex justify-center items-center relative">
            {/* Scrolling mockups behind */}
            <div>
              <div className="absolute inset-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none skew-y-12 blur-sm -left-100 bottom-30">
                <ScrollingMockup imageSrc={MockupImg} scrollRange={300} />
              </div>
              <div className="absolute inset-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none -skew-y-12 blur-sm -right-100 bottom-30">
                <ScrollingMockup imageSrc={MockupImg1} scrollRange={300} />
              </div>
            </div>

            {/* Character image */}
            <div className="relative z-10 flex justify-center items-end">
              <img
                src={FocusedImg}
                alt="Focused version"
                className={`w-[300px] sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[600px] transition-opacity duration-500 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={SmileImg}
                alt="Smiling version"
                className={`absolute w-[300px] sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[600px] transition-opacity duration-500 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Sticker Logos (GSAP draggable peel) */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {[
                { src: ReactLogo, x: 550, y: 45, rotate: -20 },
                { src: FigmaLogo, x: 800, y: 200, rotate: 15 },
                { src: PhotoshopLogo, x: 430, y: 230, rotate: -15 },
                { src: IllustratorLogo, x: 900, y: 350, rotate: 0 },
                { src: CanvaLogo, x: 350, y: 400, rotate: 0 },
                { src: VsCodeLogo, x: 750, y: 450, rotate: 10 },
                { src: WordPress, x: 530, y: 450, rotate: -20 },
              ].map((logo, i) => (
                <StickerPeel
                  key={i}
                  imageSrc={logo.src}
                  width={80}
                  rotate={logo.rotate}
                  peelDirection={i * 20}
                  shadowIntensity={0.5}
                  lightingIntensity={0.2}
                  className="pointer-events-auto"
                  initialPosition={{ x: logo.x, y: logo.y }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
