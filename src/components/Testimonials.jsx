"use client";
import React from 'react';

const testimonialsData = [
  {
    name: "Jaydon Bator",
    image: "/t1.webp",
    rating: 5,
    text: "Switching to Hexadecimal has been a game-changer for our business. The intuitive interface and powerful features have streamlined our operations and significantly boosted our productivity. The customer support team is incredibly responsive and helpful. Highly recommended!"
  },
  {
    name: "Jaydon Bator",
    image: "/t1.webp",
    rating: 5,
    text: "Switching to Hexadecimal has been a game-changer for our business. The intuitive interface and powerful features have streamlined our operations and significantly boosted our productivity. The customer support team is incredibly responsive and helpful. Highly recommended!"
  },
  {
    name: "Jaydon Bator",
    image: "/t1.webp",
    rating: 4,
    text: "Switching to Hexadecimal has been a game-changer for our business. The intuitive interface and powerful features have streamlined our operations and significantly boosted our productivity. The customer support team is incredibly responsive and helpful. Highly recommended!"
  }
];

export default function Testimonials() {
  return (
    <div>
      <section className="w-full bg-[#E5EAF3] px-4 sm:px-8 md:px-16 lg:px-[128px] py-[40px]">
        <div className="w-full max-w-[1536px] mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="max-w-xl">
              <span className="inline-block border border-[#CFD9FF] bg-white text-[16px] font-Montserrat text-[#002E83] px-4 py-2 rounded-full mb-4 ">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-[36px] font-bold text-[#161C2D] mb-4">
                What people say about us
              </h2>
              <p className="text-gray-600 text-lg">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
              </p>
            </div>
            <div className="flex items-end gap-3 mt-6 md:mt-0">
              <button className=" flex items-center justify-center ">
                <img src="/fr01.webp" alt="Previous"  />
              </button>
              <button className="flex items-center justify-center">
                <img src="/fr02.webp" alt="Next"  />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-8 flex flex-col">
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <div className="flex mt-1 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <img 
                          key={i} 
                          src="/star.webp" 
                          alt="star" 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'opacity-100' : 'opacity-30'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      <div className="w-full overflow-hidden hidden sm:block">
        <div className="relative w-full h-64 sm:h-80 md:h-[344px]">
          <img
            src="/bcg.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

