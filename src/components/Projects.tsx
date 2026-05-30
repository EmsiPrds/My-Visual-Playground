import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useComingSoon } from "../contexts/ComingSoonContext";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { openComingSoon } = useComingSoon();

  const projects = [
    {
      title: "Centralized Legislative and Administrative Management and Tracking System",
      category: "Web Development",
      description:
        "Developed and supported a web-based system for legislative and administrative management processes. Assisted in frontend development, documentation, and system implementation.",
      tools: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Automated RBI Web Application",
      category: "Web Development",
      description:
        "Developed a web-based Resident Basic Information (RBI) system for managing and organizing resident records digitally. Assisted in frontend development, database integration, documentation, and system implementation.",
      tools: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "ISKA: Web-Based Campus Tour with Voice Command",
      category: "Web Development",
      description:
        "Developed an interactive campus tour system with voice command functionality to improve campus navigation and user accessibility.",
      tools: ["React", "Tailwind CSS", "JavaScript", "Web Speech API"],
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Barangay-Wide CCTV, Wi-Fi, and Network Installation",
      category: "Networking",
      description:
        "Installed and configured CCTV cameras, Wi-Fi networks, routers, switches, and IP cameras for barangay-wide infrastructure deployment. Performed troubleshooting, connectivity testing, and onsite technical implementation.",
      tools: ["TP-Link", "IP Cameras", "Networking", "CCTV"],
      image:
        "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Freelance CCTV Installation and Configuration Projects",
      category: "Networking",
      description:
        "Installed and configured CCTV systems, Wi-Fi networks, routers, switches, and IP cameras for residential and small business clients. Performed cable routing, troubleshooting, equipment setup, and onsite technical support.",
      tools: ["CCTV", "Wi-Fi", "Routers", "IP Cameras"],
      image:
        "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Barangay Management System",
      category: "Web Development",
      description:
        "Developed a web-based barangay management system to streamline administrative operations, resident records management, document processing, and community service tracking.",
      tools: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full flex items-center justify-center bg-gray-100"
    >
      <div className="w-7xl py-20 px-5">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2
            className="text-3xl font-bakbak sm:text-4xl md:text-5xl font-bold mb-4 leading-tight 
              text-primary "
          >
            Featured{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-base font-poppins sm:text-lg text-primary max-w-2xl mx-auto px-4">
            A showcase of recent work spanning design, development, and
            infrastructure
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
              className="group relative overflow-hidden rounded-xl cursor-pointer 
                transition-all duration-300 hover:-translate-y-2 
                bg-white dark:bg-primary shadow-lg hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 font-poppins bg-yellow-400 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold font-bakbak mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm mb-4 font-poppins text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 text-xs font-poppins rounded 
                        bg-gray-100 text-gray-700 
                        dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={openComingSoon}
                    className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-poppins">View</span>
                  </button>

                  <button 
                    onClick={openComingSoon}
                    className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-600 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-poppins">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
