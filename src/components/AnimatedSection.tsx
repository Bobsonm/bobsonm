
import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale" | "rotate";
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!once || (once && !hasAnimated)) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, hasAnimated, threshold]);

  // Define the initial and animated styles based on direction
  let initialStyles = "";
  
  switch (direction) {
    case "up":
      initialStyles = "opacity-0 translate-y-12";
      break;
    case "down":
      initialStyles = "opacity-0 -translate-y-12";
      break;
    case "left":
      initialStyles = "opacity-0 translate-x-12";
      break;
    case "right":
      initialStyles = "opacity-0 -translate-x-12";
      break;
    case "none":
      initialStyles = "opacity-0";
      break;
    case "scale":
      initialStyles = "opacity-0 scale-95";
      break;
    case "rotate":
      initialStyles = "opacity-0 rotate-6";
      break;
    default:
      initialStyles = "opacity-0 translate-y-12";
  }

  const animatedStyles = "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? animatedStyles : initialStyles,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
