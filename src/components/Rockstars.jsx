import React from 'react';

const Rockstars = () => {
  const interns = [
    { name: 'Faneesh Pradeesh', role: 'Mobile App Developer', image: '/intern.webp' },
    { name: 'Faneesh Pradeesh', role: 'Mobile App Developer', image: '/intern.webp' },
    { name: 'Faneesh Pradeesh', role: 'Mobile App Developer', image: '/intern.webp' },
    { name: 'Faneesh Pradeesh', role: 'Mobile App Developer', image: '/intern.webp' },
  ];

  return (
    <div className="bg-white rounded-lg  py-8 px-12 mx-auto max-w-[1200px]">

      <div className="flex justify-between items-center mb-10 h-[89px]">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-black font-Montserrat">From Interns to Tech Rockstars</h1>
          <p className="text-base text-gray-600 mt-2">
            Our interns are now leading the way at Hexadecimal and beyond.
          </p>
        </div>
       
        <button className="px-[20px] font-Montserrat py-[17px] bg-[#002E83] text-white rounded">
          Let's Connect Together
        </button>
      </div>

      <div className="relative  flex items-center justify-center mt-[10px] min-h-[450px] w-full max-w-[1206px] mx-auto">

        <button
          className="absolute left-0  p-2 bg-gray-100 rounded-full "
        >
          <img src="/left.webp" alt="Previous Interns" className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {interns.map((intern, index) => (
            <div key={index} className="flex  flex-col items-center text-center">
              <img
                src={intern.image}
                alt={`${intern.name} - ${intern.role}`}
                className="w-[240px] h-[300px] object-cover rounded-lg"
              />
              <p className="mt-2 font-Montserrat text-base font-semibold">{intern.name}</p>
              <p className="text-sm  font-Montserrat text-gray-500">
                {intern.role} is now offering Mobile App Developer after an impressive internship journey.
              </p>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 z-40 p-2 bg-gray-100 rounded-full "
        >
          <img src="/right.webp" alt="Next Interns" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Rockstars;