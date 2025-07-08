// src/app/page.js


import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      {/* Background gradient */}
     

      {/* Main page content wrapper */}
      <div className="w-full mx-auto relative ">
       
        <HeroSection />
      </div>
      <ContentSection />
    </div>
  );
}