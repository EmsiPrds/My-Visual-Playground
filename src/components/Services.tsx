import { Code, Palette, Server, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Modern, responsive, and optimized websites.",
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Visual identities and digital marketing materials.",
    },
    {
      icon: Sparkles,
      title: "Digital Art & Illustration",
      description: "Original artwork and creative concepts.",
    },
    {
      icon: Server,
      title: "Computer System Servicing & Networking",
      description: "System setup and connectivity solutions.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What I <span className="text-[#FDCE00]">Do</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Turning ideas into interactive and connected digital realities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#1a1a1a] p-8 rounded-lg border-2 border-gray-800 hover:border-[#FDCE00] transition-all duration-300"
                >
                  <Icon
                    size={48}
                    className="text-[#FDCE00] mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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
