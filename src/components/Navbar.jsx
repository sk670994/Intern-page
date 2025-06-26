"use client";
import Image from "next/image";
import Button, { ClickIcon } from "./Button";
import { useState } from 'react';

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
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  

  return (
    <div className="flex items-center justify-between h-[76px] px-4 md:px-6 lg:px-16 relative z-20">
     
      <div className="flex items-center w-[167px] h-[44px] mr-4 mt-5 object-contain flex-shrink-0">
        <Image
          src="/Logo.webp"
          alt="Hexadecimal Logo"
          width={167}
          height={44}
          quality={100}
          priority
          className="min-w-[167px] min-h-[44px] lg:object-contain"
        />
      </div>

    <nav className="hidden lg:flex lg:gap-[18px] text-white text-[16px] tracking-wide leading-[100%] font-['Montserrat'] items-center">
        <a href="#" className="hover:text-gray-200 transition-colors duration-300 flex-shrink-0">About Us</a>
        <a href="#" className="hover:text-gray-200 flex items-center gap-1 transition-colors duration-300 flex-shrink-0">
          Services
          <DownArrowIcon />
        </a>
        <a href="#" className="hover:text-gray-200 flex items-center gap-1 transition-colors duration-300 flex-shrink-0">
          Hire Developers
          <DownArrowIcon />
        </a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300 flex-shrink-0">Portfolio</a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300 flex-shrink-0">Blog</a>
        <a href="#" className="hover:text-gray-200 transition-colors duration-300 flex-shrink-0">Careers</a>
        
       <Button className="w-[140px] md:w-[150px] lg:w-[180px] h-[37px] px-4 py-[13px] text-[#002E83] font-['Montserrat'] text-[16px] leading-[100%] text-center items-center justify-center transition-colors duration-300 flex-shrink-0
                            bg-white rounded-[4px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-100">
          Connect With Us
        </Button>
      </nav>

          <div className="flex items-center gap-4  md:flex lg:hidden"> {/* This div is for md screens only */}
         <Button className="w-[160px] h-[37px] px-4 py-[13px] text-[#002E83] font-['Montserrat'] text-[16px] leading-[100%] text-center items-center justify-center transition-colors duration-300 flex-shrink-0
                            bg-white rounded-[4px] hover:bg-gray-100 ">
          Connect With Us
        </Button>

       <div
          className="text-white text-2xl cursor-pointer"
         
        >
          ☰
        </div>
      </div>

    
    </div>
  );
}