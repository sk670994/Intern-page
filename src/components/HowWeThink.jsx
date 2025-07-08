"use client";
import React from "react";

export default function HowWeThink() {
  const think = [
    {
      title: "Ship early",
      description:
        "We believe in launching quickly — small, usable versions are better than waiting for perfection.",
      imgSrc: "/ship.webp",
    },
    {
      title: "Build with users",
      description:
        "We talk to users regularly to understand their problems before building solutions.",
      imgSrc: "/build.webp",
    },
    {
      title: "Keep it Simple",
      description:
        "We focus on simple, effective solutions instead of overcomplicating things.",
      imgSrc: "/keep.webp",
    },
    {
      title: "Learn by Doing",
      description:
        "Interns are encouraged to build, break, fix, and learn — real work, real learning.",
      imgSrc: "/learn.webp",
    },
    {
      title: "Take Ownership",
      description:
        "Even interns own their tasks and are trusted to take responsibility.",
      imgSrc: "/take.webp",
    },
    {
      title: "Collaborate Openly",
      description:
        "We work together across teams, openly share feedback, and help each other grow.",
      imgSrc: "/collaborate.webp",
    },
    {
      title: "Fail Fast, Learn Faster",
      description:
        "We're not afraid of mistakes — what matters is how fast we learn and improve.",
      imgSrc: "/fail.webp",
    },
    {
      title: "Focus on Impact",
      description:
        "We prioritize work that creates value for users and the business.",
      imgSrc: "/focus.webp",
    },
    {
      title: "Stay Curious",
      description:
        "We love people who ask questions, explore ideas, and always want to learn more.",
      imgSrc: "/stay.webp",
    },
    {
      title: "Communicate Clearly",
      description:
        "We value clear, honest, and respectful communication in all interactions.",
      imgSrc: "/communicate.webp",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center px-4 sm:px-8">
      <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold font-Montserrat text-center mb-[32px]">
        How We Think & Work
      </h1>

      <div className="flex flex-col lg:flex-row gap-[32px] max-w-[1278px] w-full">
        {/* Cards Grid */}
        <div
          className="grid grid-cols-2 gap-[16px]"
          style={{ width: "839px", height: "676px" }}
        >
          {think.map((step, index) => (
            <div
              key={index}
              className="flex flex-col  p-[12px]  bg-[#E5EAF3] h-[116px]"
            >
              <div className="w-[24px] h-[24px] mb-[8px]">
                <img
                  src={step.imgSrc}
                  alt={`${step.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[16px] font-Montserrat leading-[20px] mb-[4px]">
                {step.title}
              </h2>
              <p className="text-[14px] font-Montserrat   leading-[22px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Side Image */}
        <div className="hidden lg:flex w-[410px] h-[676px] flex-shrink-0">
          <img
            src="/12.png"
            alt="How we work"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
