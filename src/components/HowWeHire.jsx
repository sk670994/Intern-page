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
        "We discuss your academic projects, technical knowledge, and problem-solving.",
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
    <div className="w-full h-[527px] bg-[#E5EAF3] flex justify-center  pt-[40px]">
      <div className="w-[1517px] h-[518px] font-['Montserrat'] px-[128px] flex flex-col gap-[32px]">
       
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[36px] font-bold text-black tracking-wider leading-none">
            How We Hire
          </h1>
          <button className="bg-[#002E83] text-white w-[195px] h-[51px] rounded-md text-[14px] font-semibold">
            Explore Opportunities
          </button>
        </div>

       
        <div className="grid grid-cols-3 gap-x-[48px] gap-y-[77.14px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-[388.33px] h-[111px] bg-white rounded-[10px] p-[12px] flex flex-col justify-start"
            >

              <div className="flex items-center gap-[12px]">
                <div className="w-[38px] h-[38px] bg-[#002E83] rounded-[4px] flex items-center justify-center shrink-0">
                  <img
                    src={step.imgSrc}
                    alt={`step-${index + 1}`}
                    className="w-[34px] h-[34px] object-contain"
                  />
                </div>
                <h3 className="text-[15px] font-semibold text-[#002E83] leading-[20px]">
                  {step.number} {step.title}
                </h3>
              </div>


              <p className="text-[14px] text-[#121212] leading-[18px] pl-[50px] pt-[4px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
