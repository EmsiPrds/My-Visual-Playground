import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(Draggable);

interface StickerPeelProps {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: "center" | "random" | { x: number; y: number };
  peelDirection?: number;
  className?: string;
  shadowColor?: string;
  shadowGlowColor?: string;
  index?: number;
  onInteractionChange?: (isInteracting: boolean) => void;
  tooltipText?: string;
  tooltipDescription?: string;
}

interface CSSVars extends CSSProperties {
  "--sticker-rotate"?: string;
  "--sticker-p"?: string;
  "--sticker-peelback-hover"?: string;
  "--sticker-peelback-active"?: string;
  "--sticker-peel-easing"?: string;
  "--sticker-peel-hover-easing"?: string;
  "--sticker-width"?: string;
  "--sticker-shadow-opacity"?: number;
  "--sticker-lighting-constant"?: number;
  "--peel-direction"?: string;
  "--sticker-start"?: string;
  "--sticker-end"?: string;
}

const StickerPeel: React.FC<StickerPeelProps> = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = "power3.out",
  peelHoverEasing = "power2.out",
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = "center",
  peelDirection = 0,
  className = "",
  shadowColor = "black",
  shadowGlowColor,
  index = 0,
  onInteractionChange,
  tooltipText,
  tooltipDescription,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Generate unique IDs for filters to avoid conflicts
  const filterId = useMemo(() => `dropShadow-${Math.random().toString(36).substr(2, 9)}`, []);
  const glowFilterId = useMemo(() => `glow-${Math.random().toString(36).substr(2, 9)}`, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const defaultPadding = 12;

  // Track previous position for smooth transitions
  const previousPositionRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let newX = 0,
      newY = 0;

    if (initialPosition === "center") {
      return;
    }

    if (
      typeof initialPosition === "object" &&
      initialPosition.x !== undefined &&
      initialPosition.y !== undefined
    ) {
      newX = initialPosition.x;
      newY = initialPosition.y;
    }

    // If we have a previous position, animate smoothly; otherwise set immediately
    if (previousPositionRef.current) {
      const prevPos = previousPositionRef.current;
      const distance = Math.sqrt(
        Math.pow(newX - prevPos.x, 2) + Math.pow(newY - prevPos.y, 2)
      );
      
      // Only animate if position actually changed and distance is significant
      if (distance > 1) {
        // Smooth, subtle animation - slow duration for organic feel
        gsap.to(target, {
          x: newX,
          y: newY,
          duration: 8 + Math.random() * 4, // 8-12 seconds for very subtle movement
          ease: "power1.inOut", // Smooth ease for natural movement
          overwrite: true,
        });
      }
    } else {
      // First render - set position immediately
      gsap.set(target, { x: newX, y: newY });
    }

    // Update previous position
    previousPositionRef.current = { x: newX, y: newY };
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    const boundsEl = target.parentNode as HTMLElement;

    const draggable = Draggable.create(target, {
      type: "x,y",
      bounds: boundsEl,
      inertia: true,
      onDragStart(this: Draggable) {
        // Bring sticker to front when dragging starts
        gsap.set(target, { zIndex: 102, scale: 1.1 });
        onInteractionChange?.(true);
      },
      onDrag(this: Draggable) {
        // No rotation during drag - just movement
      },
      onDragEnd() {
        const duration = 0.8;
        // Return to normal z-index and scale
        gsap.to(target, { 
          scale: 1,
          zIndex: 101,
          duration, 
          ease: "power2.out"
        });
        // Delay to allow drag end animation to complete
        setTimeout(() => {
          onInteractionChange?.(false);
        }, duration * 1000);
      },
    });

    draggableInstanceRef.current = draggable[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();

        const currentX = gsap.getProperty(target, "x") as number;
        const currentY = gsap.getProperty(target, "y") as number;

        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;

        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));

        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, {
            x: newX,
            y: newY,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      if (pointLightRef.current) {
        gsap.set(pointLightRef.current, { attr: { x, y } });
      }

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x, y: rect.height - y },
          });
        } else {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x: -1000, y: -1000 },
          });
        }
      }
    };

    const container = containerRef.current;
    const eventType = "mousemove";

    if (container) {
      container.addEventListener(eventType, updateLight);
      return () => container.removeEventListener(eventType, updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add("touch-active");
    };

    const handleTouchEnd = () => {
      container.classList.remove("touch-active");
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const cssVars: CSSVars = useMemo(
    () => ({
      "--sticker-rotate": `${rotate}deg`,
      "--sticker-p": `${defaultPadding}px`,
      "--sticker-peelback-hover": `${peelBackHoverPct}%`,
      "--sticker-peelback-active": `${peelBackActivePct}%`,
      "--sticker-peel-easing": peelEasing,
      "--sticker-peel-hover-easing": peelHoverEasing,
      "--sticker-width": `${width}px`,
      "--sticker-shadow-opacity": shadowIntensity,
      "--sticker-lighting-constant": lightingIntensity,
      "--peel-direction": `${peelDirection}deg`,
      "--sticker-start": `calc(-1 * ${defaultPadding}px)`,
      "--sticker-end": `calc(100% + ${defaultPadding}px)`,
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      defaultPadding,
    ]
  );

  const stickerMainStyle: CSSProperties = {
    clipPath: `polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end))`,
    transition: "clip-path 0.6s ease-out",
    filter: shadowGlowColor ? `url(#${glowFilterId})` : `url(#${filterId})`,
    willChange: "clip-path, transform",
  };

  const flapStyle: CSSProperties = {
    clipPath: `polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-start) var(--sticker-start))`,
    top: `calc(-100% - var(--sticker-p) - var(--sticker-p))`,
    transform: "scaleY(-1)",
    transition: "all 0.6s ease-out",
    willChange: "clip-path, transform",
  };

  const imageStyle: CSSProperties = {
    transform: `rotate(calc(${rotate}deg - ${peelDirection}deg))`,
    width: `${width}px`,
  };

  const shadowImageStyle: CSSProperties = {
    ...imageStyle,
    filter: "url(#expandAndFill)",
  };

  return (
    <div
      className={`absolute cursor-grab active:cursor-grabbing transform-gpu ${className}`}
      ref={dragTargetRef}
      style={{
        ...cssVars,
        zIndex: 101,
        isolation: 'isolate', // Creates a new stacking context
        '--sticker-index': index,
        '--peel-direction': `${peelDirection}deg`,
      } as CSSProperties & { '--sticker-index': number; '--peel-direction': string }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes subtleFloat {
            0%, 100% {
              transform: translateY(0px) rotate(var(--peel-direction));
            }
            50% {
              transform: translateY(-3px) rotate(var(--peel-direction));
            }
          }
          
          @keyframes subtlePulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.96;
            }
          }
          
          .sticker-container {
            transform: rotate(var(--peel-direction));
            animation: subtleFloat 4s ease-in-out infinite;
            animation-delay: calc(var(--sticker-index, 0) * 0.2s);
          }
          
          .sticker-container:hover {
            animation: none;
            transform: translateY(-2px) rotate(var(--peel-direction)) !important;
            transition: transform 0.2s ease-out;
          }
          
          .sticker-main {
            animation: subtlePulse 3s ease-in-out infinite;
            animation-delay: calc(var(--sticker-index, 0) * 0.15s);
          }
          
          .sticker-container:hover .sticker-main,
          .sticker-container.touch-active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
            animation: none;
          }
          .sticker-container:hover .sticker-flap,
          .sticker-container.touch-active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-start) var(--sticker-peelback-hover)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px) !important;
          }
          .sticker-container:active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-start) var(--sticker-peelback-active)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px) !important;
          }
        `,
        }}
      />

      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight
                ref={pointLightFlippedRef}
                x="100"
                y="100"
                z="300"
              />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={filterId}>
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor={shadowColor}
              floodOpacity={shadowIntensity}
            />
          </filter>

          {shadowGlowColor && (
            <filter id={glowFilterId}>
              {/* Extract alpha channel for glow */}
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="alpha"/>
              {/* Blur the alpha to create glow shape */}
              <feGaussianBlur in="alpha" stdDeviation="6" result="blur"/>
              {/* Apply colored glow */}
              <feFlood floodColor={shadowGlowColor} floodOpacity="0.8" result="glowColor"/>
              <feComposite in="glowColor" in2="blur" operator="in" result="coloredGlow"/>
              {/* Regular drop shadow */}
              <feDropShadow
                dx="2"
                dy="4"
                stdDeviation={3 * shadowIntensity}
                floodColor={shadowColor}
                floodOpacity={shadowIntensity}
              />
              {/* Merge: colored glow, shadow, then original graphic */}
              <feMerge>
                <feMergeNode in="coloredGlow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container relative select-none touch-none sm:touch-auto"
        ref={containerRef}
        style={{
          WebkitUserSelect: "none",
          userSelect: "none",
          WebkitTouchCallout: "none",
          WebkitTapHighlightColor: "transparent",
          transformOrigin: "center",
        }}
        onMouseEnter={() => {
          if (tooltipText) {
            if (tooltipTimeoutRef.current) {
              clearTimeout(tooltipTimeoutRef.current);
            }
            tooltipTimeoutRef.current = setTimeout(() => {
              setShowTooltip(true);
            }, 500); // Show tooltip after 500ms hover
          }
        }}
        onMouseLeave={() => {
          if (tooltipTimeoutRef.current) {
            clearTimeout(tooltipTimeoutRef.current);
            tooltipTimeoutRef.current = null;
          }
          setShowTooltip(false);
        }}
      >
        <div className="sticker-main" style={stickerMainStyle}>
          <div style={{ filter: "url(#pointLight)" }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={imageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="absolute top-4 left-2 w-full h-full opacity-40"
          style={{ filter: "brightness(0) blur(8px)" }}
        >
          <div className="sticker-flap" style={flapStyle}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="sticker-flap absolute w-full h-full left-0"
          style={flapStyle}
        >
          <div style={{ filter: "url(#pointLightFlipped)" }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Tooltip */}
        {showTooltip && tooltipText && (
          <div
            className="absolute z-[200] pointer-events-none"
            style={{
              bottom: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
              <div className="font-semibold">{tooltipText}</div>
              {tooltipDescription && (
                <div className="text-xs mt-1 opacity-90 font-normal max-w-[200px] whitespace-normal">
                  {tooltipDescription}
                </div>
              )}
              {/* Tooltip arrow */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"
                style={{ marginTop: "-1px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickerPeel;
