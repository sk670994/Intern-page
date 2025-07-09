"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  text-white">
      <div className="max-w-[1536px]  gap-[72px] md:gap-[50px] sm:gap-[32px] flex items-center justify-between h-[76px] pr-[78px] px-4 sm:px-8 lg:px-[128px]  ">

        {/* Logo */}
        <div className="w-[120px] sm:w-[140px] md:w-[167px] h-auto flex-shrink-0">
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={167}
            height={44}
            priority
            className="object-contain w-full h-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-6 text-[16px] font-Montserrat tracking-[0.03em]">
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Services <Image src="/Frame 2.webp" alt="" width={15} height={8} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Hire Developers <Image src="/Frame 2.webp" alt="" width={15} height={8} />
            </a>
            <a href="#" className="hover:text-gray-300">Portfolio</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Careers</a>
          </nav>
          <Button className="min-w-[178px]  md:w-[100px] mx-auto h-[37px] font-medium font-Montserrat px-5 text-[#002E83] bg-white">
            Connect With Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <Button className="min-w-[140px] h-[37px]  text-[#002E83] text-[16px] font-Montserrat  bg-white text-sm">
            Connect
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#002E83] px-6 py-4 flex flex-col gap-3">
          <a href="#" className="text-white py-2 border-b border-white/10">About Us</a>
          <a href="#" className="text-white py-2 border-b border-white/10">Services</a>
          <a href="#" className="text-white py-2 border-b border-white/10">Hire Developers</a>
          <a href="#" className="text-white py-2 border-b border-white/10">Portfolio</a>
          <a href="#" className="text-white py-2 border-b border-white/10">Blog</a>
          <a href="#" className="text-white py-2">Careers</a>
        </div>
      )}
    </header>
  );
}
