import React from "react";

export default function HowWeThink() {
  const think = [
    {
      title: "Ship early",
      description: "We believe in launching quickly — small, usable versions are better than waiting for perfection.",
      imgSrc: "/ship.webp",
    },
    {
      title: "Build with users",
      description: "We talk to users regularly to understand their problems before building solutions.",
      imgSrc: "/build.webp",
    },
    {
      title: "Keep it Simple",
      description: "We focus on simple, effective solutions instead of overcomplicating things.",
      imgSrc: "/keep.webp",
    },
    {
      title: "Learn by Doing",
      description: "Interns are encouraged to build, break, fix, and learn — real work, real learning.",
      imgSrc: "/learn.webp",
    },
    {
      title: "Take Ownership",
      description: "Even interns own their tasks and are trusted to take responsibility.",
      imgSrc: "/take.webp",
    },
    {
      title: "Collaborate Openly",
      description: "We work together across teams, openly share feedback, and help each other grow.",
      imgSrc: "/collaborate.webp",
    },
      {
      title: "Fail Fast, Learn Faster",
      description: "We're not afraid of mistakes--what matters is how fast we learn and improve",
      imgSrc: "/fail.webp",
    },
    {
      title: "Focus on impact",
      description: "We prioritize work that creates value for users and the business",
      imgSrc: "/focus.webp",
    },
    {
      title: "Stay Curious",
      description: "We love people who ask questions , explore ideas and always want to learn more",
      imgSrc: "/stay.webp",
    },
    {
      title: "Communicate Clearly",
      description: "We valuee clear ,honest and respectful communication in all interactions",
      imgSrc: "/communicate.webp",
    },

  ];

  return (
    <div className="w-full flex flex-col items-center  px-[4px]">
      {/* Heading */}
      <h1 className="text-[36px] font-bold font-['Montserrat']  text-center mb-[32px]">
        How We Think & Work
      </h1>

      {/* Main Container */}
      <div className="flex flex-row justify-center gap-[32px] h-[675px] w-[1278px]" >
        {/* Left Grid Section */}
       
        <div
          className="grid grid-cols-1 pl-0 sm:grid-cols-2  gap-[16px] w-[839px] h-[676px]"
        >
          {think.map((step, index) => (
            
            <div
              key={index}
              className="flex gap-[4px] items-start p-4 rounded-md w-[410px] h-[116px] bg-[#E5EAF3] "
            >
            
              <div>
                  <div className="w-[24px] h-[24px]  flex items-center justify-center flex-shrink-0">
                <img

                  src={step.imgSrc}
                  alt={`${step.title} icon`}
                  className="w-[34px] h-[34px] object-contain
                   "
                />
              </div>
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Image */}
        <div className="flex items-right w-[410px] h-[682px]  shrink-0" >
          <img
            src="/12.png" // Replace this with your image path
            alt="How we work"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
