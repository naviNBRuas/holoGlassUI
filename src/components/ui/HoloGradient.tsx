
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoloGradientProps {
  children?: ReactNode;
  className?: string;
  animated?: boolean;
  opacity?: number;
  blur?: number;
}

const HoloGradient = ({
  children,
  className,
  animated = true,
  opacity = 0.2,
  blur = 100,
}: HoloGradientProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-holo-gradient -z-10",
          animated && "animate-holo-shimmer"
        )}
        style={{
          backgroundSize: "200% 200%",
          opacity,
          filter: `blur(${blur}px)`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default HoloGradient;
