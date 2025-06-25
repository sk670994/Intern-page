'use client'
import Image from "next/image";
import Button, { ClickIcon } from "./button";

const DownArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);


export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[578px] lg:h-[578px] bg-gradient-to-b from-[#002E83] via-[#002E83] via-15% to-transparent z-0" />

      <div className="max-w-[1536px] mx-auto relative z-10">

        <div className="flex items-center justify-between h-[76px] px-4 md:px-6 lg:px-16">
          
          <div className="flex items-center w-[167px] h-[44px] mt-5 object-contain">
            <Image
              src="/logo.jpg"
              alt="Hexadecimal Logo"
              width={167}
              height={44}
              quality={100}
              priority
            />
          </div>

          <nav className="hidden lg:flex gap-[52px] text-white text-[16px] leading-[100%] tracking-wider font-['Montserrat'] items-center">
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="hover:text-gray-200 flex items-center gap-1">
              Services
              <DownArrowIcon />
            </a>
            <a href="#" className="hover:text-gray-200 flex items-center gap-1">
              Hire Developers
              <DownArrowIcon />
            </a>
            <a href="#" className="hover:text-gray-200">Portfolio</a>
            <a href="#" className="hover:text-gray-200">Blog</a>
            <a href="#" className="hover:text-gray-200">Careers</a>
            <Button
              className="w-[178px] h-[37px] px-7 py-[13px] text-[#002E83] font-['Montserrat'] text-[16px] font-medium leading-[100%] text-center items-center justify-center "
            >
              Connect With Us
            </Button>
          </nav>

          <div className="lg:hidden text-white text-2xl cursor-pointer">
            ☰
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start
                        justify-center lg:justify-between text-white
                        px-4 md:px-6 lg:px-16 pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16 lg:pb-24
                        text-center lg:text-left">
          
          <div className="w-full max-w-[880px] mx-auto lg:mx-0 flex-shrink-0 lg:pr-8 xl:pr-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[96px]
                           font-normal leading-[110%] lg:leading-[100%] font-['Montserrat'] mb-4 md:mb-6
                           lg:whitespace-nowrap">
              Join us from anywhere
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-[24px]
                          font-normal leading-[130%] font-['Montserrat'] mt-4 md:mt-6 mb-8 md:mb-10">
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
                <span className="flex items-center justify-center gap-2">
                  See Success Stories
                </span>
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

        <div className="py-20 text-center text-gray-800">
          <h2>Other Sections Below Hero</h2>
        </div>

      </div>
    </div>
  );
}