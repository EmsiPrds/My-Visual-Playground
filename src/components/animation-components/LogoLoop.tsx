/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  _p0: (number | LogoItem[])[]
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [callback, elements]);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  _p0: (number | LogoItem[])[]
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener("load", handleImageLoad, { once: true });
        htmlImg.addEventListener("error", handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, [onLoad, seqRef]);
};

// Enhanced animation loop with drag/swipe support and optimized resume
const useInteractiveAnimationLoop = (
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean,
  isDragging: boolean,
  isInteracting: boolean
) => {
  const x = useMotionValue(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastFrameTimeRef = useRef<number | null>(null);
  const wasInteractingRef = useRef(false);

  useAnimationFrame((time, delta) => {
    if (seqWidth <= 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      x.set(0);
      return;
    }

    // Don't auto-animate if user is interacting
    if (isDragging || isInteracting) {
      velocityRef.current = 0;
      lastFrameTimeRef.current = time;
      wasInteractingRef.current = true;
      return;
    }

    if (lastFrameTimeRef.current === null) {
      lastFrameTimeRef.current = time;
    }

    const deltaTime = Math.min(delta / 1000, 0.1); // Cap delta to prevent jumps

    const target = pauseOnHover && isHovered ? 0 : targetVelocity;

    // Faster acceleration when just resumed from interaction for better responsiveness
    const justResumed = wasInteractingRef.current && !isInteracting;
    const easingTau = justResumed
      ? ANIMATION_CONFIG.SMOOTH_TAU * 0.5
      : ANIMATION_CONFIG.SMOOTH_TAU;
    const easingFactor = 1 - Math.exp(-deltaTime / easingTau);

    velocityRef.current += (target - velocityRef.current) * easingFactor;

    // Update offset
    let nextOffset = offsetRef.current + velocityRef.current * deltaTime;

    // Wrap around for infinite loop
    nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
    offsetRef.current = nextOffset;

    const translateX = -offsetRef.current;
    x.set(translateX);

    lastFrameTimeRef.current = time;

    // Reset resume flag after first frame
    if (wasInteractingRef.current) {
      wasInteractingRef.current = false;
    }
  });

  return { x, offsetRef };
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(
      ANIMATION_CONFIG.MIN_COPIES
    );
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isInteracting, setIsInteracting] = useState<boolean>(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === "left" ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth =
        seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) +
          ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(
      updateDimensions,
      [containerRef, seqRef],
      [logos, gap, logoHeight]
    );

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);

    // Enhanced interactive animation
    const { x, offsetRef } = useInteractiveAnimationLoop(
      targetVelocity,
      seqWidth,
      isHovered,
      pauseOnHover,
      isDragging,
      isInteracting
    );

    // Handle auto-resume after interaction with reduced latency
    const scheduleResume = useCallback(() => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }

      resumeTimeoutRef.current = setTimeout(() => {
        setIsInteracting(false);
      }, 600); // Resume after 600ms for better responsiveness
    }, []);

    // Clean up resume timeout on unmount
    useEffect(() => {
      return () => {
        if (resumeTimeoutRef.current) {
          clearTimeout(resumeTimeoutRef.current);
        }
      };
    }, []);

    // Pan/drag handlers with proper infinite wrapping
    const handlePanStart = useCallback(() => {
      setIsDragging(true);
      setIsInteracting(true);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    }, []);

    const handlePan = useCallback(
      (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (seqWidth <= 0) return;

        // Apply drag delta to current position
        const currentX = x.get();
        const newX = currentX + info.delta.x;

        // Update motion value directly for smooth dragging
        x.set(newX);

        // Keep offset in sync for seamless loop
        const normalizedOffset = ((-newX % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = normalizedOffset;
      },
      [x, seqWidth, offsetRef]
    );

    const handlePanEnd = useCallback(
      (_event: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo) => {
        // Immediately end dragging state for responsiveness
        setIsDragging(false);

        // Final sync with wrapped offset
        if (seqWidth > 0) {
          const currentX = x.get();
          const normalizedOffset =
            ((-currentX % seqWidth) + seqWidth) % seqWidth;
          offsetRef.current = normalizedOffset;
        }

        // Quickly resume animation
        scheduleResume();
      },
      [x, seqWidth, offsetRef, scheduleResume]
    );

    // Optimized wheel/trackpad handler for low latency
    const handleWheel = useCallback(
      (e: React.WheelEvent) => {
        if (seqWidth <= 0) return;

        // Prevent default scrolling
        e.preventDefault();

        setIsInteracting(true);

        // Update position based on wheel delta with responsive feel
        const currentX = x.get();
        const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        const newX = currentX - delta;

        // Immediate position update for responsiveness
        x.set(newX);

        // Calculate wrapped offset
        const wrappedOffset = ((-newX % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = wrappedOffset;

        // Quick resume after wheel stops
        scheduleResume();
      },
      [x, seqWidth, offsetRef, scheduleResume]
    );

    const cssVariables = useMemo(
      () =>
        ({
          "--logoloop-gap": `${gap}px`,
          "--logoloop-logoHeight": `${logoHeight}px`,
          ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
        } as React.CSSProperties),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          "relative overflow-x-hidden group",
          "[--logoloop-gap:32px]",
          "[--logoloop-logoHeight:28px]",
          "[--logoloop-fadeColorAuto:#ffffff]",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className
        ),
      [scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = "node" in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              "inline-flex items-center",
              "motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-in-out group-hover/item:scale-120"
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              "h-(--logoloop-logoHeight) w-auto block object-contain",

              // outline look (default)
              "grayscale invert brightness-100 contrast-50",

              "transition-all duration-300 ease-in-out",

              // only THIS logo changes when hovered
              "group-hover/logo:grayscale-0 group-hover/logo:invert-0 group-hover/logo:brightness-100 group-hover/logo:contrast-100",

              "[-webkit-user-drag:none] pointer-events-none",
              "[image-rendering:-webkit-optimize-contrast]",

              scaleOnHover &&
                "transition-transform duration-300 ease-in-out group-hover/logo:scale-120"
            )}
            src={item.src}
            alt={item.alt ?? ""}
          />
        );

        const itemAriaLabel = isNodeItem
          ? item.ariaLabel ?? item.title
          : item.alt ?? item.title;

        const inner = item.href ? (
          <a
            className={cx(
              "inline-flex items-center no-underline rounded",
              "transition-opacity duration-200 ease-linear",
              "hover:opacity-80",
              "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2",
              isDragging && "pointer-events-none"
            )}
            href={item.href}
            aria-label={itemAriaLabel || "logo link"}
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => {
              // Prevent click when dragging
              if (isDragging) {
                e.preventDefault();
              }
            }}
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              "flex-none mr-(--logoloop-gap)",
              "group/logo", // <-- isolated group for each logo
              scaleOnHover && "overflow-visible"
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover, isDragging]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="flex items-center"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) =>
              renderLogoItem(item, `${copyIndex}-${itemIndex}`)
            )}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: toCssLength(width) ?? "100%",
        ...cssVariables,
        ...style,
      }),
      [width, cssVariables, style]
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 left-0 z-1",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-y-0 right-0 z-1",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
              )}
            />
          </>
        )}

        <motion.div
          className={cx(
            "flex w-max will-change-transform",
            isDragging ? "cursor-grabbing" : "cursor-grab",
            "motion-reduce:transform-none",
            "touch-pan-x" // Enable horizontal touch scrolling
          )}
          style={{
            x,
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "pan-x",
          }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0}
          dragMomentum={false}
          dragTransition={{
            bounceStiffness: 0,
            bounceDamping: 0,
            power: 0,
            timeConstant: 0,
          }}
          onPanStart={handlePanStart}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          onWheel={handleWheel}
        >
          {logoLists}
        </motion.div>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
