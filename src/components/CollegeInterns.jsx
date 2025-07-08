"use client";
import React from "react";

const CollegeInterns = () => {
  const collegeLogos = [
    "/clg-logo1.webp",
    "/clg-logo2.webp",
    "/clg-logo3.webp",
    "/clg-logo4.webp",
    "/clg-logo5.webp",
    "/clg-logo6.webp",
    "/clg-logo7.webp",
    "/clg-logo8.webp",
    "/clg-logo9.webp",
    "/clg-logo10.webp",
    "/clg-logo11.webp",
    "/clg-logo12.webp",
    "/clg-logo13.webp",
  ];

  const firstRow = collegeLogos.slice(0, 9);
  const secondRow = collegeLogos.slice(9, 13);

  return (
    <div className="w-full  bg-[#E5EAF3] px-[128px] py-[40px] flex flex-col items-center justify-center gap-[24px]">
      {/* Heading */}
      <h1 className="text-4xl tracking-wider font-bold flex flex-col items-center justify-center font-Montserrat w-[1280px] h-[44px]">
        Students from these top colleges have interned with us.
      </h1>

      {/* Logo Grid */}
      <div className="flex flex-col justify-between items-center gap-[32px]">
        <div className="flex items-center justify-center  gap-[36px]">
          {firstRow.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`clg-logo${index + 1}`}
              className="object-contain"
            />
          ))}
        </div>

        <div className="flex justify-center mx-[245.5px] py-[4px] gap-[36px]">
          {secondRow.map((logo, index) => (
            <img
              key={index + 6}
              src={logo}
              alt={`clg-logo${index + 7}`}
              className="object-contain " 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeInterns;
