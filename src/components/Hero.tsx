import { useEffect, useState } from "react";
import { useBreakpoint } from "../lib/useBreakpoint";
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
  const bp = useBreakpoint();

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

  const logos = [
    {
      src: ReactLogo,
      glowColor: "#61DAFB",
      rotate: -10,
      position: {
        sm: { x: 140, y: 20 },
        md: { x: 260, y: 0 },
        lg: { x: 410, y: -10 },
        xl: { x: 520, y: -20 },
        "2xl": { x: 600, y: -30 },
      },
      size: { sm: 50, md: 60, lg: 75, xl: 90, "2xl": 105 },
    },
    {
      src: FigmaLogo,
      glowColor: "#A259FF",
      rotate: 20,
      position: {
        sm: { x: 280, y: 120 },
        md: { x: 390, y: 150 },
        lg: { x: 600, y: 170 },
        xl: { x: 710, y: 190 },
        "2xl": { x: 760, y: 200 },
      },
      size: { sm: 40, md: 65, lg: 80, xl: 95, "2xl": 110 },
    },
    {
      src: TailwindLogo,
      glowColor: "#06B6D4",
      rotate: 20,
      position: {
        sm: { x: 80, y: 130 },
        md: { x: 120, y: 180 },
        lg: { x: 230, y: 200 },
        xl: { x: 300, y: 210 },
        "2xl": { x: 340, y: 220 },
      },
      size: { sm: 50, md: 60, lg: 75, xl: 90, "2xl": 100 },
    },
    {
      src: JavascriptLogo,
      glowColor: "#FDCE00",
      rotate: -30,
      position: {
        sm: { x: 320, y: 260 },
        md: { x: 380, y: 310 },
        lg: { x: 560, y: 350 },
        xl: { x: 650, y: 380 },
        "2xl": { x: 700, y: 400 },
      },
      size: { sm: 42, md: 55, lg: 70, xl: 85, "2xl": 100 },
    },
    {
      src: VsCodeLogo,
      glowColor: "#007ACC",
      rotate: 0,
      position: {
        sm: { x: 220, y: 300 },
        md: { x: 240, y: 300 },
        lg: { x: 380, y: 330 },
        xl: { x: 460, y: 360 },
        "2xl": { x: 500, y: 380 },
      },
      size: { sm: 55, md: 70, lg: 85, xl: 105, "2xl": 120 },
    },
    {
      src: CanvaLogo,
      glowColor: "#00C4CC",
      rotate: -8,
      position: {
        sm: { x: 20, y: 240 },
        md: { x: 80, y: 260 },
        lg: { x: 160, y: 280 },
        xl: { x: 230, y: 300 },
        "2xl": { x: 260, y: 310 },
      },
      size: { sm: 45, md: 60, lg: 75, xl: 90, "2xl": 100 },
    },
    {
      src: WordPress,
      glowColor: "#21759B",
      rotate: 18,
      position: {
        sm: { x: 100, y: 290 },
        md: { x: 300, y: 230 },
        lg: { x: 450, y: 260 },
        xl: { x: 530, y: 280 },
        "2xl": { x: 580, y: 290 },
      },
      size: { sm: 50, md: 60, lg: 75, xl: 90, "2xl": 100 },
    },
  ];

  // Theme initialization is handled in main.tsx

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary dark:bg-secondary yellow:bg-yellow-50"
    >
      <div className="relative w-[98vw] max-w-screen h-[97vh] rounded-4xl
       sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl">
        {/* Top notch */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 sm:w-70 h-20 sm:h-25 bg-primary dark:bg-secondary yellow:bg-yellow-50 clip-notch" />

        {/* Background glow */}
        <div
          className="absolute w-150 h-150 sm:w-300 sm:h-300 rounded-full animate-pulse -bottom-50 blur-3xl bg-blue-400/50 dark:bg-yellow-500/30 yellow:bg-yellow-400/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div>
          <h2 className="absolute text-[300px] sm:text-[1000px] font-fugaz z-0 -left-40 top-0 sm:-left-30 sm:-top-60 opacity-10 text-black-100/10 dark:text-white/20 yellow:text-black-100/5">
            MVP
          </h2>
        </div>

        {/* Hero content */}
        <div className=" relative h-full sm:h-[650px] text-center flex flex-col justify-center animate-fadeIn">
          <div className="h-[50%] flex flex-col justify-center space-y-4 px-4">
            <h1
              className="text-2xl sm:text-4xl lg:text-5xl font-bakbak font-bold leading-tight tracking-wider text-gray-900 dark:text-white yellow:text-yellow-900"
            >
              Designing, Building, and
              <span className="bg-linear-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 yellow:from-yellow-600 yellow:to-yellow-800 bg-clip-text text-transparent">
                {" "}
                Connecting the Digital World
              </span>
            </h1>

            <p
              className="font-poppins text-sm z-40 sm:text-xl max-w-3xl mx-auto text-primary dark:text-white yellow:text-yellow-900 relative"
            >
              MVP Visuals crafts modern digital experiences through web design,
              graphic creativity, and intelligent networking.
            </p>

            {/* Buttons */}
            <div className="flex flex-row sm:flex-row items-center justify-center gap-4">
              <SmoothLink
                to="#projects"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-sm group relative z-10 px-4 sm:px-8 py-1 sm:py-2 rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300 bg-accent dark:bg-yellow-500 yellow:bg-yellow-500 text-white dark:text-gray-900 yellow:text-yellow-900"
              >
                <span className="relative flex items-center">
                  View Resume
                </span>
                <div className="absolute inset-0 bg-yellow-600 dark:bg-yellow-600 yellow:bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </SmoothLink>

              <SmoothLink
                to="#contact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-sm px-4 py-1 sm:px-8 sm:py-2 z-10 rounded-full font-semibold border-2 transition-colors duration-300 border-accent dark:border-yellow-500 yellow:border-yellow-600 text-accent dark:text-yellow-500 yellow:text-yellow-700 hover:bg-accent hover:text-white dark:hover:bg-yellow-500/10 yellow:hover:bg-yellow-200 dark:hover:text-yellow-400"
              >
                Let's Connect
              </SmoothLink>
            </div>
          </div>

          {/* Character + mockups + sticker logos */}
          <div className="h-[50%] flex justify-center items-center relative ">
            {/* Scrolling mockups behind */}
            <div>
              <div className="absolute inset-0 z-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none skew-y-12 blur-sm -left-100 bottom-30">
                <ScrollingMockup imageSrc={MockupImg} scrollRange={300} direction="up" />
              </div>
              <div className="absolute inset-0 z-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none -skew-y-12 blur-sm -right-100 bottom-30">
                <ScrollingMockup imageSrc={MockupImg1} scrollRange={300} direction="down" />
              </div>
            </div>

            {/* Character image */}
            <div className="relative z-20 flex justify-center items-end">
              <img
                src={FocusedImg}
                alt="Focused version"
                className={`w-full sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[600px]  transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
                  }`}
              />
              <img
                src={SmileImg}
                alt="Smiling version"
                className={`absolute w-full sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[600px] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>

            <div className="flex sm:flex-col gap-10 absolute z-50 -top-10 sm:left-0 sm:top-0">
              <LightThemeToggler />
              <DarkThemeToggler />
              <YellowThemeToggler />
            </div>

            {/* Sticker Logos (GSAP draggable peel) */}
            <div className="absolute inset-0 pointer-events-none z-30">
              {logos.map((logo, i) => (
                <StickerPeel
                  key={i}
                  imageSrc={logo.src}
                  width={logo.size[bp]}
                  rotate={logo.rotate}
                  peelDirection={i * 20}
                  shadowIntensity={0.5}
                  lightingIntensity={0.2}
                  shadowColor="rgba(0, 0, 0, 0.3)"
                  shadowGlowColor={logo.glowColor}
                  initialPosition={logo.position[bp]}
                  className="pointer-events-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
