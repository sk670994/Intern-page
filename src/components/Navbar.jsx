"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button"; // Your custom button component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white">
      <div className="max-w-[1536px] mx-auto h-[76px] pl-[128px] pr-[78px] flex items-center justify-between relative">
        {/* Logo Frame */}
        <div className="w-[167px] h-[44px] mt-[18px] flex-shrink-0">
          <Image
            src="/Logo.webp"
            alt="Hexadecimal Logo"
            width={167}
            height={44}
            priority
            unoptimized
            quality={100}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Links + Button Frame (Desktop) */}
        <div className="hidden lg:flex items-center mt-[16px] h-[37px] gap-[40px]">
          {/* Links Frame */}
          <nav className="flex gap-[44px] text-[16px] font-Montserrat tracking-[0.03em] leading-none">
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="flex items-center gap-[4px] hover:text-gray-200">
              Services
              <img src="/Frame 2.webp" alt="Dropdown" width={15} height={8} />
            </a>
            <a href="#" className="flex items-center gap-[4px] hover:text-gray-200">
              Hire Developers
              <img src="/Frame 2.webp" alt="Dropdown" width={15} height={8} />
            </a>
            <a href="#" className="hover:text-gray-200">Portfolio</a>
            <a href="#" className="hover:text-gray-200">Blog</a>
            <a href="#" className="hover:text-gray-200">Careers</a>
          </nav>

          {/* Button Frame */}
          <Button className="w-[178px] h-[37px] flex justify-between items-center px-[20px] py-[13px] text-[#002E83] bg-white gap-[10px] text-[16px] font-medium">
            Connect With Us
          </Button>
        </div>

        {/* Mobile Nav + Button */}
        <div className="lg:hidden flex items-center gap-4">
          <Button className="w-[160px] h-[37px] px-[20px] py-[13px] text-[#002E83] bg-white  text-[15px] font-medium">
            Connect With Us
          </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 py-4 bg-[#002E83] flex flex-col gap-4">
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Hire Developers</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">Careers</a>
        </div>
      )}
    </header>
  );
}
