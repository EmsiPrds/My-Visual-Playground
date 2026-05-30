import { motion } from "framer-motion";
import { Award, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function Milestone() {
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
      id="milestones"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-100 yellow:bg-gray-100 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 transition-colors duration-500"
    >
      <div className="relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] xl:max-w-screen rounded-2xl sm:rounded-3xl md:rounded-4xl py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bakbak mb-6 text-primary dark:text-white leading-tight">
              Journey{" "}
              <span className="text-accent">Milestones</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-poppins font-light max-w-2xl mx-auto leading-relaxed">
              Key moments that defined our growth and success
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Card */}
                  <div className="flex-1 md:px-8">
                    <div
                      className={`p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-[12px] border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-xl hover:border-accent/30 transition-all duration-500 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-center group`}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-4 shadow-xl shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <milestone.icon className="text-primary" size={28} />
                      </div>
                      <div className="text-xs font-bold text-accent font-poppins uppercase tracking-widest mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bakbak font-bold mb-2 text-primary dark:text-white group-hover:text-accent transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-poppins text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 items-center justify-center z-10 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
