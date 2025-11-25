import { Code2, Pencil, Rocket, Search } from "lucide-react";

interface ProcessProps {
  darkMode: boolean;
}

export default function Process({ darkMode }: ProcessProps) {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Understanding your vision, goals, and target audience to create a solid foundation.",
    },
    {
      icon: Pencil,
      title: "Design",
      description:
        "Crafting intuitive interfaces and visual concepts that align with your brand identity.",
    },
    {
      icon: Code2,
      title: "Develop",
      description:
        "Building robust, scalable solutions using modern technologies and best practices.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description:
        "Launching your project with comprehensive testing, optimization, and ongoing support.",
    },
  ];

  return (
    <section
      id="process"
      className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            A systematic approach to turning ideas into reality
          </p>
        </div>

        <div className="relative">
          <div
            className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } transform -translate-y-1/2`}
          >
            <div className="h-full w-3/4 bg-linear-to-r from-yellow-400 to-yellow-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`p-8 rounded-xl ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                      <step.icon className="text-white" size={28} />
                    </div>

                    <div
                      className={`text-sm font-semibold ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Step {index + 1}
                    </div>

                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
