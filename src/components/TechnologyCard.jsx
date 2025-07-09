"use client";
import React from "react";

export default function TechnologyCard({
  title,
  items,
  image,
  width = "632px",
  height = "194px",
  tagsWidth = "572px",
  iconSize = "60px",
  titleSize = "text-[24px]",
  tagClass = "text-[14px] px-[12px] py-[8px]",
  tagsClass = "flex flex-row flex-wrap gap-[12px]", // ✅ Default tag layout
  className = "",
}) {
  return (
    <div
      className={`bg-[#E5EAF3] flex flex-col relative ${className}`}
      style={{ width, height, flex: "none" }}
    >
      <div className="flex flex-row mt-[20px] items-center mx-auto ml-[20px] gap-[16px]">
        <div style={{ width: iconSize, height: iconSize }}>
          <img src={image} alt={title} />
        </div>
        <span
          className={`font-montserrat font-normal ${titleSize} leading-[29px] text-[#0C0C0C]`}
        >
          {title}
        </span>
      </div>

      <div
        className={`${tagsClass} mt-[16px] ml-[20px]`}
        style={{ width: tagsWidth, height: "78px" }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className={`bg-white rounded-[70px] h-[33px] flex items-center ${tagClass} font-montserrat leading-[17px] text-[#121212]`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
