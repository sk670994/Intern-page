"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom breakpoint at 1400px
  const isDesktop = windowWidth >= 1400;

  return (
    <header className="  w-full ">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-20 h-[76px] flex items-center justify-between">
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

        {/* Desktop Navigation (shown only above 1400px) */}
        {isDesktop ? (
          <div className="flex items-center gap-6 xl:gap-8">
            <nav className="flex gap-6 xl:gap-8 text-[16px] font-Montserrat tracking-[0.03em]">
              <a href="#" className="text-white hover:text-gray-200">About Us</a>
              <a href="#" className="flex items-center gap-1 text-white hover:text-gray-200">
                Services <Image src="/Frame 2.webp" alt="" width={15} height={8} />
              </a>
              <a href="#" className="flex items-center gap-1 text-white hover:text-gray-200">
                Hire Developers <Image src="/Frame 2.webp" alt="" width={15} height={8} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">Portfolio</a>
              <a href="#" className="text-white hover:text-gray-200">Blog</a>
              <a href="#" className="text-white hover:text-gray-200">Careers</a>
            </nav>
            <Button className="min-w-[178px] h-[37px] px-5 text-[#002E83] bg-white">
              Connect With Us
            </Button>
          </div>
        ) : (
          /* Mobile Navigation (shown below 1400px) */
          <div className="flex items-center gap-4">
            <Button className="min-w-[160px] h-[37px] px-4 text-[#002E83] bg-white">
              Connect With Us
            </Button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white text-2xl"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        )}

        {/* Mobile Menu (shown when hamburger clicked) */}
        {!isDesktop && isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#002E83] px-6 py-4 flex flex-col gap-3">
            <a href="#" className="text-white py-2">About Us</a>
            <a href="#" className="text-white py-2">Services</a>
            <a href="#" className="text-white py-2">Hire Developers</a>
            <a href="#" className="text-white py-2">Portfolio</a>
            <a href="#" className="text-white py-2">Blog</a>
            <a href="#" className="text-white py-2">Careers</a>
          </div>
        )}
      </div>
    </header>
  );
}