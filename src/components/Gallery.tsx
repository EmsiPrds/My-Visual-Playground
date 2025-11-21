import CircularGallery from "./animation-components/CircularGallery";

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  return (
    <section
      id="art"
      className={`py-16 sm:py-20 lg:py-24 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Digital{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Art Gallery
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base lg:text-lg max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of creative digital artworks and visual experiments.
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

            h-[350px]
            sm:h-[450px]
            md:h-[500px]
            lg:h-[600px]
            xl:h-[650px]
          "
        >
          <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>
    </section>
  );
}
