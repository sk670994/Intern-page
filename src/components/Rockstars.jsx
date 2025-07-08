import React from 'react';

const Rockstars = () => {
  const interns = [
    {
      name: 'Faneesh Pradeesh',
      role: 'Mobile App Developer',
      image: '/intern.webp',
    },
    {
      name: 'Faneesh Pradeesh',
      role: 'Mobile App Developer',
      image: '/intern.webp',
    },
    {
      name: 'Faneesh Pradeesh',
      role: 'Mobile App Developer',
      image: '/intern.webp',
    },
    {
      name: 'Faneesh Pradeesh',
      role: 'Mobile App Developer',
      image: '/intern.webp',
    },
  ];

  return (
    <div className="bg-white rounded-lg py-8 px-4 sm:px-6 lg:px-12 mx-auto w-full max-w-[1200px]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[89px] gap-4">
        <div className="flex flex-col items-start">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black font-Montserrat leading-tight">
            From Interns to Tech Rockstars
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 leading-snug">
            Our interns are now leading the way at Hexadecimal and beyond.
          </p>
        </div>

        <button className="px-[20px] py-[14px] md:py-[17px] bg-[#002E83] text-white font-Montserrat rounded text-sm sm:text-base w-full sm:w-auto">
          Let's Connect Together
        </button>
      </div>

      {/* Intern Cards with Arrows */}
      <div className="relative flex items-center justify-center mt-[20px] min-h-[350px] sm:min-h-[400px] md:min-h-[450px] w-full max-w-[1206px] mx-auto overflow-x-auto">
        
        {/* Left Arrow */}
        <button className="absolute left-0 z-40 p-2 bg-gray-100 rounded-full hidden sm:inline">
          <img src="/left.webp" alt="Previous Interns" className="h-6 w-6" />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center w-full px-2 sm:px-4">
          {interns.map((intern, index) => (
            <div key={index} className="relative rounded-lg overflow-x shadow-md w-[286px] h-[450px]">
              <img
                src={intern.image}
                alt={`${intern.name} - ${intern.role}`}
                className="w-full h-full object-contain"
              />
              {/* Gradient Text Overlay */}
              <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-[24px] font-semibold font-Montserrat">{intern.name}</p>
                <p className="text-[16px] leading-[23px] font-Montserrat">
                  From Intern to Full-Time! is now offering {intern.role} after an impressive internship journey.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 z-40 p-2 bg-gray-100 rounded-full hidden sm:inline">
          <img src="/right.webp" alt="Next Interns" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Rockstars;
