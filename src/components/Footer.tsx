interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`py-12 ${
        darkMode
          ? "bg-gray-900 border-t border-gray-800"
          : "bg-gray-100 border-t border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-lg"></div>
              <span
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                MVP Visuals
              </span>
            </div>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              Where Design, Art, and Technology Connect
            </p>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`${
                      darkMode
                        ? "text-gray-400 hover:text-yellow-400"
                        : "text-gray-600 hover:text-yellow-600"
                    } transition-colors text-sm`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </h4>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              Email: contact@mvpvisuals.com
            </p>
          </div>
        </div>

        <div
          className={`pt-8 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          } text-center`}
        >
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm`}
          >
            &copy; {new Date().getFullYear()} MVP Visuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
