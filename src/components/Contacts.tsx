import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Contact({ darkMode: _darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:mcvincentparedes@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/EmsiPrds", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mc-vincent-paredes-4203122b7/",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/MCart0121",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gray-100 py-24 px-4 sm:px-6 transition-colors duration-500 overflow-hidden"
    >
      {/* Dynamic Background Elements - Full Section Coverage */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-bakbak mb-8 text-primary leading-none">
                Get In <span className="text-yellow-400">Touch</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-lg font-poppins font-light leading-relaxed">
                Elevating your digital presence through strategic design and
                robust technical solutions. Let's discuss your next project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-gray-200/50 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-500 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-bakbak text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Send an Email
                  </p>
                  <a
                    href="mailto:mcvincentparedes@gmail.com"
                    className="text-xl font-poppins font-semibold text-primary hover:text-yellow-400 transition-colors"
                  >
                    mcvincentparedes@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-gray-200/50 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-500 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-bakbak text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Based
                  </p>
                  <p className="text-xl font-poppins font-semibold text-primary">
                    Atimonan Quezon / Imus Cavite
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-gray-200/50 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-500 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-bakbak text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Contact Number
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-xl font-poppins font-semibold text-primary hover:text-yellow-400 transition-colors"
                  >
                    0935-406-8405
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <p className="text-xs font-bakbak text-gray-400 uppercase tracking-[0.2em] mb-8">
                Digital Footprint
              </p>
              <div className="flex flex-wrap gap-5">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-2xl bg-gray-200/50 flex items-center justify-center text-primary hover:bg-yellow-400 hover:text-primary transition-all duration-500 shadow-sm border border-transparent hover:border-yellow-400/20"
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Form Backdrop Card */}
            <div className="bg-white backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bakbak text-primary uppercase tracking-widest ml-1"
                    >
                      Identity
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-7 py-5 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-yellow-400 focus:outline-none transition-all font-poppins text-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bakbak text-primary uppercase tracking-widest ml-1"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-7 py-5 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-yellow-400 focus:outline-none transition-all font-poppins text-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bakbak text-primary uppercase tracking-widest ml-1"
                    >
                      Brief / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-7 py-5 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-yellow-400 focus:outline-none transition-all font-poppins text-primary resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-primary font-bakbak text-xl rounded-2xl shadow-2xl shadow-yellow-400/30 flex items-center justify-center gap-4 transition-all"
                >
                  Initiate Project
                  <Send
                    size={22}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
