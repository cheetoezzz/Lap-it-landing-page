import React from "react";
import Image from "next/image";

const Secondsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen h-[80vh] relative">
            <div className="flex flex-col">
                <div className="text-center">
                    <h1 className="text-[48px] font-extrabold mx-28">OUR PURPOSE & DIRECTION</h1>
              
                </div>

            </div>
            <div className="mt-14">
            <div className="flex flex-row items-center justify-center ">
                    <div className="bg-blue-50 border bg-blue-50 p-[32px] mx-10">
                            <div className=" w-[612px] h-[300px]">
                                <h1 className="text-blue-500 font-extrabold text-[36px]">OUR MISSION</h1>
                               
                                <h1 className="text-gray-500 font-extralight text-[16px] mt-5">To maximize the SME business industry by using our hardware and software innovations and providing customer-focused service.
We accomplish this by attentively listening and offering personalized solutions for our customer’s individual needs while utilizing technological innovations.
While many software companies have come and gone, we have successfully fostered relationships for almost a decade.</h1>

                            </div>
                    </div>
                    <div className="bg-blue-50 border bg-blue-50 p-[32px] mx-10">
                            <div className=" w-[612px] h-[300px]">
                                <h1 className="text-blue-500 font-extrabold text-[36px]">OUR VISION</h1>
                                <h1 className="text-gray-500 font-extralight text-[16px] mt-5">To empower people through our team of dedicated professionals,
who value customers, deliver our promises and contribute to sustainable development.</h1>

                            </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
