"use client";
import Image from "next/image";
import Button, { ClickIcon } from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-[76px] px-4 md:px-6 lg:px-16 relative z-20">
      {/* Logo */}
      <div className="flex items-center w-[167px] h-[44px] mr-4 mt-2 object-contain flex-shrink-0">
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

      {/* Desktop Nav */}
      <nav className="hidden lg:flex lg:gap-[18px] text-white text-[16px] tracking-wide leading-[100%] font-['Montserrat'] items-center">
        <a href="#" className="hover:text-gray-200 transition">About Us</a>
        <a href="#" className="hover:text-gray-200 flex items-center gap-1 transition">
          Services
          <img src="/Frame 2.webp" alt="" width={14.68} height={8.01} />
        </a>
        <a href="#" className="hover:text-gray-200 flex items-center gap-1 transition">
          Hire Developers
          <img src="/Frame 2.webp" alt="" width={14.68} height={8.01} />
        </a>
        <a href="#" className="hover:text-gray-200 transition">Portfolio</a>
        <a href="#" className="hover:text-gray-200 transition">Blog</a>
        <a href="#" className="hover:text-gray-200 transition">Careers</a>

        <Button className="w-[180px] h-[37px] px-4 py-[13px] bg-white text-[#002E83] rounded-[4px]">
          Connect With Us
        </Button>
      </nav>

      {/* Mobile Nav Button + Button */}
      <div className="flex items-center gap-4 lg:hidden">
        <Button className="w-[160px] h-[37px] px-4 py-[13px] bg-white text-[#002E83] rounded-[4px]">
          Connect With Us
        </Button>

        <div
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[76px] left-0 w-full bg-[#002E83] flex flex-col items-start px-6 py-4 gap-4 lg:hidden z-30">
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Hire Developers</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">Careers</a>
        </div>
      )}
    </div>
  );
}
