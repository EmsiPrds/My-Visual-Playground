import { BrainCircuit, Code, FolderKanban, Network } from "lucide-react";
import Lanyard from "./animation-components/Lanyard";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    { icon: Code, label: "2+ Years of Experience" },
    { icon: FolderKanban, label: "50+ Projects Completed" },
    { icon: Network, label: "Client & Team Collaboration" },
    { icon: BrainCircuit, label: "Always Learning & Innovating" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center overflow-visible bg-gray-100 "
    >
      <div className="max-w-screen w-full min-h-screen lg:h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full lg:ml-30">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-3 order-2 lg:order-1 flex flex-col justify-center px-8 md:px-10 lg:px-15 py-5 sm:py-6 lg:py-0 relative z-10">
            <h2
              className={`text-2xl text-center sm:text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-bakbak ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About{" "}
              <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p
              className={`text-xs text-center sm:text-left sm:text-sm md:text-base lg:text-lg font-poppins ${
                darkMode ? "text-primary" : "text-primary"
              } leading-tight sm:leading-snug`}
            >
              Hi, I'm{" "}
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
              className={`text-xs text-center sm:text-left sm:text-sm md:text-base lg:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-tight sm:leading-snug`}
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

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 pt-1 sm:pt-1.5 md:pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg ${
                    darkMode ? "bg-gray-900/50" : "bg-gray-50"
                  } border ${
                    darkMode ? "border-gray-700" : "border-primary"
                  } hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <item.icon className="text-yellow-400 mb-0.5 sm:mb-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <p
                    className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-bakbak tracking-wide font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-2 lg:order-2 w-full h-full lg:h-full flex items-center justify-center overflow-hidden">
            <div className="w-full h-full relative flex justify-center items-center ">
              <Lanyard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
