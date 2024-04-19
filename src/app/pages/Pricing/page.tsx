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
        <div className="text-green-500 sm:text-red-500 md:text-fuchsia-700 xl:text-blue-600">
          responsive
        </div>
        
        <Features/>
        <TableFeature/>
        <Footer/>

    </>
  );
};

export default Pricing;
