// src/components/TechnologiesSection.jsx
"use client";
import TechnologyCard from "./TechnologyCard";

import {
  FiSmartphone,
  FiGlobe,
  FiCpu,
  FiCloud,
  FiMonitor,
  FiCheckCircle,
  FiCode,
  FiPenTool,
  FiSearch,
  FiWifi,
  FiCreditCard
} from 'react-icons/fi';


const iconMap = {
  "Mobile App Development": FiSmartphone,
  "Web App Development": FiGlobe,
  "AI/ML": FiCpu,
  "Cloud Services": FiCloud,
  "UI/UX Design": FiMonitor,
  "Quality Assurance": FiCheckCircle,
  "API Development": FiCode,
  "Designing": FiPenTool,
  "Organic Reach": FiSearch,
  "IOT": FiWifi,
  "Blockchain": FiCreditCard,
  "Cybersecurity Solutions": FiCheckCircle,
  "Data & Analytics": FiCpu,
};


export default function TechnologiesSection() {
  const row1Data = [
    { title: "Mobile App Development", items: ["Android App Development", "Flutter App Development", "iOS App Development", "React Native App Development"] },
    { title: "Web App Development", items: ["Progressive Web App", "Frontend Development", "Backend Development", "Website Development"] },
  ];

  const row2Data = [
    { title: "AI/ML", items: ["Automation of Tasks", "Computer Vision", "Data-Driven Decisions", "NLP"] },
    { title: "Cloud Services", items: ["DevOps", "AWS", "Google Clouds", "Azure", "CI/CD Pipelines"] },
    { title: "UI/UX Design", items: ["User-Centered Design", "Seamless Navigation", "Visual & Interactive Design"] },
  ];

  const row3Data = [
    { title: "UI/UX Design", items: ["User-Centered Design", "Seamless Navigation", "Visual & Interactive Design"] },
    { title: "API Development", items: ["RESTful & SOAP APIs", "Scalable", "Security & Authentication", "Testing"] },
    { title: "Designing", items: ["UI/UX Design", "Mobile App", "Web Designs", "Wireframe/Prototyping", "Design Systems"] },
  ];

  const row4Data = [
    { title: "Organic Reach", items: ["SEO", "GMB SEO", "Competitor Research", "Technical SEO", "ASO (App Store Optimization)", "Performance Analytics"] },
    { title: "IOT", items: ["Device Connectivity", "Automation & Remote Control", "Interconnectivity", "Applications in Various Fields", "Real-Time Data Monitoring", "Security & Privacy Challenges"] },
  ];

  const row5Data = [
    { title: "Blockchain", items: ["Decentralized System", "Cryptocurrencies", "Secure and Immutable Records", "Smart Contracts"] },
    { title: "Cybersecurity Solutions", items: ["Threat Prevention", "Risk Assessment & Management", "Data Protection", "Incident Response", "Encryption"] },
    { title: "Data & Analytics",items: ["Big Data Analytics", "Decision-Making", "Business Intelligence Analytics"] },
  ];

  return (
    // Frame 3: Heading Plus Card Section Frame (Cyan frame)
    // Properties: width: 1280; height: 1110; gap: 32px;
    <div
      className="
        w-full                 /* Takes full width of parent's content area (which is 1280px) */
        max-w-[1280px]         /* Matches width: 1280px */
        mx-auto                /* Centers the cyan frame within its purple parent */
        bg-cyan-200            /* Cyan background */
        h-[1110px]             /* Matches height: 1110px. (Still causing height overflows - awaiting your decision) */
        gap-[32px]             /* Matches gap: 32px. (Will not be visually effective with only one direct child for now) */
        py-[40px]              /* Vertical padding for the cyan frame (from previous instruction) */
        flex flex-col
        items-center           /* Centers the blue frame horizontally within itself */
        overflow-hidden        /* Prevents content from spilling out of this layer initially */
      "
    >
      {/* This is the Blue frame, inside the Cyan frame's padding */}
      <div
        className="
          w-full               /* Takes full width of its parent (cyan frame's content area) */
          bg-blue-400          /* Blue background */
          px-[20px]            /* Horizontal padding for the blue frame (from previous instruction) */
          py-[20px]            /* Vertical padding for the blue frame (from previous instruction) */
          flex flex-col
          overflow-hidden      /* Prevents content from spilling out of this layer */
        "
      >
        <h1 className="
            font-['Montserrat']
            font-bold
            text-[36px]
            leading-[44px]
            capitalize
            text-center
            text-gray-800 dark:text-white
            mb-[32px] /* Existing gap between heading and cards */
        ">
            Our Technologies
        </h1>

        {/* This is the cards frame below heading - inside the Blue frame */}
        <div className="flex flex-col gap-4 h-[1029px]">
            {/* Row 1: Mobile App Dev and Web App Dev (2 Columns) */}
            <div className="
                grid grid-cols-1 md:grid-cols-2
                gap-[18px]
                w-full
            ">
                {row1Data.map((tech, index) => (
                  <TechnologyCard
                    key={index}
                    title={tech.title}
                    items={tech.items}
                  />
                ))}
            </div>

            {/* Row 2: AI/ML, Cloud Services, UI/UX Design (3 Columns) */}
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[18px]
                w-full
            ">
                {row2Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

            {/* Row 3: Second UI/UX Design, API Development, Designing (3 Columns) */}
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[18px]
                w-full
            ">
                {row3Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

            {/* Row 4: Organic Research (534px), IOT (728px) - Corrected Custom 2-Column Widths */}
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[534px_728px] /* Sum: 534+728+18 = 1280px */
                gap-[18px]
                w-full
            ">
                {row4Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

            {/* Row 5: Blockchain, Cybersecurity Solutions, Data & Analytics (3 Columns) */}
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[18px]
                w-full
            ">
                {row5Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}