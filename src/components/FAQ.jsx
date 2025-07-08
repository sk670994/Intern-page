"use client";
import React from "react";

const faqItems = [
  {
    question: "Who can apply for an internship at Hexadecimal?",
    answer: "Students or recent graduates from Computer Science, IT, or related engineering backgrounds are welcome to apply. If you have a strong interest in software development, web technologies, UI/UX design, DevOps, or data science — and are eager to work on real-world projects under the guidance of experienced mentors — this internship is for you. Basic knowledge of programming (like HTML/CSS, JavaScript, Python, Java, etc.) and a problem-solving mindset are a plus."
  },
  { question: "How do I apply for an internship?" },
  { question: "Is the internship paid or unpaid?" },
  { question: "What is the duration of the internship?" },
  { question: "Do I need prior experience to apply for an internship?" },
  { question: "Will I receive a certificate after completing the internship?" }
];

export default function FAQ() {
  return (
    <div className="w-full bg-white flex px-[128px] ">
      <div className="w-full h-auto flex flex-col  gap-[32px] px-4">
        {/* Title */}
        <h1 className="text-[36px] font-bold text-center text-black font-Montserrat">
          Checkout The FAQ's
        </h1>

        {/* FAQ Items */}
        <div className="w-full  flex flex-col
         gap-[16px] ">
          {faqItems.map((item, index) => (
            <div key={index} className={`w-full border border-[#E7EAEB] rounded-[8px] p-4 
              ${index === 0 ? "bg-[#E5EAF3]" : "bg-white"}`}>
              <div className="w-full flex items-center justify-between ">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[16px] text-gray-600">{index + 1}.</span>
                  <span className="text-[16px] font-medium text-black">
                    {item.question}
                  </span>
                </div>
                <div className="w-[24px] h-[24px] border-2  border-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-[16px] text-gray-600">{index === 0 ? "−" : "+"}</span>
                </div>
              </div>
              
              
              {index === 0 && (
                <div className="pl-[28px] pt-[8px] ">
                  <p className ="text-[16px] text-gray-700 leading-[26px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
