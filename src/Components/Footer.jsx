import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="relative overflow-hidden">
        <div class="relative z-10">
          <div class="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div class="inline-flex items-center">
              <button className='text-2xl text-white font-semibold tracking-wide flex items-center w-fit' type='button' aria-label='Navigate'>
            <img src='logo.webp' width={50} height={50} className='w-10 mt-0.5'/>
            Road
            <span className='text-[#60ff1c]'>m</span>
             <span className='text-[#ff708f]'>i</span>
              <span className='text-[#ffd86c]'>n</span>
               <span className='text-[#e97cff]'>t</span>
        </button>
              <div class="border-s border-neutral-700 ps-5 ms-5">
                <p class="text-sm text-neutral-400">
                  All rights reserved © 2025 Roadmint
                </p>
              </div>
            </div>
            <p class="text-xs font-medium text-gray-400 mt-1 max-w-sm">
              Get a personalized free AI-powered learning roadmap in seconds. No
              sign-up &amp; Account needed. Free forever. Track your progress
              and export your learning data.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
