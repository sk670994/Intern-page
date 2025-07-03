"use client";
import React from 'react';

export default function CustomFooter() {
  return (
    <footer className="bg-[#1D212F] w-full text-[#B0B0B0] py-[40px] -mt-[62px] px-4 md:px-10 lg:px-[128px] font-['Montserrat']">
      <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row lg:gap-[70px] lg:items-start">

        <div className="flex flex-col flex-shrink-0 w-[364px] pr-4 gap-[40px]">
          <div className='gap-[32px]'>
            <img
              src="/CompanyLogo.webp"
              alt="Hexadecimal Software Logo"
              className="w-[180px] h-auto mb-4 object-contain"
              quality={100}
            />
            <p className="text-base leading-relaxed text-white">
              Hexadecimal is an Indian digital agency that has architected and maintained digital solutions for hundreds of VC backed Startups, government agencies and Fortune 500 companies.
            </p>
          </div>

          <div className="flex space-x-3 mb-[40px]">
            <img src="/twitter.webp" alt="Twitter" className="w-8 h-8" />
            <img src="/linkedin.webp" alt="LinkedIn" className="w-8 h-8" />
            <img src="/github.webp" alt="GitHub" className="w-8 h-8" />
            <img src="/instagram.webp" alt="Instagram" className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-white text-[24px] pb-2">
              Contact Us
            </h3>
            <p className="text-[20px] text-white">info@hexadecimalsoftware.com</p>
          </div>
           <div className='w-[265px] h-[181px] gap-8'>
             <h4 className="text-white text-6">
               INDIA
             </h4>
             <p className="text-5 lining-[36px] text-white">
               Office-410, Corporate Park, Tower-A1, Sector 142, Noida, Uttar Pradesh 201305
             </p>
           </div>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 w-[846px]">

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] gap-y-10"
            style={{ height: '496px' }}
          >
            <div className="flex flex-col space-y-12">
              <div>
                <h3 className="text-white text-xl pb-2 mb-4 border-b border-[#002E83] inline-block">
                  Our Company
                </h3>
                <ul>
                  <li className="mb-2 text-white text-base">About Us</li>
                  <li className="mb-2 text-white text-base">Blogs</li>
                  <li className="mb-2 text-white text-base">Careers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-xl pb-2 mb-4 border-b border-[#002E83] inline-block">
                  Hire Developers
                </h3>
                <ul>
                  <li className="mb-2 text-white text-base">Hire Developer</li>
                  <li className="mb-2 text-white text-base">Hire Designer</li>
                  <li className="mb-2 text-white text-base">Hire QA Tester</li>
                  <li className="mb-2 text-white text-base">Hire iOS Developer</li>
                  <li className="mb-2 text-white text-base">Hire Android Developer</li>
                  <li className="mb-2 text-white text-base">Hire Web Developer</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl pb-2 mb-4 border-b border-[#002E83] inline-block">
                  Our Services
              </h3>
              <ul>
                <li className="mb-2 text-white text-base">Ios App Developement</li>
                <li className="mb-2 text-white text-base">Android App Development</li>
                <li className="mb-2 text-white text-base">React Native App Development</li>
                <li className="mb-2 text-white text-base">Web Development</li>
                <li className="mb-2 text-white text-base">Front End Development</li>
                <li className="mb-2 text-white text-base">IoT App Development</li>
                <li className="mb-2 text-white text-base">Blockchain Development</li>
                <li className="mb-2 text-white text-base">Custom Software Development</li>
                <li className="mb-2 text-white text-base">UI/UX Solutions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl pb-2 mb-4 border-b border-[#002E83] inline-block">
              Industries
              </h3>
              <ul>
                <li className="mb-2 text-white text-[16px]">On Demand App Developments</li>
                <li className="mb-2 text-white text-[16px]">Healthcare Industries</li>
                <li className="mb-2 text-white text-[16px]">E-commerce Industries</li>
                <li className="mb-2 text-white text-[16px]">Social Networking Industries</li>
                <li className="mb-2 text-white text-[16px]">Fintech Industries</li>
                <li className="mb-2 text-white text-[16px]">Gaming Industries</li>
                <li className="mb-2 text-white text-[16px]">Education Industries</li>
                <li className="mb-2 text-white text-[16px]">Real Estate Industries</li>
                <li className="mb-2 text-white text-[16px]">Entertainment Industries</li>
              </ul>
            </div>
          </div>

          <div className="mt-[32px] flex flex-col md:flex-row justify-between items-center text-[20px] text-white">
            <p>© 2024 Hexadecimal. All Rights Reserved.</p>
            <p className='text-[#007BFF] ml-[40px]'>Privacy Policy</p>
            <p className='text-[#007BFF] mr-[32px]'>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}