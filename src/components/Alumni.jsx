"use client";
import React from "react";
import LogoSection from "./LogoSection";

const Alumni = () => {
  const companies = [
    { name: "TCS", logo: "/tcs.webp" },
    { name: "Wipro", logo: "/wipro.webp" },
    { name: "Tech Mahindra", logo: "/tech.webp" },
    { name: "Cognizant", logo: "/cognizant.webp" },
    { name: "IBM", logo: "/ibm.webp" },
    { name: "Infosys", logo: "/infosys.webp" },
    { name: "Capgemini", logo: "/capgemini.webp" },
    { name: "Accenture", logo: "/accenture.webp" },
    { name: "Nestle", logo: "/nestle.webp" },
    { name: "PhonePe", logo: "/phonepe.webp" },
    { name: "PayPal", logo: "/paypal.webp" },
    { name: "Unilever", logo: "/unilever.webp" },
  ];

  const techCompanies = companies.slice(0, 8);
  const consumerCompanies = companies.slice(8);

  return (
    <LogoSection
      title="Our Alumni have landed roles in Top Companies around India"
      logoGroups={[techCompanies, consumerCompanies]}
      isObjectLogos
      gap="gap-[40px]"
      logoSizeClass="h-[56px] object-contain"
    />
  );
};

export default Alumni;
