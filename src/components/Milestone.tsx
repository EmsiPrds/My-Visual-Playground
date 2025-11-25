import { Award, Lightbulb, TrendingUp, Users } from "lucide-react";

interface ExperiencesProps {
  darkMode: boolean;
}

export default function Milestone({ darkMode }: ExperiencesProps) {
  const milestones = [
    {
      icon: Lightbulb,
      year: "2019",
      title: "MVP Visuals Founded",
      description:
        "Started the journey with a vision to merge creativity and technology",
    },
    {
      icon: Users,
      year: "2020",
      title: "50+ Clients Served",
      description:
        "Expanded our portfolio across web design, graphic design, and networking",
    },
    {
      icon: Award,
      year: "2022",
      title: "Industry Recognition",
      description:
        "Received awards for outstanding digital design and innovation",
    },
    {
      icon: TrendingUp,
      year: "2025",
      title: "Continuous Growth",
      description:
        "Scaling services and pushing boundaries in digital excellence",
    },
  ];

  return (
    <section
      id="experiences"
      className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Journey{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Key moments that defined our growth and success
          </p>
        </div>

        <div className="relative">
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } transform -translate-x-1/2 hidden md:block`}
          ></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                <div className="flex-1 md:px-8">
                  <div
                    className={`p-6 rounded-xl ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } hover:border-yellow-400 transition-all duration-300 hover:shadow-xl ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 mb-4`}
                    >
                      <milestone.icon className="text-white" size={28} />
                    </div>
                    <div
                      className={`text-sm font-bold ${
                        darkMode ? "text-yellow-400" : "text-yellow-600"
                      } mb-2`}
                    >
                      {milestone.year}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-900"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
