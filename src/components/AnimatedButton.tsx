import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon,
  showArrow = false,
}) => {
  const baseClasses = `
    relative overflow-hidden font-semibold rounded-lg transition-all duration-300 
    transform hover:-translate-y-1 hover:shadow-xl active:scale-95
    group inline-flex items-center justify-center gap-2
  `;

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg",
    secondary:
      "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>

      {/* Shine Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default AnimatedButton;
