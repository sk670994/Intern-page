"use client";
import TechnologiesSection from "./TechnologiesSection";

export default function ContentSection() {
  return (
    
   
    <div
      className="
        flex flex-col
        items-center
        bg-white
        w-full
        max-w-[1536px]
        mx-auto
        relative
        h-[8427px]
        gap-[48px]
       
        
        
    ">

      <div
        className="
          w-full
          max-w-[1536px]
          px-[128px]
          flex flex-col
          items-center
          relative
          h-[1150px] 
          gap-[48px]

      ">
        <TechnologiesSection />
      </div>
    </div>
  );
}