import { Quote } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const testimonials = [
    {
      quote:
        "MVP Visuals transformed our digital presence with a stunning website that perfectly captures our brand. Their attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "Working with MVP Visuals on our network infrastructure was seamless. They delivered a robust, scalable solution that has significantly improved our operations.",
      author: "Michael Chen",
      role: "IT Director, Global Systems",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "The graphic design work for our rebrand was exceptional. MVP Visuals captured our vision and created a cohesive identity that resonates with our audience.",
      author: "Emily Rodriguez",
      role: "Marketing Lead, Creative Co.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "Outstanding service and incredible results! MVP Visuals helped us launch our e-commerce platform with a beautiful, user-friendly design that increased our sales by 40%.",
      author: "David Thompson",
      role: "Founder, ShopSmart",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "The team at MVP Visuals is professional, creative, and truly understands how to translate business needs into digital solutions. Highly recommended!",
      author: "Lisa Park",
      role: "Product Manager, InnovateLab",
      image:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "MVP Visuals delivered a mobile app that exceeded all our expectations. The user experience is flawless, and the development process was smooth and collaborative.",
      author: "James Wilson",
      role: "CTO, MobileFirst Solutions",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  const x = useMotionValue(0);
  const offsetRef = useRef(0);
  const speed = 30; // pixels per second

  // Calculate sequence width
  useEffect(() => {
    const updateWidth = () => {
      if (sequenceRef.current) {
        const width = sequenceRef.current.getBoundingClientRect().width;
        setSequenceWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Smooth marquee animation
  useAnimationFrame((_time, delta) => {
    if (sequenceWidth <= 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || isHovered) {
      return;
    }

    const deltaTime = Math.min(delta / 1000, 0.1);
    const velocity = speed * deltaTime;

    let nextOffset = offsetRef.current + velocity;
    nextOffset = ((nextOffset % sequenceWidth) + sequenceWidth) % sequenceWidth;
    offsetRef.current = nextOffset;

    x.set(-nextOffset);
  });

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-100 yellow:bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative w-[98vw] max-w-screen rounded-4xl sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Client{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            What our clients say about working with us
          </p>
        </div>

        <div
          ref={containerRef}
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fade gradients */}
          <div
            className={`absolute inset-y-0 left-0 z-10 w-24 pointer-events-none ${
              darkMode
                ? "bg-linear-to-r from-primary to-transparent"
                : "bg-linear-to-r from-white to-transparent"
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 z-10 w-24 pointer-events-none ${
              darkMode
                ? "bg-linear-to-l from-primary to-transparent"
                : "bg-linear-to-l from-white to-transparent"
            }`}
          />

          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: Infinity }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(_, info) => {
              const currentX = x.get();
              const newX = currentX + info.delta.x;
              x.set(newX);
              if (sequenceWidth > 0) {
                const normalizedOffset =
                  ((-newX % sequenceWidth) + sequenceWidth) % sequenceWidth;
                offsetRef.current = normalizedOffset;
              }
            }}
          >
            <div
              ref={sequenceRef}
              className="flex py-5 gap-4 sm:gap-6 md:gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`original-${index}`}
                  className={`shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] p-4 sm:p-6 md:p-8 rounded-xl relative ${
                    darkMode ? "bg-gray-900" : "bg-gray-50"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:z-20 h-full flex flex-col`}
                >
                  <Quote className="text-yellow-400 mb-3 sm:mb-4" size={28} />

                  <p
                    className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed grow ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p
                        className={`font-semibold text-sm sm:text-base truncate ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className={`text-xs sm:text-sm truncate ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-4 py-5 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={`shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] p-4 sm:p-6 md:p-8 rounded-xl relative ${
                    darkMode ? "bg-gray-900" : "bg-gray-50"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:z-20 h-full flex flex-col`}
                >
                  <Quote className="text-yellow-400 mb-3 sm:mb-4" size={28} />

                  <p
                    className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed grow ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p
                        className={`font-semibold text-sm sm:text-base truncate ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className={`text-xs sm:text-sm truncate ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
