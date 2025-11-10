import { useEffect, useRef, useState } from "react";

interface ScrollingMockupProps {
  imageSrc: string;
  alt?: string;
  widthClass?: string; // Tailwind width classes
  scrollRange?: number; // Optional custom scroll distance
  speed?: number; // Scroll speed
  tilt?: number; // Optional tilt in degrees
}

const ScrollingMockup: React.FC<ScrollingMockupProps> = ({
  imageSrc,
  alt = "Scrolling Mockup",
  widthClass = "w-[380px] sm:w-[450px] lg:w-[520px]",
  scrollRange, // Optional
  speed = 0.4,
  tilt = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (containerRef.current && imgRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const imageHeight = imgRef.current.scrollHeight;

        // if scrollRange is provided → use it, else use full scrollable distance
        const range = scrollRange ?? Math.max(imageHeight - containerHeight, 0);
        setMaxScroll(range);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, [scrollRange]);

  useEffect(() => {
    let currentScroll = 0;
    let direction = 1;

    const animate = () => {
      currentScroll += direction * speed;

      if (currentScroll >= maxScroll) direction = -1;
      else if (currentScroll <= 0) direction = 1;

      setScrollY(currentScroll);
      animationRef.current = requestAnimationFrame(animate);
    };

    if (maxScroll > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxScroll, speed]);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[500px] overflow-hidden flex items-center justify-center pointer-events-none"
      style={{
        transform: `rotate(${tilt}deg)`,
        transformOrigin: "center center",
      }}
    >
      <div
        className={`rounded-2xl shadow-2xl overflow-hidden border border-gray-200 ${widthClass}`}
        style={{
          transform: `translateY(-${scrollY}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Optional glow accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-20" />
    </div>
  );
};

export default ScrollingMockup;
