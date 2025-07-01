import  TechnologiesSection from "./TechnologiesSection"
import HowWeHire from "./HowWeHire";
import  HowWeThink from "./HowWeThink";
import  WhyHeaxaDecimal from "./WhyHexaDecimal";
import Alumni from "./Alumni";
import Rockstars from "./Rockstars";




export default function ContentSection() {
  return (
    <section className="flex flex-col items-center bg-white w-full max-w-[1536px] mx-auto relative gap-[48px]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-start relative gap-12">
        <TechnologiesSection/>
      </div>
      <HowWeHire />
      <HowWeThink/>
      <WhyHeaxaDecimal/>
      <Alumni/>
      <Rockstars/>

    </section>
  );
}