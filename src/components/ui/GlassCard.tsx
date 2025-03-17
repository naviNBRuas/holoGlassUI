
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGlow?: boolean;
  onClick?: () => void;
}

const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  borderGlow = false,
  onClick,
}: GlassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl frosted-glass overflow-hidden p-6 relative transition-all duration-500 ease-apple",
        hoverEffect && "hover:translate-y-[-4px] hover:shadow-xl cursor-pointer",
        borderGlow && "holo-border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
