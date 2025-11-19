import { Code, Palette, Server, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import artImg from "@/assets/art.png";
import designImg from "@/assets/design.png";
import networkImg from "@/assets/network.png";
import webDevImg from "@/assets/web-dev.png";

export default function Services() {
  const [cursorImg, setCursorImg] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

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

  // Track mouse position
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Floating Preview Image */}
      {cursorImg && (
        <img
          src={cursorImg}
          className="pointer-events-none fixed w-80 h-80 object-contain opacity-100 transition-transform duration-150 z-9999"
          style={{
            top: pos.y + 20,
            left: pos.x + 20,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-bakbak text-center mb-4 text-secondary">
            What I <span className="text-[#FDCE00]">Do</span>
          </h2>

          <p className="text-xl text-secondary font-poppins text-center mb-12">
            Turning ideas into interactive and connected digital realities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setCursorImg(service.preview)}
                  onMouseLeave={() => setCursorImg(null)}
                  className="group bg-[#1a1a1a] p-8 rounded-lg border-2 border-gray-800 hover:border-[#FDCE00] transition-all duration-300"
                >
                  <Icon
                    size={48}
                    className="text-[#FDCE00] mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bakbak font-bold text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[#FDCE00] text-primary font-semibold rounded-lg hover:bg-[#ffd700] transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
