import { useEffect, useRef, useState } from "react";

interface ScrollingMockupProps {
  imageSrc: string;
  alt?: string;
  widthClass?: string;
  scrollRange?: number;
  speed?: number;
  tilt?: number;
  direction?: "up" | "down"; // NEW
}

const ScrollingMockup: React.FC<ScrollingMockupProps> = ({
  imageSrc,
  alt = "Scrolling Mockup",
  widthClass = "w-[380px] sm:w-[450px] lg:w-[520px]",
  scrollRange,
  speed = 0.4,
  tilt = 0,
  direction = "up", // <-- important: default direction
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

        const range = scrollRange ?? Math.max(imageHeight - containerHeight, 0);
        setMaxScroll(range);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, [scrollRange]);

  useEffect(() => {
    // Start position based on direction
    let currentScroll = direction === "down" ? 0 : maxScroll;
    let directionValue = direction === "down" ? 1 : -1;

    const animate = () => {
      currentScroll += directionValue * speed;

      if (currentScroll >= maxScroll) directionValue = -1;
      else if (currentScroll <= 0) directionValue = 1;

      setScrollY(currentScroll);
      animationRef.current = requestAnimationFrame(animate);
    };

    if (maxScroll > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxScroll, speed, direction]);

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
