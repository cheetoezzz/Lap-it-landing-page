import React from "react";
import Image from "next/image";

const Firstsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 h-screen relative">
          <div>
            <div className="text-start mt-44">
              <h1 className="text-[48px] font-extrabold mx-28 ">
                WE ARE TEAM OF CREATORS & INVESTORS
              </h1>
              <h1 className="text-[16px] ml-28 mr-10">
                LAP I.T. Solutions Inc. is a one-stop technical company and is
                capable of handling various advance business solutions. Our
                Software and Hardware is trusted and used by many business
                owners and operators for their ever-demanding operations.
              </h1>
            </div>
            <div className="text-start mt-10">
              <h1 className="text-[48px] font-extrabold mx-28 ">
                ESTABLISHED IN 2008,
              </h1>
              <h1 className="text-[48px] font-extrabold mx-28 ">
                LAP I.T. Solutions Inc.
              </h1>
              <h1 className="text-[16px] ml-28 mr-10">
                Started a small computer and laptop repair shop with specialized
                in repairing and maintaining laptops and PC’s. We are one of the
                competitive technology business here in Davao City. Until we had
                our break in 2012 which a childhood friend from Manila (IBS
                Worldwide) entrusted us their software, and proving us as a
                developer and software technician to upgrade our business from
                repair shop to a software and hardware store.
              </h1>
            </div>
            <div className="ml-28 mt-10">
              <div className="flex flex-col items-start">
                <div className="flex flex-row">
                  <div className="mr-[46px]">
                    <h1 className="text=[20px] font-bold">2008 </h1>
                    <p className="text=[16px]">Computer & Laptop Repair Shop</p>
                  </div>
                  <div className="mr-[87px]">
                    <h1 className="text=[20px] font-bold">2012</h1>
                    <p className="text=[16px]">
                      Become partners with IBS Worldwide
                    </p>
                  </div>
                  <div className="mr-20">
                    <h1 className="text=[20px] font-bold">2015</h1>
                    <p className="text=[16px]">
                      Extends our services with CCTV
                    </p>
                  </div>
                  <div className="mr-20">
                    <h1 className="text=[20px] font-bold">2021</h1>
                    <p className="text=[16px]">Expanded to Incorporate </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen p-8 flex justify-center items-center">
          {/* Form or content */}
          <div className="hidden sm:block">
  <Image src="/about/image.svg" width={1000} height={1000} alt="" />
</div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
