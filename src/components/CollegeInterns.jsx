"use client";
import React from "react";
import LogoSection from "./LogoSection";

const CollegeInterns = () => {
  const collegeLogos = [
    "/clg-logo1.webp", "/clg-logo2.webp", "/clg-logo3.webp",
    "/clg-logo4.webp", "/clg-logo5.webp", "/clg-logo6.webp",
    "/clg-logo7.webp", "/clg-logo8.webp", "/clg-logo9.webp",
    "/clg-logo10.webp", "/clg-logo11.webp", "/clg-logo12.webp",
    "/clg-logo13.webp"
  ];

  const firstRow = collegeLogos.slice(0, 9);
  const secondRow = collegeLogos.slice(9);
  
  return (
    <LogoSection
      title="Students from these top colleges have interned with us."
      logoGroups={[firstRow, secondRow]}
      gap="gap-[36px]"
      logoSizeClass="object-contain"
    />
  );
};

export default CollegeInterns;
