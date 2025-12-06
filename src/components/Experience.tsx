import { Briefcase, Download, GraduationCap } from "lucide-react";

interface ResumeProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ResumeProps) {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Tech University",
      year: "2018 - 2022",
    },
    {
      degree: "Cisco Certified Network Associate (CCNA)",
      school: "Cisco Networking Academy",
      year: "2021",
    },
  ];

  const experience = [
    {
      position: "Senior Web Developer & Designer",
      company: "MVP Visuals",
      year: "2022 - Present",
    },
    {
      position: "UI/UX Designer",
      company: "Creative Digital Agency",
      year: "2020 - 2022",
    },
    {
      position: "Network Technician",
      company: "Enterprise Solutions Inc.",
      year: "2019 - 2020",
    },
  ];

  return (
    <section
      id="resume"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Education and experience that shaped our expertise
          </p>

          <button className="group px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 mx-auto">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-6 border-l-2 ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } last:border-l-0 last:pb-0`}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-[9px]"></div>
                  <div
                    className={`text-sm font-semibold ${
                      darkMode ? "text-yellow-400" : "text-yellow-600"
                    } mb-1`}
                  >
                    {edu.year}
                  </div>
                  <h4
                    className={`text-lg font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-6 border-l-2 ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } last:border-l-0 last:pb-0`}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-300 rounded-full transform -translate-x-[9px]"></div>
                  <div
                    className={`text-sm font-semibold ${
                      darkMode ? "text-yellow-400" : "text-yellow-600"
                    } mb-1`}
                  >
                    {exp.year}
                  </div>
                  <h4
                    className={`text-lg font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.position}
                  </h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.company}
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
