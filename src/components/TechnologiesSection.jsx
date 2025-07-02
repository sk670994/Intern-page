"use client";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section className="w-full bg-white py-[40px] flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center gap-[32px] overflow-hidden">
        <h1 className="font-['Montserrat'] font-bold text-[36px] text-gray-800 text-center">
          Our Technologies
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min w-full">
          {/* Each card below uses an image */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 h-[194px]">
            <TechnologyCard
              title="Mobile App Development"
              items={["Android App Development", "Flutter App Development", "iOS App Development", "React Native App Development"]}
              image="/mobile.png"
            />
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-3 h-[194px]">
            <TechnologyCard
              title="Web App Development"
              items={["Progressive Web App", "Frontend Development", "Backend Development", "Website Development"]}
              image="/web.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="AI/ML"
              items={["Automation of Tasks", "Computer Vision", "Data-Driven Decisions", "NLP"]}
              image="/ai.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Cloud Services"
              items={["DevOps", "AWS", "Google Clouds", "Azure", "CI/CD Pipelines"]}
              image="/cloud.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="UI/UX Design"
              items={["User-Centered Design", "Seamless Navigation", "Visual & Interactive Design"]}
              image="/uiux.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Quality Assurance"
              items={["Manual Testing", "API Testing", "Web Testing", "Mobile App Testing", "Automation Testing"]}
              image="/qa.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="API Development"
              items={["RESTful & SOAP APIs", "Scalable", "Security & Authentication", "Testing"]}
              image="/api.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Designing"
              items={["UI/UX Design", "Mobile App", "Web Designs", "Wireframe/Prototyping", "Design Systems"]}
              image="/design.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Organic Reach"
              items={["SEO", "GMB SEO", "Competitor Research", "Technical SEO", "ASO", "Performance Analytics"]}
              image="/organic.png"
            />
          </div>

          <div className="col-span-2 sm:col-span-4 lg:col-span-4 h-[194px]">
            <TechnologyCard
              title="IOT"
              items={["Device Connectivity", "Automation & Remote Control", "Interconnectivity", "Real-Time Data Monitoring", "Security Challenges"]}
              image="/iot.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Blockchain"
              items={["Decentralized System", "Cryptocurrencies", "Secure Records", "Smart Contracts"]}
              image="/block.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Cybersecurity Solutions"
              items={["Threat Prevention", "Risk Management", "Data Protection", "Incident Response", "Encryption"]}
              image="/cyber.png"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-[194px]">
            <TechnologyCard
              title="Data & Analytics"
              items={["Big Data Analytics", "Decision-Making", "Business Intelligence"]}
              image="/data.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}