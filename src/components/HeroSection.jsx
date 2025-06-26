"use client";
import Image from "next/image";
import Button, { ClickIcon } from "./Button";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-white px-4 md:px-6 lg:px-16 pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16 lg:pb-24 text-center lg:text-left"
    >
      <div className="w-full max-w-[880px] mx-auto lg:mx-0 flex-shrink-0 lg:pr-8 xl:pr-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[96px] font-normal leading-[110%] lg:leading-[100%] font-['Montserrat'] mb-4 md:mb-6 lg:whitespace-nowrap">
          Join us from anywhere
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal leading-[130%] font-['Montserrat'] mt-4 md:mt-6 mb-8 md:mb-10">
          Real projects. Real mentorship. Real purpose. Intern where it matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start mt-8">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto lg:w-[251px] h-[56px] px-8 py-4 text-[16px] font-normal font-['Montserrat']"
          >
            <span className="flex items-center justify-center gap-2">
              Apply for Internship
              <ClickIcon />
            </span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto lg:w-[248px] h-[56px] px-8 py-4 border border-white text-[#002E83] text-[16px] font-normal font-['Montserrat']"
          >
            <span className="flex items-center justify-center gap-2">See Success Stories</span>
          </Button>
        </div>
      </div>
      <div className="hidden lg:block shrink-0 mt-8 lg:mt-0 lg:ml-auto w-[388px] h-[421px]">
        <Image
          src="/side.svg"
          alt="Intern at desk"
          width={388}
          height={421}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
