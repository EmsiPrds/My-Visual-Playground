import { Code, Network, Palette, Zap } from "lucide-react";

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
    <section
      id="about"
      className={`py-24 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-72 h-72 mx-auto relative">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <div
                  className={`text-6xl font-bold ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                >
                  MVP
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-lg animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-300 rounded-lg animate-float-delayed"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Where Creativity Meets{" "}
              <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Precision
              </span>
            </h2>

            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              At MVP Visuals, we believe in the power of design to transform
              ideas into reality. Our passion lies in crafting digital
              experiences that are not only visually stunning but also
              functionally exceptional.
            </p>

            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              From pixel-perfect web interfaces to intelligent network
              architectures, we blend artistry with technology to deliver
              solutions that inspire, engage, and perform. Every project is an
              opportunity to push boundaries and create something remarkable.
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
        </div>
      </div>
    </section>
  );
}
