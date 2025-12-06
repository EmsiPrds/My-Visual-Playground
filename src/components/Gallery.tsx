import CircularGallery from "./animation-components/CircularGallery";

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  return (
    <section
      id="art"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6"
    >
      <div className="relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] xl:max-w-screen rounded-2xl sm:rounded-3xl md:rounded-4xl px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 lg:py-20 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 shadow-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14 w-full px-2">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Arts &{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Graphics Gallery
            </span>
          </h2>

          <p
            className={`text-xs sm:text-sm md:text-base lg:text-lg max-w-5xl mx-auto px-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A curated collection showcasing my digital art creations, graphic design projects, and visual experiments. Each piece represents a blend of creativity, technical skill, and artistic vision.
          </p>
        </div>

        {/* GALLERY WRAPPER */}
        <div
          className="
            w-full 
            flex 
            items-center 
            justify-center
            overflow-hidden
            h-[280px]
            min-[375px]:h-[320px]
            sm:h-[400px]
            md:h-[500px]
            lg:h-[600px]
            xl:h-[650px]
            min-h-0
            mb-6
            sm:mb-8
            md:mb-10
          "
        >
          <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
        </div>

        {/* Explore More Button */}
        <div className="flex items-center justify-center mt-4 sm:mt-6">
          <button className="relative cursor-pointer px-6 sm:px-8 py-2 sm:py-3 overflow-hidden rounded-full border-2 border-accent bg-accent font-medium text-secondary shadow-inner group transition-all duration-300 ease-in-out">
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
            <span className="relative transition-colors duration-300 delay-150 ease-in-out group-hover:text-primary text-sm sm:text-base">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
