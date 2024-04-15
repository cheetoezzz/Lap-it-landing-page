import React from "react";
import Navbar from "@/app/components/navbar";
import Features from "./Features";
import PlanFeatures from "./PlanFeatures";
import TableFeature from "./TableFeature";
import Footer
 from "@/app/components/constants/Footer";
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
        <div className="bg-blue-50 py-3 pt-11 mt-7"> {/*2nd SECTION*/}  
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
          <div className="text-[16px] text-gray-500 flex justify-center pt-3">
          <h1>Elevate Your Learning Journey: HospitalityEdge - Shaping Tomorrow&apos;s Hospitality</h1>
            </div>
            <div className="text-[16px] text-gray-500 flex justify-center ">
              <h1>Leaders through Innovation and Excellence.</h1>
            </div>
        </div> {/* END OF DIV FOR 2nd SECTION*/}  

        
        
        <TableFeature/>
        <Footer/>
      </div>
    </>
  );
};

export default Pricing;
