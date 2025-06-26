"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[578px] lg:h-[578px] bg-gradient-to-b from-[#002E83] to-[#000A1D] z-0" />
      <div className="max-w-[1536px] mx-auto relative z-10">
        <Navbar />
        <HeroSection /> 
      </div>
    </div>
  );
}