"use client";
import Image from "next/image";
import Button from "./Button";
export default function HeroSection() {
  return (
    <div className="w-full text-white px-4 md:px-6 lg:px-16 pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16 lg:pb-24">
      <div className="max-w-[1536px] h-[265px] top-[148px] left-[128px]  mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
       
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-normal leading-[110%] font-['Montserrat'] mb-4 ">
            Join us from anywhere
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal leading-[130%] font-['Montserrat'] mt-4 md:mt-6 mb-8 md:mb-10">
            Real projects. Real mentorship. Real purpose. Intern where it matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start mt-8">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto lg:w-[251px] h-[56px]  text-[16px] font-normal font-['Montserrat']"
            >
              <span className="flex items-center justify-center gap-2">
                Apply for Internship
                <img src="Frame.webp" alt="" width={24} height={24} />
              </span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className=" w-full sm:w-auto lg:w-[248px] h-[56px] text-[16px] font-normal font-['Montserrat' gap-2]"
            >
              <span className="flex items-center justify-center gap-2 ">See Success Stories
           
             <img src="Frame 2.webp" alt="" width={24} height={24} />
             
         
            </span>
            </Button>
          </div>
        </div>

       
        <div className="hidden lg:flex mt-8 lg:mt-0 lg:ml-auto w-[388px] h-[421px] flex-shrink-0 z-10  ">
          <Image
            src="/Side.webp"
            alt="Intern at desk"
            width={388}
            height={421}
            className="object-contain w-[388px] h-[421px]"
            priority
            quality={100}
          />
        </div>

      </div>
    </div>
  );
}
