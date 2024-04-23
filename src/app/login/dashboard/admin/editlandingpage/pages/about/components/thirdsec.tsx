import React from "react";
import Image from "next/image";
// import Map from "./map";

const Thirdsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen h-[150vh] relative">
          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-[48px] font-extrabold mx-28">VISIT US</h1>
              <p className="text-[16px] text-gray-500">
                LAP I.T. Solutions Inc. will help you move to the future.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 h-[150vh] relative">
            <div className="flex items-center justify-center mtw-10 mb-6">
              <Image
                src="/about/image2.svg"
                width={600}
                height={600}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
              </div>
            <div className="flex items-center justify-center my-6">
              {/* <Map/> */}
            </div>
            </div>
            <div className="w-1/2 h-[150vh] relative ml-10 ">
              {/* Form or content */}
              <div className="mt-10">
                <div className=" flex-col items-start">
                  <div className="">
                      <h1 className="font-extrabold text-[30px]">OUR LOCATION</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Door 2, Marcela Bldg., J. Palma Gil St., Davao City, 8000, Philippines</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[30px]">OPENING HOURS</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Monday to Saturday</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">9:00 AM - 6:00 PM</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[30px]">CONTACT NUMBER</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Globe +63 917 315 5624</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Globe +63 917 114 7882</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Smart +63 930 449 1580</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Smart +63 917 136 1944</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Smart +63 998 852 7923</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">Globe 336-0478</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">PLDT 296-0363</h1>

                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[30px]">GCASH</h1>
                      <h1 className="text-gray-500">+63 905 556 5713</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[30px]">EMAIL</h1>
                      <h1 className="text-gray-500 text-[16px] mt-1">sales@lap-itsolutions.com</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[18px] text-blue-500">Visit our FB page for more details</h1>
                      <h1 className="font-bold text-gray-500 text-[16px] mt-1">or visit our Tiktok @lapsales</h1>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
