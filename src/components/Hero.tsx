import { useEffect, useState } from "react";
import MockupImg from "../assets/E-legislative.png";
import FocusedImg from "../assets/focus.png";
import SmileImg from "../assets/smiling.png";
import MockupImg1 from "../assets/WayneWebsite.png";
import ScrollingMockup from "./ScrollingMockup";
import {
  DarkThemeToggler,
  LightThemeToggler,
  YellowThemeToggler,
} from "./animation-components/ThemeToggler";

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
      className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-secondary yellow:bg-yellow-50"
    >
      <div
        className="relative w-[98vw] max-w-screen h-[98vh] max-h-screen rounded-4xl
       sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl"
      >
        {/* Top notch */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 sm:w-70 h-20 sm:h-25 bg-gray-100 dark:bg-secondary yellow:bg-yellow-50 clip-notch" />

        {/* Background glow */}
        <div
          className="absolute w-150 h-150 sm:w-300 sm:h-300 md:w-200 md:h-200 lg:-bottom-100 rounded-full animate-pulse -bottom-50 blur-3xl bg-blue-400/50 dark:bg-yellow-500/30 yellow:bg-yellow-400/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>

        <div>
          <h2 className="absolute text-[300px] sm:text-[300px] md:text-[600px] lg:text-[600px] xl:text-[750px] 2xl:text-[900px] font-fugaz z-0 -left-40 top-0 sm:-left-30 sm:-top-60 md:-left-70 md:top-0 lg:-left-30 lg:-top-40 2xl:-left-10 2xl:-top-50  text-gray-100 dark:text-white/20 yellow:text-black-100/5">
            MVP
          </h2>
        </div>

        {/* Hero content */}
        <div className="relative w-full h-full text-center flex flex-col justify-between animate-fadeIn" id="hero-content">
          {/* Hero text contents */}
          <div className="relative h-[50vh] flex flex-col justify-center items-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-15 pt-20 sm:pt-16 md:pt-20 lg:pt-40 xl:pt-35 pb-2 sm:pb-4 z-50">
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

            <p className="font-poppins text-xs sm:text-base md:text-lg lg:text-lg 2xl:text-xl z-50 max-w-3xl mx-auto text-primary dark:text-white yellow:text-yellow-900 relative px-2 lg:px-25 2xl:px-0">
              MVP Visuals crafts modern digital experiences through web design,
              graphic creativity, and intelligent networking.
            </p>

            {/* Buttons */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative z-110 flex flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
            >
              <button className="relative cursor-pointer px-6 py-2 overflow-hidden rounded-full border-2 border-accent bg-accent font-medium text-secondary shadow-inner group transition-all duration-300 ease-in-out">
                {/* <!-- Top border animation --> */}
                <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>

                {/* <!-- Bottom border animation --> */}
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>

                {/* <!-- Top fill --> */}
                <span className="absolute left-0 top-0 h-0 w-full bg-secondary transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

                {/* <!-- Bottom fill --> */}
                <span className="absolute bottom-0 left-0 h-0 w-full bg-secondary transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

                {/* Dark overlay */}
                <span className="absolute inset-0 h-full w-full bg-secondary opacity-0 transition-opacity duration-400 delay-250 ease-in-out group-hover:opacity-100"></span>

                {/* Text */}
                <span className="relative transition-colors duration-300 delay-150 ease-in-out group-hover:text-primary">
                  View Resume
                </span>
              </button>

              <button
                id="contacts"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative cursor-pointer px-6 py-2 overflow-hidden rounded-full border-2 border-accent font-medium light:text-primary dark:text-secondary yellow:text-yellow-900 shadow-inner group transition-all duration-300 ease-in-out"
              >
                {/* <!-- Top border animation --> */}
                <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-accent transition-all duration-300 ease-in-out group-hover:w-full"></span>

                {/* <!-- Bottom border animation --> */}
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-accent transition-all duration-300 ease-in-out group-hover:w-full"></span>

                {/* <!-- Top fill --> */}
                <span className="absolute left-0 top-0 h-0 w-full bg-accent transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

                {/* <!-- Bottom fill --> */}
                <span className="absolute bottom-0 left-0 h-0 w-full bg-accent transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

                {/* Dark overlay */}
                <span className="absolute inset-0 h-full w-full bg-accent opacity-0 transition-opacity duration-400 delay-250 ease-in-out group-hover:opacity-100"></span>

                {/* Text */}
                <span className="relative transition-colors duration-300 delay-150 ease-in-out group-hover:text-white">
                  Let's Connect
                </span>
              </button>
            </div>

            {/* Theme Togglers - Navigation Dots */}
            <div className="relative z-110 flex items-center justify-center gap-3 sm:gap-4 xl:gap-8 pt-4 sm:pt-6 lg:flex-col lg:absolute lg:top-100 lg:left-15 lg:-translate-y-1/2 xl:left-50 xl:top-120 2xl:top-150 2xl:left-80">
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
            <div className="relative z-10 flex justify-center items-end w-full">
              <img
                src={FocusedImg}
                alt="Focused version"
                className={`h-auto max-h-[60vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[50vh] w-auto max-w-[100vw] sm:max-w-[380px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] object-contain object-bottom transition-opacity duration-700 ease-in-out ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={SmileImg}
                alt="Smiling version"
                className={`absolute h-auto max-h-[60vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[50vh] w-auto max-w-[100vw] sm:max-w-[380px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] object-contain object-bottom transition-opacity duration-700 ease-in-out ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
