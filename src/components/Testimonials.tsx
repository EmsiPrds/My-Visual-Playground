import { Quote } from "lucide-react";

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
  ];

  return (
    <section
      id="testimonials"
      className={`py-24 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Client{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            What our clients say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              } border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <Quote className="text-yellow-400 mb-4" size={32} />

              <p
                className={`text-base mb-6 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className={`text-sm ${
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
      </div>
    </section>
  );
}
