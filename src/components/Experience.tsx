import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    Award,
    Download,
    Calendar,
    ChevronRight,
    Shield,
    Cpu,
    Network
} from "lucide-react";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    type: "work" | "education";
    icon: React.ReactNode;
}

interface CertificationItem {
    title: string;
    year: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            title: "Frontend Software Developer / UI/UX Designer / Network Technician",
            company: "Quantum Cloud Corporation",
            period: "2024 - Present",
            description: "Currently leading frontend development and crafting seamless user experiences while managing complex network infrastructures.",
            type: "work",
            icon: <Cpu className="w-5 h-5" />
        },
        {
            title: "Frontend Web Developer Intern",
            company: "Archicoders Digital Inc.",
            period: "2024",
            description: "Collaborated in building high-performance web applications and refining frontend architectures using React and secondary technologies.",
            type: "work",
            icon: <Briefcase className="w-5 h-5" />
        },
        {
            title: "Graduated Bachelor of Science in Information Technology",
            company: "Polytechnic University of the Philippines - Lopez campus",
            period: "2024",
            description: "Solid foundation in software engineering, web development, and enterprise networking solutions.",
            type: "education",
            icon: <GraduationCap className="w-5 h-5" />
        }
    ];

    const certifications: CertificationItem[] = [
        {
            title: "TP-Link Network Associate",
            year: "2024",
            description: "Enterprise Routing and Switching specialist certification.",
            icon: <Network className="w-6 h-6" />,
            color: "bg-accent"
        },
        {
            title: "Civil Service Exam Passer",
            year: "Professional Level",
            description: "Professional Level Eligibility (Philippine Civil Service Commission).",
            icon: <Shield className="w-6 h-6" />,
            color: "bg-primary dark:bg-white/10"
        },
        {
            title: "Computer System Servicing National Certificate",
            year: "2019",
            description: "National Certificate for hardware repair, networking, and maintenance.",
            icon: <Award className="w-6 h-6" />,
            color: "bg-accent"
        }
    ];

    return (
        <section
            id="experience"
            className="relative py-24 sm:py-32 overflow-hidden bg-gray-100 transition-colors duration-500"
        >
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-5xl md:text-7xl font-bakbak mb-6 text-primary leading-tight">
                            Professional <span className="text-accent">Journey</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-poppins font-light leading-relaxed">
                            A showcase of my career milestones, academic background, and technical certifications.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent/90 text-primary font-bakbak text-lg rounded-2xl shadow-2xl shadow-accent/20 transition-all duration-300"
                    >
                        <Download className="w-6 h-6 group-hover:animate-bounce" />
                        <span>Download Full CV</span>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
                    {/* Experiences Column */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bakbak text-primary uppercase tracking-tight">
                                Experiences
                            </h3>
                        </div>

                        <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-12 group"
                                >
                                    {/* Timeline Marker */}
                                    <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center z-10 group-hover:border-accent transition-colors duration-300 shadow-sm">
                                        <span className="text-accent">{exp.icon}</span>
                                    </div>

                                    <div className="p-8 rounded-[2rem] bg-white backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                            <span className="text-xs font-bold text-accent font-poppins uppercase tracking-widest flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </span>
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${exp.type === 'work' ? 'bg-accent/10 text-accent' : 'bg-primary/20 text-primary'}`}>
                                                {exp.type}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bakbak text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                                            {exp.title}
                                        </h4>
                                        <p className="text-lg font-poppins font-medium text-gray-600 mb-5">
                                            {exp.company}
                                        </p>
                                        <p className="text-gray-500 font-poppins text-base leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                <Award className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bakbak text-primary uppercase tracking-tight">
                                Certifications
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 8 }}
                                    className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-6"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${cert.color} flex-shrink-0 flex items-center justify-center text-white shadow-xl shadow-black/10`}>
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col mb-2">
                                            <h4 className="text-xl font-bakbak text-primary group-hover:text-accent transition-colors truncate">
                                                {cert.title}
                                            </h4>
                                            <span className="text-xs font-bold text-gray-400 font-poppins uppercase tracking-widest mt-1">
                                                {cert.year}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 font-poppins leading-relaxed">
                                            {cert.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-accent text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                            <span>Credential Details</span>
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Expertise Highlight Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-6 p-10 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent/80 text-primary relative overflow-hidden group shadow-2xl shadow-accent/20"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <Network className="w-48 h-48" />
                                </div>
                                <h4 className="text-3xl font-bakbak mb-3 relative z-10">Technical Mastery</h4>
                                <p className="font-poppins text-base text-primary/80 mb-8 relative z-10 leading-relaxed font-medium">
                                    Advanced proficiency in enterprise networking, system administration, and modern software development pipelines.
                                </p>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {['React Ecosystem', 'UI/UX Design', 'Network Arch', 'Hardware Ops'].map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
