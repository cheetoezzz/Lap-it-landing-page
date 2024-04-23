import React from "react";
import Image from "next/legacy/image";

const Firstsection = () => {

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 h-screen relative">
          <div>
            <div className="text-start mt-28">
              <h1 className="text-[48px] font-extrabold mx-28 ">
                WE ARE TEAM OF CREATORS & INVESTORS
              </h1>
              <h1 className="text-[16px] ml-28 mr-10">
              LAP I.T. Solutions Inc. is a one-stop technical company and is capable of handling various advance business solutions.
Our Software and Hardware is trusted and used by many business owners and operators for their ever-demanding operations.
              </h1>
            </div>
            <div className="ml-28 mt-10">
              <div className="flex flex-col items-start">
                <div className="flex flex-row">
                <div className="mr-[46px]">
                    <h1 className="text=[20px] font-bold">5+</h1>
                    <p className="text=[16px]">Years of Experience</p>
                  </div>
                  <div className="mr-[87px]">
                    <h1 className="text=[20px] font-bold">90%</h1>
                    <p className="text=[16px]">Digital Profiency</p>
                  </div>
                  <div className="mr-20">
                    <h1 className="text=[20px] font-bold">830%</h1>
                    <p className="text=[16px]">Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-row">
                  <div className="mr-28">
                    <h1 className="text=[20px] font-bold">400+</h1>
                    <p className="text=[16px]">Customers</p>
                  </div>
                  <div className="mr-28">
                    <h1 className="text=[20px] font-bold">75%</h1>
                    <p className="text=[16px]">Growth Rate</p>
                  </div>
                  <div className="mr-20">
                    <h1 className="text=[20px] font-bold">80%</h1>
                    <p className="text=[16px]">Latest Technology Adoption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen p-8 flex justify-center items-center">
          {/* Form or content */}
          <div>
            <Image
            src="/about/image.svg"
            width={1000}
            height={1000}
            alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
