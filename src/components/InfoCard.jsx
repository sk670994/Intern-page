"use client";
import React from "react";

const InfoCard = ({
  imgSrc,
  title,
  description,
  number = null,
  layout = "vertical", // "horizontal" or "vertical"
  className = "",
  imageClass = "",
}) => {
  return (
    <div
      className={`flex ${layout === "horizontal" ? "flex-row" : "flex-col"} ${className}`}
    >
      <div className="flex items-start gap-[12px]">
        {number ? (
          <div className="w-[38px] h-[38px] bg-[#002E83] rounded-[4px] flex items-center justify-center">
            <img src={imgSrc} alt="step-icon" className="w-[23px] h-[23px]" />
          </div>
        ) : (
          <div className={`w-[24px] h-[24px] ${imageClass}`}>
            <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
          </div>
        )}

        <div className={`${number ? "pl-[0px]" : ""}`}>
          <h3 className="text-[20px]  font-Montserrat text-[#121212]">
            {number ? `${number} ${title}` : title}
          </h3>
          <p className="text-[16px] font-Montserrat leading-[22px] text-[#121212]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
