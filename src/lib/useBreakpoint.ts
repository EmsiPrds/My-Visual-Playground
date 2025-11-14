import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [bp, setBp] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("sm");

  useEffect(() => {
    let timeout: number;

    const update = () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const width = window.innerWidth;

        if (width >= 1536) setBp("2xl");
        else if (width >= 1280) setBp("xl");
        else if (width >= 1024) setBp("lg");
        else if (width >= 768) setBp("md");
        else setBp("sm");
      }, 80);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}
