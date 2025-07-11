"use client";
import React from "react";

export default function SectionWrapper({
  id,
  title,
  description,
  children,
  bgColor = "bg-white",
  className = "",
  titleClass = "",
  containerClass = "",
  showHeader = true,
  variant = "primary", // "primary" = left, "secondary" = center
}) {
  return (
    <section
      id={id}
      className={`w-full ${bgColor} flex justify-center ${className}`}
    >
      <div className={`w-full ${containerClass}`}>
        {showHeader && (title || description) && (
          <div
            className={`mb-6 ${
              variant === "secondary"
                ? "text-center flex flex-col items-center"
                : "text-left"
            }`}
          >
            {title && (
              <h2
                className={`text-[28px] sm:text-[32px] lg:text-[36px] font-bold font-Montserrat text-black ${titleClass}`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="text-[16px] font-normal leading-[22px] text-black mt-2">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
