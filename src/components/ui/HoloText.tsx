
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoloTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  gradient?: boolean;
  className?: string;
  animated?: boolean;
}

const HoloText = ({
  children,
  as = "span",
  gradient = true,
  className,
  animated = true,
}: HoloTextProps) => {
  const Component = as;
  
  return (
    <Component
      className={cn(
        gradient ? "holo-text" : "text-foreground",
        animated ? "animate-holo-shimmer" : "",
        className
      )}
      style={gradient && animated ? { backgroundSize: "300% 300%" } : {}}
    >
      {children}
    </Component>
  );
};

export default HoloText;
