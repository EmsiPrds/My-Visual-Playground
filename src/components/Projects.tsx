import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      tools: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      description:
        "Complete brand identity package including logo design, color palette, typography system, and brand guidelines for a tech startup.",
      tools: ["Illustrator", "Figma", "Photoshop"],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Enterprise Network Setup",
      category: "Networking",
      description:
        "Designed and implemented a secure, scalable network infrastructure for a 200+ employee organization with VLANs and redundancy.",
      tools: ["Cisco", "VLANs", "Routing", "Security"],
      image:
        "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description:
        "Modern analytics dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features.",
      tools: ["React", "TypeScript", "D3.js", "Tailwind"],
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Graphic Design",
      description:
        "Multi-platform marketing campaign including social media graphics, email templates, and landing page designs.",
      tools: ["Photoshop", "Figma", "After Effects"],
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Mobile App UI/UX",
      category: "Web Development",
      description:
        "User-centered mobile application design with seamless navigation, micro-interactions, and accessibility features.",
      tools: ["React Native", "Figma", "TypeScript"],
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-secondary"
    >
      <div className="w-7xl py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight 
              text-gray-900 dark:text-white"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
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
                bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl"
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
                  <span className="px-3 py-1 bg-yellow-400 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 text-xs rounded 
                        bg-gray-100 text-gray-700 
                        dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-600 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">View</span>
                  </button>

                  <button className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-600 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
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
