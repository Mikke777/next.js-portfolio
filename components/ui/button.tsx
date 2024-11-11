// components/ui/button.tsx
"use client";

import React from "react";

interface ButtonProps {
  variant?: "outline" | "filled";
  size?: "icon" | "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "medium",
  children,
  onClick,
}) => {
  const buttonClass = `btn ${variant} ${size}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
