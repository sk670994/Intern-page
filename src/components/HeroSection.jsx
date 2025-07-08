"use client";
import Image from "next/image";
import Button from "./Button";
import Navbar from "../components/Navbar";

export default function HeroSection() {
  return (
    
    <div className="w-full mt-0 text-white bg-gradient-to-b from-[#002E83] to-[#000A1D]">
       
      <Navbar />
      <div className="max-w-[1536px] mx-auto px-[128px] pt-[40px] flex flex-col lg:flex-row items-center  gap-10">
        
        {/* Left Side: Text */}
        <div className="w-full text-center gap-[32px]  lg:text-left">
          <h1 className=" text-[72px] font-Montserrat leading-none font-normal   mb-4">
            Join us from anywhere
          </h1>

          <p className="text-[24px] font-normal font-Montserrat leading-[130%] mt-4 md:mt-6 mb-8 md:mb-10">
            Real projects. Real mentorship. Real purpose. Intern where it matters.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start mt-8">
            {/* Apply Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto lg:w-[251px] h-[56px] text-[16px] font-medium font-['Montserrat']"
            >
              <span className="flex items-center justify-center gap-2">
                Apply for Internship
                <img
                  src="Frame.webp"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="translate-y-[1px]"
                />
              </span>
            </Button>

            {/* Success Button */}
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto lg:w-[248px] h-[56px] text-[16px] font-medium font-['Montserrat']"
            >
              <span className="flex items-center justify-center gap-2">
                See Success Stories
                <img
                  src="Frame 2.webp"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="translate-y-[1px]"
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:flex mt-8 lg:mt-0 w-[388px] h-[421px] flex-shrink-0 z-10">
          <Image
            src="/heroicon.webp"
            alt="Intern Illustration"
            width={388}
            height={421}
            className="object-contain w-full h-full"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
