import React from 'react';

const Alumni = () => {
  const companies = [
    { name: 'TCS', logo: '/tcs.webp' },
    { name: 'Wipro', logo: '/wipro.webp' },
    { name: 'Tech Mahindra', logo: '/tech.webp' },
    { name: 'Cognizant', logo: '/cognizant.webp' },
    { name: 'IBM', logo: '/ibm.webp' },
    { name: 'Infosys', logo: '/infosys.webp' },
    { name: 'Capgemini', logo: '/capgemini.webp' },
    { name: 'Accenture', logo: '/accenture.webp' },
    { name: 'Nestle', logo: '/nestle.webp' },
    { name: 'PhonePe', logo: '/phonepe.webp' },
    { name: 'PayPal', logo: '/paypal.webp' },
    { name: 'Unilever', logo: '/unilever.webp' },
  ];

  const techCompanies = companies.slice(0, 8);
  const consumerCompanies = companies.slice(8);

  return (
    <div className="w-[1536px] h-[324px] bg-[#E5EAF3] px-[128px] pt-[40px] pb-[40px] flex items-start">
      {/* Inner Frame */}
      <div className="w-[1315px] h-[315px] flex flex-col gap-[32px] mt-[9px]">
        {/* Heading Frame */}
        <div className="w-[1280px] h-[44px] flex items-center justify-center">
          <h1 className="text-[36px] font-bold font-Montserrat text-center ">
            Our Alumni have landed roles in Top Companies around India
          </h1>
        </div>

        {/* Images Frame */}
        <div className="w-[1119px] h-[241px] flex flex-col gap-[52px] mx-auto">
          {/* Top Logos Frame */}
          <div className="w-[1119px] h-[56px] flex justify-center gap-[40px] overflow-hidden">
            {techCompanies.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-full object-contain"
              />
            ))}
          </div>

          {/* Bottom Logos Frame */}
          <div className="w-[669px] h-[56px] flex justify-center gap-[40px] overflow-hidden mx-auto">
            {consumerCompanies.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-full object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
