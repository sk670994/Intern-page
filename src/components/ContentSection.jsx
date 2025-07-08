import  TechnologiesSection from "./TechnologiesSection"
import HowWeHire from "./HowWeHire";
import  HowWeThink from "./HowWeThink";
import  WhyHeaxaDecimal from "./WhyHexaDecimal";
import Alumni from "./Alumni";
import Rockstars from "./Rockstars";
import  CollegeInterns from "./CollegeInterns";
import Internship from "./Internship";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import CustomFooter from "./CustomFooter"


export default function ContentSection() {
  return (
    <section className="flex flex-col items-center bg-white w-full max-w-[1536px] gap-[48px] mx-auto relative">
      <TechnologiesSection/>
      <HowWeHire />
      <HowWeThink/>
      <WhyHeaxaDecimal/>
      <Alumni/>
      <Rockstars/>
      <CollegeInterns/>
     <Internship/>
     <FAQ/>
     <Testimonials/>
     <CustomFooter/>
    </section>
  );
}