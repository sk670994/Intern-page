"use client";
import Image from "next/image";
import Button, { ClickIcon } from "./Button";

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
    <div className="flex items-center justify-between h-[76px] px-4 md:px-6 lg:px-16">
      <div className="flex items-center w-[167px] h-[44px] mt-5 object-contain">
        <Image src="/logo.jpg" alt="Hexadecimal Logo" width={167} height={44} quality={100} priority />
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
        <Button className="w-[180px] h-[37px] px-7 py-[13px] text-[#002E83] font-['Montserrat'] text-[16px] font-medium leading-[100%] text-center items-center justify-center">
          Connect With Us
        </Button>
      </nav>
      <div className="lg:hidden text-white text-2xl cursor-pointer">☰</div>
    </div>
  );
}
