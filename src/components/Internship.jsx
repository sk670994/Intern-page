"use client";

import React from "react";

export default function Internship() {
  const internships = [
    { title: "Mobile App Development", description: "Build innovative mobile apps with real-world impact." },
    { title: "Web Development", description: "Create dynamic web experiences using modern frameworks." },
    { title: "Data Science", description: "Analyze data to drive business decisions and insights." },
    { title: "AI Engineering", description: "Develop cutting-edge AI solutions for various industries." },
    { title: "Cloud Computing", description: "Master cloud infrastructure and deployment strategies." },
  ];

  return (
    <div className="w-full h-[732px] px-[128px] gap-[32px] flex flex-col">
      {/* Heading Frame */}
      <div className="h-[89px] flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold font-['Montserrat']">
            Internship Opportunities
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Explore open roles and start your tech journey.
          </p>
        </div>
        <button className="px-[20px] py-[17px] bg-[#002E83] text-white rounded">
          View More Internships
        </button>
      </div>

      {/* Cards Frame */}
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="w-[630px] h-[296px] border border-gray-300 rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#121212]">{intern.title}</h3>
              <p className="text-base text-gray-600 mt-2">{intern.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}