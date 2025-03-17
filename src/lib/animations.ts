
import { useEffect, useState } from "react";

// Intersection Observer hook for triggering animations on scroll
export const useInView = (
  options = {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  }
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isInView };
};

// Parallax effect hook for mouse movement
export const useParallax = (
  sensitivity = 0.05,
  initialX = 0,
  initialY = 0
) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * sensitivity;
      const deltaY = (e.clientY - centerY) * sensitivity;
      
      setPosition({ x: deltaX, y: deltaY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref, sensitivity]);

  return { ref: setRef, position };
};

// Staggered animation for children
export const useStaggeredAnimation = (
  count: number,
  baseDelay = 100,
  stagger = 50
) => {
  return Array.from({ length: count }).map((_, i) => ({
    style: { animationDelay: `${baseDelay + i * stagger}ms` },
  }));
};
