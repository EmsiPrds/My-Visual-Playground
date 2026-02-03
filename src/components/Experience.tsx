import { Briefcase, Download, GraduationCap } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./animation-components/ScrollStack";

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
    <section id="resume" className="relative py-24 bg-gray-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-25 bg-linear-to-br from-yellow-300 to-yellow-500" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 bg-linear-to-br from-gray-300 to-yellow-400" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <p
            className={`text-base md:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Credentials and roles presented as a smooth stackable card experience
          </p>
          <button className="group px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 mx-auto">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>
 
        <div className="mx-auto max-w-5xl h-[70vh]">
          <ScrollStack
            itemDistance={120}
            itemScale={0.035}
            itemStackDistance={40}
            stackPosition="25%"
            scaleEndPosition="12%"
            baseScale={0.88}
            rotationAmount={0.5}
            blurAmount={2}
          >
            {education.map((edu, index) => (
              <ScrollStackItem
                key={`edu-${index}`}
                itemClassName={`border ${
                  darkMode ? "bg-gray-900/60 border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-900"
                } backdrop-blur-sm hover:border-yellow-400 transition-colors duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-linear-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        {edu.degree}
                      </div>
                      <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
                        {edu.school}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      darkMode ? "bg-gray-800 text-yellow-300" : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {edu.year}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-yellow-500">
                  <span className="text-xs">Credential</span>
                </div>
              </ScrollStackItem>
            ))}
 
            {experience.map((exp, index) => (
              <ScrollStackItem
                key={`exp-${index}`}
                itemClassName={`border ${
                  darkMode ? "bg-gray-900/60 border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-900"
                } backdrop-blur-sm hover:border-yellow-400 transition-colors duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-linear-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        {exp.position}
                      </div>
                      <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      darkMode ? "bg-gray-800 text-yellow-300" : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {exp.year}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-yellow-500">
                  <span className="text-xs">Experience</span>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
