import { Code, Network, Palette, Zap } from "lucide-react";
import Lanyard from "./animation-components/Lanyard";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    { icon: Code, label: "Development" },
    { icon: Palette, label: "Design" },
    { icon: Network, label: "Networking" },
    { icon: Zap, label: "Innovation" },
  ];

  return (
    <section id="about" className={` ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 ml-50">
            <h2
              className={`text-5xl font-bold font-bakbak ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About{" "}
              <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p
              className={`text-lg font-poppins ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              Hi, I’m{" "}
              <span className="text-accent">
                Mc Vincent Paredes, a UI Designer and Software Developer{" "}
              </span>
              from Quezon Province, Philippines. I create clean, modern, and
              user-centered digital experiences that blend design and
              technology. <br />
              <br />
              What began as a hobby in design and coding has evolved into a
              passion for building meaningful solutions — from{" "}
              <span className="text-accent">
                personal projects to commissions and company projects.
              </span>
            </p>

            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              I specialize in{" "}
              <span className="text-accent">
                minimalist yet modern UI design, creative frontends, and digital
                artistry,
              </span>{" "}
              with a focus on reliability, creativity, and innovation. <br />
              <br />
              My goal is simple —{" "}
              <span className="text-accent">
                to design, develop, and deliver modern solutions{" "}
              </span>{" "}
              that connect people in the digital world.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-900/50" : "bg-gray-50"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <item.icon className="text-yellow-400 mb-2" size={24} />
                  <p
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lanyard Animation */}
          <div className="relative">
            <div className="w-full h-auto relative">
              <Lanyard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
