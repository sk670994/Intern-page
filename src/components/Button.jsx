// src/components/Button.jsx
"use client";
export default function Button({ children, className = "", variant = "primary", ...props }) {
  // Base styles for the button text (font, leading, transition, font-weight)
  const baseStyles = "font-Montserrat leading-[100%] transition-colors duration-200 font-normal";

  // Variant styles for different button types
  const variants = {
    primary: "bg-white text-[#002E83] font-Montserrat  hover:bg-gray-100", // White background, dark blue text for primary action
    secondary: "bg-transparent text-white border-2 font-Montserrat border-white", // Example secondary variant
  };

  // Combine base styles, variant specific styles, and any additional classes passed via props
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}