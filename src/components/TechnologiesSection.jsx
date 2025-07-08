"use client";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section className="w-[1536px] h-[1150px] flex flex-col items-start gap-[10px] pt-[40px] pr-[128px] pl-[128px] bg-white">
      <div className="w-[1280px] h-[1110px] flex flex-col items-center gap-[32px]">
        <div className="w-[331px] h-[44px] flex items-center justify-center">
          <h1 className="font-montserrat font-bold text-[36px] leading-[44px] text-[#0C0C0C] capitalize text-center w-full h-[44px]">
            Our Technologies
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-start content-start gap-[16px] w-[1280px] h-[1029px]">
          {/* Row 1: 2 columns */}
          <TechnologyCard
            width="632px"
            height="194px"
            tagsWidth="572px"
            title="Mobile App Development"
            items={["Android App Development", "Flutter App Development", "iOS App Development", "React Native App Development"]}
            image="/mobile.png"
          />
          <TechnologyCard 
            width="632px"
            height="194px"
            tagsWidth="572px"
            title="Web App Development"
            items={["Progressive Web App", "Frontend Development", "Backend Development", "Website Development"]}
            image="/web.png"
          />

          {/* Row 2: 3 columns */}
          <TechnologyCard
            width="399px"
            height="194px"
            tagsWidth="387px"
            title="AI/ML"
            items={["Automation of Tasks", "Computer Vision", "Data-Driven Decisions", "NLP"]}
            image="/ai.png"
          />
          <TechnologyCard
            width="416px"
            height="194px"
            tagsWidth="376px"
            title="Cloud Services"
            items={["DevOps", "AWS", "Google Clouds", "Azure", "CI/CD Pipelines"]}
            image="/cloud.png"
          />
          <TechnologyCard
            width="431px"
            height="194px"
            tagsWidth="464px"
            title="UI/UX Design"
            items={["User-Centered Design", "Seamless Navigation", "Visual & Interactive Design"]}
            image="/uiux.png"
          />

          {/* Row 3: 3 columns */}
          <TechnologyCard
            width="419px"
            height="194px"
            tagsWidth="376px"
            title="Quality Assurance"
            items={["Manual Testing", "API Testing", "Web Testing", "Mobile App Testing", "Automation Testing"]}
            image="/qa.png"
          />
          <TechnologyCard
            width="407px"
            height="194px"
            tagsWidth="376px"
            title="API Development"
            items={["RESTful & SOAP APIs", "Scalable", "Security & Authentication", "Testing"]}
            image="/api.png"
          />
          <TechnologyCard
            width="422px"
            height="194px"
            tagsWidth="376px"
            title="Designing"
            items={["UI/UX Design", "Mobile App", "Web Designs", "Wireframe/Prototyping", "Design Systems"]}
            image="/design.png"
          />

          {/* Row 4: 2 columns */}
          <TechnologyCard
            width="534px"
            height="194px"
            tagsWidth="550px"
            title="Organic Reach"
            items={["SEO", "GMB SEO", "Competitor Research", "Technical SEO", "ASO (App Store Optimization)", "Performance Analytics"]}
            image="/organic.png"
          />
          <TechnologyCard
            width="730px"
            height="194px"
            tagsWidth="709px"
            title="IOT"
            items={["Device Connectivity", "Automation & Remote Control", "Interconnectivity", "Applications in Various Fields", "Real-Time Data Monitoring", "Security & Privacy Challenges"]}
            image="/iot.png"
          />

          {/* Row 5: 3 columns */}
          <TechnologyCard
            width="437px"
            height="194px"
            tagsWidth="428px"
            title="Blockchain"
            items={["Decentralized System", "Cryptocurrencies", "Secure and Immutable Records", "Smart Contracts"]}
            image="/block.png"
          />
          <TechnologyCard
            width="453px"
            height="194px"
            tagsWidth="416px"
            title="Cybersecurity Solutions"
            items={["Threat Prevention", "Risk Assessment & Management", "Data Protection", "Incident Response", "Encryption"]}
            image="/cyber.png"
          />
          <TechnologyCard
            width="356px"
            height="194px"
            tagsWidth="380px"
            title="Data & Analytics"
            items={["Big Data Analytics", "Decision-Making", "Business Intelligence Analytics"]}
            image="/data.png"
          />
        </div>
      </div>
    </section>
  );
}