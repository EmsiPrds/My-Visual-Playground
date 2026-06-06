import img1 from "../assets/GalleryImg/105414586_2825167191037031_2447299638851312612_n.png";
import img2 from "../assets/GalleryImg/117796760_2879794822240934_5270220426503076870_n.jpg";
import img3 from "../assets/GalleryImg/120634620_2918967294990353_525377328947455401_n.jpg";
import img4 from "../assets/GalleryImg/133781665_2995516510668764_6368164252912618011_n.jpg";
import img5 from "../assets/GalleryImg/158267074_3047658605454554_535120652391910650_n.jpg";
import img6 from "../assets/GalleryImg/480027206_1119479840189407_1009034977014878713_n.jpg";
import img7 from "../assets/GalleryImg/480209844_1121626139974777_8218927190403870406_n.jpg";
import img8 from "../assets/GalleryImg/480703279_1124914896312568_3021485688756749461_n.jpg";
import img9 from "../assets/GalleryImg/481243700_1129067019230689_400969886105280866_n.jpg";
import img10 from "../assets/GalleryImg/482356249_1141243034679754_502805037142750501_n.jpg";
import img11 from "../assets/GalleryImg/484905763_4195972293956507_7253545357160210588_n.jpg";
import img12 from "../assets/GalleryImg/485385706_4199015590318844_1199298520453159047_n.jpg";
import img13 from "../assets/GalleryImg/486037208_1149881453815912_3469223473439396301_n.jpg";
import img14 from "../assets/GalleryImg/486284888_4201372983416438_2322530579739436602_n.jpg";
import img15 from "../assets/GalleryImg/489556014_1166339912170066_1873711518467704819_n.jpg";
import img16 from "../assets/GalleryImg/Boys Jersey Design.png";
import img17 from "../assets/GalleryImg/Group 2.svg";
import img18 from "../assets/GalleryImg/ISKA Poster_page-0001.jpg";
import img19 from "../assets/GalleryImg/Logo.jpg";
import img20 from "../assets/GalleryImg/Nagkakaisa at Laging Handa sa Pakikipagtalastasan para sa Kapakanan ng Lahat.png";
import img21 from "../assets/GalleryImg/Solo Poster 2.png";
import img22 from "../assets/GalleryImg/White.png";
import { useComingSoon } from "../contexts/ComingSoonContext";
import CircularGallery from "./animation-components/CircularGallery";

interface GalleryProps {
  darkMode: boolean;
}

const galleryImages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
  { image: img14 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
  { image: img18 },
  { image: img19 },
  { image: img20 },
  { image: img21 },
  { image: img22 },
];

// eslint-disable-next-line no-empty-pattern
export default function Gallery({}: GalleryProps) {
  const { openComingSoon } = useComingSoon();

  return (
    <section
      id="art"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6"
    >
      <div className="relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] xl:max-w-screen rounded-2xl sm:rounded-3xl md:rounded-4xl px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 lg:py-20 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-primary yellow:bg-yellow-100 mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14 w-7xl px-2">
          <h2 className="text-4xl md:text-5xl font-bold font-bakbak text-center mb-4 text-primary dark:text-secondary">
            Arts &{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Graphics Gallery
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary dark:text-secondary font-poppins text-center mb-12">
            A curated collection showcasing my digital art creations, graphic
            design projects, and visual experiments. Each piece represents a
            blend of creativity, technical skill, and artistic vision.
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
            min-[375px]:h-80
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
          <CircularGallery items={galleryImages} bend={3} borderRadius={0.05} scrollEase={0.02} />
        </div>

        {/* Explore More Button */}
        <div className="flex items-center justify-center mt-4 sm:mt-6">
          <button 
            onClick={openComingSoon}
            className="relative cursor-pointer px-6 sm:px-8 py-2 sm:py-3 overflow-hidden rounded-full border-2 border-accent bg-accent font-medium text-secondary shadow-inner group transition-all duration-300 ease-in-out"
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
            <span className="relative transition-colors duration-300 delay-150 ease-in-out group-hover:text-primary text-sm sm:text-base">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
