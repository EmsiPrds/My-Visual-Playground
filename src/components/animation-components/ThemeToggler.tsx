"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "../../lib/utils";

/**
 * Theme Toggler Components
 * 
 * This file provides 3 separate theme toggler components:
 * 
 * 1. LightThemeToggler - Sets theme to "light" when clicked
 *    Usage: <LightThemeToggler />
 * 
 * 2. DarkThemeToggler - Sets theme to "dark" when clicked
 *    Usage: <DarkThemeToggler />
 * 
 * 3. YellowThemeToggler - Sets theme to "yellow" when clicked
 *    Usage: <YellowThemeToggler />
 * 
 * Each toggler shows an active state when its theme is currently active.
 * Use all three together to provide theme selection:
 * 
 * <div className="flex gap-2">
 *   <LightThemeToggler />
 *   <DarkThemeToggler />
 *   <YellowThemeToggler />
 * </div>
 */

type Theme = "light" | "dark" | "yellow";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

// Helper function to get current theme from DOM
const getCurrentTheme = (): Theme => {
  const root = document.documentElement;
  if (root.classList.contains("yellow")) return "yellow";
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

// Helper function to set theme
const setTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark", "yellow");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
};

// Light Theme Toggler Component
export const LightThemeToggler = ({
  className,
  duration = 1000,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getCurrentTheme());
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(async () => {
    if (!buttonRef.current) return;

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setCurrentTheme("light");
        setTheme("light");
      });
    });

    await transition.ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [duration]);

  const isActive = currentTheme === "light";

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "w-15 h-15 rounded-full transition-all border-2",
        "bg-white border-gray-300 hover:border-gray-400",
        "dark:border-gray-600 dark:hover:border-gray-500",
        "yellow:border-yellow-300 yellow:hover:border-yellow-400",
        isActive && "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500 yellow:ring-yellow-500",
        className
      )}
      {...props}
      aria-label="Switch to light theme"
    >
      <span className="sr-only">Light theme</span>
    </button>
  );
};

// Dark Theme Toggler Component
export const DarkThemeToggler = ({
  className,
  duration = 1000,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getCurrentTheme());
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(async () => {
    if (!buttonRef.current) return;

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setCurrentTheme("dark");
        setTheme("dark");
      });
    });

    await transition.ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [duration]);

  const isActive = currentTheme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "w-15 h-15 rounded-full transition-all border-2",
        "bg-black border-gray-800 hover:border-gray-700",
        "dark:border-gray-400 dark:hover:border-gray-300",
        "yellow:border-yellow-800 yellow:hover:border-yellow-700",
        isActive && "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500 yellow:ring-yellow-500",
        className
      )}
      {...props}
      aria-label="Switch to dark theme"
    >
      <span className="sr-only">Dark theme</span>
    </button>
  );
};

// Yellow Theme Toggler Component
export const YellowThemeToggler = ({
  className,
  duration = 1000,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("yellow");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getCurrentTheme());
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(async () => {
    if (!buttonRef.current) return;

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setCurrentTheme("yellow");
        setTheme("yellow");
      });
    });

    await transition.ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [duration]);

  const isActive = currentTheme === "yellow";

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "w-15 h-15 rounded-full transition-all border-2",
        "bg-yellow-400 border-yellow-500 hover:border-yellow-600",
        "dark:border-yellow-400 dark:hover:border-yellow-300",
        "yellow:border-yellow-600 yellow:hover:border-yellow-700",
        isActive && "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500 yellow:ring-yellow-600",
        className
      )}
      {...props}
      aria-label="Switch to yellow theme"
    >
      <span className="sr-only">Yellow theme</span>
    </button>
  );
};

// Convenience component that renders all three togglers together
export const ThemeTogglerGroup = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex gap-2 items-center", className)} {...props}>
      <LightThemeToggler />
      <DarkThemeToggler />
      <YellowThemeToggler />
    </div>
  );
};

// Legacy component for backward compatibility - now renders all three togglers
export const AnimatedThemeToggler = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <ThemeTogglerGroup className={className} {...props} />;
};
