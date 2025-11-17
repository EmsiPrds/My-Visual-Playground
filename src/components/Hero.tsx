import { useEffect, useState } from "react";
import MockupImg from "../assets/E-legislative.png";
import FocusedImg from "../assets/focus.png";
import SmileImg from "../assets/smiling.png";
import MockupImg1 from "../assets/WayneWebsite.png";
import StickerPeel from "../components/animation-components/StickerPeel";
import { useBreakpoint } from "../lib/useBreakpoint";
import ScrollingMockup from "./ScrollingMockup";
import SmoothLink from "./SmoothLink";

import CanvaLogo from "../assets/Canva.svg";
import FigmaLogo from "../assets/Figma.svg";
import JavascriptLogo from "../assets/Javascript.svg";
import ReactLogo from "../assets/ReactLogo.svg";
import TailwindLogo from "../assets/Tailwind.svg";
import VsCodeLogo from "../assets/VsCode.svg";
import WordPress from "../assets/WordPress.svg";
import {
  DarkThemeToggler,
  LightThemeToggler,
  YellowThemeToggler,
} from "./animation-components/ThemeToggler";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 375, height: 667 });
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

  // Update viewport size on resize for responsive calculations
  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  const logos = [
    {
      src: ReactLogo,
      glowColor: "#61DAFB",
      rotate: -10,
      position: {
        sm: { x: 130, y: 50 },
        md: { x: 250, y: 70 },
        lg: { x: 400, y: 40 },
        xl: { x: 600, y: 30 },
        "2xl": { x: 800, y: 30 },
      },
      size: { sm: 40, md: 80, lg: 60, xl: 65, "2xl": 80 },
    },
    {
      src: FigmaLogo,
      glowColor: "#A259FF",
      rotate: 20,
      position: {
        sm: { x: 250, y: 80 },
        md: { x: 500, y: 200 },
        lg: { x: 560, y: 100 },
        xl: { x: 750, y: 100 },
        "2xl": { x: 1000, y: 120 },
      },
      size: { sm: 30, md: 50, lg: 45, xl: 45, "2xl": 50 },
    },
    {
      src: TailwindLogo,
      glowColor: "#06B6D4",
      rotate: 20,
      position: {
        sm: { x: 60, y: 130 },
        md: { x: 150, y: 200 },
        lg: { x: 330, y: 140 },
        xl: { x: 530, y: 140 },
        "2xl": { x: 730, y: 180 },
      },
      size: { sm: 45, md: 70, lg: 60, xl: 60, "2xl": 70 },
    },
    {
      src: JavascriptLogo,
      glowColor: "#FDCE00",
      rotate: -30,
      position: {
        sm: { x: 300, y: 200 },
        md: { x: 550, y: 350 },
        lg: { x: 600, y: 200 },
        xl: { x: 800, y: 220 },
        "2xl": { x: 1050, y: 260 },
      },
      size: { sm: 35, md: 70, lg: 45, xl: 50, "2xl": 60 },
    },
    {
      src: VsCodeLogo,
      glowColor: "#007ACC",
      rotate: 0,
      position: {
        sm: { x: 220, y: 300 },
        md: { x: 450, y: 500 },
        lg: { x: 520, y: 280 },
        xl: { x: 720, y: 320 },
        "2xl": { x: 1000, y: 400 },
      },
      size: { sm: 45, md: 80, lg: 50, xl: 60, "2xl": 60 },
    },
    {
      src: CanvaLogo,
      glowColor: "#00C4CC",
      rotate: -8,
      position: {
        sm: { x: 30, y: 220 },
        md: { x: 50, y: 350 },
        lg: { x: 300, y: 220 },
        xl: { x: 500, y: 230 },
        "2xl": { x: 700, y: 300 },
      },
      size: { sm: 45, md: 70, lg: 50, xl: 50, "2xl": 70 },
    },
    {
      src: WordPress,
      glowColor: "#21759B",
      rotate: 18,
      position: {
        sm: { x: 80, y: 300 },
        md: { x: 150, y: 500 },
        lg: { x: 380, y: 280 },
        xl: { x: 580, y: 320 },
        "2xl": { x: 800, y: 400 },
      },
      size: { sm: 45, md: 80, lg: 60, xl: 60, "2xl": 60 },
    },
  ];

  // Calculate responsive positions and sizes for mobile screens
  const getResponsivePosition = (logo: (typeof logos)[0]) => {
    // For mobile (sm), scale the base position proportionally
    if (bp === "sm") {
      // Base viewport size (iPhone SE - 375x667)
      const baseWidth = 375;
      const baseHeight = 667;

      // Calculate scale factors
      const widthScale = viewportSize.width / baseWidth;
      const heightScale = viewportSize.height / baseHeight;

      // Use the position.sm values as base and scale them
      const basePosition = logo.position.sm;

      return {
        x: basePosition.x * widthScale,
        y: basePosition.y * heightScale,
      };
    }

    // For larger screens, use the existing fixed positions
    return logo.position[bp];
  };

  // Get responsive logo size
  const getResponsiveSize = (logo: (typeof logos)[0]) => {
    if (bp === "sm") {
      const baseWidth = 375;
      const sizeScale = Math.min(viewportSize.width / baseWidth, 1.2);
      return logo.size[bp] * sizeScale;
    }
    return logo.size[bp];
  };

  // Theme initialization is handled in main.tsx

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary dark:bg-secondary yellow:bg-yellow-50"
    >
      <div
        className="relative w-[98vw] max-w-screen h-[98vh] max-h-screen rounded-4xl
       sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl"
      >
        {/* Top notch */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 sm:w-70 h-20 sm:h-25 bg-primary dark:bg-secondary yellow:bg-yellow-50 clip-notch" />

        {/* Background glow */}
        <div
          className="absolute w-150 h-150 sm:w-300 sm:h-300 md:w-200 md:h-200 lg:-bottom-100 rounded-full animate-pulse -bottom-50 blur-3xl bg-blue-400/50 dark:bg-yellow-500/30 yellow:bg-yellow-400/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div>
          <h2 className="absolute text-[300px] sm:text-[300px] md:text-[600px] lg:text-[600px] xl:text-[750px] 2xl:text-[900px] font-fugaz z-0 -left-40 top-0 sm:-left-30 sm:-top-60 md:-left-70 md:top-0 lg:-left-30 lg:-top-40 2xl:-left-10 2xl:-top-50 opacity-10 text-black-100/20 dark:text-white/20 yellow:text-black-100/5">
            MVP
          </h2>
        </div>

        {/* Hero content */}
        <div className="relative w-full h-full text-center flex flex-col justify-between animate-fadeIn">
          {/* Hero text contents */}
          <div className="h-[50vh] flex flex-col justify-center items-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-15 pt-20 sm:pt-16 md:pt-20 lg:pt-40 xl:pt-35 pb-2 sm:pb-4 z-30">
            <h1
              className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl
             font-bakbak font-bold leading-tight tracking-wider text-gray-900 dark:text-white yellow:text-yellow-900"
            >
              Designing, Building, and
              <span className="bg-linear-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 yellow:from-yellow-600 yellow:to-yellow-800 bg-clip-text text-transparent">
                {" "}
                Connecting the Digital World
              </span>
            </h1>

            <p className="font-poppins text-xs sm:text-base md:text-lg lg:text-lg 2xl:text-xl z-40 max-w-3xl mx-auto text-primary dark:text-white yellow:text-yellow-900 relative px-2 lg:px-25 2xl:px-0">
              MVP Visuals crafts modern digital experiences through web design,
              graphic creativity, and intelligent networking.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <SmoothLink
                to="#projects"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-xs sm:text-sm group relative z-10 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300 bg-accent dark:bg-yellow-500 yellow:bg-yellow-500 text-white dark:text-gray-900 yellow:text-yellow-900"
              >
                <span className="relative flex items-center">View Resume</span>
                <div className="absolute inset-0 bg-yellow-600 dark:bg-yellow-600 yellow:bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </SmoothLink>

              <SmoothLink
                to="#contact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-xs sm:text-sm px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 z-10 rounded-full font-semibold border-2 transition-colors duration-300 border-accent dark:border-yellow-500 yellow:border-yellow-600 text-accent dark:text-yellow-500 yellow:text-yellow-700 hover:bg-accent hover:text-white dark:hover:bg-yellow-500/10 yellow:hover:bg-yellow-200 dark:hover:text-yellow-400"
              >
                Let's Connect
              </SmoothLink>
            </div>

            {/* Theme Togglers - Navigation Dots */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 xl:gap-8 pt-4 sm:pt-6 lg:flex-col lg:absolute lg:top-100 lg:left-15 lg:-translate-y-1/2 xl:left-50 xl:top-120 2xl:top-150 2xl:left-80">
              <LightThemeToggler />
              <DarkThemeToggler />
              <YellowThemeToggler />
            </div>
          </div>

          {/* Character + mockups + sticker logos */}
          <div className="flex-1 flex justify-center items-end relative w-full min-h-0">
            {/* Scrolling mockups behind */}
            <div>
              <div className="absolute inset-0 z-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none skew-y-12 blur-sm -left-100 bottom-30">
                <ScrollingMockup
                  imageSrc={MockupImg}
                  scrollRange={300}
                  direction="up"
                />
              </div>
              <div className="absolute inset-0 z-0 flex justify-center items-center scale-90 sm:scale-100 opacity-90 pointer-events-none -skew-y-12 blur-sm -right-100 bottom-30">
                <ScrollingMockup
                  imageSrc={MockupImg1}
                  scrollRange={300}
                  direction="down"
                />
              </div>
            </div>

            {/* Character image */}
            <div className="relative z-20 flex justify-center items-end w-full">
              <img
                src={FocusedImg}
                alt="Focused version"
                className={`h-auto max-h-[60vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[50vh] w-auto max-w-[100vw] sm:max-w-[380px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] object-contain object-bottom transition-opacity duration-500 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={SmileImg}
                alt="Smiling version"
                className={`absolute h-auto max-h-[60vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[50vh] w-auto max-w-[100vw] sm:max-w-[380px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] object-contain object-bottom transition-opacity duration-500 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Sticker Logos (GSAP draggable peel) */}
              <div className="absolute inset-0 pointer-events-none z-30">
                {logos.map((logo, i) => {
                  const position = getResponsivePosition(logo);
                  const size = getResponsiveSize(logo);
                  // Use a stable key that only changes on significant viewport changes (every 50px) or breakpoint changes
                  const viewportKey =
                    bp === "sm"
                      ? `${i}-${bp}-${Math.round(
                          viewportSize.width / 50
                        )}-${Math.round(viewportSize.height / 50)}`
                      : `${i}-${bp}`;
                  return (
                    <StickerPeel
                      key={viewportKey}
                      imageSrc={logo.src}
                      width={size}
                      rotate={logo.rotate}
                      peelDirection={i * 20}
                      shadowIntensity={0.5}
                      lightingIntensity={0.2}
                      shadowColor="rgba(0, 0, 0, 0.3)"
                      shadowGlowColor={logo.glowColor}
                      initialPosition={position}
                      className="pointer-events-auto"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
