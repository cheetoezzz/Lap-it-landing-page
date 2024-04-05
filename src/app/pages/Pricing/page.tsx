import React from "react";
import Navbar from "@/app/components/navbar";
import Features from "./Features";
import PlanFeatures from "./PlanFeatures";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-green-500 sm:text-red-500 md:text-fuchsia-700 xl:text-blue-600">
          responsive
        </div>
        <div className="mt-12 text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
          <div className="flex justify-center font-bold">
            <h1>PRICING</h1>
          </div>
          <div className="flex justify-center mt-1 text-slate-500 text-xs sm:text-sm md:text-base xl:text-xl">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          </div>
        </div>
        <Features />
        <div className="bg-blue-100 py-3 mt-5">
          <div className="flex justify-center  text-[48px] font-bold ">
            <h1>SEE WHICH PLAN IS</h1>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <div className="text-[48px] font-bold bg-red-600 rounded-lg text-white px-5">
              <h1>BEST</h1>
            </div>
            <div className="text-[48px] font-bold">
              <h1>FOR YOU</h1>
            </div>
          </div>
        </div> {/* END OF DIV FOR 2nd SECTION*/}  
        <PlanFeatures/>
        
      </div>
    </>
  );
};

export default Pricing;
