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
    <div className="w-full bg-[#E5EAF3] py-16 shrink-0 md:py-10 overflow:hidden   ">
      <div className="max-w-[1536px] mx-auto font-['Montserrat'] px-[128px]  sm:px-[50px] ">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[36px] tracking-wider font-bold font-['Montserrat']">
            How We Hire
          </h1>
          <button className="bg-[#002E83] text-white rounded-md    px-5 py-4 max-w-[195px] max-h-[51px] flex items-center justify-center">
            Explore Opportunities
          </button>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-gap-x-[48px] max-gap-y-[77.15px] sm: mt-[40px] sm:mt-[6]">
          {steps.map((step, index) => {
            const cardHeightClass = index < 3 ? "h-[111px]" : "h-[110px]";

            return (
              <div
                key={index}
                className={`bg-white flex items-start gap-4 p-4 rounded-lg shadow-md w-full ${cardHeightClass}`}
              >
                <div className="w-[38px] h-[38px] rounded-[4px] bg-[#002E83] flex items-center justify-center flex-shrink-0">
                  <img
                    src={step.imgSrc}
                    alt={`${step.title} icon`}
                    className="w-[34px] h-[34px]"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{step.number} {step.title}</h2>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}