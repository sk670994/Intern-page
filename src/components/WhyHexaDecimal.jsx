"use client";
import React from "react";

const opportunities = [
  {
    title: "Real-World Projects",
    description: "Work on live projects, like app features, that thousands use daily.",
    icon: "/projects.webp",
  },
  {
    title: "1-on-1 Mentorship",
    description: "Learn 1-on-1 from pros who guide you on tools like React.",
    icon: "/mentor.webp",
  },
  {
    title: "Remote Flexibility",
    description: "Remote or on-site, stay connected with tools like Slack.",
    icon: "/remote.webp",
  },
  {
    title: "Certificate + PPO",
    description: "Get a certificate and a chance at a full-time role Pre-Placement Offer.",
    icon: "/certificate.webp",
  },
  {
    title: "Resume Boost",
    description: "Build a portfolio with projects to impress top employers.",
    icon: "/resume.webp",
  },
  {
    title: "Team Culture & Learning",
    description: "Join a fun team for hackathons and learning together.",
    icon: "/culture.webp",
  },
];

export default function WhyHexadecimal() {
  return (
    <div className="w-full flex justify-center items-center pb-[24px]">
      <div className="w-full max-w-[1536px] h-auto flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-[128px]">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#121212] font-['Montserrat'] mb-[32px] text-center lg:text-left">
          Why Hexadecimal is Your Ultimate Launchpad
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[48px] md:gap-[24px] sm:gap-[12px] overflow-hidden gap-y-[32px]">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-[#E5EAF3] rounded-md flex items-start gap-[12px] w-full  p-[16px] min-h-[157px]"
            >
              <div>
                <div className="w-[32px] h-[32px] flex-shrink-0 mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[34px] h-[34px] object-contain"
                  />
                </div>
                <h3 className="text-[16px] lg:text-[20px] font-semibold text-[#121212]">
                  {item.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] leading-[22px] text-[#121212]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
