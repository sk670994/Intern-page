"use client";
import React from "react";

export default function TechnologyCard({ title, items, image }) {
  return (
    <div className="w-full h-full bg-[#E5EAF3] p-4 flex flex-col justify-start gap-3">
      
      {/* Image + Title */}
      <div className=" flex items-center gap-[10px]">
        <div className="w-[60px] h-[60px] bg-[#002E83] flex items-center justify-center shrink-0">
  <img src={image} alt={title} className="w-full h-full object-contain" />
</div>

        <h2 className="text-[18px] font-semibold text-[#002E83] lg:text-[20px] md:text-[18px]">
          {title}
        </h2>
      </div>

      {/* Points */}
      <div className="flex flex-wrap gap-2 max-h-[78px]">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-[#121212] text-sm px-3 py-1 rounded-full whitespace-nowrap  bg-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
