// src/app/page.js

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[521px] bg-gradient-to-b from-[#002E83] to-[#000A1D] z-0" />

      {/* Main page content wrapper */}
      <div className="w-full mx-auto relative flex flex-col">
        <Navbar />
        <HeroSection />
        <ContentSection />
      </div>
    </div>
  );
}