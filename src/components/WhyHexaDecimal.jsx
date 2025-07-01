"use client";
import React from "react";

const benefits = [
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

export default function LaunchpadSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4">
      <div className="w-full max-w-[1536px] h-auto py-8 flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="text-[36px] font-bold font-['Montserrat'] text-center">
          Why Hexadecimal is Your Ultimate Launchpad
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full max-w-[1536px] h-[414px] px-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#E5EAF3] rounded-md p-4 flex items-start gap-3"
            >
              <div className="w-[28px] h-[28px] flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#002E83] mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#121212]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
