import React from 'react'
import Navbar from '@/app/components/navbar';
import Features from './Features';

const Pricing = () => {
    return (
      <>
        <Navbar />
        <div>
        <div className="text-green-500 sm:text-red-500 md:text-fuchsia-700 xl:text-blue-600">
            responsive
          </div>
          <div className="mt-14 text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
            <div className="flex justify-center font-bold">
              <h1>PRICING</h1>
            </div>
            <div className="flex justify-center mt-1 text-slate-500 text-xs sm:text-sm md:text-base xl:text-xl">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
          </div>
         
          <Features/>
        </div>
      </>
    );
  };
  
  export default Pricing;