
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoloTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"; // For backward compatibility
  gradient?: boolean;
  className?: string;
  animated?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const HoloText = ({
  children,
  as,
  element, // For backward compatibility
  gradient = true,
  className,
  animated = true,
  size,
}: HoloTextProps) => {
  // Use element prop as fallback if as is not provided (for backward compatibility)
  const Component = as || element || "span";
  
  const sizeClasses = size ? {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
  }[size] : '';
  
  return (
    <Component
      className={cn(
        gradient ? "holo-text" : "text-foreground",
        animated ? "animate-holo-shimmer" : "",
        sizeClasses,
        className
      )}
      style={gradient && animated ? { backgroundSize: "300% 300%" } : {}}
    >
      {children}
    </Component>
  );
};

export default HoloText;
export type { HoloTextProps };
