import React from "react";

export const ClickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#002E83"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Button = ({ variant = "primary", className = "", children, ...props }) => {
  const base =
    "flex items-center justify-center font-['Montserrat'] text-[16px] gap-[10px] w-[251px] h-[56px] px-8 py-4 transition duration-200 text-[#002E83]";

  const variants = {
    primary: "bg-white border border-white text-[#002E83]",
    outline: "bg-white border border-[#002E83] text-[#002E83]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;