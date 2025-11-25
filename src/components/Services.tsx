import { Code, Palette, Server, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import artImg from "@/assets/art.png";
import designImg from "@/assets/design.png";
import networkImg from "@/assets/network.png";
import webDevImg from "@/assets/web-dev.png";

export default function Services() {
  const [cursorImg, setCursorImg] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Modern, responsive, and optimized websites.",
      preview: webDevImg,
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Visual identities and digital marketing materials.",
      preview: designImg,
    },
    {
      icon: Sparkles,
      title: "Digital Art & Illustration",
      description: "Original artwork and creative concepts.",
      preview: artImg,
    },
    {
      icon: Server,
      title: "Computer System Servicing & Networking",
      description: "System setup and connectivity solutions.",
      preview: networkImg,
    },
  ];

  // Track screen size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)"); // Desktop: ≥1024px
    setIsDesktop(mq.matches);

    const handleResize = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", handleResize);

    return () => mq.removeEventListener("change", handleResize);
  }, []);

  // Track mouse movement (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-secondary yellow:bg-yellow-50"
    >
      <div
        className="relative w-[98vw] max-w-screen rounded-4xl
        sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden 
        bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl"
      >
        {/* Floating Preview Image (Desktop Only) */}
        {isDesktop && cursorImg && (
          <img
            src={cursorImg}
            className="pointer-events-none fixed w-72 h-72 md:w-80 md:h-80 rounded-[20px] 
            object-cover opacity-100 transition-transform duration-150 z-50"
            style={{
              top: pos.y + 20,
              left: pos.x + 20,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-bakbak text-center mb-4 text-primary">
              What I <span className="text-[#FDCE00]">Do</span>
            </h2>

            <p className="text-lg md:text-xl text-primary font-poppins text-center mb-12">
              I offer a range of creative and technical services that combine
              design thinking with development expertise. Whether you need a
              visually stunning website, a functional web app, or a reliable IT
              setup, I provide end-to-end digital solutions that are crafted
              with precision and purpose.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() =>
                      isDesktop && setCursorImg(service.preview)
                    }
                    onMouseLeave={() => setCursorImg(null)}
                    className="group bg-secondary/80 dark:bg-secondary/80 backdrop-blur-md 
                    p-8 rounded-2xl border-2 border-primary hover:border-accent 
                    transition-all duration-300 shadow-md"
                  >
                    <Icon
                      size={48}
                      className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-2xl font-bakbak font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-primary/90 font-poppins leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="relative cursor-pointer px-6 py-2 overflow-hidden rounded-full border-2 border-accent bg-accent font-medium text-secondary shadow-inner group"
              >
                {/* <!-- Top border animation --> */}
                <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-secondary transition-all duration-200 ease-out group-hover:w-full"></span>

                {/* <!-- Bottom border animation --> */}
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-200 ease-out group-hover:w-full"></span>

                {/* <!-- Top fill --> */}
                <span className="absolute left-0 top-0 h-0 w-full bg-secondary transition-all duration-300 delay-200 ease-out group-hover:h-full"></span>

                {/* <!-- Bottom fill --> */}
                <span className="absolute bottom-0 left-0 h-0 w-full bg-secondary transition-all duration-300 delay-200 ease-out group-hover:h-full"></span>

                {/* Dark overlay */}
                <span className="absolute inset-0 h-full w-full bg-secondary opacity-0 transition-opacity duration-300 delay-300 group-hover:opacity-100"></span>

                {/* Text */}
                <span className="relative transition-colors duration-300 delay-200 ease-out group-hover:text-primary">
                  Let's Work Together
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
