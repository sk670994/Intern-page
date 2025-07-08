"use client";
import React from "react";

export default function HowWeHire() {
  const steps = [
    {
      number: "1.",
      title: "Application Submission",
      description:
        "Interested candidates apply through our careers page or internship portal.",
      imgSrc: "/1.png",
    },
    {
      number: "2.",
      title: "Resume Screening",
      description:
        "We review your resume to match skills, education, and interest with the role.",
      imgSrc: "/2.png",
    },
    {
      number: "3.",
      title: "Assignment",
      description:
        "Some roles may include a short task or test to assess basic skills.",
      imgSrc: "/3.png",
    },
    {
      number: "4.",
      title: "Technical/Project Interview",
      description:
        "We discuss your academic projects, technical knowledge, and problem-",
      imgSrc: "/4.png",
    },
    {
      number: "5.",
      title: "HR Interview",
      description:
        "A brief chat to understand your goals, availability, and cultural fit.",
      imgSrc: "/5.png",
    },
    {
      number: "6.",
      title: "Offer & Onboarding",
      description:
        "Selected interns receive an offer letter with details to start the internship.",
      imgSrc: "/6.png",
    },
  ];

  return (
    <div className="relative w-[1536px] h-[538px] bg-[#E5EAF3] pt-[32px]">
      <div className="px-[128px] font-Montserrat">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[36px] font-bold leading-[44px] tracking-[0.02em] text-black">
            How We Hire
          </h1>
          <button className="text-[14px]  bg-[#002E83] px-[20px] py-[17px] text-white w-[195px] h-[51px] font-Montserrat   ">
            Explore Opportunities
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-x-[48px] gap-y-[77px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-[388.33px] h-[111px] bg-white rounded-[10px] px-[20px] pt-[20px] pb-[16px]"
            >
              <div className="flex items-start gap-[12px]">
                <div className="w-[38px] h-[38px] bg-[#002E83] rounded-[4px] flex items-center justify-center">
                  <img
                    src={step.imgSrc}
                    alt={`step-${index + 1}`}
                    className="w-[23px] h-[23px] object-contain"
                  />
                </div>
                <h2 className="text-[20px] leading-[22px] text-black">
                  {step.number} {step.title}
                </h2>
              </div>
              <p className="text-[16px] font-normal leading-[22px] text-black pl-[50px] mt-[4px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows using images (adjust your image paths accordingly) */}
      <img
        src="/Arrow.webp"
        alt="arrow"
        className="absolute top-[163px] left-[515.5px] w-[58px] h-[20px]"
      />
      <img
        src="/Arrow.webp"
        alt="arrow"
        className="absolute top-[162px] left-[958.5px] w-[58px] h-[20px]"
      />
      <img
        src="/Arrow.webp"
        alt="arrow"
        className="absolute top-[354px] left-[515.5px] w-[58px] h-[20px]"
      />
      <img
        src="/Arrow.webp"
        alt="arrow"
        className="absolute top-[351px] left-[958.5px] w-[58px] h-[20px]"
      />
    </div>
  );
}
