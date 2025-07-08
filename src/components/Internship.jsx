"use client";
import React from "react";

export default function InternshipOpportunities() {
  return (
    <div className="w-full flex justify-center bg-white px-4 md:px-10 lg:px-[128px] ">
      <div className="max-w-[1280px] w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-14 gap-4">
          <div>
              <h1 className="text-[28px] md:text-[32px] font-bold font-['Montserrat'] text-black leading-tight">
                Internship Opportunities
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-2">
                Explore open roles and start your tech journey.
               </p>
          </div>
          <button className="bg-[#002E83] text-white px-5 py-3  text-[14px] font-medium h-[44px] self-start md:self-center">
            View More Internships 
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-8 md:gap-y-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-[630px] border border-[#E7EAEB] rounded-md p-6 bg-white shadow-sm flex flex-col justify-between"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <img
                    src="/hexaIcon.webp"
                    alt="Hexadecimal Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-[18px] text-[#121212]">
                      Assistant Manager Direct Sales
                    </h2>
                    <p className="text-[#666666] text-[14px] mt-1">
                      Hexadecimal Software
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#002E83] font-medium text-[14px]">
                  Easy Apply
                  <img
                    src="./arrow-narrow-right.webp"
                    alt="arrow"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-[#121212] mt-4 leading-[22px]">
                Build rapport with contacts and understand where the prospect is
                in the buying process. Identify opportunities that meet a
                minimum qualification criteria for the sales team.
              </p>

              {/* Divider */}
              <div className="border-t border-[#E7EAEB] my-3" />

              {/* Bottom Section */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#F1F3F6] px-4 py-1 rounded-full text-[13px]">
                    Full Time
                  </span>
                  <span className="bg-[#F1F3F6] px-4 py-1 rounded-full text-[13px]">
                    On-site
                  </span>
                  <span className="bg-[#F1F3F6] px-4 py-1 rounded-full text-[13px]">
                    Entry Level
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] text-[#555] mt-1">
                  <div className="flex items-center gap-1">
                    <img
                      src="/locaIcon.webp"
                      alt="Location"
                      className="w-4 h-4"
                    />
                    <span>Sector 142, Noida</span>
                  </div>
                  <div>
                    Applicants: <strong>213</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
