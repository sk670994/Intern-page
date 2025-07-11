"use client";
import React from "react";

const LogoSection = ({
  title,
  logoGroups = [[]], // Array of arrays of logos
  isObjectLogos = false,
  sectionClass = "",
  titleClass = "",
  logoSizeClass = "h-full object-contain",
  gap = "gap-[36px]",
}) => {
  return (
    <div className={`w-full bg-[#E5EAF3] px-[128px] py-[40px] flex flex-col items-center justify-center ${sectionClass}`}>
      <h1 className={`text-4xl font-bold font-Montserrat text-center tracking-wider ${titleClass}`}>
        {title}
      </h1>

      <div className="flex flex-col items-center justify-center gap-[32px] mt-[24px]">
        {logoGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={`flex flex-wrap justify-center items-center ${gap}`}>
            {group.map((logo, index) => {
              const src = isObjectLogos ? logo.logo : logo;
              const alt = isObjectLogos ? `${logo.name} logo` : `logo-${index}`;
              return (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className={logoSizeClass}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
