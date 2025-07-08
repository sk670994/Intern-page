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
    <div className="flex flex-col items-center w-[1536px] h-[324px] bg-[#E5EAF3] px-[128px] py-[40px] gap-[32px]">
      {/* Text Frame */}
      <div className="w-[1280px] h-[44px]  flex items-center justify-start">
        <h1 className="text-[40px] font-bold text-center font-Montserrat ">
          Our Alumni have landed roles in Top Companies around India
        </h1>
      </div>

    
    
       <div className="w-full flex h-[56px] justify-center gap-[40px] overflow-hidden">
        {techCompanies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-[full] w-[full] object-contain"
          />
        ))}
      </div>

     
      <div className="w-[669px] h-[56px] flex  items-center justify-start mt-[] gap-10 overflow-hidden">
        {consumerCompanies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-[full] w-[full] object-contain"
          />
        ))}
      </div>
     </div>
  
  );
};

export default Alumni;