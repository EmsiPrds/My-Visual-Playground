import { useEffect, useState } from "react";
import MockupImg from "../assets/E-legislative.png";
import FocusedImg from "../assets/focus.png";
import SmileImg from "../assets/smiling.png";
import MockupImg1 from "../assets/WayneWebsite.png";
import StickerPeel from "../components/animation-components/StickerPeel";
import ScrollingMockup from "./ScrollingMockup";
import SmoothLink from "./SmoothLink";

import CanvaLogo from "../assets/Canva.svg";
import FigmaLogo from "../assets/Figma.svg";
import JavascriptLogo from "../assets/Javascript.svg";
import TailwindLogo from "../assets/Tailwind.svg";
import ReactLogo from "../assets/ReactLogo.svg";
import VsCodeLogo from "../assets/VsCode.svg";
import WordPress from "../assets/WordPress.svg";
import { LightThemeToggler, DarkThemeToggler, YellowThemeToggler } from "./animation-components/ThemeToggler";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Theme initialization is handled in main.tsx

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary dark:bg-secondary yellow:bg-yellow-50"
    >
      <div className="relative w-[98vw] max-w-screen h-[97vh] rounded-4xl flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl">
        {/* Top notch */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-70 h-25 bg-primary dark:bg-secondary yellow:bg-yellow-50 clip-notch" />

        {/* Background glow */}
        <div
          className="absolute w-300 h-300 rounded-full blur-3xl animate-pulse -bottom-100 bg-blue-400/20 dark:bg-yellow-500/30 yellow:bg-yellow-400/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div>
          <h2 className="absolute text-[1000px] font-fugaz z-0 -left-30 -top-60 opacity-10 text-black-100/10 dark:text-white/20 yellow:text-black-100/5">
            MVP
          </h2>
        </div>

        {/* Hero content */}
        <div className="relative h-[650px] text-center space-y-8 animate-fadeIn z-10">
          <h1
            className="text-4xl sm:text-4xl lg:text-5xl font-bakbak font-bold leading-tight tracking-wider text-gray-900 dark:text-white yellow:text-yellow-900"
          >
            Designing, Building, and
            <span className="bg-linear-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 yellow:from-yellow-600 yellow:to-yellow-800 bg-clip-text text-transparent">
              {" "}
              Connecting the Digital World
            </span>
          </h1>

          <p
            className="font-poppins text-lg sm:text-xl max-w-3xl mx-auto text-primary dark:text-white yellow:text-yellow-900"
          >
            MVP Visuals crafts modern digital experiences through web design,
            graphic creativity, and intelligent networking.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <SmoothLink
              to="#projects"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative px-8 py-2 rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300 bg-accent dark:bg-yellow-500 yellow:bg-yellow-500 text-white dark:text-gray-900 yellow:text-yellow-900"
            >
              <span className="relative z-10 flex items-center">
                View Resume
              </span>
              <div className="absolute inset-0 bg-yellow-600 dark:bg-yellow-600 yellow:bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </SmoothLink>

            <SmoothLink
              to="#contact"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="px-8 py-2 rounded-full font-semibold border-2 transition-colors duration-300 border-accent dark:border-yellow-500 yellow:border-yellow-600 text-accent dark:text-yellow-500 yellow:text-yellow-700 hover:bg-accent hover:text-white dark:hover:bg-yellow-500/10 yellow:hover:bg-yellow-200 dark:hover:text-yellow-400"
            >
              Let's Connect
            </SmoothLink>
          </div>

          {/* Character + mockups + sticker logos */}
          <div className="flex justify-center items-center relative z-10">
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
            <div className="relative z-20 flex justify-center items-end">
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

            <div className="flex flex-col gap-10 absolute z-50 left-0 top-0">
              <LightThemeToggler />
              <DarkThemeToggler />
              <YellowThemeToggler />
            </div>

            {/* Sticker Logos (GSAP draggable peel) */}
            <div className="absolute inset-0 pointer-events-none z-30">
              {[
                { src: ReactLogo, x: 550, y: 45, rotate: -20, glowColor: "#61DAFB" }, // React - Cyan
                { src: FigmaLogo, x: 800, y: 200, rotate: 15, glowColor: "#A259FF" }, // Figma - Purple
                { src: TailwindLogo, x: 430, y: 230, rotate: -15, glowColor: "#06B6D4" }, // Tailwind - Cyan
                { src: JavascriptLogo, x: 900, y: 350, rotate: 0, glowColor: "#FDCE00" }, // MongoDB - Green
                { src: CanvaLogo, x: 350, y: 400, rotate: 0, glowColor: "#00C4CC" }, // Canva - Teal
                { src: VsCodeLogo, x: 750, y: 450, rotate: 10, glowColor: "#007ACC" }, // VS Code - Blue
                { src: WordPress, x: 530, y: 450, rotate: -20, glowColor: "#21759B" }, // WordPress - Blue
              ].map((logo, i) => (
                <StickerPeel
                  key={i}
                  imageSrc={logo.src}
                  width={80}
                  rotate={logo.rotate}
                  peelDirection={i * 20}
                  shadowIntensity={0.5}
                  lightingIntensity={0.2}
                  shadowColor="rgba(0, 0, 0, 0.3)"
                  shadowGlowColor={logo.glowColor}
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
