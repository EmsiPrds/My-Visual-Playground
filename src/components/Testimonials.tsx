import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode: _darkMode }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      quote:
        "MVP Visuals transformed our digital presence with a stunning website that perfectly captures our brand. Their attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      quote:
        "Working with MVP Visuals on our network infrastructure was seamless. They delivered a robust, scalable solution that has significantly improved our operations.",
      author: "Michael Chen",
      role: "IT Director, Global Systems",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      quote:
        "The graphic design work for our rebrand was exceptional. MVP Visuals captured our vision and created a cohesive identity that resonates with our audience.",
      author: "Emily Rodriguez",
      role: "Marketing Lead, Creative Co.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and incredible results! MVP Visuals helped us launch our e-commerce platform with a beautiful, user-friendly design that increased our sales by 40%.",
      author: "David Thompson",
      role: "Founder, ShopSmart",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      quote:
        "The team at MVP Visuals is professional, creative, and truly understands how to translate business needs into digital solutions. Highly recommended!",
      author: "Lisa Park",
      role: "Product Manager, InnovateLab",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
    {
      quote:
        "MVP Visuals delivered a mobile app that exceeded all our expectations. The user experience is flawless, and the development process was smooth and collaborative.",
      author: "James Wilson",
      role: "CTO, MobileFirst Solutions",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
    },
  ];

  // Split testimonials for two rows
  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials.reverse(), ...testimonials];

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-100 yellow:bg-gray-100 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 transition-colors duration-500"
    >
      <div className="relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] xl:max-w-screen rounded-2xl sm:rounded-3xl md:rounded-4xl py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl mx-auto">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-bakbak mb-6 text-primary dark:text-white">
              Client <span className="text-yellow-400">Voices</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              Discover how we've helped forward-thinking companies achieve their digital potential through innovation and design.
            </p>
          </motion.div>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full space-y-10 group">
          {/* Row 1: Right to Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex gap-8 py-4 px-4"
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {firstRow.map((t, i) => (
                <TestimonialCard key={`row1-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex gap-8 py-4 px-4"
              animate={{
                x: ["-50%", 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {secondRow.map((t, i) => (
                <TestimonialCard key={`row2-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex -space-x-3 mb-4">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt={t.author}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050505] object-cover shadow-sm"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bakbak text-primary border-2 border-white dark:border-[#050505] shadow-sm">
                +50
              </div>
            </div>
            <p className="text-sm font-poppins font-medium text-gray-400 tracking-wider">
              JOINED BY <span className="text-primary dark:text-white">50+ INDUSTRY LEADERS</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative w-[380px] min-w-[380px] p-8 rounded-3xl overflow-hidden
                 bg-white/40 dark:bg-white/5 backdrop-blur-[12px]
                 border border-white/50 dark:border-white/10
                 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-none
                 flex flex-col gap-6 cursor-default transition-all duration-300"
    >
      {/* Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 dark:bg-yellow-400/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

      {/* Quote Icon */}
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <Quote size={28} className="text-yellow-400/20" />
      </div>

      {/* Quote Text */}
      <p className="text-base font-poppins font-normal leading-relaxed text-gray-700 dark:text-gray-300 whitespace-normal line-clamp-4">
        "{testimonial.quote}"
      </p>

      {/* Author Profile */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
        <div className="h-12 w-12 rounded-2xl overflow-hidden shadow-inner">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bakbak text-primary dark:text-white uppercase tracking-tight">
            {testimonial.author}
          </span>
          <span className="text-[11px] font-poppins text-gray-500 dark:text-gray-500 font-medium">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
