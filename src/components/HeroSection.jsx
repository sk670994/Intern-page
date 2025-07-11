"use client";
import Image from "next/image";
import Button from "./Button";
import Navbar from "../components/Navbar";

export default function HeroSection() {
  return (
    <div className="w-full mt-0 text-white bg-gradient-to-b from-[#002E83] to-[#000A1D]">
      <Navbar />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-[128px]   flex flex-col xl:flex-row items-center xl:items-start sm:gap-[10px] md:gap-[20px] xl:gap-[40px]">
        
        {/* Left Side: Text */}
        <div className="w-full text-center lg:text-left gap-[32px] flex flex-col items-center xl:items-start justify-center min-h-[500px]">
          <h1 className="md:text-[40px] sm:text-[56px] lg:text-[72px] font-Montserrat leading-none font-normal mb-4">
            Join us from anywhere
          </h1>

          <p className="text-[18px] sm:text-[20px] xl:text-[24px] font-normal font-Montserrat  mt-4 md:mt-6 mb-8 md:mb-10 flex-nowrap ">
            Real projects. Real mentorship. Real purpose. Intern where it matters.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center xl:justify-start mt-8">
            {/* Apply Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto xl:w-[251px] h-[56px] text-[16px] font-medium font-Montserrat"
            >
              <span className="flex items-center justify-center gap-2">
                Apply for Internship
                <img
                  src="Frame.webp"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                 
                />
              </span>
            </Button>

            {/* Success Button */}
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto xl:w-[248px] h-[56px] text-[16px]  font-medium font-Montserrat"
            >
              <span className="flex items-center justify-center gap-2">
                See Success Stories
                <img
                  src="Frame2.webp"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="translate-y-[1px]"
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Side: Image (hidden below 1200px / xl) */}
        <div className="hidden xl:flex mt-8 xl:mt-0 w-[388px] h-[421px] flex-shrink-0 z-10">
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
