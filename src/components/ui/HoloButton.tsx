
import React, { useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoloButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const HoloButton = ({
  children,
  variant = "primary",
  className,
  onClick,
  disabled = false,
  size = "md",
}: HoloButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isRippling, setIsRippling] = useState(false);

  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2.5 px-5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-holo-gradient text-white shadow-sm hover:shadow-holo",
    secondary:
      "bg-white/10 backdrop-blur-md text-foreground shadow-sm border border-white/20 hover:border-white/30 hover:bg-white/15",
    outline:
      "bg-transparent border border-white/20 text-foreground hover:bg-white/5",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    // Ripple effect
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 700);
    }
    
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    
    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative rounded-xl font-medium transition-all overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        "transition duration-300 ease-apple active:scale-[0.98]",
        isPressed ? "scale-[0.98]" : "",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Ripple effect */}
      {isRippling && (
        <span
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            top: coords.y,
            left: coords.x,
            transformOrigin: "center",
          }}
        />
      )}
      
      {/* Gradient animated border for primary variant */}
      {variant === "primary" && (
        <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 animate-holo-shimmer bg-holo-gradient opacity-30" style={{ backgroundSize: "200% 200%" }}></span>
        </span>
      )}
    </button>
  );
};

export default HoloButton;
