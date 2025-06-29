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
    <div
      className="
        w-full
        max-w-[1280px]
        mx-auto
        bg-cyan-200
        h-[1110px]
        gap-[32px]
        py-[40px]
        flex flex-col
        items-center
        overflow-hidden
      "
    >
      <div
        className="
          w-full
          bg-blue-400
          px-[20px]
          py-[20px]
          flex flex-col
          overflow-hidden
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
            mb-[32px]
        ">
            Our Technologies
        </h1>

        <div className="flex flex-col gap-4 h-[1029px]">
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

            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[18px]
                w-full
            ">
                {row2Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[18px]
                w-full
            ">
                {row3Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[534px_728px]
                gap-[18px]
                w-full
            ">
                {row4Data.map((tech, index) => (
                  <TechnologyCard key={index} title={tech.title} items={tech.items} />
                ))}
            </div>

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