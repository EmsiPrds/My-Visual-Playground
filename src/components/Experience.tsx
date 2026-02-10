import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Download, GraduationCap } from "lucide-react";

interface ResumeItem {
    type: "education" | "experience" | "cta";
    title: string;
    subtitle: string;
    year?: string;
    icon: React.ReactNode;
    isCTA?: boolean;
}

interface ExperienceProps {
}

export default function Experience({ }: ExperienceProps) {
    const containerRef = useRef<HTMLDivElement>(null);

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

    const items: ResumeItem[] = [
        ...education.map((edu) => ({
            type: "education" as const,
            title: edu.degree,
            subtitle: edu.school,
            year: edu.year,
            icon: <GraduationCap size={20} />,
        })),
        ...experience.map((exp) => ({
            type: "experience" as const,
            title: exp.position,
            subtitle: exp.company,
            year: exp.year,
            icon: <Briefcase size={20} />,
        })),
        {
            type: "cta",
            title: "Ready to take the next step?",
            subtitle: "Download my full resume for more details or let's connect to discuss how I can help your team.",
            icon: <Download size={24} />,
            isCTA: true
        }
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={containerRef}
            id="resume"
            className="relative bg-gray-100 dark:bg-gray-950 yellow:bg-gray-100"
            style={{ height: `${(items.length + 1) * 100}vh` }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
                {/* Header - Stays visible slightly moved up as items stack */}
                <motion.div
                    className="text-center mb-12 px-4 z-10"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.8]),
                        y: useTransform(scrollYProgress, [0, 0.1], [0, -20])
                    }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-secondary font-bakbak">
                        Professional <span className="text-yellow-500">Background</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 yellow:text-gray-700 max-w-2xl mx-auto font-poppins">
                        Credentials and roles presented as a smooth stackable card experience
                    </p>
                </motion.div>

                {/* Cards Stack */}
                <div
                    className="relative w-full max-w-6xl px-4 h-[650px] flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {items.map((item, index) => {
                        const total = items.length;

                        // Entry Y: starts at 800, reaches 0 at its slot
                        const entryY = useTransform(smoothProgress, [Math.max(0, (index - 0.5) / total), index / total], [800, 0]);

                        // Scale logic: 
                        // 1.0 when active
                        // Progressively smaller as index increases past it
                        const scale = useTransform(
                            smoothProgress,
                            [index / total, 1],
                            [1, 1 - (total - index) * 0.04]
                        );

                        // Blur logic:
                        // 0px while incoming and while active.
                        // Only start blurring after the NEXT card has stacked on top of it.
                        // Max blur only reached when it's 2+ layers deep.
                        const blurValue = useTransform(
                            smoothProgress,
                            [(index + 1) / total, (index + 2) / total],
                            [0, 4]
                        );

                        const blurOverlay = useTransform(blurValue, (v) => v > 0 ? `blur(${v}px)` : "blur(0px)");

                        // Opacity logic:
                        // Fade in on entry
                        // Slight fade when receding
                        const opacity = useTransform(
                            smoothProgress,
                            [Math.max(0, (index - 0.5) / total), index / total, 1],
                            [0, 1, 0.75]
                        );

                        // 3D Tilt during entry - Noticeable but elegant range
                        const rotateX = useTransform(
                            smoothProgress,
                            [Math.max(0, (index - 0.5) / total), index / total],
                            [14, 0]
                        );
                        const rotateY = useTransform(
                            smoothProgress,
                            [Math.max(0, (index - 0.5) / total), index / total],
                            [-14, 0]
                        );

                        // Receding Y offset (stacking visual)
                        const recedingY = useTransform(
                            smoothProgress,
                            [index / total, 1],
                            [0, -(total - index) * 25]
                        );

                        // Combined Y position
                        const y = useTransform(
                            [entryY, recedingY],
                            ([latestEntryY, latestRecedingY]) => (latestEntryY as number) + (latestRecedingY as number)
                        );

                        return (
                            <motion.div
                                key={index}
                                className={`absolute inset-0 flex items-center justify-center p-4 md:p-8`}
                                style={{
                                    zIndex: index,
                                    y: y,
                                    opacity,
                                    scale,
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d",
                                    perspective: "1200px" // Ensure solid 3D base
                                }}
                            >
                                <div
                                    className={`w-full max-w-4xl min-h-[350px] p-10 md:p-14 rounded-[3.5rem] border ${item.isCTA
                                        ? "bg-yellow-500 border-yellow-400 text-white shadow-[0_45px_100px_rgba(234,179,8,0.4)] ring-1 ring-white/20 backdrop-blur-xl"
                                        : "bg-white/90 border-gray-100 text-gray-900 shadow-xl dark:bg-gray-900/90 dark:border-gray-800 dark:text-gray-200 yellow:bg-yellow-100/90 yellow:border-yellow-200 yellow:text-gray-900 backdrop-blur-lg"
                                        } relative overflow-hidden isolate group transition-all duration-500`}
                                >
                                    {/* Internal Blur Overlay - Prevents GPU clipping on 3D transforms */}
                                    {!item.isCTA && (
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none z-50 backdrop-blur-none"
                                            style={{
                                                backdropFilter: blurOverlay,
                                                WebkitBackdropFilter: blurOverlay
                                            }}
                                        />
                                    )}
                                    <div className={`w-20 h-20 rounded-3xl ${item.isCTA ? "bg-white/20" : "bg-yellow-500"} flex items-center justify-center text-white shadow-xl shrink-0`}>
                                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                                            <h3 className={`text-2xl md:text-3xl font-bold font-bakbak ${item.isCTA ? "text-white" : "text-primary dark:text-secondary"}`}>{item.title}</h3>
                                            {item.year && (
                                                <span className="text-sm font-bold px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 dark:bg-gray-800 dark:text-yellow-400 whitespace-nowrap font-poppins">
                                                    {item.year}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-xl mb-8 leading-relaxed font-poppins ${item.isCTA ? "text-yellow-50" : "text-gray-600 dark:text-gray-400 yellow:text-gray-700"}`}>
                                            {item.subtitle}
                                        </p>

                                        {item.isCTA ? (
                                            <button className="group/btn px-10 py-5 bg-white text-yellow-500 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 shadow-2xl shadow-yellow-600/20 active:scale-95 font-bakbak">
                                                <Download size={24} className="group-hover/btn:translate-y-1 transition-transform" />
                                                <span>Download Full Resume</span>
                                            </button>
                                        ) : (
                                            <div className="flex items-center gap-3 text-yellow-500 font-semibold font-poppins">
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                                <span className="text-sm uppercase tracking-widest">{item.type}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Aesthetic Corner Accent */}
                                    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity ${item.isCTA ? "text-white" : "text-yellow-500"}`}>
                                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 48 })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
