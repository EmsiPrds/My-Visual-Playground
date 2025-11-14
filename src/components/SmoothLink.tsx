import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface SmoothLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * SmoothLink component that provides smooth scrolling to hash sections
 * Works with React Router for smooth navigation
 */
export default function SmoothLink({
  to,
  children,
  className,
  onClick,
  ...props
}: SmoothLinkProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link, prevent default and smooth scroll
    if (to.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Call custom onClick if provided
      if (onClick) onClick();
    } else {
      // For regular routes, let React Router handle it
      if (onClick) onClick();
    }
  };

  // Handle scroll on route change (for hash links)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

