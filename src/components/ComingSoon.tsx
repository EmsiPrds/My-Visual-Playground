import { X } from "lucide-react";
import { useEffect } from "react";

interface ComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoon({ isOpen, onClose }: ComingSoonProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-primary rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon/Animation */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center animate-pulse">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bakbak font-bold mb-4 text-primary dark:text-secondary">
            Coming Soon!
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg font-poppins text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            We're working hard to bring you something amazing. This feature will
            be available soon!
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-yellow-600 animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="relative cursor-pointer px-8 py-3 overflow-hidden rounded-full border-2 border-accent bg-accent font-medium text-secondary shadow-inner group transition-all duration-300 ease-in-out"
          >
            {/* Top border animation */}
            <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>

            {/* Bottom border animation */}
            <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>

            {/* Top fill */}
            <span className="absolute left-0 top-0 h-0 w-full bg-secondary transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

            {/* Bottom fill */}
            <span className="absolute bottom-0 left-0 h-0 w-full bg-secondary transition-all duration-400 delay-150 ease-in-out group-hover:h-full"></span>

            {/* Dark overlay */}
            <span className="absolute inset-0 h-full w-full bg-secondary opacity-0 transition-opacity duration-400 delay-250 ease-in-out group-hover:opacity-100"></span>

            {/* Text */}
            <span className="relative transition-colors duration-300 delay-150 ease-in-out group-hover:text-primary">
              Got it!
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

