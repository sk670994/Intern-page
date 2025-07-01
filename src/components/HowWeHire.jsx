"use client";
import React from "react";

export default function HowWeHire() {
  const steps = [
    {
      number: "1.",
      title: "Application Submission",
      description: "Interested candidates apply through our careers page or internship portal.",
      imgSrc: "/1.png",
    },
    {
      number: "2.",
      title: "Resume Screening",
      description: "We review your resume to match skills, education, and interest with the role.",
      imgSrc: "/2.png",
    },
    {
      number: "3.",
      title: "Assignment",
      description: "Some roles may include a short task or test to assess basic skills.",
      imgSrc: "/3.png",
    },
    {
      number: "4.",
      title: "Technical/Project Interview",
      description: "We discuss your academic projects, technical knowledge, and problem-solving.",
      imgSrc: "/4.png",
    },
    {
      number: "5.",
      title: "HR Interview",
      description: "A brief chat to understand your goals, availability, and cultural fit.",
      imgSrc: "/5.png",
    },
    {
      number: "6.",
      title: "Offer & Onboarding",
      description: "Selected interns receive an offer letter with details to start the internship.",
      imgSrc: "/6.png",
    },
  ];

  return (
    <section className="w-full bg-[#E5EAF3] py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-16">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold font-['Montserrat'] text-center sm:text-left">
            How We Hire
          </h1>
          <button className="bg-[#002E83] text-white text-sm sm:text-base rounded-md px-6 py-3 max-w-[200px]">
            Explore Opportunities
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white flex items-start gap-4 p-4 rounded-lg shadow-md min-h-[110px]"
            >
              {/* Icon */}
              <div className="w-[38px] h-[38px] bg-[#002E83] rounded-[4px] flex items-center justify-center flex-shrink-0">
                <img
                  src={step.imgSrc}
                  alt={`${step.title} icon`}
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  {step.number} {step.title}
                </h2>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
