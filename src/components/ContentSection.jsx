import HowWeHire from "./HowWeHire";
import  TechnologiesSection from "./TechnologiesSection"

export default function ContentSection() {
  return (
    <section className="flex flex-col items-center bg-white w-full max-w-[1536px] mx-auto relative gap-[12px]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-start relative gap-12">
        <TechnologiesSection/>
      </div>
      <HowWeHire />
    </section>
  );
}