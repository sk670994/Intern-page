"use client";
import TechnologiesSection from "./TechnologiesSection";

export default function ContentSection() {
  return (
    <main
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
        top-[521px]
    ">
      <div
        className="
          w-full
          max-w-[1536px]
          mx-auto
          bg-purple-500
          flex flex-col
          items-center
          h-[1150px]
          gap-[10px]
          pt-[40px]
          px-[128px]
      ">
        <TechnologiesSection />
      </div>
    </main>
  );
}